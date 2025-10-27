import { AlertTriangle, CheckCircle2 } from "lucide-react";

export default function LeftPanel({ subject, preheader, deliverability }) {
  return (
    <aside className="space-y-4">
      <div className="rounded-xl border border-neutral-200 p-4 bg-white">
        <h3 className="font-semibold mb-3">Subject & Preheader</h3>
        <div className="space-y-2">
          <div>
            <div className="text-xs uppercase text-neutral-500 mb-1">Subject</div>
            <div className="rounded-lg border border-neutral-200 p-3 bg-neutral-50/60 text-sm">{subject}</div>
          </div>
          <div>
            <div className="text-xs uppercase text-neutral-500 mb-1">Preheader</div>
            <div className="rounded-lg border border-neutral-200 p-3 bg-neutral-50/60 text-sm">{preheader}</div>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-neutral-200 p-4 bg-white">
        <h3 className="font-semibold mb-3">Deliverability Risk</h3>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2 text-sm">
            {deliverability.risk_score < 0.25 ? (
              <CheckCircle2 className="text-green-600" size={18} />
            ) : (
              <AlertTriangle className="text-yellow-600" size={18} />
            )}
            <span>
              Risk Score: <span className="font-semibold">{(deliverability.risk_score * 100).toFixed(0)}%</span>
            </span>
          </div>
          <span className={`text-xs px-2 py-1 rounded-full ${
            deliverability.risk_score < 0.25
              ? "bg-green-100 text-green-700"
              : deliverability.risk_score < 0.5
              ? "bg-yellow-100 text-yellow-700"
              : "bg-red-100 text-red-700"
          }`}>
            {deliverability.risk_score < 0.25 ? "Low" : deliverability.risk_score < 0.5 ? "Medium" : "High"}
          </span>
        </div>
        <ul className="list-disc pl-5 text-sm text-neutral-700 space-y-1">
          {deliverability.issues.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
        <div className="mt-3 text-xs text-neutral-500">Fix suggestions</div>
        <ul className="list-disc pl-5 text-sm text-neutral-700 space-y-1 mt-1">
          {deliverability.solutions.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
