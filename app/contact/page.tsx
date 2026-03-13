"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { CheckCircle, ArrowRight, Clock, MessageSquare, Zap } from "lucide-react";
import { trackFreeTrialClick, trackContactFormSubmit } from "@/app/lib/analytics";
import AnimatedBlobs from "../components/AnimatedBlobs";

// HubSpot postMessage event shape
interface HubSpotCallbackEvent {
  type?: string;
  eventName?: string;
  id?: string;
  data?: Record<string, unknown>;
}

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formReady, setFormReady] = useState(false);

  useEffect(() => {
    // Inject the HubSpot Forms embed script (hs-form-frame approach).
    // The script scans the DOM for elements with class "hs-form-frame" and
    // converts them into the interactive form iframe.
    const SCRIPT_SRC = "https://js-eu1.hsforms.net/forms/embed/147914572.js";
    const existingScript = document.querySelector(`script[src="${SCRIPT_SRC}"]`);

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = SCRIPT_SRC;
      script.async = true;
      document.head.appendChild(script);
    }

    // Listen for HubSpot form events sent from the iframe via postMessage.
    const handleMessage = (event: MessageEvent<HubSpotCallbackEvent>) => {
      if (!event.data || typeof event.data !== "object") return;
      const { type, eventName } = event.data;

      if (type === "hsFormCallback") {
        // Form is ready to display (iframe loaded)
        if (eventName === "onFormReady") {
          setFormReady(true);
        }
        // Form successfully submitted
        if (eventName === "onFormSubmitted") {
          setIsSubmitted(true);
          trackContactFormSubmit();
          if (typeof window !== "undefined") {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({ event: "hs_contact_form_submitted" });
          }
        }
      }
    };

    window.addEventListener("message", handleMessage);

    // Fallback: show form container after 2s even if onFormReady didn't fire
    const fallback = setTimeout(() => setFormReady(true), 2000);

    return () => {
      window.removeEventListener("message", handleMessage);
      clearTimeout(fallback);
    };
  }, []);

  return (
    <>
      <Header />
      <main className="pt-24 relative overflow-hidden">
        <AnimatedBlobs />

        {/* Hero — compact */}
        <section className="relative bg-transparent pt-12 pb-8 md:pt-14 md:pb-10 z-10">
          <div className="max-w-2xl mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-display-sm text-foreground mb-4">
                Get in touch
              </h1>
              <p
                className="text-base text-foreground-secondary max-w-lg mx-auto leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Have a question, need a demo, or want to discuss a custom plan?
                Reach out and we&apos;ll get back to you within 24 hours.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Form + sidebar */}
        <section className="relative z-10 pb-24">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid md:grid-cols-5 gap-8 lg:gap-12 items-start">

              {/* HubSpot Form card — col-span-3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="md:col-span-3"
              >
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="rounded-2xl border border-accent/20 bg-accent/5 p-12 text-center"
                  >
                    <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5">
                      <CheckCircle className="w-7 h-7 text-accent-dark" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Message sent
                    </h3>
                    <p
                      className="text-foreground-secondary text-sm"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Thanks for reaching out. We&apos;ll get back to you within
                      24 hours.
                    </p>
                  </motion.div>
                ) : (
                  /* Card wrapper that visually contains the HubSpot iframe */
                  <div className="rounded-2xl border border-border bg-background shadow-sm overflow-hidden">
                    {/* Loading skeleton — visible until HubSpot iframe fires onFormReady */}
                    {!formReady && (
                      <div className="p-8 space-y-5 animate-pulse">
                        {/* Row 1: two fields */}
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <div className="h-3.5 w-12 bg-border rounded" />
                            <div className="h-10 bg-border/60 rounded-lg" />
                          </div>
                          <div className="space-y-1.5">
                            <div className="h-3.5 w-10 bg-border rounded" />
                            <div className="h-10 bg-border/60 rounded-lg" />
                          </div>
                        </div>
                        {/* Row 2: two fields */}
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <div className="h-3.5 w-20 bg-border rounded" />
                            <div className="h-10 bg-border/60 rounded-lg" />
                          </div>
                          <div className="space-y-1.5">
                            <div className="h-3.5 w-16 bg-border rounded" />
                            <div className="h-10 bg-border/60 rounded-lg" />
                          </div>
                        </div>
                        {/* Row 3: full-width select */}
                        <div className="space-y-1.5">
                          <div className="h-3.5 w-14 bg-border rounded" />
                          <div className="h-10 bg-border/60 rounded-lg" />
                        </div>
                        {/* Row 4: textarea */}
                        <div className="space-y-1.5">
                          <div className="h-3.5 w-16 bg-border rounded" />
                          <div className="h-28 bg-border/60 rounded-lg" />
                        </div>
                        {/* Checkbox + button row */}
                        <div className="flex items-center gap-3">
                          <div className="h-4 w-4 bg-border rounded" />
                          <div className="h-3.5 w-48 bg-border rounded" />
                        </div>
                        <div className="flex justify-end">
                          <div className="h-10 w-28 bg-border/60 rounded-lg" />
                        </div>
                      </div>
                    )}

                    {/*
                     * HubSpot native embed (hs-form-frame).
                     * Portal: 147914572 — Form: 8c4f988d-d40a-4d4f-8a48-a22010d973e0
                     * The script loaded above detects this element and renders
                     * the form iframe inside it automatically.
                     */}
                    <div
                      className={`hs-form-frame transition-opacity duration-300 ${formReady ? "opacity-100" : "opacity-0 absolute pointer-events-none"}`}
                      data-region="eu1"
                      data-form-id="8c4f988d-d40a-4d4f-8a48-a22010d973e0"
                      data-portal-id="147914572"
                    />
                  </div>
                )}
              </motion.div>

              {/* Sidebar — col-span-2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="md:col-span-2 space-y-5 md:pt-0"
              >
                {/* What to expect */}
                <div className="p-5 rounded-xl border border-border bg-background-secondary">
                  <h3
                    className="font-semibold text-foreground text-sm mb-4"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    What happens next?
                  </h3>
                  <ol className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <MessageSquare className="w-3.5 h-3.5 text-secondary" />
                      </div>
                      <div>
                        <p
                          className="text-sm font-medium text-foreground"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          We receive your message
                        </p>
                        <p
                          className="text-xs text-foreground-tertiary mt-0.5 leading-relaxed"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          Routed to the right team based on your subject.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Clock className="w-3.5 h-3.5 text-secondary" />
                      </div>
                      <div>
                        <p
                          className="text-sm font-medium text-foreground"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          We review within 24 hours
                        </p>
                        <p
                          className="text-xs text-foreground-tertiary mt-0.5 leading-relaxed"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          Sales & technical inquiries are typically answered
                          same business day.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Zap className="w-3.5 h-3.5 text-accent-dark" />
                      </div>
                      <div>
                        <p
                          className="text-sm font-medium text-foreground"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          You get a real answer
                        </p>
                        <p
                          className="text-xs text-foreground-tertiary mt-0.5 leading-relaxed"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          No bots, no templates. A human from the Callengo
                          team will reply.
                        </p>
                      </div>
                    </li>
                  </ol>
                </div>

                {/* Ready to start CTA */}
                <div className="relative rounded-xl overflow-hidden gradient-bg p-5">
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                  </div>
                  <div className="relative z-10">
                    <h3 className="font-semibold text-white text-sm mb-2">
                      Ready to start?
                    </h3>
                    <p
                      className="text-white/60 text-xs mb-4 leading-relaxed"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Get started with 15 free minutes. No credit card
                      required.
                    </p>
                    <a
                      href="https://app.callengo.com/auth/signup"
                      onClick={() => trackFreeTrialClick("contact_page")}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-white hover:text-white/80 transition-colors"
                    >
                      Get started free
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
