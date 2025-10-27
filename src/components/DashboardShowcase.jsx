import { motion } from "framer-motion";
import { LineChart, BarChart3, PieChart, Activity } from "lucide-react";

function KpiCard({ label, value, delta }) {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-4">
      <div className="text-sm text-neutral-500">{label}</div>
      <div className="mt-1 text-2xl font-semibold text-neutral-900">{value}</div>
      {delta && (
        <div className={`mt-1 text-xs font-medium ${delta.startsWith("+") ? "text-emerald-600" : "text-rose-600"}`}>
          {delta} vs last 30d
        </div>
      )}
    </div>
  );
}

function SkeletonChart({ icon: Icon }) {
  return (
    <div className="relative h-48 w-full overflow-hidden rounded-xl border border-neutral-200 bg-gradient-to-b from-neutral-50 to-white">
      <div className="absolute top-3 left-3 inline-flex items-center gap-2 rounded-md bg-white/80 px-2 py-1 text-xs text-neutral-600 border border-neutral-200">
        <Icon className="h-4 w-4" />
        Preview
      </div>
      <motion.div
        className="absolute inset-0"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        style={{ background: "linear-gradient(90deg, transparent, rgba(0,0,0,0.03), transparent)" }}
      />
      <div className="absolute bottom-3 left-3 right-3 h-2 rounded bg-neutral-200" />
      <div className="absolute bottom-6 left-3 right-1 grid grid-cols-12 gap-1">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="bg-rose-200/60 rounded" style={{ height: `${Math.random() * 70 + 10}%` }} />
        ))}
      </div>
    </div>
  );
}

export default function DashboardShowcase() {
  return (
    <section className="py-14 sm:py-20 bg-neutral-50" id="get-started">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">YouTube Studio-style dashboard for newsletters</h2>
            <p className="mt-2 text-neutral-600 max-w-2xl">
              View KPIs, trends, segments and heatmaps. Get AI summaries, pros/cons, and content suggestions that boost engagement.
            </p>
          </div>
          <a href="#login" className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 text-white px-4 py-2 text-sm font-semibold hover:bg-black">
            Try the live demo
          </a>
        </div>

        {/* KPIs */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          <KpiCard label="Total Subs" value="42,310" delta="+4.2%" />
          <KpiCard label="Active Subs" value="31,984" delta="+3.1%" />
          <KpiCard label="Campaigns" value="128" delta="+1.8%" />
          <KpiCard label="Avg Open" value="46.3%" delta="+2.0%" />
          <KpiCard label="Avg CTR" value="9.7%" delta="+0.8%" />
          <KpiCard label="Rev/Sub" value="$3.21" delta="+5.4%" />
        </div>

        {/* Charts */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <SkeletonChart icon={LineChart} />
          <SkeletonChart icon={BarChart3} />
          <SkeletonChart icon={PieChart} />
          <SkeletonChart icon={Activity} />
        </div>

        {/* AI summary */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-xl border border-neutral-200 bg-white p-5">
            <h3 className="text-neutral-900 font-semibold">AI Summary</h3>
            <p className="mt-2 text-neutral-700">
              Engagement rose steadily over the last 30 days driven by product deep-dives and trend roundups. Best send time shifted to
              Tuesday 9am in US/EU segments. Consider pruning inactive subscribers from older cohorts to raise overall open rate.
            </p>
          </div>
          <div className="rounded-xl border border-neutral-200 bg-white p-5">
            <h3 className="text-neutral-900 font-semibold">Pros / Cons</h3>
            <ul className="mt-2 space-y-2 text-neutral-700 list-disc list-inside">
              <li>Strong CTR from comparison guides and benchmarks</li>
              <li>Thumbnail prompts with faces and bold keywords increased opens</li>
              <li>Churn risk elevated in price-sensitive segment</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
