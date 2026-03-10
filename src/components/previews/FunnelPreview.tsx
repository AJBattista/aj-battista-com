const stages = [
  { label: "Traffic", width: "100%", color: "bg-chart-1" },
  { label: "Leads", width: "62%", color: "bg-chart-2" },
  { label: "Qualified", width: "35%", color: "bg-chart-3" },
  { label: "Customers", width: "18%", color: "bg-chart-4" },
];

export default function FunnelPreview() {
  return (
    <div className="h-44 bg-surface-chart border-b border-border p-5 flex flex-col justify-center gap-1.5">
      {stages.map((stage) => (
        <div key={stage.label} className="flex items-center gap-2.5">
          <span className="text-[9px] text-text-muted font-medium w-[58px] text-right shrink-0 uppercase tracking-wider truncate">
            {stage.label}
          </span>
          <div
            className={`h-6 rounded ${stage.color} opacity-80`}
            style={{ width: stage.width }}
          />
        </div>
      ))}
    </div>
  );
}
