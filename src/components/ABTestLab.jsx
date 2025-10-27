import { PlayCircle } from "lucide-react";

export default function ABTestLab({ plan, suggestions }) {
  return (
    <section className="rounded-xl border border-neutral-200 p-4 bg-white">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold">Subject A/B Test Lab</h3>
        <button className="inline-flex items-center gap-2 rounded-md bg-neutral-900 text-white px-3 py-2 text-sm font-medium hover:bg-black">
          <PlayCircle size={16} /> Start A/B Test
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2 space-y-3">
          {suggestions.slice(0, 4).map((s) => (
            <div key={s.text} className="rounded-lg border border-neutral-200 p-3">
              <div className="text-sm font-medium">{s.text}</div>
              <div className="text-xs text-neutral-500">Predicted Open Increase: {s.predicted_open_increase}</div>
            </div>
          ))}
        </div>
        <div className="space-y-2">
          <div className="text-xs text-neutral-500">Plan</div>
          <div className="rounded-lg border border-neutral-200 p-3 text-sm">
            <div><span className="text-neutral-500">Type:</span> {plan.type}</div>
            <div><span className="text-neutral-500">Variants:</span> {plan.variants.join(" | ")}</div>
            <div><span className="text-neutral-500">Sample Each:</span> {plan.sample_size_each}</div>
            <div><span className="text-neutral-500">Duration:</span> {plan.duration}</div>
            <div><span className="text-neutral-500">Success Metric:</span> {plan.success_metric}</div>
            <div className="font-medium text-green-700 mt-1">Expected Gain {plan.expected_gain}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
