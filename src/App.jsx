import Hero from "./components/Hero";
import DashboardShowcase from "./components/DashboardShowcase";
import ValueFlow from "./components/ValueFlow";
import CTAFooter from "./components/CTAFooter";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Hero with Spline animation */}
      <Hero />

      {/* Product value explanation */}
      <ValueFlow />

      {/* Dashboard preview section */}
      <div id="demo">
        <DashboardShowcase />
      </div>

      {/* CTA footer */}
      <CTAFooter />

      <footer className="border-t border-neutral-200 py-8 text-center text-sm text-neutral-600">
        © {new Date().getFullYear()} NewsletterIQ — AI analytics for newsletters.
      </footer>
    </div>
  );
}
