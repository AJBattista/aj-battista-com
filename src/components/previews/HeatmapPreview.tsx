const rowLabels = ["UGC", "Educational", "Thought Lead.", "Product Demo"];
const colLabels = ["TikTok", "Instagram", "YouTube", "LinkedIn"];

const cells = [
  ["bg-chart-1", "bg-chart-1", "bg-chart-2", "bg-chart-3"],
  ["bg-chart-2", "bg-chart-1", "bg-chart-1", "bg-chart-1"],
  ["bg-chart-3", "bg-chart-2", "bg-chart-2", "bg-chart-1"],
  ["bg-chart-2", "bg-chart-1", "bg-chart-1", "bg-chart-2"],
];

export default function HeatmapPreview() {
  return (
    <div className="h-44 bg-surface-chart border-b border-border p-5 flex flex-col justify-center">
      <div className="space-y-1.5">
        <div className="grid grid-cols-[68px_1fr_1fr_1fr_1fr] gap-1.5">
          <div />
          {colLabels.map((col) => (
            <span key={col} className="text-[9px] text-text-muted font-medium text-center uppercase tracking-wider">
              {col}
            </span>
          ))}
        </div>
        {cells.map((row, i) => (
          <div key={i} className="grid grid-cols-[68px_1fr_1fr_1fr_1fr] gap-1.5 items-center">
            <span className="text-[9px] text-text-muted font-medium text-right pr-0.5 uppercase tracking-wider truncate">
              {rowLabels[i]}
            </span>
            {row.map((cell, j) => (
              <div
                key={j}
                className={`h-6 rounded ${cell}`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
