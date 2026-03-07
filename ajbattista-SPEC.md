# SPEC.md — aj-battista.com Homepage

A polished portfolio homepage showcasing three agentic-built web tools as a unified product suite.

## Problem

Individual tools deployed on separate Vercel URLs have no central hub connecting them. A visitor landing on aj-battista.com has no way to discover the full portfolio, understand what was built, or navigate between tools. The site needs a homepage that frames these tools as a cohesive collection and communicates capability within 30 seconds.

## Target Users

Hiring managers, potential collaborators, LinkedIn visitors, and anyone evaluating AJ Battista's ability to build useful software quickly. These visitors will spend 30–60 seconds on the page before deciding whether to click into a tool.

## Core Features

**1. Hero Section**
Eyebrow label: "Agentic-built web tools." Title: "Decision Tools for Growth, Marketing, and Client Insight." Subtitle: "Simple, high-utility tools built to help founders, operators, and marketers make better decisions faster." Primary CTA button: "Explore Tools" — smooth-scrolls to the tools grid.

**2. Featured Tools Grid**
Three tool cards in a responsive grid (3 columns on desktop, stacked on mobile). Each card contains: a SaaS-style dashboard placeholder preview (built with Tailwind, not an image), the tool name, a short description, and a button linking to the tool's route. Cards should have hover effects and feel clickable.

**3. Dashboard Placeholder Previews**
Each tool card includes a miniature fake dashboard built with Tailwind components to simulate a product screenshot. These are decorative and do not use real data:
- Marketing Channel ROI Simulator → fake bar chart with channel labels
- Client Pulse → fake KPI cards with status indicators
- Growth Decision Engine → fake scoring matrix with colored cells

**4. About Strip**
Centered text below the tools grid: "Built with agentic development workflows using Next.js, TypeScript, Tailwind CSS, and AI-assisted engineering."

**5. Footer**
Minimal centered footer: "Aloysius 'AJ' Battista • Marketing • Tampa, FL • linkedin.com/in/AJ-battista" — LinkedIn text is a clickable link. Muted color, smaller text.

## Tools and Routes

| Tool | Route | Description |
|------|-------|-------------|
| Marketing Channel ROI Simulator | /marketing-channel-roi-simulator | Estimate which marketing channels are most likely to produce the highest ROI before allocating budget. |
| Client Pulse | /client-pulse | Track client health, engagement signals, and retention risk in a simple dashboard. |
| Growth Decision Engine | /growth-decision-engine | Evaluate growth strategies using structured decision logic and visual simulations. |

## UI Layout (Top to Bottom)

1. **Hero Section** — full-width, strong typography, CTA button
2. **Featured Tools Grid** — three cards with placeholder previews, centered with max-width container
3. **About Strip** — single line of centered text with subtle styling
4. **Footer** — minimal centered text with LinkedIn link

## Design Direction

Modern, dark or muted SaaS-style landing page. The homepage itself should look as impressive as the tools it links to. Strong typography hierarchy, generous spacing, card-based tool grid with subtle shadows or borders, smooth hover transitions. The page should feel like a real product company's tool suite, not a personal portfolio. Visual feel similar to Linear's homepage, Vercel's dashboard, or Stripe's product pages.

## Tech Stack

- Next.js 14 (App Router) + TypeScript + Tailwind CSS
- No external APIs, no authentication, no backend
- Deployed on Vercel at aj-battista.com

## Success Criteria

1. A visitor understands what the site offers within 30 seconds.
2. The three tool cards look like real SaaS products with the placeholder previews.
3. Every tool link navigates to the correct route.
4. The page looks professional enough that a hiring manager clicking from LinkedIn would be impressed.
5. Fully responsive on mobile.
6. Page loads fast with no external dependencies.
