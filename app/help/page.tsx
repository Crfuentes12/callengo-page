"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  MessageCircle,
  Mail,
  Phone,
  FileQuestion,
  Clock,
  ChevronRight,
  Webhook,
  Shield,
  RefreshCw,
  Settings,
  Code,
  Plug,
} from "lucide-react";

const faqItems = [
  {
    question: "How do I get started with Callengo?",
    answer:
      "Sign up for a free account, import your contacts, and create your first campaign. Our quick start guide walks you through each step.",
  },
  {
    question: "What happens if a call goes to voicemail?",
    answer:
      "Callengo can leave a customized voicemail message and schedule a callback attempt. You can configure voicemail handling in your campaign settings.",
  },
  {
    question: "Can I customize the call scripts?",
    answer:
      "Yes, you can fully customize scripts for each campaign type. Our script editor supports dynamic fields, conditional logic, and multiple languages.",
  },
  {
    question: "How are call minutes calculated?",
    answer:
      "Minutes are calculated based on the actual duration of connected calls. Failed connections, busy signals, and voicemails under 30 seconds are not counted.",
  },
  {
    question: "Is Callengo compliant with TCPA regulations?",
    answer:
      "Yes, Callengo is designed with compliance in mind. We support Do-Not-Call list scrubbing, time zone restrictions, and consent management.",
  },
  {
    question: "Can I integrate Callengo with my CRM?",
    answer:
      "Absolutely. Callengo has built-in integrations with HubSpot, Salesforce, Google Calendar, Outlook, Calendly, SimplyBook.me, Zoom, Google Meet, Microsoft Teams, Twilio, SendGrid, WhatsApp, and Slack. You can connect your accounts directly from the Integrations page and sync data in real time.",
  },
  {
    question: "How do I set up a webhook for my campaign?",
    answer:
      "Navigate to your campaign settings and open the Webhooks tab. Enter your endpoint URL, select the events you want to subscribe to, and save. Callengo will send a test ping to verify your endpoint before activating it.",
  },
  {
    question: "What events can I listen to via webhooks?",
    answer:
      "Callengo supports 12 event types: call.started, call.completed, call.failed, campaign.started, campaign.completed, contact.updated, appointment.confirmed, appointment.cancelled, lead.qualified, lead.disqualified, data.validated, and voicemail.received.",
  },
  {
    question: "Are webhook requests signed for security?",
    answer:
      "Yes. Every webhook request is signed using HMAC-SHA256. You receive a signing secret when you create a webhook endpoint, and you can verify the X-Callengo-Signature header on each incoming request to ensure it originated from Callengo.",
  },
  {
    question: "What happens if my webhook endpoint is down?",
    answer:
      "Callengo automatically retries failed webhook deliveries using exponential backoff. Retries are attempted over several hours, giving your endpoint time to recover. You can also view delivery logs and manually replay events from the dashboard.",
  },
  {
    question: "Can I sync Callengo data with Google Calendar or Outlook?",
    answer:
      "Yes. Once you connect your Google Calendar or Outlook account, confirmed appointments are automatically added to your calendar. Cancellations and reschedules are synced in real time as well.",
  },
  {
    question: "Does Callengo support video meeting platforms?",
    answer:
      "Yes. Callengo integrates with Zoom, Google Meet, and Microsoft Teams. When an appointment is confirmed, a meeting link is automatically generated and included in the confirmation sent to the contact.",
  },
];

const supportChannels = [
  {
    title: "Live Chat",
    description: "Chat with our support team in real-time",
    icon: MessageCircle,
    action: "Start Chat",
    availability: "Mon-Fri, 9am-6pm EST",
  },
  {
    title: "Email Support",
    description: "Get a response within 24 hours",
    icon: Mail,
    action: "Send Email",
    href: "mailto:support@callengo.com",
  },
  {
    title: "Phone Support",
    description: "Available for Business and Teams plans",
    icon: Phone,
    action: "Call Us",
    href: "tel:+1-800-CALLENGO",
  },
];

