import { Rocket, Target, Download } from "lucide-react";
import { motion } from "framer-motion";

export default function DashboardHeader({ name, date, score }) {
  const pct = Math.max(0, Math.min(100, score));
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const progress = (pct / 100) * circumference;

  return (
    <div className="w-full bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-neutral-900 text-white flex items-center justify-center">
            <Rocket size={18} />
          </div>
          <div>
            <h1 className="text-xl font-semibold tracking-tight">{name}</h1>
            <p className="text-xs text-neutral-500">{new Date(date).toLocaleString()}</p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="relative h-16 w-16">
              <svg className="h-16 w-16 -rotate-90" viewBox="0 0 72 72">
                <circle cx="36" cy="36" r={radius} stroke="#e5e7eb" strokeWidth="8" fill="none" />
                <motion.circle
                  cx="36"
                  cy="36"
                  r={radius}
                  stroke={pct >= 85 ? "#16a34a" : pct >= 70 ? "#f59e0b" : "#ef4444"}
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ strokeDasharray: 0 }}
                  animate={{ strokeDasharray: progress }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
              </svg>
              <div className="absolute inset-0 grid place-items-center text-sm font-semibold">
                {pct}
              </div>
            </div>
            <div className="text-sm">
              <div className="font-semibold">Overall Score</div>
              <div className="text-neutral-500">Higher is better</div>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <button className="inline-flex items-center gap-2 rounded-md bg-neutral-900 text-white px-3 py-2 text-sm font-medium hover:bg-black">
              <Target size={16} /> Run AI Optimization
            </button>
            <button className="inline-flex items-center gap-2 rounded-md border border-neutral-300 px-3 py-2 text-sm font-medium hover:bg-neutral-50">
              <Download size={16} /> Export PDF Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
