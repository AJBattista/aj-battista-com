const rows = [
  ["bg-emerald-500/70", "bg-amber-500/60", "bg-emerald-500/70"],
  ["bg-amber-500/60", "bg-emerald-500/70", "bg-zinc-600/50"],
  ["bg-zinc-600/50", "bg-amber-500/60", "bg-emerald-500/70"],
];

const colLabels = ["Speed", "Cost", "Impact"];
const rowLabels = ["Organic", "Paid", "Partner"];

export default function ScoringGridPreview() {
  return (
    <div className="h-44 bg-zinc-950 border-b border-zinc-800 p-5 flex flex-col justify-center">
      <div className="space-y-1.5">
        {/* Column headers */}
        <div className="grid grid-cols-[48px_1fr_1fr_1fr] gap-1.5">
          <div />
          {colLabels.map((col) => (
            <span key={col} className="text-[10px] text-zinc-500 text-center uppercase tracking-wider">
              {col}
            </span>
          ))}
        </div>
        {/* Grid rows */}
        {rows.map((row, i) => (
          <div key={i} className="grid grid-cols-[48px_1fr_1fr_1fr] gap-1.5 items-center">
            <span className="text-[10px] text-zinc-500 text-right pr-1 uppercase tracking-wider truncate">
              {rowLabels[i]}
            </span>
            {row.map((cell, j) => (
              <div
                key={j}
                className={`h-8 rounded ${cell}`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
