const bars = [
  { label: "Social", height: "70%", color: "bg-cyan-400" },
  { label: "Email", height: "90%", color: "bg-blue-400" },
  { label: "SEO", height: "55%", color: "bg-emerald-400" },
  { label: "Paid", height: "40%", color: "bg-violet-400" },
  { label: "Referral", height: "75%", color: "bg-amber-300" },
];

export default function BarChartPreview() {
  return (
    <div className="h-44 bg-zinc-950/80 border-b border-zinc-800/60 p-5 flex flex-col">
      <div className="flex items-end justify-between gap-2.5 flex-1 px-1">
        {bars.map((bar) => (
          <div key={bar.label} className="flex-1 flex flex-col items-center h-full justify-end">
            <div
              className={`w-full rounded-sm ${bar.color}`}
              style={{ height: bar.height }}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-between gap-2.5 mt-2.5 px-1">
        {bars.map((bar) => (
          <span key={bar.label} className="flex-1 text-center text-[9px] text-zinc-500 font-medium truncate">
            {bar.label}
          </span>
        ))}
      </div>
    </div>
  );
}
