"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Workflow,
  Shield,
  RefreshCw,
  Code,
  Clock,
  AlertTriangle,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════════════
   WEBHOOK DATA
   ═══════════════════════════════════════════════════════════════════ */

const webhookEvents = [
  {
    event: "appointment.confirmed",
    description:
      "Fired when an appointment is confirmed by the AI agent during a call.",
  },
  {
    event: "appointment.rescheduled",
    description:
      "Fired when an existing appointment is rescheduled to a new date/time.",
  },
  {
    event: "appointment.cancelled",
    description:
      "Fired when an appointment is cancelled by the contact during a call.",
  },
  {
    event: "call.completed",
    description:
      "Fired when a call finishes successfully, regardless of outcome.",
  },
  {
    event: "call.failed",
    description:
      "Fired when a call fails due to a technical error (e.g., carrier issue).",
  },
  {
    event: "call.no_answer",
    description:
      "Fired when the call rings but is not answered within the timeout period.",
  },
  {
    event: "call.voicemail",
    description:
      "Fired when the call reaches voicemail and a message is left (or not).",
  },
  {
    event: "campaign.completed",
    description:
      "Fired when all contacts in a campaign have been called and the campaign ends.",
  },
  {
    event: "campaign.paused",
    description:
      "Fired when a campaign is paused by the user or by an automated rule.",
  },
  {
    event: "lead.qualified",
    description:
      "Fired when the Lead Qualification agent scores a lead above the configured threshold.",
  },
];

const webhookPayload = `{
  "event": "call.completed",
  "call_id": "clg_8f3a2b1c-d4e5-6789-abcd-ef0123456789",
  "campaign_id": "cmp_a1b2c3d4",
  "status": "completed",
  "call_length_seconds": 142,
  "answered_by": "human",
  "contact": {
    "phone_number": "+14155551234",
    "contact_name": "Jane Smith",
    "company_name": "Acme Corp",
    "email": "jane@acme.com",
    "custom_fields": {
      "account_id": "ACC-12345",
      "region": "West"
    }
  },
  "analysis": {
    "outcome": "Verified",
    "extracted_data": {
      "email_confirmed": true,
      "new_phone": null,
      "address_updated": false,
      "notes": "Contact confirmed all details. Prefers email communication."
    },
    "sentiment": "positive",
    "lead_score": 85
  },
  "recording_url": "https://recordings.callengo.com/clg_8f3a2b1c.mp3",
  "transcript_url": "https://recordings.callengo.com/clg_8f3a2b1c.txt",
  "timestamp": "2026-03-08T14:32:10Z"
}`;

const signatureCode = `const crypto = require('crypto');

function verifyWebhookSignature(req, secret) {
  const signature = req.headers['x-callengo-signature'];
  const timestamp = req.headers['x-callengo-timestamp'];
  const body = JSON.stringify(req.body);

  // Prevent replay attacks — reject if older than 5 minutes
  const age = Math.abs(Date.now() / 1000 - parseInt(timestamp));
  if (age > 300) {
    throw new Error('Webhook timestamp too old');
  }

  // Compute expected signature
  const payload = \`\${timestamp}.\${body}\`;
  const expected = crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('hex');

  // Constant-time comparison
  const sig = Buffer.from(signature, 'hex');
  const exp = Buffer.from(expected, 'hex');

  if (sig.length !== exp.length || !crypto.timingSafeEqual(sig, exp)) {
    throw new Error('Invalid webhook signature');
  }

  return true;
}

// Express.js middleware example
app.post('/webhooks/callengo', (req, res) => {
  try {
    verifyWebhookSignature(req, process.env.CALLENGO_WEBHOOK_SECRET);
    const event = req.body;

    switch (event.event) {
      case 'call.completed':
        handleCallCompleted(event);
        break;
      case 'appointment.confirmed':
        handleAppointmentConfirmed(event);
        break;
      default:
        console.log('Unhandled event:', event.event);
    }

    res.status(200).json({ received: true });
  } catch (err) {
    console.error('Webhook error:', err.message);
    res.status(401).json({ error: err.message });
  }
});`;

const retryPolicy = [
  { label: "Max retries", value: "0 to 5 (configurable per endpoint)" },
  { label: "Retry intervals", value: "30s, 1m, 5m, 15m, 1h" },
  { label: "Timeout", value: "30 seconds per attempt" },
  { label: "Backoff strategy", value: "Exponential with jitter" },
  { label: "Deduplication", value: "Each delivery has a unique idempotency key" },
  { label: "Log retention", value: "30 days in the Callengo dashboard" },
  { label: "Manual retry", value: "Failed deliveries can be retried from the dashboard" },
];

