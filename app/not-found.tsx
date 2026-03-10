import Link from "next/link";
import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {
  Home,
  HelpCircle,
  BookOpen,
  Phone,
  ArrowRight,
  Search,
  Bot,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The page you are looking for does not exist or has been moved. Explore Callengo AI phone agents, help center, documentation, or contact us.",
  robots: { index: false, follow: true },
};

const quickLinks = [
  {
    href: "/",
    icon: Home,
    label: "Homepage",
    description: "Back to the main page",
    color: "bg-electric/10 text-electric",
  },
  {
    href: "/help",
    icon: HelpCircle,
    label: "Help Center",
    description: "Find answers to common questions",
    color: "bg-accent/10 text-accent-dark",
  },
  {
    href: "/docs",
    icon: BookOpen,
    label: "Documentation",
    description: "Setup guides and API reference",
    color: "bg-purple-100 text-purple-700",
  },
  {
    href: "/contact",
    icon: Phone,
    label: "Contact Us",
    description: "Talk to our team directly",
    color: "bg-amber-100 text-amber-700",
  },
];

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="pt-24 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[10%] left-[-5%] w-[40%] h-[50%] bg-gradient-to-br from-electric/8 via-electric/4 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[45%] bg-gradient-to-br from-accent/6 via-accent/3 to-transparent rounded-full blur-3xl" />
        </div>

        <section className="section min-h-[75vh] flex items-center relative z-10">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-3xl mx-auto text-center mb-16">
              {/* Animated 404 badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric/10 border border-electric/20 mb-8">
                <Bot className="w-4 h-4 text-electric" />
                <span
                  className="text-sm font-medium text-electric"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Error 404
                </span>
              </div>

              {/* Big 404 */}
              <h1
                className="text-[10rem] sm:text-[14rem] font-extrabold leading-none tracking-tighter bg-gradient-to-br from-electric via-deep-indigo to-accent bg-clip-text text-transparent select-none mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                404
              </h1>

              <h2
                className="text-display-sm mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Page not found
              </h2>

              <p
                className="text-lg text-foreground-secondary max-w-xl mx-auto mb-10 leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                The page you&apos;re looking for doesn&apos;t exist or has been
                moved. Our AI agents are great at making calls, but even they
                can&apos;t find this page.
              </p>

              {/* Search suggestion */}
              <div className="flex items-center justify-center gap-3 mb-12">
                <Link
                  href="/"
                  className="btn btn-primary px-8 py-4 rounded-xl text-sm font-semibold"
                >
                  <Home className="w-4 h-4" />
                  Go to Homepage
                </Link>
                <Link
                  href="/help"
                  className="btn btn-secondary px-8 py-4 rounded-xl text-sm font-semibold"
                >
                  <Search className="w-4 h-4" />
                  Search Help
                </Link>
              </div>
            </div>

            {/* Quick link cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {quickLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group bg-white border border-border rounded-xl p-5 hover:shadow-lg hover:border-electric/30 transition-all duration-200"
                  >
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${link.color}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3
                      className="text-sm font-semibold text-foreground mb-1"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {link.label}
                    </h3>
                    <p
                      className="text-xs text-foreground-secondary"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {link.description}
                    </p>
                    <div className="mt-3 flex items-center gap-1 text-xs font-medium text-electric opacity-0 group-hover:opacity-100 transition-opacity">
                      Visit
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Helpful info */}
            <div className="text-center mt-12">
              <p
                className="text-sm text-foreground-tertiary"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Think this is a mistake?{" "}
                <Link
                  href="/contact"
                  className="text-electric hover:underline font-medium"
                >
                  Let us know
                </Link>{" "}
                and we&apos;ll fix it.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
