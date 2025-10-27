import { motion } from "framer-motion";
import { Rocket, Sparkles } from "lucide-react";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] sm:min-h-[90vh] bg-white overflow-hidden">
      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Soft gradient overlay to enhance contrast; does not block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/20 to-white/80" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 flex flex-col items-center text-center pt-24 sm:pt-32">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full bg-emerald-50 text-emerald-700 px-3 py-1 mb-6 border border-emerald-200"
        >
          <Sparkles className="h-4 w-4" />
          <span className="text-xs font-semibold tracking-wide">NEWSLAB.AI®</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="font-black tracking-tight leading-[0.95] text-4xl sm:text-6xl md:text-7xl text-neutral-900"
          style={{ fontFamily: "Inter, system-ui, sans-serif" }}
        >
          AI-powered Newsletter Analytics with Futuristic Motion
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 text-base sm:text-lg md:text-xl text-neutral-700 max-w-2xl"
        >
          Track opens, clicks, and churn. Get instant insights, recommendations, and launch A/B tests—powered by an AI engine.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#get-started"
            className="inline-flex items-center gap-2 rounded-lg bg-rose-600 text-white px-5 py-3 text-sm font-semibold shadow-sm hover:bg-rose-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
          >
            <Rocket className="h-4 w-4" />
            Start Free
          </a>
          <a
            href="#demo"
            className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 bg-white text-neutral-900 px-5 py-3 text-sm font-semibold hover:bg-neutral-50"
          >
            View Demo
          </a>
        </motion.div>

        <div className="h-24" />
      </div>
    </section>
  );
}