const webhookEvents = [
  { name: "call.started", description: "Triggered when an outbound call connects" },
  { name: "call.completed", description: "Triggered when a call ends normally" },
  { name: "call.failed", description: "Triggered when a call fails to connect" },
  { name: "campaign.started", description: "Triggered when a campaign begins execution" },
  { name: "campaign.completed", description: "Triggered when all contacts in a campaign have been processed" },
  { name: "contact.updated", description: "Triggered when contact data is modified during a call" },
  { name: "appointment.confirmed", description: "Triggered when an appointment is booked and confirmed" },
  { name: "appointment.cancelled", description: "Triggered when a previously confirmed appointment is cancelled" },
  { name: "lead.qualified", description: "Triggered when a contact meets your qualification criteria" },
  { name: "lead.disqualified", description: "Triggered when a contact does not meet qualification criteria" },
  { name: "data.validated", description: "Triggered when collected data passes validation rules" },
  { name: "voicemail.received", description: "Triggered when a voicemail is detected and recorded" },
];

const webhookFeatures = [
  {
    icon: Shield,
    title: "HMAC-SHA256 Signing",
    description:
      "Every request includes an X-Callengo-Signature header signed with your secret key, so you can verify authenticity.",
  },
  {
    icon: RefreshCw,
    title: "Automatic Retry",
    description:
      "Failed deliveries are retried automatically with exponential backoff over several hours, ensuring no events are lost.",
  },
  {
    icon: Settings,
    title: "Per-Campaign Configuration",
    description:
      "Set unique webhook URLs and event subscriptions for each campaign, giving you fine-grained control over data flow.",
  },
  {
    icon: Code,
    title: "JSON Payloads",
    description:
      "All webhook payloads are delivered as structured JSON with consistent field naming, timestamps, and event metadata.",
  },
];

