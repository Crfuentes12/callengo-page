import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <section className="section min-h-[60vh] flex items-center">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="max-w-xl mx-auto">
              <h1 className="text-8xl font-bold text-slate-200 mb-4">404</h1>
              <h2 className="text-display-sm mb-6">Page not found</h2>
              <p className="text-xl text-slate-600 mb-10">
                The page you're looking for doesn't exist or has been moved.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white bg-slate-900 rounded-full transition-all hover:bg-slate-800"
                >
                  Go Home
                </Link>
                <Link
                  href="/help"
                  className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold bg-slate-100 text-slate-900 rounded-full transition-all hover:bg-slate-200"
                >
                  Get Help
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
