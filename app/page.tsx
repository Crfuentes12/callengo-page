import type { Metadata } from "next";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Callengo - AI-Powered Phone Agents for Business",
  description:
    "Callengo automates outbound phone calls with AI voice agents. Confirm appointments, validate CRM data, and qualify leads at scale. 16+ integrations, setup in minutes. Start free.",
  keywords: [
    "AI phone agents",
    "automated phone calls",
    "appointment confirmation AI",
    "data validation automation",
    "lead qualification AI",
    "AI voice agents",
    "CRM automation",
    "reduce no-shows",
    "outbound calling automation",
    "sales automation",
    "business phone automation",
    "AI calling software",
  ],
  alternates: {
    canonical: "https://callengo.com",
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
