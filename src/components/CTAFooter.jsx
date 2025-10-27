import { motion } from "framer-motion";

export default function CTAFooter() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="rounded-2xl bg-blue-700 text-white p-8 sm:p-10 text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-extrabold">
            Don't guess. Analyze, iterate, and publish content your audience loves.
          </h3>
          <p className="mt-3 text-blue-100">
            Consolidate analytics, AI insights, and content suggestions in one studio.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#get-started" className="inline-flex items-center justify-center rounded-lg bg-white text-blue-700 px-5 py-3 font-semibold hover:bg-blue-50">
              Get Started
            </a>
            <a href="#login" className="inline-flex items-center justify-center rounded-lg border border-white/30 px-5 py-3 font-semibold text-white hover:bg-white/10">
              View Pricing
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
