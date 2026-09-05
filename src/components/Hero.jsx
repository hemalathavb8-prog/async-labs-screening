import './Hero.css'

/* ─── Inline SVG: 7.5-inch workspace display ────────────────────────────────
   Proportions match a real 7.5" e-ink / small display form factor:
   ~170mm × 111mm  →  aspect ratio ≈ 1.53 : 1
   We render it at a fixed 520 × 340 viewBox and let CSS scale it.
   The screen shows a minimal workspace dashboard — agenda + quick stats.
──────────────────────────────────────────────────────────────────────────── */
function WorkspaceDisplay() {
  return (
    <div className="hero__device-wrap" aria-label="7.5-inch workspace display showing a daily dashboard">
      <svg
        className="hero__device"
        viewBox="0 0 520 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-hidden="true"
      >
        {/* ── Device body ── */}
        <rect x="0" y="0" width="520" height="340" rx="16" ry="16" fill="#1a1a1a" />
        {/* Thin bezel highlight */}
        <rect x="1" y="1" width="518" height="338" rx="15" ry="15"
          fill="none" stroke="#333" strokeWidth="1" />

        {/* ── Screen area ── */}
        <rect x="18" y="18" width="484" height="304" rx="8" ry="8" fill="#f7f6f2" />

        {/* ── Screen content: header row ── */}
        {/* Date label */}
        <text x="34" y="50" fontFamily="system-ui, sans-serif" fontSize="11"
          fontWeight="600" fill="#888" letterSpacing="0.08em">
          SATURDAY  •  05 SEP
        </text>

        {/* Time */}
        <text x="380" y="50" fontFamily="system-ui, sans-serif" fontSize="11"
          fontWeight="500" fill="#aaa" textAnchor="start">
          09 : 41
        </text>

        {/* Divider */}
        <line x1="34" y1="60" x2="486" y2="60" stroke="#e0ddd6" strokeWidth="1" />

        {/* ── Left column: Today's agenda ── */}
        <text x="34" y="82" fontFamily="system-ui, sans-serif" fontSize="10"
          fontWeight="700" fill="#aaa" letterSpacing="0.1em">
          TODAY
        </text>

        {/* Agenda items */}
        {[
          { time: '09:00', label: 'Design Review', tag: 'DESIGN', tagColor: '#dbeafe', tagText: '#2563eb', y: 102 },
          { time: '11:00', label: 'Engineering Sync', tag: 'ENG', tagColor: '#dcfce7', tagText: '#16a34a', y: 132 },
          { time: '14:00', label: 'Async Labs Demo', tag: 'DEMO', tagColor: '#fef9c3', tagText: '#ca8a04', y: 162 },
          { time: '16:30', label: 'Focus Block', tag: 'FOCUS', tagColor: '#f3f4f6', tagText: '#555', y: 192 },
        ].map((item) => (
          <g key={item.y}>
            {/* Time */}
            <text x="34" y={item.y} fontFamily="system-ui, sans-serif"
              fontSize="9" fill="#aaa" fontWeight="500">
              {item.time}
            </text>
            {/* Event bar */}
            <rect x="74" y={item.y - 13} width="168" height="18"
              rx="4" fill={item.tagColor} />
            {/* Event label */}
            <text x="82" y={item.y} fontFamily="system-ui, sans-serif"
              fontSize="9" fontWeight="600" fill={item.tagText}>
              {item.label}
            </text>
          </g>
        ))}

        {/* ── Divider between columns ── */}
        <line x1="270" y1="68" x2="270" y2="300" stroke="#e0ddd6" strokeWidth="1" strokeDasharray="3 3" />

        {/* ── Right column: Quick stats ── */}
        <text x="286" y="82" fontFamily="system-ui, sans-serif" fontSize="10"
          fontWeight="700" fill="#aaa" letterSpacing="0.1em">
          AT A GLANCE
        </text>

        {/* Stat cards */}
        {[
          { label: 'Tasks due', value: '4', sub: '2 overdue', y: 100 },
          { label: 'Messages', value: '12', sub: '3 unread', y: 160 },
          { label: 'Focus time', value: '3h', sub: 'today', y: 220 },
        ].map((stat) => (
          <g key={stat.y}>
            <rect x="286" y={stat.y} width="186" height="46"
              rx="8" fill="#ffffff" stroke="#e8e6e0" strokeWidth="1" />
            <text x="300" y={stat.y + 17} fontFamily="system-ui, sans-serif"
              fontSize="9" fill="#aaa" fontWeight="500">
              {stat.label}
            </text>
            <text x="300" y={stat.y + 33} fontFamily="system-ui, sans-serif"
              fontSize="18" fill="#0a0a0a" fontWeight="700">
              {stat.value}
            </text>
            <text x="334" y={stat.y + 33} fontFamily="system-ui, sans-serif"
              fontSize="9" fill="#bbb" fontWeight="400">
              {stat.sub}
            </text>
          </g>
        ))}

        {/* ── Bottom status bar ── */}
        <rect x="18" y="300" width="484" height="22" rx="0" fill="#f0ede7" />
        <text x="34" y="315" fontFamily="system-ui, sans-serif"
          fontSize="9" fill="#aaa" fontWeight="500">
          Async Labs Workspace  •  Last refreshed 2 min ago
        </text>
        {/* Battery indicator */}
        <rect x="452" y="306" width="28" height="11" rx="2" fill="none"
          stroke="#ccc" strokeWidth="1.2" />
        <rect x="454" y="308" width="18" height="7" rx="1" fill="#16a34a" />
        <rect x="480" y="309" width="3" height="5" rx="1" fill="#ccc" />
      </svg>

      {/* Stand / base */}
      <div className="hero__device-neck" />
      <div className="hero__device-base" />
    </div>
  )
}

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-headline">
      {/* Subtle decorative background dot grid */}
      <div className="hero__bg-dots" aria-hidden="true" />

      <div className="hero__inner">
        {/* ── Left: copy ── */}
        <div className="hero__copy">
          <span className="hero__eyebrow">Workspace Display</span>

          <h1 className="hero__headline" id="hero-headline">
            Everything you need.<br />
            <span className="hero__headline-accent">At a glance.</span>
          </h1>

          <p className="hero__subtext">
            Keep the information that matters visible, without taking over
            your main screen.
          </p>

          <div className="hero__actions">
            <a href="#get-started" className="hero__btn hero__btn--primary">
              Get Started
            </a>
            <a href="#product" className="hero__btn hero__btn--secondary">
              Explore the product
              <span className="hero__btn-arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {/* ── Right: product visual ── */}
        <div className="hero__visual">
          <WorkspaceDisplay />
        </div>
      </div>
    </section>
  )
}

export default Hero
