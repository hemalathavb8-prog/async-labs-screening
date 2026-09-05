import './UseCases.css'

/* ─── Scene SVGs ──────────────────────────────────────────────────────────────
   Each scene is a self-contained inline SVG that places the 7.5" display
   (proportions: ~1.53:1, rendered at 260×170 internally) inside a context.
   All aria-hidden — the card heading + description carry the accessible text.
──────────────────────────────────────────────────────────────────────────── */

/* Reusable mini-display (260×170 viewBox units, positioned at x/y by caller) */
function MiniDisplay({ x, y, screenContent }) {
  return (
    <g>
      {/* Device body */}
      <rect x={x} y={y} width="260" height="170" rx="10" fill="#1a1a1a" />
      <rect x={x + 1} y={y + 1} width="258" height="168" rx="9"
        fill="none" stroke="#2e2e2e" strokeWidth="1" />
      {/* Screen */}
      <rect x={x + 10} y={y + 10} width="240" height="140" rx="5" fill="#f7f6f2" />
      {screenContent}
      {/* Status strip */}
      <rect x={x + 10} y={y + 134} width="240" height="16" rx="0" fill="#f0ede7" />
      <text x={x + 18} y={y + 145}
        fontFamily="system-ui, sans-serif" fontSize="7" fill="#bbb" fontWeight="500">
        Async Labs  •  Updated now
      </text>
    </g>
  )
}

/* ── DESK scene ── */
function SceneDesk() {
  /* Display sits at x=30, y=40 on a 320×260 canvas */
  const dx = 30, dy = 40
  const screenContent = (
    <g>
      <text x={dx + 18} y={dy + 30}
        fontFamily="system-ui, sans-serif" fontSize="8" fontWeight="700"
        fill="#aaa" letterSpacing="0.08em">TODAY</text>
      <line x1={dx + 18} y1={dy + 36} x2={dx + 230} y2={dy + 36}
        stroke="#e0ddd6" strokeWidth="0.8" />
      {[
        { t: '09:00', l: 'Design Review',      bg: '#dbeafe', fg: '#2563eb', y: dy + 54  },
        { t: '11:00', l: 'Engineering Sync',   bg: '#dcfce7', fg: '#16a34a', y: dy + 76  },
        { t: '14:00', l: 'Async Labs Demo',    bg: '#fef9c3', fg: '#ca8a04', y: dy + 98  },
        { t: '16:30', l: 'Focus Block',        bg: '#f3f4f6', fg: '#888',    y: dy + 120 },
      ].map(ev => (
        <g key={ev.t}>
          <text x={dx + 18} y={ev.y}
            fontFamily="system-ui, sans-serif" fontSize="7" fill="#bbb">{ev.t}</text>
          <rect x={dx + 52} y={ev.y - 11} width="174" height="16" rx="4" fill={ev.bg} />
          <rect x={dx + 52} y={ev.y - 11} width="3" height="16" rx="2" fill={ev.fg} />
          <text x={dx + 60} y={ev.y}
            fontFamily="system-ui, sans-serif" fontSize="8" fontWeight="600" fill={ev.fg}>
            {ev.l}
          </text>
        </g>
      ))}
    </g>
  )

  return (
    <svg viewBox="0 0 320 260" fill="none" xmlns="http://www.w3.org/2000/svg"
      className="uc__scene" aria-hidden="true">

      {/* ── Desk surface ── */}
      <rect x="0" y="210" width="320" height="50" rx="0" fill="#e8e2d9" />
      <rect x="0" y="210" width="320" height="4" fill="#d6cfc5" />

      {/* ── Back wall ── */}
      <rect x="0" y="0" width="320" height="212" fill="#f4f2ee" />

      {/* ── Laptop (simplified side view) ── */}
      {/* Laptop base */}
      <rect x="178" y="184" width="128" height="28" rx="3" fill="#d0cec9" />
      {/* Laptop screen housing */}
      <rect x="183" y="110" width="118" height="78" rx="4" fill="#c8c4bf" />
      {/* Laptop screen */}
      <rect x="188" y="115" width="108" height="66" rx="2" fill="#1a1a2e" />
      {/* Laptop screen content glow */}
      <rect x="192" y="119" width="100" height="58" rx="1" fill="#1e2a4a" opacity="0.9" />
      {/* Simplified window chrome on laptop */}
      <rect x="194" y="121" width="96" height="8" rx="1" fill="#2a3a5e" />
      <circle cx="198" cy="125" r="2" fill="#e06c75" />
      <circle cx="205" cy="125" r="2" fill="#e5c07b" />
      <circle cx="212" cy="125" r="2" fill="#98c379" />
      {/* Laptop screen text lines */}
      {[134, 142, 150, 158, 166].map(ly => (
        <rect key={ly} x="194" y={ly} width={ly === 134 ? 60 : ly === 142 ? 80 : 50}
          height="4" rx="2" fill="#4a5a7e" />
      ))}
      {/* Hinge */}
      <rect x="178" y="184" width="128" height="4" rx="2" fill="#b8b4ae" />
      {/* Laptop keyboard rows */}
      {[194, 200, 206].map(ky => (
        <rect key={ky} x="184" y={ky} width="116" height="3" rx="1.5"
          fill="#c0bcb6" />
      ))}

      {/* ── Notebook on desk ── */}
      <rect x="18" y="196" width="50" height="18" rx="2" fill="#fff8f0"
        stroke="#e0d8cc" strokeWidth="1" />
      <line x1="22" y1="202" x2="64" y2="202" stroke="#e8e0d4" strokeWidth="1" />
      <line x1="22" y1="208" x2="58" y2="208" stroke="#e8e0d4" strokeWidth="1" />

      {/* ── Mini display on desk with stand ── */}
      <MiniDisplay x={dx} y={dy} screenContent={screenContent} />
      {/* Stand neck */}
      <rect x={dx + 116} y={dy + 170} width="28" height="16" rx="0"
        fill="url(#neck-grad)" />
      {/* Stand base */}
      <rect x={dx + 88} y={dy + 185} width="84" height="8" rx="4"
        fill="url(#base-grad)" />

      <defs>
        <linearGradient id="neck-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2e2e2e" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </linearGradient>
        <linearGradient id="base-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2e2e2e" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </linearGradient>
      </defs>
    </svg>
  )
}

