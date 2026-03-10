import { ReactNode } from "react";
import BarChartPreview from "@/components/previews/BarChartPreview";
import FunnelPreview from "@/components/previews/FunnelPreview";
import HeatmapPreview from "@/components/previews/HeatmapPreview";

const tools: { name: string; description: string; href: string; preview: ReactNode }[] = [
  {
    name: "Marketing Channel ROI Simulator",
    description:
      "Estimate which marketing channels are most likely to produce the highest ROI before allocating budget.",
    href: "https://simulator.aj-battista.com",
    preview: <BarChartPreview />,
  },
  {
    name: "Funnel Gap Analyzer",
    description:
      "Identify where your funnel is losing conversions and estimate the revenue impact of each stage.",
    href: "https://funnel.aj-battista.com",
    preview: <FunnelPreview />,
  },
  {
    name: "Content Strategy Planner",
    description:
      "Design a balanced content strategy across channels and formats using industry benchmarks and performance signals.",
    href: "https://planner.aj-battista.com",
    preview: <HeatmapPreview />,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[92vh] px-6 sm:px-12 text-center overflow-hidden">
        {/* Background gradient orbs */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/[0.06] blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-highlight/[0.04] blur-[100px]" />
        </div>

        <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-highlight mb-8">
          Data-Driven Decision Tools
        </p>
        <h1 className="text-4xl sm:text-6xl lg:text-[4.5rem] font-extrabold tracking-tight leading-[1.06] max-w-4xl mb-8 bg-gradient-to-b from-foreground to-text-muted bg-clip-text text-transparent">
          Make Better Marketing Decisions&nbsp;Faster
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-text-body max-w-2xl mb-14 leading-relaxed">
          Practical tools built to analyze marketing performance, identify
          conversion gaps, and plan effective content strategies.
        </p>
        <a
          href="#tools"
          className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold text-sm sm:text-base px-8 py-3.5 rounded-full hover:bg-accent-hover transition-all duration-300"
        >
          Explore Tools
          <svg
            width="15"
            height="15"
            viewBox="0 0 16 16"
            fill="none"
            className="mt-px"
          >
            <path
              d="M8 3L8 13M8 13L13 8M8 13L3 8"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </section>

      {/* Featured Tools Grid */}
      <section id="tools" className="scroll-mt-8 px-6 sm:px-12 py-28 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {tools.map((tool) => (
            <a
              key={tool.href}
              href={tool.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-[var(--card-radius)] border border-border bg-surface-card overflow-hidden transition-all duration-300 ease-out hover:border-text-muted hover:-translate-y-1.5"
              style={{ boxShadow: "var(--card-shadow)" }}
            >
              {tool.preview}

              <div className="flex flex-col flex-1 px-6 py-5">
                <h3 className="text-base font-bold mb-2 tracking-tight text-foreground group-hover:text-highlight transition-colors duration-300">
                  {tool.name}
                </h3>
                <p className="text-sm text-text-body leading-relaxed mb-5 flex-1">
                  {tool.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-highlight opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  Open Tool
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path
                      d="M3 8H13M13 8L8 3M13 8L8 13"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 sm:px-12 py-10 text-center border-t border-divider">
        <p className="text-xs text-text-muted tracking-wide">
          Aloysius &lsquo;AJ&rsquo; Battista &bull; Marketing &bull; Tampa, FL
          &bull;{" "}
          <a
            href="https://www.linkedin.com/in/aj-battista"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-body hover:text-highlight transition-colors duration-200"
          >
            linkedin.com/in/aj-battista
          </a>
        </p>
      </footer>
    </main>
  );
}
