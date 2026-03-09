import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { ArrowLeft, ArrowRight, ChevronRight, Webhook, RefreshCw, ShieldCheck, Code2 } from "lucide-react";

const webhookEvents = [
  { event: "appointment.confirmed", description: "Fires when a contact confirms their appointment", payload: "appointment_id, contact_id, confirmed_at, slot" },
  { event: "appointment.rescheduled", description: "Fires when an appointment is moved to a new time", payload: "appointment_id, contact_id, old_slot, new_slot" },
  { event: "appointment.cancelled", description: "Fires when a contact cancels their appointment", payload: "appointment_id, contact_id, cancelled_at, reason" },
  { event: "contact.validated", description: "Fires when contact data is verified or updated", payload: "contact_id, fields_checked, fields_updated, accuracy_score" },
  { event: "lead.qualified", description: "Fires when a lead passes qualification criteria", payload: "lead_id, score, quality, budget, timeline, decision_maker" },
  { event: "campaign.completed", description: "Fires when all contacts in a campaign have been processed", payload: "campaign_id, total_contacts, successful, failed, summary" },
];

const retrySchedule = [
  { attempt: 1, delay: "Immediate" },
  { attempt: 2, delay: "5 minutes" },
  { attempt: 3, delay: "30 minutes" },
  { attempt: 4, delay: "2 hours" },
  { attempt: 5, delay: "24 hours" },
];

