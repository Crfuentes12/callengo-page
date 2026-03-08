"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  CalendarCheck,
  BookOpen,
  Mail,
  Video,
  MonitorPlay,
  Users,
  CircleDot,
  Cloud,
  Smartphone,
  Send,
  MessageCircle,
  Hash,
  MessageSquare,
  Webhook,
  Shield,
  RefreshCw,
  Check,
  Zap,
  Globe,
  Lock,
  Key,
  type LucideIcon,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

interface Integration {
  name: string;
  icon: LucideIcon;
  auth: string;
  description: string;
  features: string[];
}

interface Category {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  integrations: Integration[];
}

const categories: Category[] = [
  {
    title: "Calendar Integrations",
    subtitle:
      "Seamlessly sync appointments, manage availability, and automate scheduling across your calendar stack.",
    icon: Calendar,
    integrations: [
      {
        name: "Google Calendar",
        icon: Calendar,
        auth: "OAuth 2.0",
        description:
          "Bi-directional sync with Google Calendar for real-time event creation, updates, and automatic timezone handling.",
        features: [
          "Bi-directional calendar sync",
          "Real-time event creation & updates",
          "Automatic timezone handling",
          "Multi-calendar support",
        ],
      },
      {
        name: "Microsoft Outlook",
        icon: Mail,
        auth: "OAuth 2.0",
        description:
          "Full Exchange Online support for calendar event management, meeting scheduling, and availability checking.",
        features: [
          "Exchange Online support",
          "Calendar event management",
          "Meeting scheduling",
          "Availability checking",
        ],
      },
      {
        name: "Calendly",
        icon: CalendarCheck,
        auth: "OAuth 2.0",
        description:
          "Map event types, automatically book from call outcomes, and check real-time availability.",
        features: [
          "Event type mapping",
          "Automatic booking from call outcomes",
          "Real-time availability checking",
          "Round-robin assignment",
        ],
      },
      {
        name: "SimplyBook.me",
        icon: BookOpen,
        auth: "API Key",
        description:
          "REST API integration for appointment booking, service mapping, and staff assignment workflows.",
        features: [
          "Appointment booking via REST API",
          "Service mapping",
          "Staff assignment",
          "Custom field support",
        ],
      },
    ],
  },
  {
    title: "Video Conferencing",
    subtitle:
      "Auto-generate meeting links, sync with calendars, and keep teams connected with instant video calls.",
    icon: Video,
    integrations: [
      {
        name: "Zoom",
        icon: Video,
        auth: "OAuth 2.0",
        description:
          "Automatic meeting link generation, deep calendar integration, and recording support for every call.",
        features: [
          "Automatic meeting link generation",
          "Calendar integration",
          "Recording support",
          "Waiting room management",
        ],
      },
      {
        name: "Google Meet",
        icon: MonitorPlay,
        auth: "OAuth 2.0",
        description:
          "Native Google Workspace integration with instant meeting creation and full calendar sync.",
        features: [
          "Google Workspace integration",
          "Instant meeting creation",
          "Calendar sync",
          "Guest access management",
        ],
      },
      {
        name: "Microsoft Teams",
        icon: Users,
        auth: "OAuth 2.0",
        description:
          "Schedule Teams meetings, send channel notifications, and detect user presence in real time.",
        features: [
          "Teams meeting scheduling",
          "Channel notifications",
          "Presence detection",
          "Adaptive card support",
        ],
      },
    ],
  },
  {
    title: "CRM Integrations",
    subtitle:
      "Sync contacts, log activities, and manage your pipeline without ever leaving your CRM.",
    icon: Users,
    integrations: [
      {
        name: "HubSpot",
        icon: CircleDot,
        auth: "OAuth 2.0",
        description:
          "Bi-directional contact sync, deal and pipeline management, activity logging, and custom property mapping.",
        features: [
          "Contact sync",
          "Deal & pipeline management",
          "Activity logging",
          "Custom property mapping",
        ],
      },
      {
        name: "Salesforce",
        icon: Cloud,
        auth: "OAuth 2.0",
        description:
          "Full lead, contact, and opportunity management with custom object support and real-time sync.",
        features: [
          "Lead / Contact / Opportunity management",
          "Custom object support",
          "Real-time sync",
          "Workflow rule triggers",
        ],
      },
    ],
  },
  {
    title: "Communication",
    subtitle:
      "Reach contacts through SMS, email, WhatsApp, and Slack with automated follow-ups and team alerts.",
    icon: MessageSquare,
    integrations: [
      {
        name: "Twilio",
        icon: Smartphone,
        auth: "API Key",
        description:
          "SMS notifications, call forwarding, and full voice capabilities powered by Twilio's global network.",
        features: [
          "SMS notifications",
          "Call forwarding",
          "Voice capabilities",
          "Global carrier network",
        ],
      },
      {
        name: "SendGrid",
        icon: Send,
        auth: "API Key",
        description:
          "Transactional emails, automated follow-up sequences, and template management for every touchpoint.",
        features: [
          "Transactional emails",
          "Follow-up sequences",
          "Template management",
          "Delivery analytics",
        ],
      },
      {
        name: "WhatsApp Business",
        icon: MessageCircle,
        auth: "OAuth 2.0",
        description:
          "Send message templates, follow-up messages, and rich media via the official Meta Business API.",
        features: [
          "Message templates",
          "Follow-up messaging",
          "Media support",
          "Read receipts & delivery status",
        ],
      },
      {
        name: "Slack",
        icon: Hash,
        auth: "OAuth 2.0",
        description:
          "Post channel notifications, share call summaries, send team alerts, and trigger Slack workflows.",
        features: [
          "Channel notifications",
          "Call summaries",
          "Team alerts",
          "Workflow triggers",
        ],
      },
    ],
  },
];