/* ── WALL scene ── */
function SceneWall() {
  const dx = 30, dy = 30
  const screenContent = (
    <g>
      {/* Shared schedule heading */}
      <text x={dx + 18} y={dy + 28}
        fontFamily="system-ui, sans-serif" fontSize="8" fontWeight="700"
        fill="#aaa" letterSpacing="0.08em">TEAM  •  THIS WEEK</text>
      <line x1={dx + 18} y1={dy + 34} x2={dx + 230} y2={dx + 24}
        stroke="#e0ddd6" strokeWidth="0.8" />
      {[
        { day: 'MON', label: 'All-hands @ 10:00',  bg: '#dbeafe', fg: '#2563eb', y: dy + 52  },
        { day: 'TUE', label: 'Design crit @ 14:00', bg: '#f3f4f6', fg: '#555',   y: dy + 74  },
        { day: 'WED', label: 'Sprint review @ 11:00',bg:'#dcfce7', fg: '#16a34a',y: dy + 96  },
        { day: 'THU', label: 'Demo day @ 15:00',    bg: '#fef9c3', fg: '#ca8a04', y: dy + 118 },
      ].map(ev => (
        <g key={ev.day}>
          <text x={dx + 18} y={ev.y}
            fontFamily="system-ui, sans-serif" fontSize="7" fontWeight="700"
            fill="#bbb" letterSpacing="0.05em">{ev.day}</text>
          <rect x={dx + 52} y={ev.y - 11} width="174" height="16" rx="4" fill={ev.bg} />
          <text x={dx + 60} y={ev.y}
            fontFamily="system-ui, sans-serif" fontSize="8" fontWeight="600" fill={ev.fg}>
            {ev.label}
          </text>
        </g>
      ))}
    </g>
  )

  return (
    <svg viewBox="0 0 320 260" fill="none" xmlns="http://www.w3.org/2000/svg"
      className="uc__scene" aria-hidden="true">

      {/* ── Wall background with subtle texture ── */}
      <rect x="0" y="0" width="320" height="260" fill="#ededea" />
      {/* Wall panel lines */}
      <line x1="0" y1="130" x2="320" y2="130" stroke="#e4e4e0" strokeWidth="1" />
      <line x1="160" y1="0" x2="160" y2="260" stroke="#e4e4e0" strokeWidth="1" />

      {/* ── Wall-mount bracket ── */}
      {/* Mount plate behind display */}
      <rect x={dx - 6} y={dy - 10} width="272" height="8" rx="3" fill="#c8c4bf" />
      {/* Two screw heads */}
      <circle cx={dx + 12} cy={dy - 6} r="4" fill="#b0aca6" />
      <circle cx={dx + 248} cy={dy - 6} r="4" fill="#b0aca6" />
      <line x1={dx + 9} y1={dy - 9} x2={dx + 15} y2={dy - 3}
        stroke="#a0a0a0" strokeWidth="0.8" />
      <line x1={dx + 245} y1={dy - 9} x2={dx + 251} y2={dy - 3}
        stroke="#a0a0a0" strokeWidth="0.8" />
      {/* Shadow under mount */}
      <rect x={dx - 6} y={dy - 2} width="272" height="6" rx="0" fill="#d8d4cf" />

      {/* ── Display flat against wall (no stand) ── */}
      <MiniDisplay x={dx} y={dy} screenContent={screenContent} />

      {/* ── Person silhouette (minimal) ── */}
      <circle cx="280" cy="190" r="14" fill="#d8d4cd" />
      <path d="M258 240 Q258 218 280 218 Q302 218 302 240"
        fill="#d8d4cd" />
    </svg>
  )
}

