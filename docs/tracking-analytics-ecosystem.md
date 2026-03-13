# Callengo — Ecosistema Completo de Tracking y Analytics

> Documento de referencia técnica. Cubre cada herramienta implementada: qué hace,
> cómo está configurada, cómo se conecta con las demás, y qué queda pendiente.
>
> **Última actualización:** 13 de marzo de 2026
> **Estado general:** ~90% implementado. Pendiente: setup final de Google Ads y GA4 conversions.

---

## Índice

1. [Arquitectura General — Mapa de conexiones](#1-arquitectura-general--mapa-de-conexiones)
2. [callengo-page — Codebase del landing page](#2-callengo-page--codebase-del-landing-page)
3. [Google Tag Manager (GTM)](#3-google-tag-manager-gtm)
4. [Google Analytics 4 (GA4)](#4-google-analytics-4-ga4)
5. [Google Search Console](#5-google-search-console)
6. [HubSpot CRM](#6-hubspot-crm)
7. [Smartlead](#7-smartlead)
8. [PostHog](#8-posthog)
9. [Usercentrics — CMP y Consent Mode v2](#9-usercentrics--cmp-y-consent-mode-v2)
10. [LinkedIn Insight Tag](#10-linkedin-insight-tag)
11. [LinkedIn Ads](#11-linkedin-ads)
12. [Google Ads](#12-google-ads)
13. [Stripe](#13-stripe)
14. [Supergrow](#14-supergrow)
15. [Pendiente — Setup no completado](#15-pendiente--setup-no-completado)

---

## 1. Arquitectura General — Mapa de conexiones

```
VISITANTE EN callengo.com
         │
         ▼
┌─────────────────────────────────────────────────────────────────────┐
│                    app/layout.tsx  (Next.js)                        │
│                                                                     │
│  1. Consent Mode v2 defaults (inline script — antes de todo)       │
│  2. Usercentrics CMP loader (settings-id: yQ0u7kXv9rUwXL)         │
│  3. GTM snippet (GTM-MXFGV52S)                                     │
│  4. Schema.org JSON-LD (Organization, WebSite, SoftwareApp)        │
└────────────────────────┬────────────────────────────────────────────┘
                         │ GTM carga y gestiona todos los demás tags
                         ▼
┌─────────────────────────────────────────────────────────────────────┐
│                  Google Tag Manager (GTM-MXFGV52S)                 │
│                                                                     │
│  Tags activos:                                                      │
│  ├─ GA4 Configuration → Google Analytics 4 (landing page)          │
│  ├─ HubSpot Tracking Code → HubSpot (portal 147914572)             │
│  ├─ LinkedIn Insight → LinkedIn Campaign Manager                    │
│  ├─ Usercentrics CMP Tag → gestión de consentimiento               │
│  ├─ Google Analytics GA4 Event → eventos con consent               │
│  └─ 14 GA4 Event tags → eventos de usuario                         │
└──────────┬──────────────┬────────────────┬───────────────────────────┘
           │              │                │
           ▼              ▼                ▼
        Google          HubSpot        LinkedIn
        Analytics 4   Tracking Code   Insight Tag
        (landing)      (portal        (Campaign
                       147914572)      Manager)

EVENTOS DEL CÓDIGO → dataLayer → GTM → GA4
FORMULARIO CONTACTO → HubSpot Form API
NEWSLETTER → /api/newsletter → HubSpot Contacts API v3
SMARTLEAD → /api/webhooks/smartlead → HubSpot CRM

CONEXIONES NATIVAS (fuera del landing page):
├─ Stripe ←→ HubSpot (contactos, facturas, productos)
├─ PostHog → HubSpot (7 schemas sincronizados)
├─ Smartlead ←→ HubSpot (integración nativa + webhook custom)
├─ Google Ads ←→ HubSpot (auto tracking activado)
└─ LinkedIn Ads ←→ HubSpot (2 cuentas, auto tracking activado)
```

---

## 2. callengo-page — Codebase del landing page

**Repo:** callengo-page (Next.js 16, App Router, TypeScript, Tailwind 4, Vercel)
**URL:** https://callengo.com
**Branch de desarrollo:** `claude/add-og-image-meta-XWNDb`

### 2.1 app/layout.tsx — Cabecera global

Archivo que carga en TODAS las páginas. Contiene en orden estricto:

**Consent Mode v2 (inline script — línea 64):**
```html
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('consent', 'default', {
    'analytics_storage': 'denied',
    'ad_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'wait_for_update': 500
  });
</script>
```
Esto bloquea cookies de analytics/ads hasta que Usercentrics confirme el consentimiento del usuario. El `wait_for_update: 500` da 500ms para que Usercentrics cargue antes de que GTM empiece a disparar tags. Es obligatorio para GDPR y sin esto Google podría penalizar la cuenta.

**Usercentrics CMP (línea 70):**
```html
<script
  id="usercentrics-cmp"
  src="https://app.usercentrics.eu/browser-ui/latest/loader.js"
  data-settings-id="yQ0u7kXv9rUwXL"
  async
/>
```
Carga el banner de cookies. El `settings-id: yQ0u7kXv9rUwXL` es el identificador del proyecto en Usercentrics.

**GTM (línea 77):**
```html
<script>
  (function(w,d,s,l,i){ /* snippet estándar */ })(
    window, document, 'script', 'dataLayer', 'GTM-MXFGV52S'
  );
</script>
```
Container ID: `GTM-MXFGV52S`. Una vez GTM carga, gestiona todos los demás tags (GA4, HubSpot tracking, LinkedIn Insight, Usercentrics CMP Tag).

**Schema.org JSON-LD (línea 101):**
Tres schemas estructurados:
- `Organization`: Callengo, fundador Chris Fuentes, emails de contacto, LinkedIn
- `WebSite`: URL, descripción, SearchAction
- `SoftwareApplication`: todos los planes de precios, lista de features

**Open Graph y Twitter Cards:**
- Título: "Callengo - AI-Powered Phone Agents for Business"
- Descripción: "Stop losing revenue to no-shows, bad data, and unqualified leads..."
- OG image: `/og-image.png` (1200×630)
- Twitter card: `summary_large_image`

---

### 2.2 app/lib/analytics.ts — Librería de tracking

Archivo central que exporta todas las funciones de tracking del sitio. Todas hacen `dataLayer.push()` con el nombre del evento y parámetros, que GTM captura y reenvía a GA4.

**Función base:**
```typescript
function pushEvent(name: string, params?: Record<string, string | number | boolean>) {
  if (typeof window === "undefined") return;  // SSR guard
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: name, ...params });
}
```

**Inventario completo de eventos y dónde se llaman:**

| Función | Evento GA4 | Parámetros | Llamada desde |
|---|---|---|---|
| `trackDemoPlay(scenario)` | `demo_audio_played` | `scenario` | Hero.tsx — al reproducir demo |
| `trackDemoPause(scenario, pct)` | `demo_audio_paused` | `scenario`, `progress_pct` | Hero.tsx — al pausar demo |
| `trackScenarioChange(to)` | `demo_scenario_changed` | `to_scenario` | Hero.tsx — al cambiar escenario |
| `trackFreeTrialClick(source)` | `free_trial_click` | `source_section` | Header, Hero, CTA, contact page |
| `trackTalkToSalesClick(source)` | `talk_to_sales_click` | `source_section` | Header, pricing page |
| `trackPricingPlanClick(plan)` | `pricing_plan_clicked` | `plan_name` | Pricing page — al clickear un plan |
| `trackIntegrationCTAClick(slug)` | `integration_cta_clicked` | `integration` | Integration detail pages |
| `trackContactFormSubmit(subject?)` | `contact_form_submitted` | `subject` (opcional) | contact/page.tsx — al submit HubSpot |
| `trackNewsletterSubscribe(source)` | `newsletter_subscribed` | `source_section` | Footer.tsx — al suscribirse |
| `trackFeatureLearnMoreClick(slug)` | `feature_learn_more_clicked` | `feature` | Features.tsx — "Learn more" |
| `trackIntegrationCardClick(slug)` | `integration_card_clicked` | `integration` | integrations/page.tsx — clic tarjeta |
| `trackBillingCycleToggle(cycle)` | `billing_cycle_toggled` | `cycle` | pricing/page.tsx — toggle mensual/anual |

---

### 2.3 app/contact/page.tsx — Formulario de contacto HubSpot

**Implementación:** HubSpot `hs-form-frame` embed (no iframe manual — el script de HubSpot convierte el div en iframe automáticamente).

**Portal:** 147914572
**Form ID:** `8c4f988d-d40a-4d4f-8a48-a22010d973e0`
**Script:** `https://js-eu1.hsforms.net/forms/embed/147914572.js`

**Flujo de carga:**
1. `useEffect` inyecta el script de HubSpot en `<head>` (solo una vez, verifica si ya existe)
2. El script detecta `<div class="hs-form-frame">` y lo convierte en un iframe con el formulario
3. Mientras carga, se muestra un skeleton animado (`animate-pulse`)
4. Cuando HubSpot envía `postMessage({ type: "hsFormCallback", eventName: "onFormReady" })`, el skeleton desaparece y el formulario aparece con transición de opacidad
5. Fallback de 2 segundos: si `onFormReady` no llega, muestra el formulario de todas formas
6. Al submit, HubSpot envía `postMessage({ type: "hsFormCallback", eventName: "onFormSubmitted" })`
7. En `onFormSubmitted` se ejecuta:
   - `trackContactFormSubmit()` → dispara `contact_form_submitted` al dataLayer → GTM → GA4
   - `dataLayer.push({ event: "hs_contact_form_submitted" })` → dispara `hs_contact_form_submitted` → GTM → GA4
   - `setIsSubmitted(true)` → muestra pantalla de confirmación animada

**Por qué dos eventos en el submit:**
- `contact_form_submitted`: evento genérico de formulario de contacto (para consistencia con otros formularios)
- `hs_contact_form_submitted`: evento específico de HubSpot para vincularlo con Google Ads conversions en el futuro

---

### 2.4 app/api/newsletter/route.ts — API de newsletter

**Ruta:** `POST /api/newsletter`
**Deployment:** Serverless function en Vercel
**Variables de entorno requeridas:** `HUBSPOT_PRIVATE_APP_TOKEN`

**Flujo:**
1. Recibe `{ email }` del Footer.tsx
2. Valida formato de email con regex
3. Busca contacto existente en HubSpot via Contacts API v3 search (`/crm/v3/objects/contacts/search`)
4. Si existe: hace PATCH para actualizar `lifecyclestage: subscriber`, `hs_marketable_status: true`
5. Si no existe: hace POST para crear contacto nuevo con esas mismas propiedades
6. Maneja duplicados (HTTP 409) de forma silenciosa
7. Retorna `{ success: true }` al Footer

**Propiedades que escribe en HubSpot:**
- `email`: el email capturado
- `lifecyclestage`: `subscriber` (HubSpot no hace downgrade si ya es lead/customer)
- `hs_marketable_status`: `true` (GDPR: opt-in explícito para emails de marketing)

**Llamado desde:** `Footer.tsx` → función `handleSubscribe` (async, con loading state y error handling)

---

### 2.5 app/api/webhooks/smartlead/route.ts — Webhook de Smartlead

**Ruta:** `POST /api/webhooks/smartlead?key=SECRET`
**Ruta GET:** `GET /api/webhooks/smartlead` → retorna `{ ok: true }` para verificación de Smartlead
**Variables de entorno:** `HUBSPOT_PRIVATE_APP_TOKEN`, `SMARTLEAD_WEBHOOK_KEY` (opcional), `HUBSPOT_CALLENGO_PIPELINE_ID` (opcional, default hardcodeado)

**Seguridad:** Parámetro `?key=VALUE` en la URL. Si `SMARTLEAD_WEBHOOK_KEY` está definido en env, se valida. Si no está definido, no se valida (permite probar sin configurar la clave).

**Pipeline HubSpot "Callengo Sales":**
- Pipeline ID: `3650683104` (hardcodeado como fallback, también leable desde `HUBSPOT_CALLENGO_PIPELINE_ID`)

**Stage IDs del pipeline:**
| Stage | ID | Probabilidad |
|---|---|---|
| MQL — Marketing Qualified | `5022907627` | 10% |
| SQL — Sales Qualified | `5022907628` | 45% |
| Demo Scheduled | `5022907629` | 40% |
| Trial Active | `5022907630` | 60% |
| Proposal Sent | `5022907631` | 75% |
| Closed Won | `5022907632` | 100% |
| Closed Lost | `5022907633` | 0% |

**Eventos que maneja:**

**`EMAIL_OPEN`:**
- Upsert contacto en HubSpot (crea si no existe, actualiza si existe)
- Escribe: `smartlead_status: in_sequence`, `smartlead_sequence: nombre_campaña`
- Crea nota de actividad: "📧 Email opened — campaign: X, step: N"

**`EMAIL_LINK_CLICK` / `EMAIL_CLICKED`:**
- Upsert contacto
- Escribe: `smartlead_status: in_sequence`, `lifecyclestage: lead`
- Crea nota: "🔗 Email link clicked — URL: X, campaign: Y, step: N"

**`EMAIL_REPLY`:**
- Upsert contacto
- Escribe: `smartlead_status: replied`, `lifecyclestage: marketingqualifiedlead`
- Crea nota: "💬 Email replied — preview del reply"
- **Crea Deal automáticamente** en pipeline "Callengo Sales", stage SQL (5022907628)
- Nombre del deal: `[Empresa] — Smartlead Reply`
- Asocia deal ↔ contacto via Associations API v4
- Añade nota con contexto al deal y al contacto

**Campos del payload de Smartlead que se leen:**
- Email: `lead_email` o `email`
- Nombre: `first_name` / `lead_first_name`, `last_name` / `lead_last_name`
- Empresa: `company_name` / `company`
- Campaña: `campaign_name`, `campaign_id`
- Secuencia: `seq_number`
- URL clickeada: `clicked_url`
- Texto del reply: `reply_message` / `reply_text`
- Timestamp: `timestamp` / `created_at`

---

### 2.6 Env vars requeridas en Vercel

| Variable | Valor | Usado en |
|---|---|---|
| `NEXT_PUBLIC_HUBSPOT_PORTAL_ID` | `147914572` | (reservado, actualmente en código hardcodeado) |
| `HUBSPOT_PRIVATE_APP_TOKEN` | `pat-eu1-...` | newsletter/route.ts, webhooks/smartlead/route.ts |
| `SMARTLEAD_WEBHOOK_KEY` | `tu_clave_secreta` | webhooks/smartlead/route.ts (autenticación) |
| `HUBSPOT_CALLENGO_PIPELINE_ID` | `3650683104` | webhooks/smartlead/route.ts (fallback hardcodeado) |

---

## 3. Google Tag Manager (GTM)

**Container ID:** `GTM-MXFGV52S`
**Workspace:** Default Workspace
**URL de gestión:** https://tagmanager.google.com
**Estado:** Publicado y activo. Workspace Changes: 0 (todo publicado).

### 3.1 Tags — Inventario completo

| Tag | Tipo | Trigger que lo dispara | Estado |
|---|---|---|---|
| `GA4 - Configuration` | Google Tag | Initialization - All Pages | ✅ Activo |
| `Google Analytics GA4 Event` | GA4 Event | Consent Initialization - All Pages | ✅ Activo |
| `HubSpot Tracking Code` | Custom HTML | All Pages | ✅ Activo |
| `LinkedIn Insight` | LinkedIn Insight | All Pages | ✅ Activo |
| `Usercentrics CMP Tag` | Usercentrics CMP | Consent Initialization - All Pages | ✅ Activo |
| `billing_cycle_toggled` | GA4 Event | Billing Cycle Toggled | ✅ Activo |
| `contact_form_submitted` | GA4 Event | Contact Form Submitted | ✅ Activo |
| `demo_audio_paused` | GA4 Event | Demo Audio Paused | ✅ Activo |
| `demo_audio_played` | GA4 Event | Demo Audio Played | ✅ Activo |
| `demo_scenario_changed` | GA4 Event | Demo Scenario Changed | ✅ Activo |
| `feature_learn_more_clicked` | GA4 Event | Feature Learn More Clicked | ✅ Activo |
| `free_trial_click` | GA4 Event | Free Trial Click | ✅ Activo |
| `hs_contact_form_submitted` | GA4 Event | HS Contact Form Submitted | ✅ Activo |
| `integration_card_clicked` | GA4 Event | Integration Card Clicked | ✅ Activo |
| `integration_cta_clicked` | GA4 Event | Integration CTA Clicked | ✅ Activo |
| `newsletter_subscribed` | GA4 Event | Newsletter Subscribed | ✅ Activo |
| `pricing_plan_clicked` | GA4 Event | Pricing Plan Clicked | ✅ Activo |
| `talk_to_sales_click` | GA4 Event | Talk To Sales Click | ✅ Activo |
| `HubSpot Form Submitted` (trigger) | — | Custom Event `hsFormCallback` | ⚠️ 0 tags — trigger sin usar |

**Nota sobre "HubSpot Form Submitted":** Es un trigger que escucha el evento nativo `hsFormCallback` de HubSpot. Los eventos postMessage del iframe de HubSpot NO pasan automáticamente al dataLayer de GTM, por lo que este trigger no dispara. El tracking del formulario HubSpot se hace via `hs_contact_form_submitted` que sí pasa por dataLayer explícitamente en el código. Este trigger puede dejarse o borrarse — no afecta nada.

---

### 3.2 Triggers — Inventario completo

| Trigger | Tipo | Event Name que escucha | Tags conectados |
|---|---|---|---|
| Billing Cycle Toggled | Custom Event | `billing_cycle_toggled` | 1 |
| Contact Form Submitted | Custom Event | `contact_form_submitted` | 1 |
| Demo Audio Paused | Custom Event | `demo_audio_paused` | 1 |
| Demo Audio Played | Custom Event | `demo_audio_played` | 1 |
| Demo Scenario Changed | Custom Event | `demo_scenario_changed` | 1 |
| Feature Learn More Clicked | Custom Event | `feature_learn_more_clicked` | 1 |
| Free Trial Click | Custom Event | `free_trial_click` | 1 |
| HS Contact Form Submitted | Custom Event | `hs_contact_form_submitted` | 1 |
| HubSpot Form Submitted | Custom Event | `hsFormCallback` | 0 (sin usar) |
| Integration Card Clicked | Custom Event | `integration_card_clicked` | 1 |
| Integration CTA Clicked | Custom Event | `integration_cta_clicked` | 1 |
| Newsletter Subscribed | Custom Event | `newsletter_subscribed` | 1 |
| Pricing Plan Clicked | Custom Event | `pricing_plan_clicked` | 1 |
| Talk To Sales Click | Custom Event | `talk_to_sales_click` | 1 |
| Initialization - All Pages | Page View | — | 1 (GA4 Config) |
| Consent Initialization - All Pages | Consent Init | — | 2 (GA4 Event, Usercentrics) |
| All Pages | Page View | — | 2 (HubSpot, LinkedIn Insight) |

---

### 3.3 Variables — Inventario completo

**Built-in Variables (activadas):**
| Variable | Tipo |
|---|---|
| Event | Custom Event |
| Page Hostname | URL |
| Page Path | URL |
| Page URL | URL |
| Referrer | HTTP Referrer |

**User-Defined Variables (Data Layer):**
| Variable GTM | Clave en dataLayer | Evento que la popula |
|---|---|---|
| `dlv - cycle` | `cycle` | `billing_cycle_toggled` |
| `dlv - feature` | `feature` | `feature_learn_more_clicked` |
| `dlv - integration` | `integration` | `integration_card_clicked`, `integration_cta_clicked` |
| `dlv - plan_name` | `plan_name` | `pricing_plan_clicked` |
| `dlv - progress_pct` | `progress_pct` | `demo_audio_paused` |
| `dlv - scenario` | `scenario` | `demo_audio_played`, `demo_audio_paused` |
| `dlv - source_section` | `source_section` | `free_trial_click`, `talk_to_sales_click`, `newsletter_subscribed` |
| `dlv - to_scenario` | `to_scenario` | `demo_scenario_changed` |

---

### 3.4 Cómo funciona el flujo de consent con GTM

**Sin consentimiento (usuario no ha interactuado con el banner):**
1. Consent Mode v2 defaults: `analytics_storage: denied`, `ad_storage: denied`
2. GTM carga pero los tags de GA4 y LinkedIn se retienen (no envían datos de usuario)
3. Usercentrics CMP Tag se dispara con Consent Initialization - All Pages

**Con consentimiento dado:**
1. Usercentrics actualiza el estado de consent en GTM via `gtag('consent', 'update', {...})`
2. GTM procesa los tags retenidos
3. GA4 empieza a recibir eventos del pageview y actividad del usuario
4. LinkedIn Insight puede trackear el visitante

---

## 4. Google Analytics 4 (GA4)

**Cuenta:** Callengo
**Propiedad landing page:** callengo.com — Measurement ID: `G-XXXXXXXXXX` (ver en GA4 → Admin → Data Streams)
**Propiedad app:** app.callengo.com — Measurement ID separado (otro repo)
**Vinculado con:** Google Search Console ✅, Google Ads (pendiente de configurar — ver sección 15)

### 4.1 Eventos que llegan a GA4 (landing page)

Todos los eventos de la tabla 2.2 de analytics.ts llegan a GA4 via GTM. El flujo es:
```
analytics.ts → dataLayer.push() → GTM trigger → GTM tag GA4 Event → GA4
```

**Eventos automáticos de GA4 (sin configuración adicional):**
- `page_view`: en cada navegación
- `session_start`: al inicio de sesión
- `first_visit`: primer visitante
- `scroll`: al llegar al 90% de scroll en la página
- `click`: clics en links externos (Enhanced Measurement)
- `file_download`: descargas de archivos

**Eventos custom que enviamos:**

| Evento GA4 | Parámetro | Valores posibles |
|---|---|---|
| `demo_audio_played` | `scenario` | `data-validation`, `appointment-confirmation`, `lead-qualification` |
| `demo_audio_paused` | `scenario`, `progress_pct` | scenario: idem arriba; progress_pct: 0-100 |
| `demo_scenario_changed` | `to_scenario` | idem scenario arriba |
| `free_trial_click` | `source_section` | `hero`, `header`, `cta`, `pricing`, `contact_page`, etc. |
| `talk_to_sales_click` | `source_section` | idem |
| `pricing_plan_clicked` | `plan_name` | `Free`, `Starter`, `Growth`, `Business`, `Teams`, `Enterprise` |
| `integration_cta_clicked` | `integration` | slug de la integración (ej: `hubspot`, `salesforce`) |
| `contact_form_submitted` | — | sin parámetros (subject se quitó) |
| `hs_contact_form_submitted` | — | sin parámetros |
| `newsletter_subscribed` | `source_section` | `footer` |
| `feature_learn_more_clicked` | `feature` | `data-validation`, `appointment-confirmation`, `lead-qualification` |
| `integration_card_clicked` | `integration` | slug de la integración |
| `billing_cycle_toggled` | `cycle` | `monthly`, `annual` |

### 4.2 Custom Dimensions — PENDIENTE

Para ver los parámetros de eventos en los reportes de GA4, hay que registrarlos como Custom Dimensions. Sin esto, GA4 recibe los parámetros pero no los muestra en reportes.

Ver sección 15 para instrucciones de setup.

### 4.3 Conversiones — PENDIENTE

Los eventos de alta intención no están marcados como conversiones todavía. Ver sección 15.

### 4.4 Vinculación con Google Search Console

Google Search Console está vinculado con GA4. Esto permite ver en GA4 los datos de búsqueda orgánica (queries, impresiones, CTR) junto con el comportamiento en el sitio.

---

## 5. Google Search Console

**URL:** https://search.google.com/search-console
**Propiedad:** callengo.com
**Método de verificación:** (DNS o tag — verificar en la cuenta)
**Vinculado con:** GA4 ✅
**Sitemap enviado:** https://callengo.com/sitemap.xml (generado por `app/sitemap.ts`)

**Para qué sirve:**
- Ver qué queries de Google traen tráfico orgánico
- Detectar errores de indexación (páginas que Google no puede crawlear)
- Solicitar re-indexación cuando publicas páginas nuevas
- Ver Core Web Vitals del sitio (LCP, FID, CLS)
- Ver backlinks que apuntan al sitio

**Tarea recurrente:** Después de crear nuevas páginas (agentes, integraciones, blog posts), ve a Search Console → URL Inspection → pega la URL → Request Indexing. Esto acelera la indexación de 2-4 semanas a 1-3 días.

---

## 6. HubSpot CRM

**Portal ID:** `147914572`
**Región:** EU1 (eu1.hubspot.com)
**Plan:** (verificar en cuenta)
**URL:** https://app.hubspot.com

### 6.1 Cómo entra data al CRM — todos los canales

```
CANAL                           → CÓMO LLEGA A HUBSPOT
──────────────────────────────────────────────────────────────────
Formulario de contacto (web)   → HubSpot Form API (form embed)
Newsletter (footer)             → /api/newsletter → Contacts API v3
Email opens/clicks (Smartlead) → /api/webhooks/smartlead → Contacts + Notes API
Email replies (Smartlead)      → webhook → Contacts + Deals + Notes API
Stripe payments                → Native integration → Contact/Invoice/Product sync
PostHog events                 → Native sync → 7 schemas mapeados
LinkedIn Ads clicks            → Auto tracking → UTM en contacto al convertir
Google Ads clicks              → Auto tracking → UTM en contacto al convertir
HubSpot Tracking Code          → Captura UTMs del browser → propiedades del contacto
```

### 6.2 Propiedades custom en HubSpot (escritas por el webhook)

Estas propiedades se escriben en el contacto cuando llegan eventos de Smartlead. Deben existir en HubSpot (si no existen, la API las ignora silenciosamente — verificar en Settings → Properties → Contact):

| Propiedad | Tipo | Descripción |
|---|---|---|
| `smartlead_status` | Single-line text | Estado en Smartlead: `in_sequence`, `replied` |
| `smartlead_sequence` | Single-line text | Nombre de la campaña/secuencia de Smartlead |

**Cómo crear estas propiedades si no existen:**
HubSpot → Settings (engranaje arriba derecha) → Properties → Contact Properties → Create property

### 6.3 Ciclo de vida de un contacto (lifecycle stages)

Los stages se asignan automáticamente por los distintos sistemas:

| Stage | Cómo se asigna |
|---|---|
| `subscriber` | Newsletter signup → /api/newsletter |
| `lead` | Clic en link de email de Smartlead → webhook |
| `marketingqualifiedlead` | Reply a email de Smartlead → webhook |
| `salesqualifiedlead` | Manual o cuando HubSpot Sales hace el call |
| `customer` | Stripe payment → integración nativa |

### 6.4 Integración HubSpot Form Embed (contact page)

**Tipo:** `hs-form-frame` (API nueva de HubSpot, 2024+)
**Formulario:** "Contact - Callengo" (ID: `8c4f988d-d40a-4d4f-8a48-a22010d973e0`)
**Script:** `https://js-eu1.hsforms.net/forms/embed/147914572.js`

Cuando alguien envía el formulario:
1. Los datos van directamente a HubSpot (email, nombre, empresa, subject del mensaje)
2. HubSpot crea o actualiza el contacto con los datos del form
3. Los UTMs activos en la sesión (capturados por HubSpot Tracking Code) se adjuntan al contacto
4. Se dispara la notificación configurada en el form (email a ventas, etc.)

### 6.5 Pipeline "Callengo Sales"

**Pipeline ID:** `3650683104`
**Accesible en:** HubSpot → Sales → Deals → Pipeline: Callengo Sales

| Stage | ID HubSpot | Uso |
|---|---|---|
| MQL — Marketing Qualified | 5022907627 | Leads del sitio web con alta intención |
| SQL — Sales Qualified | 5022907628 | Leads que respondieron emails de Smartlead |
| Demo Scheduled | 5022907629 | Han agendado demo |
| Trial Active | 5022907630 | Están en período de prueba |
| Proposal Sent | 5022907631 | Propuesta enviada |
| Closed Won | 5022907632 | Cliente pagado (Stripe lo actualiza automáticamente) |
| Closed Lost | 5022907633 | No se cerró |

### 6.6 Ads conectadas en HubSpot

**Ubicación:** HubSpot → Marketing → Ads → Ad accounts

| Cuenta | Plataforma | Auto tracking |
|---|---|---|
| Google Ads account (210-899-4003) | Google Ads | ON |
| Boost Cristopher Fuentes January 21, 20... | LinkedIn (personal) | ON |
| Callengo | LinkedIn (empresa) | ON |

**Auto tracking activado:** HubSpot añade parámetros de tracking a las URLs de los anuncios para poder atribuir correctamente los leads en el CRM cuando alguien viene de un ad.

**Pestaña Pixels:** Las opciones de pixel de LinkedIn para inyectar via HubSpot NO están activadas (deliberado: LinkedIn Insight Tag ya está instalado via GTM — activarlo desde HubSpot lo duplicaría).

### 6.7 Integración con Stripe

**Tipo:** Native HubSpot-Stripe integration
**Estado:** Activo
**Sincronizaciones activas:**
- Contact sync: ON (Stripe customer → HubSpot contact)
- Invoice sync: ON (Stripe invoice → HubSpot deal/revenue)
- Product sync: ON (Stripe product → HubSpot product)

Cuando un cliente paga en Stripe, el contacto en HubSpot se actualiza automáticamente y el lifecycle stage puede avanzar a `customer`.

### 6.8 Integración con PostHog

**Tipo:** Native PostHog → HubSpot sync
**Schemas sincronizados:** 7
**Dirección:** PostHog → HubSpot (unidireccional)

Los eventos de comportamiento en app.callengo.com capturados por PostHog se sincronizan como propiedades o actividades en los contactos de HubSpot. Esto da visibilidad del comportamiento in-app en el CRM.

### 6.9 Cómo captura HubSpot los UTMs automáticamente

El HubSpot Tracking Code (instalado via GTM tag "HubSpot Tracking Code", All Pages) ejecuta en cada visita a callengo.com:
1. Lee todos los parámetros `utm_*` de la URL actual
2. Los almacena en la cookie `hubspotutk` del browser
3. Cuando el visitante convierte (formulario de contacto, newsletter), HubSpot lee la cookie y adjunta los UTMs al registro del contacto

**Propiedades que se populan en el contacto:**
- `hs_analytics_source`: fuente original (Social Media, Paid Social, Email, etc.)
- `hs_analytics_source_data_1`: `utm_source`
- `hs_analytics_source_data_2`: `utm_campaign`
- `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`: valores directos

Esto funciona sin configuración adicional desde que el Tracking Code está en el sitio.

---

## 7. Smartlead

**Plataforma:** Smartlead.ai
**Tipo:** Herramienta de cold email outbound
**Integración con Callengo:** Doble canal (nativa + webhook custom)

### 7.1 Integración nativa Smartlead ↔ HubSpot

Smartlead tiene una integración nativa con HubSpot que sincroniza actividad de email directamente. Esta integración nativa y el webhook custom que construimos son COMPLEMENTARIOS (no duplicados):

- **Integración nativa:** Sincroniza la actividad de email dentro de Smartlead (stats de la campaña, status general)
- **Webhook custom:** Dispara en tiempo real con cada evento (open/click/reply) y ejecuta lógica avanzada (crear deals, escribir propiedades custom, crear notas detalladas)

### 7.2 Webhook custom

**URL en Smartlead:** `https://callengo.com/api/webhooks/smartlead?key=TU_CLAVE`
**Ruta:** `/api/webhooks/smartlead`
**Autenticación:** Query param `?key=VALUE` que debe coincidir con `SMARTLEAD_WEBHOOK_KEY` en Vercel
**Verificación:** GET a la misma URL → retorna `{ ok: true }` para que Smartlead valide la URL

**Pendiente de verificar:** Que `SMARTLEAD_WEBHOOK_KEY` esté configurado en Vercel env vars y que la URL del webhook en Smartlead incluya `?key=TU_CLAVE`.

### 7.3 UTMs en links de Smartlead

Los links en los emails de Smartlead que apuntan a callengo.com deben incluir UTMs para atribución completa en HubSpot y GA4:

```
utm_source=smartlead&utm_medium=email&utm_campaign=NOMBRE_SECUENCIA&utm_content=NOMBRE_CTA
```

Ejemplo para link principal de una secuencia:
```
https://callengo.com/?utm_source=smartlead&utm_medium=email&utm_campaign=outbound_seq1_mar2026&utm_content=main_cta
```

Ejemplo para link a pricing:
```
https://callengo.com/pricing?utm_source=smartlead&utm_medium=email&utm_campaign=outbound_seq1_mar2026&utm_content=pricing_link
```

Ejemplo para link a signup en la app:
```
https://app.callengo.com/auth/signup?utm_source=smartlead&utm_medium=email&utm_campaign=outbound_seq1_mar2026&utm_content=signup_cta
```

---

## 8. PostHog

**Plataforma:** PostHog (product analytics, session recordings, feature flags)
**Instalado en:** app.callengo.com (repositorio separado — callengo-app)
**Sincronización con HubSpot:** 7 schemas activos
**Dirección:** PostHog → HubSpot (los eventos de la app enriquecen los contactos del CRM)

**Qué captura PostHog:**
- Eventos de comportamiento en la app (page views, clicks, feature usage)
- Session recordings (grabaciones de sesión de usuarios)
- Feature flags (para feature rollouts)
- Funnels y retención (métricas de producto)

**Qué llega a HubSpot desde PostHog:**
Los 7 schemas sincronizados mapean eventos de PostHog a propiedades de HubSpot. Esto permite que el equipo de ventas vea en el CRM qué features está usando cada lead/cliente en la app.

---

## 9. Usercentrics — CMP y Consent Mode v2

**Plataforma:** Usercentrics
**Settings ID:** `yQ0u7kXv9rUwXL`
**URL de gestión:** https://admin.usercentrics.eu
**Script:** `https://app.usercentrics.eu/browser-ui/latest/loader.js`

### 9.1 Cómo está implementado

**Orden de carga en layout.tsx (crítico — no cambiar):**
1. Consent Mode v2 defaults inline (bloquea todo)
2. Usercentrics CMP loader
3. GTM

Este orden es obligatorio para GDPR. Si GTM cargara antes de Usercentrics, los tags podrían dispararse antes de obtener consentimiento.

### 9.2 Cómo funciona con GTM

En GTM hay dos elementos relacionados:
1. **Tag "Usercentrics CMP Tag"** (tipo: Usercentrics CMP): gestiona la sincronización de consentimiento entre Usercentrics y GTM
2. **Trigger "Consent Initialization - All Pages"**: se dispara cuando el consentimiento está disponible (sea dado o denegado). Los tags de GA4 y Usercentrics usan este trigger para iniciarse correctamente con el estado de consent

### 9.3 Cuatro señales de consent que gestiona

| Señal | Qué controla | Estado default |
|---|---|---|
| `analytics_storage` | Cookies de analytics (GA4) | `denied` hasta aceptar |
| `ad_storage` | Cookies de ads (Google Ads, LinkedIn) | `denied` hasta aceptar |
| `ad_user_data` | Datos de usuario para ads | `denied` hasta aceptar |
| `ad_personalization` | Personalización de ads | `denied` hasta aceptar |

### 9.4 Botón "Cookie settings" en el footer

El footer tiene un botón que abre el panel de Usercentrics para que los usuarios puedan gestionar sus preferencias de cookies después de haber aceptado. Esto es un requerimiento de GDPR.

---

## 10. LinkedIn Insight Tag

**Qué hace:** Rastrea visitantes de callengo.com y los conecta con sus perfiles de LinkedIn. Permite:
- Ver qué cargos, empresas e industrias visitan el sitio (en LinkedIn Campaign Manager → Website Demographics)
- Crear audiencias de remarketing para anuncios de LinkedIn
- Rastrear conversiones de campañas de LinkedIn Ads

**Implementación:** GTM tag "LinkedIn Insight", tipo "LinkedIn Insight", trigger "All Pages"
**NO activado desde HubSpot Pixels** (deliberado — activarlo desde HubSpot lo duplicaría con el tag de GTM)

**Dónde ver los datos:**
LinkedIn Campaign Manager → Analyze → Website Demographics
(requiere que el tag haya estado activo por al menos 300 visitantes únicos para mostrar datos por privacidad)

---

## 11. LinkedIn Ads

**Cuentas conectadas en HubSpot:**

| Cuenta | Descripción | Auto tracking |
|---|---|---|
| Boost Cristopher Fuentes January 21... | Posts boosteados desde cuenta personal del fundador | ON |
| Callengo | Página de empresa — anuncios de Callengo | ON |

### 11.1 Lead Syncing (LinkedIn Lead Gen Forms)

**Ubicación:** HubSpot → Marketing → Ads → pestaña "Lead syncing"

LinkedIn Lead Gen Forms son formularios que aparecen dentro de LinkedIn cuando alguien interactúa con un anuncio. En vez de redirigir al sitio, el form se llena con datos del perfil de LinkedIn y se envía directamente a HubSpot.

**Estado actual:** No configurado (no hay campañas con Lead Gen Forms activas todavía)

**Cuándo configurar:** Al lanzar campañas de LinkedIn Ads que usen Lead Gen Forms. Pasos:
1. HubSpot → Marketing → Ads → Lead syncing → cuenta Callengo → activar toggle
2. Mapear campos del form de LinkedIn a propiedades de HubSpot

### 11.2 Matched Audiences (retargeting desde HubSpot)

Permite subir listas de contactos de HubSpot a LinkedIn para hacer retargeting (mostrar anuncios a personas que ya son contactos del CRM).

**Requisito mínimo:** 300 contactos para que LinkedIn pueda crear una audiencia (privacidad).
**Estado actual:** Configurar cuando el CRM tenga ≥300 contactos.

**Proceso:**
1. HubSpot → Marketing → Lead Capture → Lists → crear Smart List con criterios (ej: lifecycle = lead, OR visitó /pricing)
2. HubSpot → Marketing → Ads → pestaña Audiences → Create Audience → LinkedIn Ads → seleccionar lista
3. HubSpot sincroniza automáticamente (tarda 24-48h en activarse en LinkedIn)

### 11.3 UTMs para posts de LinkedIn

Para rastrear correctamente qué posts de LinkedIn generan tráfico a callengo.com, cada link en posts de LinkedIn debe llevar UTMs.

**Formato para cuenta personal (fundador):**
```
https://callengo.com/?utm_source=linkedin&utm_medium=social&utm_campaign=founder_content_q1_2026&utm_content=post_[slug-del-tema]
```

**Formato para página de empresa:**
```
https://callengo.com/?utm_source=linkedin&utm_medium=social&utm_campaign=callengo_company_q1_2026&utm_content=post_[slug-del-tema]
```

**Link en bio (cuenta personal):**
```
https://callengo.com/?utm_source=linkedin&utm_medium=social&utm_campaign=profile_bio&utm_content=personal_profile_link
```

**Link en perfil de empresa:**
```
https://callengo.com/?utm_source=linkedin&utm_medium=social&utm_campaign=profile_bio&utm_content=company_profile_link
```

**Para signup directo:**
```
https://app.callengo.com/auth/signup?utm_source=linkedin&utm_medium=social&utm_campaign=founder_content_q1_2026&utm_content=post_[slug]
```

---

## 12. Google Ads

**Account ID:** 210-899-4003
**Estado:** Cuenta conectada a HubSpot con auto tracking ON
**Campañas activas:** Ninguna todavía
**Setup técnico completado:** No (ver sección 15)

### 12.1 Conexión con HubSpot

La cuenta de Google Ads está conectada a HubSpot con "Auto tracking ON". Esto significa que HubSpot puede:
- Ver qué anuncios generaron leads (atribución)
- Enviar listas de contactos de HubSpot como audiencias de Google Ads
- Ver en el CRM de dónde vino cada lead (Google Ads vs organic vs LinkedIn, etc.)

### 12.2 Setup técnico pendiente

El setup de Google Ads (linking con GA4, configuración de conversiones, audiencias, estructura de campañas) está pendiente. Ver sección 15 para el checklist completo.

---

## 13. Stripe

**Tipo:** Native HubSpot-Stripe integration
**Dirección:** Stripe → HubSpot
**Estado:** Activo

**Datos que llegan de Stripe a HubSpot:**

| Objeto Stripe | → Objeto HubSpot | Campos sincronizados |
|---|---|---|
| Customer | Contact | email, nombre, empresa |
| Invoice | Deal / Revenue | monto, fecha, estado |
| Product | Product | nombre, precio, plan |
| Subscription | (propiedades del contacto) | plan activo, fecha de renovación, estado |

**Flujo completo de un nuevo cliente:**
1. Usuario se registra en app.callengo.com
2. Completa onboarding y elige plan
3. Paga via Stripe
4. Stripe crea Customer + Subscription
5. HubSpot-Stripe sync crea/actualiza el Contact en HubSpot
6. Lifecycle stage del contacto avanza a `customer`
7. El deal en el pipeline "Callengo Sales" se puede mover a Closed Won

---

## 14. Supergrow

**Plataforma:** Supergrow (contenido para LinkedIn — crear, programar, analizar)
**Cuentas conectadas:** Cuenta personal del fundador (Cristopher Fuentes) + página empresa Callengo

### 14.1 Flujo de trabajo recomendado

**Para cada post que incluya link a callengo.com:**
1. Define el tema del post
2. Crea la URL con UTMs (ver tabla en sección 11.3)
3. Escribe el post en Supergrow con la URL UTM incluida
4. Programa o publica

**Supergrow no genera UTMs automáticamente** — hay que añadirlos manualmente al link antes de pegarlo en el post.

### 14.2 Google Sheet de UTMs (herramienta recomendada)

Para gestionar UTMs de forma sistemática, mantén un Google Sheet con estas columnas:

| URL Base | utm_source | utm_medium | utm_campaign | utm_content | URL Final |
|---|---|---|---|---|---|
| callengo.com | linkedin | social | founder_q1_2026 | post_no_shows | =[A]&"?utm_source="&[B]&"&utm_medium="&[C]&... |

Fórmula para columna "URL Final":
```
=A2&"?utm_source="&B2&"&utm_medium="&C2&"&utm_campaign="&D2&"&utm_content="&E2
```

### 14.3 Analytics de Supergrow vs HubSpot

- **Supergrow analytics:** Engagement en LinkedIn (likes, comments, shares, impressions por post). Úsalo para saber qué contenido resuena en LinkedIn y replicarlo.
- **HubSpot analytics:** Cuántos visitantes vinieron de LinkedIn (con UTMs) y cuántos convirtieron en leads/clientes. Úsalo para medir el ROI real del contenido.
- **LinkedIn Campaign Manager:** Performance de posts boosteados y anuncios pagados.

Los tres miden capas distintas y son complementarios.

### 14.4 Coordinación entre cuenta personal y empresa

- **Cuenta personal (fundador):** Storytelling, lecciones aprendidas, POVs, casos de éxito en primera persona. Mayor reach orgánico.
- **Página empresa:** Noticias del producto, updates de features, casos técnicos, testimonios. Tono más formal.

No publicar el mismo contenido en ambas el mismo día — LinkedIn lo interpreta como spam y reduce el reach de ambas.

---

## 15. Pendiente — Setup no completado

Esta sección documenta todo lo que quedó sin hacer (Part 7 en adelante de la guía anterior). Ordenado por prioridad.

---

### 15.1 GA4 — Custom Dimensions para parámetros de eventos [ALTA PRIORIDAD]

**Por qué importa:** Actualmente GA4 recibe todos los parámetros de eventos (scenario, feature, cycle, etc.) pero no los muestra en reportes porque no están registrados como Custom Dimensions. Sin esto, no puedes filtrar reportes por feature clickeada, plan visto, etc.

**Dónde:** GA4 → Admin → Property → Custom definitions → Create custom dimension

**Qué crear:**

| Dimension Name | Scope | Event parameter |
|---|---|---|
| Scenario | Event | `scenario` |
| Demo Progress | Event | `progress_pct` |
| Source Section | Event | `source_section` |
| Plan Name | Event | `plan_name` |
| Integration | Event | `integration` |
| Feature | Event | `feature` |
| Billing Cycle | Event | `cycle` |

Para cada una: haz clic en "Create custom dimension" → pon el Dimension Name → Scope: Event → Event parameter: el nombre exacto de la columna "Event parameter" → Save.

Tarda 24-48h en empezar a popularse en reportes históricos.

---

### 15.2 GA4 — Marcar eventos como Conversiones [ALTA PRIORIDAD]

**Por qué importa:** Sin marcar conversiones, GA4 trata todos los eventos igual. Con conversiones marcadas, GA4 reporta métricas separadas de conversion rate, aparecen en el resumen del dashboard, y se pueden importar a Google Ads.

**Dónde:** GA4 → Reports → Engagement → Events → toggle "Mark as conversion" para cada evento

**Qué marcar:**

| Evento | Categoría | Prioridad |
|---|---|---|
| `free_trial_click` | Sign-up intent | Alta |
| `talk_to_sales_click` | Lead | Alta |
| `hs_contact_form_submitted` | Submit lead form | Alta |
| `newsletter_subscribed` | Subscribe | Media |
| `pricing_plan_clicked` | Purchase intent | Media |

**Nota:** Un evento debe haber llegado a GA4 al menos una vez para aparecer en la lista. Si `hs_contact_form_submitted` no aparece todavía, puedes crearlo manualmente: GA4 → Admin → Events → Create event (con nombre `hs_contact_form_submitted`) → luego marcarlo como conversion.

---

### 15.3 Google Ads — Vincular con GA4 [ALTA PRIORIDAD]

**Por qué importa:** Sin el link GA4 ↔ Google Ads, no puedes importar conversiones de GA4 a Google Ads para optimización de campañas.

**En Google Ads:**
1. Google Ads → Admin (llave inglesa) → Linked accounts
2. Google Analytics (GA4) & Firebase → Details
3. Encuentra tu propiedad GA4 de callengo.com → Link → Save

**En GA4 (verificar):**
1. GA4 → Admin → Property → Google Ads Links
2. Confirma que aparece Google Ads account 210-899-4003 como linked

---

### 15.4 Google Ads — Importar conversiones desde GA4

Una vez hecho el punto anterior:

1. Google Ads → Goals → Conversions → Summary → + New conversion action
2. Selecciona Import → Google Analytics 4 properties → Continue
3. Selecciona: `free_trial_click`, `talk_to_sales_click`, `hs_contact_form_submitted`
4. Para cada uno asigna valor estimado:
   - `free_trial_click`: $50 (trial intent)
   - `talk_to_sales_click`: $100 (sales intent)
   - `hs_contact_form_submitted`: $75 (form submitted)

---

### 15.5 Google Ads — Instalar pixel de remarketing vía GTM

**Por qué importa:** El pixel de remarketing de Google Ads crea audiencias de todos los visitantes del sitio para usar en campañas de Display y retargeting.

**Tu Google Ads Tag ID:** AW-XXXXXXXXXX (encuéntralo en Google Ads → Admin → Linked accounts → Google Tag Manager, o en Goals → Conversions → Settings → "Google tag")

**En GTM:**
1. Tags → New
2. Tipo: Google Ads Remarketing
3. Conversion ID: tu AW-XXXXXXXXXX
4. Trigger: All Pages (Initialization - All Pages)
5. Nombre: `Google Ads Remarketing`
6. Save → Submit → Publish

---

### 15.6 Google Ads — Crear audiencias de remarketing

**Después de instalar el pixel (necesita acumular datos — mínimo 100 visitantes):**

1. Google Ads → Tools → Audience manager → + New audience → Website visitors

**Audiencias a crear:**

| Nombre | Criterio | Duración |
|---|---|---|
| All Website Visitors - 30d | URL contains callengo.com | 30 días |
| Pricing Page Visitors - 30d | URL contains callengo.com/pricing | 30 días |
| Agent Pages Visitors - 30d | URL contains callengo.com/agents | 30 días |
| High Intent Visitors - 30d | Pricing + Agents (combinado) | 30 días |

---

### 15.7 Google Ads — Negative keyword lists (antes de lanzar cualquier campaña)

**En Google Ads → Tools → Negative keyword lists → Create list:**

**Lista: "Job Seekers"**
Keywords: `jobs`, `careers`, `hiring`, `salary`, `resume`, `work for`, `apply`, `employment`

**Lista: "Free/DIY"**
Keywords: `free open source`, `diy`, `build your own`, `tutorial`, `how to code`, `github`

**Lista: "Wrong Intent"**
Keywords: `personal`, `residential`, `home`, `consumer`, `individual`

**Lista: "Student/Research"**
Keywords: `assignment`, `homework`, `thesis`, `research paper`, `university`, `student`

Adjuntar estas listas a cada campaña al crearla: Campaign → Keywords → Negative Keywords → Add from list.

---

### 15.8 Google Ads — Extensiones de anuncio

**En Google Ads → Ads → Assets (a nivel cuenta, no campaña):**

**Sitelinks:**
- "See Pricing" → `https://callengo.com/pricing?utm_source=google&utm_medium=cpc&utm_campaign=sitelink`
- "Start Free Trial" → `https://app.callengo.com/auth/signup?utm_source=google&utm_medium=cpc&utm_campaign=sitelink`
- "Lead Qualification Agent" → `https://callengo.com/agents/lead-qualification?utm_source=google&utm_medium=cpc&utm_campaign=sitelink`
- "Appointment Confirmation" → `https://callengo.com/agents/appointment-confirmation?utm_source=google&utm_medium=cpc&utm_campaign=sitelink`

**Callouts:**
- "No credit card required"
- "15 free minutes included"
- "Setup in minutes"
- "24/7 AI availability"

**Structured Snippets:**
- Header: "Services"
- Values: Lead Qualification, Appointment Confirmation, Data Validation, CRM Integration

---

### 15.9 Google Ads — Estructura de campañas (cuando estés listo para lanzar)

| Campaña | Tipo | Budget/día | Keywords |
|---|---|---|---|
| `[Search] Brand - Callengo` | Search | $5-10 | `callengo`, `callengo.com`, `callengo ai` |
| `[Search] Core - AI Phone Agents` | Search | $20-30 | `ai phone agent`, `automated phone calls`, `appointment confirmation software` |
| `[Search] Competitor` | Search | $10-15 | `[competidor] alternative`, `vs [competidor]` |
| `[Display] Remarketing` | Display | $5-10 | Audiencia: Pricing Page Visitors |

---

### 15.10 Google Ads — Enhanced Conversions

**Cuándo:** Cuando estés listo para optimizar campañas al máximo.

1. Google Ads → Goals → Conversions → Settings → Enhanced conversions for web → Turn on
2. Seleccionar método: Google Tag Manager
3. En el tag de conversión de Google Ads en GTM, activar "Include user-provided data from your website" y mapear el campo email al valor del formulario

---

### 15.11 LinkedIn — Matched Audiences

**Cuándo:** Cuando HubSpot tenga ≥300 contactos.

1. HubSpot → Marketing → Lead Capture → Lists → Create Smart List
2. Criterios: lifecycle stage = lead OR visited /pricing OR submitted contact form
3. HubSpot → Marketing → Ads → Audiences → Create Audience → LinkedIn Ads → seleccionar lista
4. Esperar 24-48h para activación en LinkedIn

---

### 15.12 UTMs — Google Sheet de gestión

Crear un Google Sheet con la fórmula de generación automática de UTMs para todos los links que se publiquen en LinkedIn, emails de Smartlead, y cualquier otro canal.

Columnas: URL Base | utm_source | utm_medium | utm_campaign | utm_content | URL Final generada

Fórmula URL Final:
```
=A2&"?utm_source="&B2&"&utm_medium="&C2&"&utm_campaign="&D2&"&utm_content="&E2
```

---

### 15.13 Smartlead — Verificar SMARTLEAD_WEBHOOK_KEY en Vercel

Verificar que `SMARTLEAD_WEBHOOK_KEY` esté configurado en Vercel → Settings → Environment Variables, y que la URL del webhook en Smartlead incluya `?key=TU_CLAVE`.

Si la key no está en Vercel, el webhook funciona pero sin autenticación (cualquiera podría enviarle requests).

---

## Resumen de estado por producto

| Producto | Estado | Notas |
|---|---|---|
| callengo-page (código) | ✅ Completo | Analytics, APIs, form embed, HubSpot integrations |
| Google Tag Manager | ✅ Completo | 18 tags, 14 triggers, 8 variables. Todo publicado. |
| Google Analytics 4 | ⚠️ Parcial | Recibe eventos. Falta: Custom Dimensions + marcar conversiones |
| Google Search Console | ✅ Activo | Vinculado a GA4. Sitemap enviado. |
| HubSpot CRM | ✅ Activo | Form embed + newsletter API + Smartlead webhook + Stripe + PostHog |
| Smartlead webhook | ✅ Activo | Falta verificar SMARTLEAD_WEBHOOK_KEY en Vercel |
| PostHog | ✅ Activo | 7 schemas sincronizados a HubSpot |
| Usercentrics CMP | ✅ Activo | Consent Mode v2 + banner de cookies |
| LinkedIn Insight Tag | ✅ Activo | Via GTM, All Pages |
| LinkedIn Ads | ⚠️ Parcial | Cuentas conectadas. Falta: Matched Audiences (necesita ≥300 contactos) |
| Google Ads | ❌ Pendiente | Cuenta conectada. Falta todo el setup técnico (sección 15.3-15.9) |
| Stripe | ✅ Activo | Contact/Invoice/Product sync activo |
| Supergrow | ⚠️ Parcial | Herramienta disponible. Falta: workflow de UTMs sistemático |

---

*Documento generado: 13 de marzo de 2026*
*Repo: callengo-page — branch: claude/add-og-image-meta-XWNDb*
