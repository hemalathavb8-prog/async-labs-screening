import './Benefits.css'

/* ─── SVG icons — inline, no external dependency ─────────────────────────────
   Each icon is 40 × 40, stroked in currentColor so they inherit accent color.
──────────────────────────────────────────────────────────────────────────── */
function IconVisible() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
      xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="14" cy="14" r="4.5" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M2 14C4.8 8.2 9 5 14 5s9.2 3.2 12 9c-2.8 5.8-7 9-12 9S4.8 19.8 2 14Z"
        stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  )
}

function IconBattery() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
      xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="2" y="8" width="22" height="12" rx="3"
        stroke="currentColor" strokeWidth="1.8" />
      <rect x="24" y="11.5" width="3" height="5" rx="1.5"
        fill="currentColor" />
      {/* Fill bar — ~75 % */}
      <rect x="4.5" y="10.5" width="13" height="7" rx="1.5"
        fill="currentColor" opacity="0.25" />
      <rect x="4.5" y="10.5" width="13" height="7" rx="1.5"
        stroke="currentColor" strokeWidth="0" />
      {/* Leaf / eco dot */}
      <circle cx="10.5" cy="14" r="1.5" fill="currentColor" />
    </svg>
  )
}

function IconDisplay() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
      xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="2" y="4" width="24" height="16" rx="2.5"
        stroke="currentColor" strokeWidth="1.8" />
      {/* Screen content lines */}
      <line x1="6" y1="9" x2="14" y2="9"
        stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="6" y1="13" x2="11" y2="13"
        stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      {/* Stand neck */}
      <line x1="14" y1="20" x2="14" y2="23.5"
        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      {/* Stand base */}
      <line x1="9" y1="23.5" x2="19" y2="23.5"
        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function IconLayout() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
      xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Outer frame */}
      <rect x="2" y="2" width="24" height="24" rx="3"
        stroke="currentColor" strokeWidth="1.8" />
      {/* Vertical divider */}
      <line x1="11" y1="2" x2="11" y2="26"
        stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      {/* Horizontal divider (right panel only) */}
      <line x1="11" y1="14" x2="26" y2="14"
        stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

/* ─── Benefit data ───────────────────────────────────────────────────────────── */
const BENEFITS = [
  {
    id: 'always-visible',
    icon: <IconVisible />,
    label: 'Always Visible',
    title: 'Always Visible',
    description:
      'Keep important information in sight without taking over your main screen.',
  },
  {
    id: 'battery',
    icon: <IconBattery />,
    label: 'Up to 30 days',
    title: 'Up to 30 Days',
    description:
      'Low-power operation keeps your display running for long periods between charges.',
  },
  {
    id: 'display',
    icon: <IconDisplay />,
    label: '7.5-inch display',
    title: '7.5-Inch Display',
    description:
      'A compact workspace surface designed to fit naturally on a desk or wall.',
  },
  {
    id: 'customizable',
    icon: <IconLayout />,
    label: 'Your way',
    title: 'Your Way',
    description:
      'Create and arrange calendars, tasks, dashboards, images, text, and other content around your workflow.',
  },
]

/* ─── Component ─────────────────────────────────────────────────────────────── */
function Benefits() {
  return (
    <section className="benefits" id="features" aria-labelledby="benefits-heading">
      <div className="benefits__inner">

        {/* Section header */}
        <header className="benefits__header">
          <span className="benefits__eyebrow">Why Async Labs</span>
          <h2 className="benefits__heading" id="benefits-heading">
            Built around how you work.
          </h2>
          <p className="benefits__subtext">
            One small display. Engineered to keep the right information close
            without the noise of another full screen.
          </p>
        </header>

        {/* Cards grid */}
        <ul className="benefits__grid" role="list">
          {BENEFITS.map((item) => (
            <li key={item.id} className="benefits__card">
              <div className="benefits__card-icon">
                {item.icon}
              </div>
              <h3 className="benefits__card-title">{item.title}</h3>
              <p className="benefits__card-desc">{item.description}</p>
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}

export default Benefits