export default function WebhooksPage() {
  return (
    <>
      <Header />
      <main className="bg-background" style={{ fontFamily: "var(--font-body)" }}>
        {/* Hero */}
        <section className="pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-6">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-8">
              <Link href="/docs" className="text-sm text-foreground-tertiary hover:text-foreground-secondary transition-colors">Docs</Link>
              <ChevronRight className="w-3.5 h-3.5 text-foreground-tertiary" />
              <Link href="/docs/integrations" className="text-sm text-foreground-tertiary hover:text-foreground-secondary transition-colors">Integrations</Link>
              <ChevronRight className="w-3.5 h-3.5 text-foreground-tertiary" />
              <span className="text-sm text-foreground font-medium">Webhooks</span>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-electric/10 flex items-center justify-center">
                <Webhook className="w-7 h-7 text-electric" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground" style={{ fontFamily: "var(--font-display)" }}>
                  Webhooks
                </h1>
                <p className="text-lg text-foreground-secondary mt-1">
                  Receive real-time event notifications from Callengo
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="pb-20">
          <div className="max-w-4xl mx-auto px-6 space-y-12">

            {/* Overview */}
            <div className="border border-border rounded-xl p-8 bg-white">
              <h2 className="text-xl font-bold text-foreground mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Overview
              </h2>
              <p className="text-foreground-secondary leading-relaxed">
                Webhooks allow you to receive HTTP POST notifications whenever specific events occur in your Callengo workspace.
                Configure webhook endpoints in your dashboard under <strong>Settings → Webhooks</strong>.
                Each event is sent as a JSON payload with a signature header for verification. Webhooks are available on <strong>Business</strong> plans and above.
              </p>
            </div>

            {/* Events Table */}
            <div className="border border-border rounded-xl p-8 bg-white">
              <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3" style={{ fontFamily: "var(--font-display)" }}>
                <Code2 className="w-5 h-5 text-electric" />
                Available Events
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 pr-4 font-semibold text-foreground">Event</th>
                      <th className="text-left py-3 pr-4 font-semibold text-foreground">Description</th>
                      <th className="text-left py-3 font-semibold text-foreground">Key Fields</th>
                    </tr>
                  </thead>
                  <tbody>
                    {webhookEvents.map((evt) => (
                      <tr key={evt.event} className="border-b border-border-light">
                        <td className="py-3 pr-4">
                          <code className="text-xs bg-background-secondary px-2 py-1 rounded font-mono text-electric">{evt.event}</code>
                        </td>
                        <td className="py-3 pr-4 text-foreground-secondary">{evt.description}</td>
                        <td className="py-3 text-foreground-tertiary text-xs">{evt.payload}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Payload Example */}
            <div className="border border-border rounded-xl p-8 bg-white">
              <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3" style={{ fontFamily: "var(--font-display)" }}>
                <Code2 className="w-5 h-5 text-electric" />
                Example Payload
              </h2>
              <pre className="bg-gray-900 text-gray-100 rounded-xl p-6 overflow-x-auto text-sm leading-relaxed">
{`{
  "event": "appointment.confirmed",
  "timestamp": "2026-03-09T14:30:00Z",
  "workspace_id": "ws_abc123",
  "data": {
    "appointment_id": "apt_456",
    "contact_id": "con_789",
    "contact_name": "Robert Taylor",
    "confirmed_at": "2026-03-09T14:30:00Z",
    "slot": {
      "date": "2026-03-10",
      "time": "10:00",
      "duration_minutes": 30,
      "provider": "Dr. Smith"
    },
    "campaign_id": "cmp_012",
    "call_duration_seconds": 45
  }
}`}
              </pre>
            </div>

            {/* Signature Verification */}
            <div className="border border-border rounded-xl p-8 bg-white">
              <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3" style={{ fontFamily: "var(--font-display)" }}>
                <ShieldCheck className="w-5 h-5 text-electric" />
                Signature Verification
              </h2>
              <p className="text-foreground-secondary leading-relaxed mb-6">
                Every webhook request includes an <code className="bg-background-secondary px-1.5 py-0.5 rounded text-xs font-mono">X-Callengo-Signature</code> header.
                Verify it using your webhook secret (found in Settings → Webhooks) to ensure the request came from Callengo.
              </p>
              <pre className="bg-gray-900 text-gray-100 rounded-xl p-6 overflow-x-auto text-sm leading-relaxed">
{`const crypto = require('crypto');

function verifyWebhookSignature(payload, signature, secret) {
  const expected = crypto
    .createHmac('sha256', secret)
    .update(payload, 'utf8')
    .digest('hex');

  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expected)
  );
}

// In your Express handler:
app.post('/webhooks/callengo', (req, res) => {
  const signature = req.headers['x-callengo-signature'];
  const isValid = verifyWebhookSignature(
    JSON.stringify(req.body),
    signature,
    process.env.CALLENGO_WEBHOOK_SECRET
  );

  if (!isValid) {
    return res.status(401).json({ error: 'Invalid signature' });
  }

  // Process the event
  const { event, data } = req.body;
  console.log('Received event:', event, data);

  res.status(200).json({ received: true });
});`}
              </pre>
            </div>

            {/* Retry Policy */}
            <div className="border border-border rounded-xl p-8 bg-white">
              <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3" style={{ fontFamily: "var(--font-display)" }}>
                <RefreshCw className="w-5 h-5 text-electric" />
                Retry Policy
              </h2>
              <p className="text-foreground-secondary leading-relaxed mb-6">
                If your endpoint returns a non-2xx status code or times out (30 second limit), Callengo will retry the delivery
                with exponential backoff. After 5 failed attempts, the event is marked as failed and you will receive an email notification.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 pr-8 font-semibold text-foreground">Attempt</th>
                      <th className="text-left py-3 font-semibold text-foreground">Delay After Failure</th>
                    </tr>
                  </thead>
                  <tbody>
                    {retrySchedule.map((r) => (
                      <tr key={r.attempt} className="border-b border-border-light">
                        <td className="py-3 pr-8 text-foreground-secondary">Attempt {r.attempt}</td>
                        <td className="py-3 text-foreground-secondary">{r.delay}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* CTA */}
            <div className="relative overflow-hidden rounded-3xl gradient-bg p-12 md:p-20">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
              </div>
              <div className="relative z-10 max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 leading-tight" style={{ fontFamily: "var(--font-display)" }}>
                  Ready to connect your systems?
                </h2>
                <p className="text-lg text-white/70 mb-8 max-w-xl">
                  Set up webhooks in minutes and keep your systems in sync with real-time event notifications.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="https://app.callengo.com/auth/signup"
                    className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold bg-white text-primary rounded-lg hover:bg-white/90 transition-colors"
                  >
                    Start free trial
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                  <Link
                    href="/docs/integrations"
                    className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold border border-white/30 text-white rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    All Integrations
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
