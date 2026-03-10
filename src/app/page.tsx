const modules = [
  {
    id: "BV-01",
    category: "Diagnostic Module",
    name: "Funnel Gap Analyzer",
    description:
      "Identify where your funnel is losing conversions and estimate the revenue impact of each stage.",
    subdomain: "funnel.brandvisor.app",
    href: "https://funnel.brandvisor.app",
  },
  {
    id: "BV-02",
    category: "Forecast Module",
    name: "ROI Simulator",
    description:
      "Estimate which marketing channels are most likely to produce the highest ROI before allocating budget.",
    subdomain: "simulator.brandvisor.app",
    href: "https://simulator.brandvisor.app",
  },
  {
    id: "BV-03",
    category: "Planning Module",
    name: "Content Strategy Planner",
    description:
      "Design a balanced content strategy across channels and formats using industry benchmarks and performance signals.",
    subdomain: "planner.brandvisor.app",
    href: "https://planner.brandvisor.app",
  },
  {
    id: "BV-04",
    category: "Economics Module",
    name: "CAC Payback Calculator",
    description:
      "Calculate customer acquisition cost payback periods and evaluate unit economics across channels.",
    subdomain: "payback.brandvisor.app",
    href: "https://payback.brandvisor.app",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="px-6 sm:px-12 pt-16 pb-12 max-w-5xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-highlight mb-4">
          Brandvisor
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-foreground mb-4">
          Decision Modules
        </h1>
        <p className="text-base sm:text-lg text-text-body max-w-2xl leading-relaxed">
          Diagnostic, forecasting, and planning tools for marketing teams.
        </p>
      </header>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6 sm:px-12">
        <hr className="border-divider" />
      </div>

      {/* Module Cards */}
      <section className="px-6 sm:px-12 py-10 max-w-5xl mx-auto">
        <div className="flex flex-col gap-8 sm:gap-10">
          {modules.map((mod) => (
            <a
              key={mod.id}
              href={mod.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-[var(--card-radius)] border border-border bg-surface-card p-8 transition-colors duration-200 hover:border-text-muted hover:-translate-y-0.5"
              style={{ boxShadow: "var(--card-shadow)" }}
            >
              {/* Badge row */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-[11px] font-mono font-semibold tracking-wider text-text-muted border border-border rounded px-2 py-0.5">
                  {mod.id}
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-text-muted">
                  {mod.category}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-3 group-hover:text-highlight transition-colors duration-200">
                {mod.name}
              </h2>

              {/* Description */}
              <p className="text-sm sm:text-base text-text-body leading-relaxed mb-6 max-w-2xl">
                {mod.description}
              </p>

              {/* Footer row */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-text-muted tracking-wide">
                  {mod.subdomain}
                </span>
                <span className="inline-flex items-center gap-2 bg-accent text-accent-foreground text-xs sm:text-sm font-semibold px-3 py-1.5 sm:px-5 sm:py-2 rounded-[var(--card-radius)] group-hover:bg-accent-hover transition-colors duration-200 whitespace-nowrap shrink-0 w-auto">
                  Execute Module
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12 sm:mt-16 pb-8 text-center">
        <p className="text-xs font-light tracking-wider text-text-muted">
          Aloysius &ldquo;AJ&rdquo; Battista &bull; Marketing &bull; Tampa, FL &bull;{" "}
          <a
            href="https://www.linkedin.com/in/aj-battista"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-highlight transition-colors duration-200"
          >
            linkedin.com/in/aj-battista
          </a>
        </p>
      </footer>
    </main>
  );
}
