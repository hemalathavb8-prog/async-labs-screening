import './Integrations.css'

/* ─── Brand icons ────────────────────────────────────────────────────────────
   All inline SVG — no external images or icon libraries.
   Icons are simplified but immediately recognisable brand shapes.
   aria-hidden="true" on every icon; the card text carries all meaning.
──────────────────────────────────────────────────────────────────────────── */

function IconGoogleCalendar() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none"
      xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* White card body */}
      <rect x="4" y="4" width="28" height="28" rx="4" fill="#ffffff"
        stroke="#e0e0e0" strokeWidth="1" />
      {/* Blue top strip */}
      <rect x="4" y="4" width="28" height="8" rx="4" fill="#1a73e8" />
      <rect x="4" y="8" width="28" height="4" fill="#1a73e8" />
      {/* Day number */}
      <text x="18" y="25" textAnchor="middle" fontFamily="system-ui, sans-serif"
        fontSize="11" fontWeight="700" fill="#1a73e8">18</text>
      {/* Grid dots */}
      {[10, 16, 22].map(cx =>
        [17, 23].map(cy => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="1.5" fill="#dadce0" />
        ))
      )}
    </svg>
  )
}

function IconOutlookCalendar() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none"
      xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Blue background */}
      <rect x="3" y="3" width="30" height="30" rx="5" fill="#0078d4" />
      {/* White envelope / calendar shape */}
      <rect x="14" y="10" width="16" height="16" rx="2" fill="#ffffff" />
      {/* Inner calendar line */}
      <line x1="14" y1="15" x2="30" y2="15" stroke="#0078d4" strokeWidth="1.5" />
      {/* Day text on white card */}
      <text x="22" y="24" textAnchor="middle" fontFamily="system-ui, sans-serif"
        fontSize="8" fontWeight="700" fill="#0078d4">CAL</text>
      {/* "O" letter on blue */}
      <text x="10" y="22" textAnchor="middle" fontFamily="system-ui, sans-serif"
        fontSize="12" fontWeight="800" fill="#ffffff">O</text>
    </svg>
  )
}

function IconSlack() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none"
      xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Slack hashtag-inspired four-lozenge mark */}
      {/* Top-left: green */}
      <rect x="7" y="7" width="8" height="8" rx="2.5" fill="#2eb67d" />
      {/* Top-right: yellow */}
      <rect x="21" y="7" width="8" height="8" rx="2.5" fill="#ecb22e" />
      {/* Bottom-left: red */}
      <rect x="7" y="21" width="8" height="8" rx="2.5" fill="#e01e5a" />
      {/* Bottom-right: blue */}
      <rect x="21" y="21" width="8" height="8" rx="2.5" fill="#36c5f0" />
    </svg>
  )
}

function IconTeams() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none"
      xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Purple background */}
      <rect x="3" y="3" width="30" height="30" rx="5" fill="#5b5fc7" />
      {/* "T" lettermark */}
      <text x="18" y="24" textAnchor="middle" fontFamily="system-ui, sans-serif"
        fontSize="16" fontWeight="800" fill="#ffffff">T</text>
      {/* Subtle person silhouette dots */}
      <circle cx="25" cy="14" r="3" fill="rgba(255,255,255,0.35)" />
      <path d="M20 20 Q20 17 25 17 Q30 17 30 20" fill="rgba(255,255,255,0.25)" />
    </svg>
  )
}

/* ─── Integration data ───────────────────────────────────────────────────────── */
const INTEGRATIONS = [
  {
    id: 'google-calendar',
    icon: <IconGoogleCalendar />,
    name: 'Google Calendar',
    category: 'Calendar',
    description: 'Keep today\'s schedule visible at a glance.',
  },
  {
    id: 'outlook-calendar',
    icon: <IconOutlookCalendar />,
    name: 'Outlook Calendar',
    category: 'Calendar',
    description: 'Stay on top of meetings and upcoming events.',
  },
  {
    id: 'slack',
    icon: <IconSlack />,
    name: 'Slack',
    category: 'Messaging',
    description: 'Surface important messages and team updates.',
  },
  {
    id: 'teams',
    icon: <IconTeams />,
    name: 'Microsoft Teams',
    category: 'Collaboration',
    description: 'Keep collaboration and meeting information within reach.',
  },
]

/* ─── Component ─────────────────────────────────────────────────────────────── */
function Integrations() {
  return (
    <section
      className="integrations"
      id="integrations"
      aria-labelledby="integrations-heading"
    >
      <div className="integrations__inner">

        {/* Section header */}
        <header className="integrations__header">
          <span className="integrations__eyebrow">Integrations</span>
          <h2 className="integrations__heading" id="integrations-heading">
            Works with the tools<br className="integrations__br" /> you already use.
          </h2>
          <p className="integrations__subtext">
            Bring your calendar, communication, and workflow into one
            glanceable workspace.
          </p>
        </header>

        {/* Cards */}
        <ul className="integrations__grid" role="list">
          {INTEGRATIONS.map((item) => (
            <li key={item.id} className="integrations__card">
              <div className="integrations__card-top">
                <div className="integrations__icon-wrap" aria-hidden="true">
                  {item.icon}
                </div>
                <span className="integrations__category">{item.category}</span>
              </div>
              <h3 className="integrations__card-name">{item.name}</h3>
              <p className="integrations__card-desc">{item.description}</p>
              <span className="integrations__card-cta" aria-hidden="true">
                Connect →
              </span>
            </li>
          ))}
        </ul>

        {/* Footer note */}
        <p className="integrations__footer-note">
          More integrations coming soon.
        </p>

      </div>
    </section>
  )
}

export default Integrations
