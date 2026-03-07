const kpis = [
  { score: "87", label: "NPS", dotColor: "bg-emerald-400" },
  { score: "64", label: "Engage", dotColor: "bg-amber-400" },
  { score: "42", label: "Retain", dotColor: "bg-rose-400" },
];

export default function KpiStripPreview() {
  return (
    <div className="h-44 bg-zinc-950 border-b border-zinc-800 p-5 flex flex-col justify-center">
      <div className="grid grid-cols-3 gap-2.5">
        {kpis.map((kpi) => (
          <div
            key={kpi.label}
            className="bg-zinc-900 rounded-lg border border-zinc-800 px-3 py-4 flex flex-col items-center gap-2"
          >
            <span className="text-2xl font-bold text-zinc-200 tabular-nums">
              {kpi.score}
            </span>
            <div className="flex items-center gap-1.5">
              <span className={`w-1.5 h-1.5 rounded-full ${kpi.dotColor}`} />
              <span className="text-[10px] text-zinc-500 uppercase tracking-wider">
                {kpi.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
