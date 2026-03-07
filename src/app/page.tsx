import Link from "next/link";
import { ReactNode } from "react";
import BarChartPreview from "@/components/previews/BarChartPreview";
import KpiStripPreview from "@/components/previews/KpiStripPreview";
import ScoringGridPreview from "@/components/previews/ScoringGridPreview";

const tools: { name: string; description: string; href: string; preview: ReactNode }[] = [
  {
    name: "Marketing Channel ROI Simulator",
    description:
      "Estimate which marketing channels are most likely to produce the highest ROI before allocating budget.",
    href: "/marketing-channel-roi-simulator",
    preview: <BarChartPreview />,
  },
  {
    name: "Client Pulse",
    description:
      "Track client health, engagement signals, and retention risk in a simple dashboard.",
    href: "/client-pulse",
    preview: <KpiStripPreview />,
  },
  {
    name: "Growth Decision Engine",
    description:
      "Evaluate growth strategies using structured decision logic and visual simulations.",
    href: "/growth-decision-engine",
    preview: <ScoringGridPreview />,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[90vh] px-6 sm:px-12 text-center">
        <p className="text-sm sm:text-base font-medium uppercase tracking-[0.2em] text-[var(--accent)] mb-6">
          Agentic-built web tools
        </p>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] max-w-4xl mb-6">
          Decision Tools for Growth, Marketing, and Client&nbsp;Insight
        </h1>
        <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mb-12 leading-relaxed">
          Simple, high-utility tools built to help founders, operators, and
          marketers make better decisions faster.
        </p>
        <a
          href="#tools"
          className="inline-flex items-center gap-2 bg-[var(--accent)] text-[var(--accent-foreground)] font-semibold text-base sm:text-lg px-8 py-4 rounded-full hover:brightness-110 hover:shadow-[0_0_30px_rgba(0,240,255,0.25)] transition-all duration-300"
        >
          Explore Tools
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="mt-0.5"
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
      <section id="tools" className="px-6 sm:px-12 py-24 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900/50 overflow-hidden transition-all duration-300 hover:border-zinc-600 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
            >
              {tool.preview}

              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-[var(--accent)] transition-colors duration-300">
                  {tool.name}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-6 flex-1">
                  {tool.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent)]">
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
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
