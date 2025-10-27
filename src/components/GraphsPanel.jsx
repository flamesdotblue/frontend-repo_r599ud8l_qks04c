import { LineChart, BarChart3 } from "lucide-react";

function TrendCard({ title, icon: Icon, color, data, valueKey, labelKey }) {
  return (
    <div className="rounded-xl border border-neutral-200 p-4 bg-white">
      <div className="flex items-center justify-between mb-3">
        <h4 className="font-semibold">{title}</h4>
        <Icon className={color} size={18} />
      </div>
      <div className="h-28 flex items-end gap-2">
        {data.map((d) => (
          <div key={d[labelKey]} className="flex-1">
            <div
              className="w-full bg-gradient-to-t from-neutral-200 to-neutral-100 rounded"
              style={{ height: `${Math.max(8, d[valueKey] * 220)}px` }}
              title={`${d[labelKey]}: ${(d[valueKey] * 100).toFixed(1)}%`}
            />
          </div>
        ))}
      </div>
      <div className="mt-2 flex items-center justify-between text-xs text-neutral-500">
        <span>{data[0][labelKey]}</span>
        <span>{data[data.length - 1][labelKey]}</span>
      </div>
    </div>
  );
}

export default function GraphsPanel({ graphs, competitors }) {
  const competitorAvgOpen =
    competitors.reduce((acc, c) => acc + c.open_rate, 0) / competitors.length;
  const latestOpen = graphs.open_rate_trend[graphs.open_rate_trend.length - 1].open_rate;
  const openVsComp = ((latestOpen - competitorAvgOpen) * 100).toFixed(1);

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <TrendCard
        title="Open Rate Trend"
        icon={LineChart}
        color="text-neutral-700"
        data={graphs.open_rate_trend}
        valueKey="open_rate"
        labelKey="date"
      />
      <TrendCard
        title="Click Rate Trend"
        icon={BarChart3}
        color="text-neutral-700"
        data={graphs.click_rate_trend}
        valueKey="click_rate"
        labelKey="date"
      />
      <TrendCard
        title="Unsubscribe Rate"
        icon={BarChart3}
        color="text-neutral-700"
        data={graphs.unsubscribe_rate_trend}
        valueKey="rate"
        labelKey="date"
      />

      <div className="md:col-span-3 rounded-xl border border-neutral-200 p-4 bg-white">
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-semibold">Competitor Comparison</h4>
          <div className={`text-sm font-medium ${openVsComp >= 0 ? "text-green-600" : "text-red-600"}`}>
            {openVsComp >= 0 ? "+" : ""}{openVsComp}% vs competitor avg
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <div className="text-xs text-neutral-500">Your Avg Open</div>
            <div className="text-2xl font-semibold">{(latestOpen * 100).toFixed(1)}%</div>
          </div>
          <div>
            <div className="text-xs text-neutral-500">Competitor Avg Open</div>
            <div className="text-2xl font-semibold">{(competitorAvgOpen * 100).toFixed(1)}%</div>
          </div>
          <div className="flex items-end">
            <div className="w-full h-16 grid grid-cols-2 gap-2 items-end">
              <div className="h-full bg-green-200 rounded" style={{ height: `${Math.max(8, latestOpen * 160)}px` }} />
              <div className="h-full bg-neutral-200 rounded" style={{ height: `${Math.max(8, competitorAvgOpen * 160)}px` }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