/* ── BEYOND WORK scene ── */
function SceneBeyond() {
  const dx = 30, dy = 40
  const screenContent = (
    <g>
      {/* Weather-style ambient display */}
      {/* City / location */}
      <text x={dx + 120} y={dy + 28} textAnchor="middle"
        fontFamily="system-ui, sans-serif" fontSize="9" fontWeight="700"
        fill="#888" letterSpacing="0.1em">AMSTERDAM</text>

      {/* Large temperature */}
      <text x={dx + 120} y={dy + 78} textAnchor="middle"
        fontFamily="system-ui, sans-serif" fontSize="46" fontWeight="800"
        letterSpacing="-0.04em" fill="#1a1a1a">18°</text>

      {/* Condition */}
      <text x={dx + 120} y={dy + 98} textAnchor="middle"
        fontFamily="system-ui, sans-serif" fontSize="9" fill="#aaa" fontWeight="500">
        Partly cloudy
      </text>

      {/* Divider */}
      <line x1={dx + 18} y1={dy + 108} x2={dx + 222} y2={dy + 108}
        stroke="#e0ddd6" strokeWidth="0.8" />

      {/* Day forecast row */}
      {[
        { day: 'MON', hi: '19°', lo: '12°', x: dx + 30  },
        { day: 'TUE', hi: '16°', lo: '10°', x: dx + 80  },
        { day: 'WED', hi: '21°', lo: '13°', x: dx + 130 },
        { day: 'THU', hi: '23°', lo: '15°', x: dx + 180 },
      ].map(d => (
        <g key={d.day}>
          <text x={d.x} y={dy + 122} textAnchor="middle"
            fontFamily="system-ui, sans-serif" fontSize="7" fontWeight="700"
            fill="#bbb" letterSpacing="0.06em">{d.day}</text>
          <text x={d.x} y={dy + 132} textAnchor="middle"
            fontFamily="system-ui, sans-serif" fontSize="9" fontWeight="700"
            fill="#0a0a0a">{d.hi}</text>
        </g>
      ))}

      {/* Decorative sun shape */}
      <circle cx={dx + 198} cy={dy + 55} r="16" fill="#fef9c3" />
      <circle cx={dx + 198} cy={dy + 55} r="10" fill="#fde68a" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map(angle => {
        const rad = (angle * Math.PI) / 180
        const x1 = dx + 198 + 13 * Math.cos(rad)
        const y1 = dy + 55 + 13 * Math.sin(rad)
        const x2 = dx + 198 + 18 * Math.cos(rad)
        const y2 = dy + 55 + 18 * Math.sin(rad)
        return <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2}
          stroke="#fbbf24" strokeWidth="1.5" strokeLinecap="round" />
      })}
    </g>
  )

  return (
    <svg viewBox="0 0 320 260" fill="none" xmlns="http://www.w3.org/2000/svg"
      className="uc__scene" aria-hidden="true">

      {/* ── Room context ── */}
      {/* Back wall */}
      <rect x="0" y="0" width="320" height="260" fill="#f0ede8" />
      {/* Skirting / floor */}
      <rect x="0" y="230" width="320" height="30" fill="#e4dfd8" />
      <rect x="0" y="230" width="320" height="3" fill="#d8d3cc" />

      {/* ── Side table ── */}
      <rect x="198" y="210" width="100" height="22" rx="2" fill="#d6cfc5" />
      <rect x="200" y="210" width="96" height="4" rx="2" fill="#c8c0b5" />
      {/* Table legs */}
      <rect x="204" y="232" width="6" height="20" rx="2" fill="#c8c0b5" />
      <rect x="288" y="232" width="6" height="20" rx="2" fill="#c8c0b5" />

      {/* ── Small plant pot on table ── */}
      <ellipse cx="284" cy="210" rx="10" ry="5" fill="#b5a898" />
      <rect x="276" y="186" width="16" height="24" rx="3" fill="#c4aa8e" />
      <path d="M284 186 Q278 172 268 174 Q274 180 284 186Z" fill="#6b9e6b" />
      <path d="M284 182 Q290 168 300 172 Q294 178 284 182Z" fill="#7ab87a" />

      {/* ── Display on stand ── */}
      <MiniDisplay x={dx} y={dy} screenContent={screenContent} />
      {/* Stand neck */}
      <rect x={dx + 116} y={dy + 170} width="28" height="16"
        fill="#222" rx="0" />
      {/* Stand base */}
      <rect x={dx + 88} y={dy + 185} width="84" height="8" rx="4" fill="#1a1a1a" />

      {/* ── Small decorative book stack ── */}
      <rect x="18" y="214" width="42" height="8" rx="2" fill="#c9b99a" />
      <rect x="20" y="206" width="38" height="8" rx="2" fill="#b8a88a" />
      <rect x="22" y="198" width="34" height="8" rx="2" fill="#a8987a" />
    </svg>
  )
}