export default function HelpPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="section">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h1 className="text-display-sm mb-6">
                <span className="gradient-text">Help</span> Center
              </h1>
              <p className="text-xl text-slate-600">
                Find answers, get support, and learn how to get the most out of
                Callengo.
              </p>
            </motion.div>

            {/* Search */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="max-w-2xl mx-auto mb-16"
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for help..."
                  className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent text-lg"
                />
              </div>
            </motion.div>

            {/* Support Channels */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="grid md:grid-cols-3 gap-6 mb-16"
            >
              {supportChannels.map((channel) => (
                <div
                  key={channel.title}
                  className="bg-white rounded-2xl border border-slate-200 p-6 text-center"
                >
                  <div className="w-12 h-12 rounded-xl gradient-bg-subtle flex items-center justify-center mx-auto mb-4">
                    <channel.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {channel.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4">
                    {channel.description}
                  </p>
                  {channel.availability && (
                    <div className="flex items-center justify-center gap-1 text-sm text-slate-400 mb-4">
                      <Clock className="w-4 h-4" />
                      {channel.availability}
                    </div>
                  )}
                  {channel.href ? (
                    <a
                      href={channel.href}
                      className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold gradient-bg text-white rounded-full hover:-translate-y-0.5 transition-all"
                    >
                      {channel.action}
                    </a>
                  ) : (
                    <button className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold gradient-bg text-white rounded-full hover:-translate-y-0.5 transition-all">
                      {channel.action}
                    </button>
                  )}
                </div>
              ))}
            </motion.div>

            {/* FAQ Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-8">
                <FileQuestion className="w-6 h-6 text-slate-600" />
                <h2 className="text-2xl font-bold">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white rounded-2xl border border-slate-200 p-6"
                  >
                    <h3 className="font-semibold mb-2">{item.question}</h3>
                    <p className="text-slate-600">{item.answer}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Webhook System Section */}
        <section className="section surface-arctic">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <span className="badge mb-4">Developer Tools</span>
              <h2 className="text-display-sm mb-6">
                <span className="gradient-text">Webhook</span> System
              </h2>
              <p className="text-xl text-ink">
                Receive real-time notifications for every important event in your
                campaigns. Configure endpoints per campaign, verify request
                signatures, and build powerful automations with structured JSON
                payloads.
              </p>
            </motion.div>

            {/* Webhook Features */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {webhookFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl border border-slate-200 p-6"
                >
                  <div className="w-10 h-10 rounded-lg gradient-bg-subtle flex items-center justify-center mb-4">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-slate-600 text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Webhook Events Table */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-8">
                <Webhook className="w-6 h-6 text-slate-600" />
                <h3 className="text-2xl font-bold">
                  12 Supported Event Types
                </h3>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {webhookEvents.map((event, index) => (
                  <motion.div
                    key={event.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.04 }}
                    className="bg-white rounded-xl border border-slate-200 p-4"
                  >
                    <code className="text-sm font-mono font-semibold text-slate-900 block mb-1">
                      {event.name}
                    </code>
                    <p className="text-slate-500 text-sm">
                      {event.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Example Payload */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Code className="w-6 h-6 text-slate-600" />
                <h3 className="text-2xl font-bold">Example Payload</h3>
              </div>

              <div className="bg-slate-900 rounded-2xl p-6 overflow-x-auto">
                <pre className="text-sm text-slate-300 font-mono leading-relaxed">
{`{
  "event": "call.completed",
  "timestamp": "2026-03-08T14:32:00Z",
  "campaign_id": "camp_abc123",
  "data": {
    "call_id": "call_xyz789",
    "contact_id": "cont_456",
    "duration_seconds": 142,
    "outcome": "appointment_booked",
    "recording_url": "https://api.callengo.com/recordings/call_xyz789.mp3",
    "transcript_summary": "Contact confirmed availability for Thursday at 2pm."
  }
}`}
                </pre>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Integrations Overview */}
        <section className="section">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <Plug className="w-6 h-6 text-slate-600" />
                <h2 className="text-2xl font-bold">Built-in Integrations</h2>
              </div>
              <p className="text-slate-600">
                Callengo connects natively with the tools your team already uses.
                No third-party middleware required.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-12"
            >
              {[
                "HubSpot",
                "Salesforce",
                "Google Calendar",
                "Outlook",
                "Calendly",
                "SimplyBook.me",
                "Zoom",
                "Google Meet",
                "Microsoft Teams",
                "Twilio",
                "SendGrid",
                "WhatsApp",
                "Slack",
              ].map((name, index) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                  className="bg-white rounded-xl border border-slate-200 p-4 text-center font-medium text-sm text-slate-700 hover:border-slate-400 transition-colors"
                >
                  {name}
                </motion.div>
              ))}
            </motion.div>

            <div className="text-center">
              <Link
                href="/integrations"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold gradient-bg text-white rounded-full hover:-translate-y-0.5 transition-all"
              >
                View All Integrations
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="section">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="gradient-bg rounded-3xl p-8 md:p-12 text-white"
            >
              <h3 className="text-2xl font-bold mb-6">Quick Links</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Link
                  href="/help/quick-start"
                  className="flex items-center justify-between p-4 bg-white/10 rounded-xl border border-white/20 hover:bg-white/20 transition-all group"
                >
                  <span className="font-medium">Quick Start Guide</span>
                  <ChevronRight className="w-5 h-5 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </Link>
                <Link
                  href="/integrations"
                  className="flex items-center justify-between p-4 bg-white/10 rounded-xl border border-white/20 hover:bg-white/20 transition-all group"
                >
                  <span className="font-medium">Integrations</span>
                  <ChevronRight className="w-5 h-5 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </Link>
                <Link
                  href="/help/crm-integrations"
                  className="flex items-center justify-between p-4 bg-white/10 rounded-xl border border-white/20 hover:bg-white/20 transition-all group"
                >
                  <span className="font-medium">CRM Integrations</span>
                  <ChevronRight className="w-5 h-5 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </Link>
                <Link
                  href="/blog"
                  className="flex items-center justify-between p-4 bg-white/10 rounded-xl border border-white/20 hover:bg-white/20 transition-all group"
                >
                  <span className="font-medium">Blog & Articles</span>
                  <ChevronRight className="w-5 h-5 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </Link>
                <Link
                  href="/docs"
                  className="flex items-center justify-between p-4 bg-white/10 rounded-xl border border-white/20 hover:bg-white/20 transition-all group"
                >
                  <span className="font-medium">Documentation</span>
                  <ChevronRight className="w-5 h-5 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </Link>
                <Link
                  href="/docs/webhooks"
                  className="flex items-center justify-between p-4 bg-white/10 rounded-xl border border-white/20 hover:bg-white/20 transition-all group"
                >
                  <span className="font-medium">Webhook Documentation</span>
                  <ChevronRight className="w-5 h-5 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
