// Analytics helpers — push events to GTM dataLayer → GA4
// All events are picked up by the GA4 Configuration tag in GTM.

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export function pushEvent(name: string, params?: Record<string, string | number | boolean>) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: name, ...params });
}

// --- Demo player (Hero) ---

export function trackDemoPlay(scenario: string) {
  pushEvent("demo_audio_played", { scenario });
}

export function trackDemoPause(scenario: string, progressPct: number) {
  pushEvent("demo_audio_paused", { scenario, progress_pct: Math.round(progressPct) });
}

export function trackScenarioChange(toScenario: string) {
  pushEvent("demo_scenario_changed", { to_scenario: toScenario });
}

// --- CTA clicks ---

export function trackFreeTrialClick(source: string) {
  pushEvent("free_trial_click", { source_section: source });
}

export function trackTalkToSalesClick(source: string) {
  pushEvent("talk_to_sales_click", { source_section: source });
}

// --- Pricing ---

export function trackPricingPlanClick(plan: string) {
  pushEvent("pricing_plan_clicked", { plan_name: plan });
}

export function trackIntegrationCTAClick(slug: string) {
  pushEvent("integration_cta_clicked", { integration: slug });
}

export function trackContactFormSubmit() {
  pushEvent("contact_form_submitted");
}
