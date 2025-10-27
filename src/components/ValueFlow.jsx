import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function ValueFlow() {
  return (
    <section className="relative py-12 sm:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-8 sm:mb-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600 text-white font-bold">
            Ask yourself
          </div>
          <p className="mt-4 text-neutral-600 max-w-2xl">
            Make decisions with a simple framework. If the data supports action, take it. If not, improve with AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Column 1 */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="rounded-xl border border-neutral-200 p-5">
              <p className="font-medium text-neutral-900">Did opens and clicks trend up this week?</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-emerald-600 mt-1" />
              <p className="text-neutral-800">Double down on topics and send times that worked.</p>
            </div>
            <div className="rounded-xl border border-neutral-200 p-5">
              <p className="font-medium text-neutral-900">Which subject lines drove the highest CTR?</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-emerald-600 mt-1" />
              <p className="text-neutral-800">Use AI suggestions to iterate with predicted uplift.</p>
            </div>
          </motion.div>

          {/* Column 2 */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <div className="rounded-xl border border-neutral-200 p-5">
              <p className="font-medium text-neutral-900">Are unsubscribes clustered by segment or cohort?</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-emerald-600 mt-1" />
              <p className="text-neutral-800">Adjust targeting and content depth to reduce churn.</p>
            </div>
            <div className="rounded-xl border border-neutral-200 p-5">
              <p className="font-medium text-neutral-900">Which links get the most attention?</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-emerald-600 mt-1" />
              <p className="text-neutral-800">Reorder and promote high-performing CTAs.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
