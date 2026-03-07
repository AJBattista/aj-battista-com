const bars = [
  { label: "Social", height: "70%", color: "bg-cyan-400" },
  { label: "Email", height: "90%", color: "bg-violet-400" },
  { label: "SEO", height: "55%", color: "bg-emerald-400" },
  { label: "Paid", height: "40%", color: "bg-amber-400" },
  { label: "Referral", height: "75%", color: "bg-rose-400" },
];

export default function BarChartPreview() {
  return (
    <div className="h-44 bg-zinc-950 border-b border-zinc-800 p-5 flex flex-col">
      <div className="flex items-end justify-between gap-3 flex-1 px-1">
        {bars.map((bar) => (
          <div key={bar.label} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
            <div
              className={`w-full rounded-sm ${bar.color} opacity-80`}
              style={{ height: bar.height }}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-between gap-3 mt-2 px-1">
        {bars.map((bar) => (
          <span key={bar.label} className="flex-1 text-center text-[10px] text-zinc-500 truncate">
            {bar.label}
          </span>
        ))}
      </div>
    </div>
  );
}