const webhookEvents = [
  { name: "call.started", description: "Fires when an outbound call connects" },
  {
    name: "call.completed",
    description: "Fires when a call ends with full transcript",
  },
  { name: "call.failed", description: "Fires on failed or dropped calls" },
  {
    name: "campaign.started",
    description: "Fires when a campaign begins dialing",
  },
  {
    name: "campaign.completed",
    description: "Fires when all contacts in a campaign have been reached",
  },
  {
    name: "contact.updated",
    description: "Fires when contact data is validated or enriched",
  },
  {
    name: "appointment.confirmed",
    description: "Fires when a contact confirms an appointment",
  },
  {
    name: "appointment.cancelled",
    description: "Fires when a contact cancels an appointment",
  },
  {
    name: "lead.qualified",
    description: "Fires when a lead passes qualification criteria",
  },
  {
    name: "lead.disqualified",
    description: "Fires when a lead fails qualification criteria",
  },
  {
    name: "data.validated",
    description: "Fires when contact data passes validation checks",
  },
  {
    name: "voicemail.received",
    description: "Fires when a voicemail is recorded and transcribed",
  },
];

// ---------------------------------------------------------------------------
// Animation variants
// ---------------------------------------------------------------------------

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function IntegrationsDocsPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        {/* --------------------------------------------------------------- */}
        {/* Back to docs */}
        {/* --------------------------------------------------------------- */}
        <div className="max-w-7xl mx-auto px-6 pt-6">
          <Link
            href="/docs"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Docs
          </Link>
        </div>

        {/* --------------------------------------------------------------- */}
        {/* Hero */}
        {/* --------------------------------------------------------------- */}
        <section className="section">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 badge mb-6">
                <Zap className="w-4 h-4" />
                <span>16+ Native Integrations</span>
              </div>
              <h1 className="text-display-sm mb-6">
                Powerful{" "}
                <span className="gradient-text">Integrations</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                Callengo connects with the tools you already use. Sync
                calendars, update your CRM, send follow-ups, and trigger
                workflows — all automatically after every AI-powered call.
              </p>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              className="grid sm:grid-cols-3 gap-6 mt-14 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {[
                {
                  icon: Globe,
                  label: "Native Integrations",
                  value: "16+",
                },
                {
                  icon: Lock,
                  label: "Auth Methods",
                  value: "OAuth 2.0 & API Key",
                },
                {
                  icon: Webhook,
                  label: "Webhook Events",
                  value: "12 Event Types",
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="card p-6 text-center cursor-pointer hover:shadow-lg transition-shadow duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  tabIndex={0}
                >
                  <stat.icon className="w-6 h-6 text-blue-600 mx-auto mb-3" />
                  <p className="text-2xl font-bold text-ink">{stat.value}</p>
                  <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* --------------------------------------------------------------- */}
        {/* Category sections */}
        {/* --------------------------------------------------------------- */}
        {categories.map((category, catIdx) => (
          <section
            key={category.title}
            className={`section ${catIdx % 2 === 1 ? "surface-arctic" : ""}`}
          >
            <div className="max-w-7xl mx-auto px-6">
              {/* Category header */}
              <motion.div
                className="text-center mb-14"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center gap-2 badge mb-4">
                  <category.icon className="w-4 h-4" />
                  <span>{category.title}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
                  {category.title}
                </h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  {category.subtitle}
                </p>
              </motion.div>

              {/* Integration cards */}
              <motion.div
                className={`grid gap-8 ${
                  category.integrations.length <= 2
                    ? "md:grid-cols-2 max-w-4xl mx-auto"
                    : category.integrations.length === 3
                    ? "md:grid-cols-3"
                    : "md:grid-cols-2 lg:grid-cols-4"
                }`}
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
              >
                {category.integrations.map((integration, i) => (
                  <motion.div
                    key={integration.name}
                    className="card p-6 flex flex-col cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    variants={fadeUp}
                    custom={i}
                    tabIndex={0}
                  >
                    {/* Icon + name */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg gradient-bg-subtle flex items-center justify-center shrink-0">
                        <integration.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-ink">
                          {integration.name}
                        </h3>
                      </div>
                    </div>

                    {/* Auth badge */}
                    <span
                      className={`badge text-xs w-fit mb-3 ${
                        integration.auth === "OAuth 2.0"
                          ? "gradient-bg-subtle"
                          : ""
                      }`}
                    >
                      <Key className="w-3 h-3 inline mr-1" />
                      {integration.auth}
                    </span>

                    {/* Description */}
                    <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                      {integration.description}
                    </p>

                    {/* Features */}
                    <ul className="mt-auto space-y-2">
                      {integration.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm text-slate-700"
                        >
                          <Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        ))}

        {/* --------------------------------------------------------------- */}
        {/* Webhook system */}
        {/* --------------------------------------------------------------- */}
        <section className="section surface-arctic">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              className="text-center mb-14"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 badge mb-4">
                <Webhook className="w-4 h-4" />
                <span>Webhook System</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
                Real-Time <span className="gradient-text">Webhooks</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Subscribe to 12 granular event types and build custom workflows
                on top of Callengo. Every payload is signed and delivered with
                enterprise-grade reliability.
              </p>
            </motion.div>

            {/* Security features */}
            <motion.div
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {[
                {
                  icon: Shield,
                  title: "HMAC-SHA256 Signing",
                  text: "Every webhook payload is signed so you can verify authenticity and prevent tampering.",
                },
                {
                  icon: RefreshCw,
                  title: "Retry with Exponential Backoff",
                  text: "Failed deliveries are retried automatically with exponential backoff up to 24 hours.",
                },
                {
                  icon: Zap,
                  title: "< 500 ms Delivery",
                  text: "Events are dispatched within milliseconds of the triggering action for real-time automation.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="card p-6 cursor-pointer hover:shadow-lg transition-shadow duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  tabIndex={0}
                >
                  <item.icon className="w-8 h-8 text-blue-600 mb-4" />
                  <h3 className="text-lg font-semibold text-ink mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Event types grid */}
            <motion.div
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              {webhookEvents.map((event, i) => (
                <motion.div
                  key={event.name}
                  className="card p-4 flex items-start gap-3 cursor-pointer hover:shadow-md transition-shadow duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  variants={fadeUp}
                  custom={i}
                  tabIndex={0}
                >
                  <code className="text-xs font-mono gradient-bg text-white px-2 py-1 rounded shrink-0">
                    {event.name}
                  </code>
                  <p className="text-sm text-slate-600">{event.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* --------------------------------------------------------------- */}
        {/* CTA */}
        {/* --------------------------------------------------------------- */}
        <section className="section">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              className="gradient-bg rounded-3xl p-12 md:p-16 text-center text-white"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to connect your stack?
              </h2>
              <p className="text-lg text-blue-100 max-w-xl mx-auto mb-8">
                Set up your first integration in minutes — no code required.
                Callengo handles authentication, syncing, and error recovery for
                you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="btn btn-primary bg-white text-blue-600 hover:bg-blue-50 inline-flex items-center gap-2 cursor-pointer transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600"
                >
                  Get Started Free
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/docs"
                  className="btn border border-white/30 text-white hover:bg-white/10 inline-flex items-center gap-2 cursor-pointer transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600"
                >
                  Back to Docs
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
