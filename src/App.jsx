import Hero from "./components/Hero";
import ValueFlow from "./components/ValueFlow";
import DashboardShowcase from "./components/DashboardShowcase";
import CTAFooter from "./components/CTAFooter";

function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#" className="font-bold tracking-tight text-neutral-900">Newslab.ai</a>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-neutral-700">
          <a href="#get-started" className="hover:text-neutral-900">Product</a>
          <a href="#" className="hover:text-neutral-900">Pricing</a>
          <a href="#" className="hover:text-neutral-900">Docs</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#login" className="text-sm font-medium text-neutral-700 hover:text-neutral-900">Login</a>
          <a href="#get-started" className="inline-flex items-center rounded-lg bg-neutral-900 text-white px-3 py-1.5 text-sm font-semibold hover:bg-black">Sign Up</a>
        </div>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Header />
      <main>
        <Hero />
        <DashboardShowcase />
        <ValueFlow />
        <CTAFooter />
      </main>
      <footer className="border-t border-neutral-200 py-8 text-center text-sm text-neutral-600">
        © {new Date().getFullYear()} Newslab.ai — Built for modern newsletter teams.
      </footer>
    </div>
  );
}