/* ─── Use-case data ───────────────────────────────────────────────────────────── */
const USE_CASES = [
  {
    id: 'desk',
    eyebrow: 'Desk',
    title: 'Your desk, at a glance',
    description:
      'Keep your schedule, tasks, focus status, or daily priorities visible beside your main screen.',
    scene: <SceneDesk />,
    accent: '#dbeafe',
  },
  {
    id: 'wall',
    eyebrow: 'Wall',
    title: 'Information that stays visible',
    description:
      'Turn a wall into a simple, always-visible surface for schedules, announcements, dashboards, or shared information.',
    scene: <SceneWall />,
    accent: '#dcfce7',
  },
  {
    id: 'beyond',
    eyebrow: 'Beyond Work',
    title: 'More than a workspace',
    description:
      'Use it for menus, artwork, quotes, weather, live information, or any content you want within sight.',
    scene: <SceneBeyond />,
    accent: '#fef9c3',
  },
]

/* ─── Component ──────────────────────────────────────────────────────────────── */
function UseCases() {
  return (
    <section className="uc" id="use-cases-placement" aria-labelledby="uc-heading">
      <div className="uc__inner">

        {/* Section header */}
        <header className="uc__header">
          <span className="uc__eyebrow">Placement</span>
          <h2 className="uc__heading" id="uc-heading">
            Made to fit your workspace.
          </h2>
          <p className="uc__subtext">
            From your desk to the wall, keep the information you need
            where you naturally look.
          </p>
        </header>

        {/* Cards */}
        <ul className="uc__grid" role="list">
          {USE_CASES.map((item) => (
            <li key={item.id} className="uc__card">
              {/* Scene visual */}
              <div
                className="uc__scene-wrap"
                style={{ '--uc-accent': item.accent }}
                aria-hidden="true"
              >
                {item.scene}
              </div>

              {/* Text block */}
              <div className="uc__card-body">
                <span className="uc__card-eyebrow">{item.eyebrow}</span>
                <h3 className="uc__card-title">{item.title}</h3>
                <p className="uc__card-desc">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}

export default UseCases
