const stages = [
  { label: "Traffic", width: "100%", color: "from-emerald-500 to-emerald-400" },
  { label: "Leads", width: "62%", color: "from-emerald-500 to-yellow-400" },
  { label: "Qualified", width: "35%", color: "from-yellow-400 to-amber-500" },
  { label: "Customers", width: "18%", color: "from-red-400 to-rose-500" },
];

export default function FunnelPreview() {
  return (
    <div className="h-44 bg-zinc-950/80 border-b border-zinc-800/60 p-5 flex flex-col justify-center gap-1.5">
      {stages.map((stage) => (
        <div key={stage.label} className="flex items-center gap-2.5">
          <span className="text-[9px] text-zinc-500 font-medium w-[58px] text-right shrink-0 uppercase tracking-wider truncate">
            {stage.label}
          </span>
          <div
            className={`h-6 rounded bg-gradient-to-r ${stage.color} opacity-80`}
            style={{ width: stage.width }}
          />
        </div>
      ))}
    </div>
  );
}