/* ═══════════════════════════════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════════════════════════════ */

export default function WebhooksPage() {
  return (
    <>
      <Header />
      <main style={{ fontFamily: "var(--font-body)" }} className="bg-background">
        {/* ────────── Hero ────────── */}
        <section className="pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 mb-8">
                <Link
                  href="/docs"
                  className="text-sm font-medium text-foreground-tertiary hover:text-foreground transition-colors"
                >
                  Docs
                </Link>
                <ChevronRight className="w-3.5 h-3.5 text-foreground-tertiary" />
                <Link
                  href="/docs/integrations"
                  className="flex items-center gap-1.5 text-sm font-medium text-foreground-tertiary hover:text-foreground transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  Integrations
                </Link>
                <ChevronRight className="w-3.5 h-3.5 text-foreground-tertiary" />
                <span className="text-sm font-medium text-electric">
                  Webhooks
                </span>
              </div>

              {/* Title block */}
              <div className="flex items-start gap-5 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-foreground flex items-center justify-center flex-shrink-0">
                  <Workflow className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-50 text-slate-700">
                      Automation
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700">
                      Business+ plan
                    </span>
                  </div>
                  <h1
                    className="text-3xl md:text-4xl font-bold text-foreground"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Webhooks
                  </h1>
                  <p className="text-lg text-foreground-secondary mt-2">
                    Send real-time HTTP POST requests to any URL when events
                    occur in Callengo. The most flexible integration for custom
                    workflows.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ────────── Content ────────── */}
        <section className="pb-20">
          <div className="max-w-4xl mx-auto px-6 space-y-12">
            {/* Events table */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border border-border rounded-xl overflow-hidden bg-white"
            >
              <div className="px-6 py-5 border-b border-border">
                <h2
                  className="text-xl font-bold text-foreground flex items-center gap-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <Workflow className="w-5 h-5 text-electric" />
                  Available Events
                </h2>
                <p className="text-sm text-foreground-secondary mt-1">
                  Subscribe to any combination of these events per webhook
                  endpoint.
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-background-secondary border-b border-border">
                    <tr>
                      <th className="text-left px-6 py-3 font-semibold text-foreground">
                        Event
                      </th>
                      <th className="text-left px-6 py-3 font-semibold text-foreground">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {webhookEvents.map((evt) => (
                      <tr
                        key={evt.event}
                        className="border-b border-border last:border-0"
                      >
                        <td className="px-6 py-3.5">
                          <code className="text-sm bg-background-tertiary px-2.5 py-1 rounded font-mono text-foreground">
                            {evt.event}
                          </code>
                        </td>
                        <td className="px-6 py-3.5 text-foreground-secondary">
                          {evt.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* JSON payload example */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border border-border rounded-xl overflow-hidden bg-white"
            >
              <div className="px-6 py-5 border-b border-border flex items-center justify-between">
                <div>
                  <h2
                    className="text-xl font-bold text-foreground flex items-center gap-3"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    <Code className="w-5 h-5 text-electric" />
                    Payload Example
                  </h2>
                  <p className="text-sm text-foreground-secondary mt-1">
                    When a call completes, Callengo sends a POST request with
                    the following JSON body.
                  </p>
                </div>
                <span className="flex items-center gap-1.5 text-xs text-foreground-tertiary font-mono">
                  JSON
                </span>
              </div>
              <div
                className="p-6 overflow-x-auto text-sm font-mono leading-relaxed"
                style={{
                  background: "#0f172a",
                  color: "rgba(255,255,255,0.85)",
                }}
              >
                <pre>{webhookPayload}</pre>
              </div>
            </motion.div>

            {/* Signature verification */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border border-border rounded-xl overflow-hidden bg-white"
            >
              <div className="px-6 py-5 border-b border-border">
                <h2
                  className="text-xl font-bold text-foreground flex items-center gap-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <Shield className="w-5 h-5 text-electric" />
                  Signature Verification
                </h2>
                <p className="text-sm text-foreground-secondary mt-2 max-w-2xl">
                  Every webhook request includes two headers for security
                  verification:
                </p>
                <ul className="mt-3 space-y-2">
                  <li className="text-sm text-foreground-secondary flex items-start gap-2">
                    <code className="bg-background-tertiary px-2 py-0.5 rounded text-xs font-mono text-foreground flex-shrink-0">
                      X-Callengo-Signature
                    </code>
                    <span>
                      HMAC-SHA256 hash of the timestamp and request body using
                      your webhook secret key.
                    </span>
                  </li>
                  <li className="text-sm text-foreground-secondary flex items-start gap-2">
                    <code className="bg-background-tertiary px-2 py-0.5 rounded text-xs font-mono text-foreground flex-shrink-0">
                      X-Callengo-Timestamp
                    </code>
                    <span>
                      Unix timestamp of when the webhook was sent. Use this to
                      prevent replay attacks.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="px-6 py-4 border-b border-border bg-background-secondary">
                <div className="flex items-center gap-2 text-xs text-foreground-tertiary font-mono">
                  <Code className="w-3.5 h-3.5" />
                  Node.js / Express.js
                </div>
              </div>
              <div
                className="p-6 overflow-x-auto text-sm font-mono leading-relaxed"
                style={{
                  background: "#0f172a",
                  color: "rgba(255,255,255,0.85)",
                }}
              >
                <pre>{signatureCode}</pre>
              </div>
            </motion.div>

            {/* Retry policy */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border border-border rounded-xl p-8 bg-white"
            >
              <h2
                className="text-xl font-bold text-foreground mb-6 flex items-center gap-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <RefreshCw className="w-5 h-5 text-electric" />
                Retry Policy
              </h2>
              <p className="text-foreground-secondary leading-relaxed mb-6">
                If your endpoint returns a non-2xx status code or times out
                (30-second limit), Callengo will retry the delivery according to
                your configured retry policy. Failed deliveries are visible in
                the webhook logs on your dashboard.
              </p>
              <div className="border border-border rounded-lg overflow-hidden">
                {retryPolicy.map((item, idx) => (
                  <div
                    key={item.label}
                    className={`flex items-center justify-between px-5 py-3.5 text-sm ${
                      idx !== retryPolicy.length - 1
                        ? "border-b border-border"
                        : ""
                    }`}
                  >
                    <span className="text-foreground font-medium">
                      {item.label}
                    </span>
                    <span className="text-foreground-secondary text-right">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Best practices */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border border-border rounded-xl p-8 bg-white"
            >
              <h2
                className="text-xl font-bold text-foreground mb-6 flex items-center gap-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <AlertTriangle className="w-5 h-5 text-foreground-tertiary" />
                Best Practices &amp; Limitations
              </h2>
              <ul className="space-y-3">
                {[
                  "Endpoint must be HTTPS — plain HTTP URLs are not supported.",
                  "Always verify the webhook signature before processing the payload.",
                  "Respond with a 2xx status code within 30 seconds to acknowledge receipt.",
                  "Use the idempotency key in the payload to handle duplicate deliveries.",
                  "Process webhooks asynchronously — acknowledge first, then process.",
                  "Maximum payload size is 256 KB per webhook delivery.",
                  "Maximum of 10 webhook endpoints per Callengo account.",
                  "Webhook logs are retained for 30 days in the dashboard.",
                  "Available on Business plan and above.",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-foreground-secondary"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground-tertiary flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Setup steps */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border border-border rounded-xl p-8 bg-white"
            >
              <h2
                className="text-xl font-bold text-foreground mb-6 flex items-center gap-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <Clock className="w-5 h-5 text-electric" />
                Quick Setup
              </h2>
              <ol className="space-y-4">
                {[
                  "Go to Settings > Integrations and click Configure next to Webhooks.",
                  "Click Add Webhook Endpoint.",
                  "Enter the destination URL (must be HTTPS).",
                  "Choose which events should trigger the webhook, or select All Events.",
                  "Add a secret key for webhook signature verification (recommended).",
                  "Configure retry policy: number of retries (0-5) and retry interval.",
                  "Optionally add custom HTTP headers (e.g., Authorization, X-API-Key).",
                  "Save and use the Test button to send a sample payload to your endpoint.",
                  "Verify that your endpoint responds with a 2xx status code within 30 seconds.",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-foreground text-white flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <p className="text-foreground-secondary leading-relaxed pt-1">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </motion.div>

            {/* ────────── CTA ────────── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-3xl gradient-bg p-12 md:p-20"
            >
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
              </div>

              <div className="relative z-10 text-center max-w-2xl mx-auto">
                <h2
                  className="text-3xl md:text-4xl font-bold text-white mb-6"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Build custom workflows with webhooks
                </h2>
                <p className="text-lg text-white/70 mb-10">
                  Connect Callengo to any system with real-time webhook
                  notifications. No limitations on what you can build.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://app.callengo.com/auth/signup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-white text-primary hover:bg-white/90 px-8 py-4 font-semibold"
                  >
                    Get Started Free
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                  <Link
                    href="/docs/integrations"
                    className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold border border-white/30 text-white rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    All Integrations
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
