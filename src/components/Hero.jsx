import { motion } from "framer-motion";
import { Rocket, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-rose-100 via-white to-white" />

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-14 sm:pt-28 sm:pb-20">
        {/* Branding tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full bg-emerald-50 text-emerald-700 px-3 py-1 mb-6 border border-emerald-200"
        >
          <Sparkles className="h-4 w-4" />
          <span className="text-xs font-semibold tracking-wide">NEWSLAB.AI®</span>
        </motion.div>

        {/* Primary headline */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="font-black tracking-tight leading-none text-[16vw] sm:text-[11vw] md:text-[9rem] text-rose-600 uppercase"
          style={{ fontFamily: "Bebas Neue, Oswald, Impact, sans-serif" }}
        >
          ANALYZE
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-3 text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-neutral-800 uppercase"
        >
          Turn your newsletter data into growth with AI titles, descriptions and thumbnails.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a
            href="#get-started"
            className="inline-flex items-center gap-2 rounded-lg bg-rose-600 text-white px-5 py-3 text-sm font-semibold shadow-sm hover:bg-rose-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
          >
            <Rocket className="h-4 w-4" />
            Sign up free
          </a>
          <a
            href="#login"
            className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 bg-white text-neutral-900 px-5 py-3 text-sm font-semibold hover:bg-neutral-50"
          >
            Login
          </a>
          <span className="text-sm text-neutral-500">No credit card required</span>
        </motion.div>
      </div>
    </section>
  );
}
