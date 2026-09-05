import './FinalCTA.css'

/* ─── Decorative mini-display graphic ───────────────────────────────────────
   A small, abstract e-ink display rendered in light-on-dark tones to suit
   the dark section background. Not interactive — purely illustrative.
──────────────────────────────────────────────────────────────────────────── */
function MiniDisplayGraphic() {
  return (
    <div className="fcta__graphic" aria-hidden="true">
      <svg
        viewBox="0 0 260 170"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="fcta__graphic-svg"
      >
        {/* Device body */}
        <rect width="260" height="170" rx="12" fill="#1e1e1e" />
        <rect x="0.5" y="0.5" width="259" height="169" rx="11.5"
          fill="none" stroke="#303030" strokeWidth="1" />

        {/* Screen */}
        <rect x="10" y="10" width="240" height="140" rx="6" fill="#f7f6f2" />

        {/* Header row */}
        <text x="22" y="32" fontFamily="system-ui, sans-serif"
          fontSize="8" fontWeight="700" fill="#aaa" letterSpacing="0.1em">
          ASYNC LABS  •  WORKSPACE
        </text>
        <line x1="22" y1="38" x2="238" y2="38" stroke="#e0ddd6" strokeWidth="0.8" />

        {/* Left column — info blocks */}
        <rect x="22" y="48" width="100" height="28" rx="5" fill="#ffffff"
          stroke="#ece9e3" strokeWidth="0.8" />
        <text x="30" y="60" fontFamily="system-ui, sans-serif"
          fontSize="7" fill="#bbb" fontWeight="600" letterSpacing="0.06em">TASKS</text>
        <text x="30" y="72" fontFamily="system-ui, sans-serif"
          fontSize="14" fontWeight="800" fill="#0a0a0a">4</text>

        <rect x="22" y="84" width="100" height="28" rx="5" fill="#ffffff"
          stroke="#ece9e3" strokeWidth="0.8" />
        <text x="30" y="96" fontFamily="system-ui, sans-serif"
          fontSize="7" fill="#bbb" fontWeight="600" letterSpacing="0.06em">MESSAGES</text>
        <text x="30" y="108" fontFamily="system-ui, sans-serif"
          fontSize="14" fontWeight="800" fill="#0a0a0a">12</text>

        {/* Right column — calendar events */}
        <text x="136" y="58" fontFamily="system-ui, sans-serif"
          fontSize="7" fontWeight="700" fill="#bbb" letterSpacing="0.08em">TODAY</text>
        {[
          { t: '09:00', l: 'Design Review',   bg: '#dbeafe', fg: '#2563eb', y: 70  },
          { t: '14:00', l: 'Async Labs Demo', bg: '#fef9c3', fg: '#ca8a04', y: 88  },
          { t: '16:30', l: 'Focus Block',     bg: '#f3f4f6', fg: '#888',    y: 106 },
        ].map(ev => (
          <g key={ev.t}>
            <text x="136" y={ev.y} fontFamily="system-ui, sans-serif"
              fontSize="6.5" fill="#bbb">{ev.t}</text>
            <rect x="162" y={ev.y - 10} width="72" height="14" rx="3" fill={ev.bg} />
            <text x="167" y={ev.y} fontFamily="system-ui, sans-serif"
              fontSize="7" fontWeight="600" fill={ev.fg}>{ev.l}</text>
          </g>
        ))}

        {/* Status bar */}
        <rect x="10" y="134" width="240" height="16" rx="0" fill="#f0ede7" />
        <text x="22" y="145" fontFamily="system-ui, sans-serif"
          fontSize="7" fill="#bbb" fontWeight="500">
          Last refreshed just now
        </text>
        {/* Battery */}
        <rect x="215" y="137" width="22" height="9" rx="2"
          fill="none" stroke="#ccc" strokeWidth="1" />
        <rect x="217" y="139" width="14" height="5" rx="1" fill="#16a34a" />
        <rect x="237" y="140" width="2.5" height="4" rx="1" fill="#ccc" />
      </svg>

      {/* Stand */}
      <div className="fcta__graphic-neck" />
      <div className="fcta__graphic-base" />
    </div>
  )
}

function FinalCTA() {
  return (
    <section className="fcta" id="get-started" aria-labelledby="fcta-heading">
      {/* Dot-grid decoration — same motif as Hero, inverted for dark bg */}
      <div className="fcta__bg-dots" aria-hidden="true" />

      <div className="fcta__inner">
        {/* Mini display — decorative focal point */}
        <MiniDisplayGraphic />

        {/* Copy */}
        <div className="fcta__copy">
          <h2 className="fcta__heading" id="fcta-heading">
            Make your workspace<br className="fcta__br" /> visible.
          </h2>
          <p className="fcta__subtext">
            Keep the information that matters within sight, without adding
            another screen to your workload.
          </p>

          <div className="fcta__actions">
            <a href="#" className="fcta__btn fcta__btn--primary">
              Get Started
            </a>
            <a href="#product" className="fcta__btn fcta__btn--secondary">
              Explore the product
              <span className="fcta__btn-arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA
