# TASKS.md — aj-battista.com Homepage

6 tasks. Each task = one Cursor Agent session. Feed them one at a time.

This is an existing Next.js project. Do not scaffold a new project.

---

## Task 1: Project Review and Cleanup
Read all existing files to understand the current project structure. Report back what exists: pages, components, routes, layout files, and any old tool code (Hook Grader, etc.). Remove any unused pages, components, or routes that are not part of the new homepage plan. Keep the project configuration (package.json, tailwind config, tsconfig, next.config, vercel.json) intact. Ensure SPEC.md and TASKS.md are not modified. Run the dev server and confirm the project still builds and runs. Commit as "Clean up old project files."

**Scope:** Audit and cleanup only. Do not build any new UI.

---

## Task 2: Homepage Layout and Hero Section
Replace the content of `app/page.tsx` with the new homepage layout. Build the Hero Section: eyebrow label ("Agentic-built web tools"), title ("Decision Tools for Growth, Marketing, and Client Insight"), subtitle ("Simple, high-utility tools built to help founders, operators, and marketers make better decisions faster"), and a primary CTA button ("Explore Tools") that smooth-scrolls to the tools grid section. Use strong typography hierarchy and generous spacing. The hero should feel bold and modern. Confirm it renders on localhost. Commit.

**Scope:** Hero section and page skeleton only. No tool cards, no footer.

---

## Task 3: Featured Tools Grid with Placeholder Cards
Build three tool cards in a responsive grid below the hero (3 columns on desktop, stacked on mobile). Each card contains: the tool name, short description from the spec, and a button linking to the tool's route (/marketing-channel-roi-simulator, /client-pulse, /growth-decision-engine). Leave space at the top of each card for the dashboard preview (Task 4 will fill this). Cards should have hover effects, subtle shadows or borders, and feel clickable. Add an `id="tools"` anchor on the grid section so the hero CTA scrolls to it. Wire into `app/page.tsx` below the hero. Confirm all three cards render on localhost. Commit.

**Scope:** Tool card grid and routing links only. No dashboard previews yet.

---

## Task 4: Dashboard Placeholder Previews
Add a miniature fake SaaS dashboard preview to the top of each tool card using only Tailwind-styled HTML/JSX (no images, no real data). These are decorative illustrations:
- **Marketing Channel ROI Simulator** — fake bar chart with 4–5 bars of varying height and channel labels beneath (Social, Email, SEO, Paid, Referral). Use colored div blocks for bars.
- **Client Pulse** — fake KPI strip with 3 mini stat cards (score number, status dot colored green/amber/red, label text). Looks like a miniature dashboard.
- **Growth Decision Engine** — fake scoring grid with 3 rows and 3 columns of colored cells (green/amber/gray) resembling a decision matrix.
Each preview should be compact (roughly 160–200px tall), have a slightly darker or inset background to look like a product screenshot, and include a subtle rounded border. Update all three cards in the tools grid. Confirm they render on localhost. Commit.

**Scope:** Dashboard preview components only. No layout changes, no new sections.

---

## Task 5: About Strip and Footer
Add the About Strip below the tools grid: centered text reading "Built with agentic development workflows using Next.js, TypeScript, Tailwind CSS, and AI-assisted engineering." Subtle styling, muted color, appropriate spacing above and below. Add the Footer at the bottom of the page: centered text "Aloysius 'AJ' Battista • Marketing • Tampa, FL •" followed by a clickable link to linkedin.com/in/AJ-battista that opens in a new tab. Footer uses smaller text, muted color, and has padding. Wire both into `app/page.tsx` below the tools grid. Confirm they render on localhost. Commit.

**Scope:** About strip and footer only. No other changes.

---

## Task 6: UI Polish and Metadata
Make the entire homepage look professional and visually impressive. Apply a cohesive dark or muted theme consistent across hero, cards, about strip, and footer. Refine typography: distinctive heading font or strong weight hierarchy, clean body text. Ensure hover transitions on cards are smooth. Verify spacing is generous and consistent. Add subtle background texture or gradient to the hero if it improves the design. Ensure full responsiveness — test the grid stacking, hero text sizing, and footer on narrow viewports. Update page metadata: title "AJ Battista — Decision Tools for Growth, Marketing, and Client Insight", description matching the spec. Do not change any routing or link logic. Run npm run build and confirm zero errors. Commit.

**Scope:** Visual polish and metadata only. No logic changes, no new features.
