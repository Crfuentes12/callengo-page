"use client";

import { motion } from "framer-motion";
import {
  Mic2,
  Brain,
  BarChart3,
  Zap,
  Shield,
  Globe,
  Clock,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: Mic2,
    title: "Hyper-Realistic Voices",
    description:
      "77+ professional voices that sound indistinguishable from real humans. Multiple accents and languages available.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Brain,
    title: "Conversational AI",
    description:
      "Powered by GPT-4o for natural conversations. Handles objections, understands context, and adapts in real-time.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: BarChart3,
    title: "Automatic Analysis",
    description:
      "Every call is transcribed and analyzed. Get structured data, sentiment analysis, and actionable insights.",
    color: "text-accent-dark",
    bgColor: "bg-accent/10",
  },
  {
    icon: Zap,
    title: "Instant Scalability",
    description:
      "Go from 10 to 10,000 calls without hiring anyone. Launch campaigns in minutes, not weeks.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "SOC 2 compliant infrastructure. Full audit logs, encryption at rest and in transit. Your data stays yours.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Globe,
    title: "Multi-Language Support",
    description:
      "Reach customers in their native language. Support for English, Spanish, French, German, and more.",
    color: "text-accent-dark",
    bgColor: "bg-accent/10",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description:
      "Your AI agents never sleep, never take breaks, and always follow your script perfectly.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Headphones,
    title: "Smart Voicemail",
    description:
      "Automatically detects voicemail, leaves personalized messages, and schedules follow-ups.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Features() {
  return (
    <section className="section bg-background-secondary" id="features">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <span className="text-sm font-medium text-primary">
              Powerful Features
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Everything You Need to{" "}
            <span className="gradient-text">Scale Your Calls</span>
          </h2>

          <p className="text-lg text-foreground-secondary">
            Built on cutting-edge AI technology, Callengo gives you the tools to
            automate your entire calling operation without sacrificing quality.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group"
            >
              <div className="card h-full hover:translate-y-[-4px]">
                <div
                  className={`${feature.bgColor} w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
                >
                  <feature.icon className={`w-7 h-7 ${feature.color}`} />
                </div>

                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>

                <p className="text-foreground-secondary leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 bg-gradient-to-r from-primary to-primary-dark rounded-3xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">77+</div>
              <div className="text-white/70">AI Voices</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">&lt;500ms</div>
              <div className="text-white/70">Response Time</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">95%</div>
              <div className="text-white/70">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-white/70">Availability</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
