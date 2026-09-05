# Async Labs Frontend Screening

## Overview

A responsive product landing page for **Async Labs** — a 7.5-inch e-ink workspace display that keeps important information visible without occupying your main screen. The page communicates the product concept, key benefits, workflow flexibility, and real-world placement scenarios across a polished, section-by-section layout.

## Built With

- [React 18](https://react.dev/) — component-based UI
- [Vite 5](https://vitejs.dev/) — development server and build tool
- JavaScript (ES modules, no TypeScript)
- Plain CSS (no CSS frameworks or preprocessors)

## Features

- **Responsive navigation** — sticky navbar with hamburger menu and animated mobile drawer; Escape key closes the menu
- **Hero section** — headline, supporting copy, and an SVG representation of the 7.5-inch workspace display
- **Benefits section** — four product highlights with inline SVG icons
- **Interactive workflow section** — tabbed display with four switchable views (Calendar, Tasks, Focus, Dashboard), each rendered as a simulated e-ink screen
- **Integrations section** — Google Calendar, Outlook Calendar, Slack, and Microsoft Teams, represented as UI cards
- **Use Cases section** — three placement scenarios (Desk, Wall, Beyond Work) with hand-crafted SVG scene illustrations
- **Final CTA and Footer** — dark-background closing section with scroll anchors throughout
- **Accessible interactions** — semantic HTML, `aria-*` attributes, `focus-visible` states, keyboard-operable tabs and menus
- **Fully responsive** — tested at 1440px, 1024px, 768px, 640px, 480px, and 375px

## Getting Started

```bash
npm install
npm run dev
```

The development server starts at `http://localhost:5173`.

## Production Build

```bash
npm run build
```

Output is written to `dist/`. Preview with `npm run preview`.

## Project Structure

```
src/
├── main.jsx              # App entry point
├── App.jsx               # Root component — composes all sections
├── App.css               # App-level layout styles
├── index.css             # Global reset and base styles
└── components/
    ├── Navbar.jsx / .css     # Sticky header, desktop + mobile navigation
    ├── Hero.jsx / .css       # Hero section with product SVG display
    ├── Benefits.jsx / .css   # Four product benefit cards
    ├── Workflow.jsx / .css   # Interactive tabbed workflow section
    ├── Integrations.jsx / .css  # Integration cards (Google, Outlook, Slack, Teams)
    ├── UseCases.jsx / .css   # Placement use-case cards with SVG scenes
    ├── FinalCTA.jsx / .css   # Closing call-to-action section
    └── Footer.jsx / .css     # Footer with navigation and copyright
```

Each component is self-contained with its own CSS file. No external UI libraries, icon sets, or stylesheets are used.

## Notes

This is a **frontend-only** implementation built for a screening task. All integrations (Google Calendar, Outlook, Slack, Microsoft Teams) are represented as product UI concepts and do not involve live API connections, authentication, or real data. The workspace display visuals are inline SVG illustrations, not screenshots of a real product.
