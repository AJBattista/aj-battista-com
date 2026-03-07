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

      {/* Tools grid placeholder — Task 3 will populate this */}
      <section id="tools" className="px-6 sm:px-12 py-24 max-w-6xl mx-auto" />
    </main>
  );
}
