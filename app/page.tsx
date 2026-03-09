import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import AnimatedBlobs from "./components/AnimatedBlobs";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative overflow-hidden">
        <AnimatedBlobs />
        <div className="relative z-[1]">
          <Hero />
          <Features />
          <HowItWorks />
          <Testimonials />
          <FAQ />
          <CTA />
        </div>
      </main>
      <Footer />
    </>
  );
}
