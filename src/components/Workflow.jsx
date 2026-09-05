import { useState } from 'react'
import './Workflow.css'

/* ─── Tab definitions ────────────────────────────────────────────────────────── */
const TABS = [
  { id: 'calendar', label: 'Calendar' },
  { id: 'tasks',    label: 'Tasks'    },
  { id: 'focus',    label: 'Focus'    },
  { id: 'dashboard',label: 'Dashboard'},
]

/* ─── Display views (SVG screen content) ────────────────────────────────────── */

/* Shared screen chrome — device body, bezel, paper screen, status bar */
function ScreenChrome({ title, children }) {
  return (
    <svg
      className="workflow__display"
      viewBox="0 0 520 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Device body */}
      <rect x="0" y="0" width="520" height="340" rx="16" fill="#1a1a1a" />
      <rect x="1" y="1" width="518" height="338" rx="15"
        fill="none" stroke="#333" strokeWidth="1" />

      {/* Screen paper */}
      <rect x="18" y="18" width="484" height="304" rx="8" fill="#f7f6f2" />

      {/* Screen header */}
      <text x="34" y="46" fontFamily="system-ui, sans-serif" fontSize="10"
        fontWeight="700" fill="#aaa" letterSpacing="0.1em">
        {title}
      </text>
      <text x="452" y="46" fontFamily="system-ui, sans-serif" fontSize="10"
        fontWeight="500" fill="#bbb" textAnchor="start">
        09:41
      </text>
      <line x1="34" y1="56" x2="486" y2="56" stroke="#e0ddd6" strokeWidth="1" />

      {/* Screen body — slot for view-specific content */}
      {children}

      {/* Status bar */}
      <rect x="18" y="300" width="484" height="22" rx="0" fill="#f0ede7" />
      <text x="34" y="315" fontFamily="system-ui, sans-serif"
        fontSize="9" fill="#aaa" fontWeight="500">
        Async Labs Workspace  •  Last refreshed 2 min ago
      </text>
      <rect x="454" y="306" width="28" height="11" rx="2"
        fill="none" stroke="#ccc" strokeWidth="1.2" />
      <rect x="456" y="308" width="18" height="7" rx="1" fill="#16a34a" />
      <rect x="482" y="309" width="3" height="5" rx="1" fill="#ccc" />
    </svg>
  )
}

/* ── Calendar view ── */
function CalendarView() {
  const events = [
    { time: '09:00', label: 'Design Review',      bg: '#dbeafe', fg: '#2563eb' },
    { time: '11:00', label: 'Engineering Sync',   bg: '#dcfce7', fg: '#16a34a' },
    { time: '14:00', label: 'Async Labs Demo',    bg: '#fef9c3', fg: '#ca8a04' },
    { time: '16:30', label: 'Focus Block',        bg: '#f3f4f6', fg: '#555'    },
  ]
  return (
    <ScreenChrome title="SATURDAY  •  05 SEP  —  CALENDAR">
      <text x="34" y="78" fontFamily="system-ui, sans-serif" fontSize="9"
        fontWeight="700" fill="#bbb" letterSpacing="0.08em">
        TODAY
      </text>
      {events.map((ev, i) => {
        const y = 100 + i * 46
        return (
          <g key={ev.time}>
            <text x="34" y={y} fontFamily="system-ui, sans-serif"
              fontSize="9" fill="#aaa" fontWeight="500">{ev.time}</text>
            <rect x="74" y={y - 14} width="390" height="22" rx="5" fill={ev.bg} />
            <rect x="74" y={y - 14} width="4" height="22" rx="2" fill={ev.fg} />
            <text x="86" y={y} fontFamily="system-ui, sans-serif"
              fontSize="10" fontWeight="600" fill={ev.fg}>{ev.label}</text>
          </g>
        )
      })}
    </ScreenChrome>
  )
}

/* ── Tasks view ── */
function TasksView() {
  const tasks = [
    { label: 'Finalize onboarding copy',     done: true  },
    { label: 'Review hardware tolerances',   done: true  },
    { label: 'Send proposal to partners',    done: false },
    { label: 'Update firmware changelog',    done: false },
    { label: 'Prep Q4 roadmap slides',       done: false },
  ]
  return (
    <ScreenChrome title="TASKS  —  TODAY">
      <text x="34" y="78" fontFamily="system-ui, sans-serif" fontSize="9"
        fontWeight="700" fill="#bbb" letterSpacing="0.08em">
        {tasks.filter(t => t.done).length} of {tasks.length} complete
      </text>
      {tasks.map((task, i) => {
        const y = 102 + i * 38
        const checkX = 34, checkY = y - 12
        return (
          <g key={task.label}>
            {/* Checkbox */}
            <rect x={checkX} y={checkY} width="16" height="16" rx="4"
              fill={task.done ? '#0a0a0a' : '#ffffff'}
              stroke={task.done ? '#0a0a0a' : '#ccc'} strokeWidth="1.5" />
            {task.done && (
              <polyline
                points={`${checkX + 3},${checkY + 8} ${checkX + 7},${checkY + 12} ${checkX + 13},${checkY + 4}`}
                stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                fill="none"
              />
            )}
            {/* Label */}
            <text x="60" y={y} fontFamily="system-ui, sans-serif"
              fontSize="10" fontWeight={task.done ? '400' : '500'}
              fill={task.done ? '#bbb' : '#1a1a1a'}
              style={{ textDecoration: task.done ? 'line-through' : 'none' }}>
              {task.label}
            </text>
            {/* Divider */}
            {i < tasks.length - 1 && (
              <line x1="34" y1={y + 14} x2="486" y2={y + 14}
                stroke="#ece9e3" strokeWidth="1" />
            )}
          </g>
        )
      })}
    </ScreenChrome>
  )
}

/* ── Focus view ── */
function FocusView() {
  return (
    <ScreenChrome title="FOCUS SESSION">
      {/* Session label */}
      <text x="260" y="100" textAnchor="middle" fontFamily="system-ui, sans-serif"
        fontSize="10" fontWeight="700" fill="#bbb" letterSpacing="0.12em">
        DEEP WORK
      </text>

      {/* Big timer */}
      <text x="260" y="178" textAnchor="middle" fontFamily="system-ui, sans-serif"
        fontSize="64" fontWeight="800" letterSpacing="-0.04em" fill="#0a0a0a">
        23:47
      </text>

      {/* Progress bar background */}
      <rect x="120" y="196" width="280" height="6" rx="3" fill="#e8e6e0" />
      {/* Progress fill — ~40 % through a 40-min session */}
      <rect x="120" y="196" width="112" height="6" rx="3" fill="#0a0a0a" />

      {/* Status */}
      <text x="260" y="226" textAnchor="middle" fontFamily="system-ui, sans-serif"
        fontSize="10" fill="#aaa" fontWeight="500">
        Focusing until 10:30 AM
      </text>

      {/* Task context pill */}
      <rect x="172" y="244" width="176" height="26" rx="13" fill="#f3f4f6" />
      <text x="260" y="262" textAnchor="middle" fontFamily="system-ui, sans-serif"
        fontSize="10" fontWeight="600" fill="#555">
        Review hardware tolerances
      </text>
    </ScreenChrome>
  )
}

/* ── Dashboard view ── */
function DashboardView() {
  const metrics = [
    { label: 'Tasks due',   value: '4',   sub: '2 overdue',  x: 34,  y: 100, w: 200 },
    { label: 'Messages',    value: '12',  sub: '3 unread',   x: 262, y: 100, w: 200 },
    { label: 'Focus time',  value: '3h',  sub: 'today',      x: 34,  y: 178, w: 200 },
    { label: 'Meetings',    value: '4',   sub: 'remaining',  x: 262, y: 178, w: 200 },
  ]
  return (
    <ScreenChrome title="DASHBOARD  —  AT A GLANCE">
      {metrics.map((m) => (
        <g key={m.label}>
          <rect x={m.x} y={m.y} width={m.w} height="58" rx="8"
            fill="#ffffff" stroke="#e8e6e0" strokeWidth="1" />
          <text x={m.x + 16} y={m.y + 20} fontFamily="system-ui, sans-serif"
            fontSize="9" fill="#aaa" fontWeight="600" letterSpacing="0.06em">
            {m.label.toUpperCase()}
          </text>
          <text x={m.x + 16} y={m.y + 44} fontFamily="system-ui, sans-serif"
            fontSize="26" fontWeight="800" fill="#0a0a0a" letterSpacing="-0.03em">
            {m.value}
          </text>
          <text x={m.x + 16 + (m.value.length > 1 ? 38 : 22)} y={m.y + 44}
            fontFamily="system-ui, sans-serif"
            fontSize="9" fill="#bbb" fontWeight="400">
            {m.sub}
          </text>
        </g>
      ))}

      {/* Divider + "Next up" */}
      <line x1="34" y1="256" x2="486" y2="256" stroke="#e0ddd6" strokeWidth="1" />
      <text x="34" y="273" fontFamily="system-ui, sans-serif" fontSize="9"
        fontWeight="700" fill="#bbb" letterSpacing="0.08em">
        NEXT UP
      </text>
      <rect x="34" y="280" width="440" height="18" rx="4" fill="#dbeafe" />
      <text x="42" y="293" fontFamily="system-ui, sans-serif"
        fontSize="9" fontWeight="600" fill="#2563eb">
        14:00  •  Async Labs Demo
      </text>
    </ScreenChrome>
  )
}

/* Map tab id → view component */
const VIEWS = {
  calendar:  <CalendarView  />,
  tasks:     <TasksView     />,
  focus:     <FocusView     />,
  dashboard: <DashboardView />,
}

/* ─── Tab icon SVGs ──────────────────────────────────────────────────────────── */
function IconCalendar() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="2" y="4" width="16" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
      <line x1="2" y1="9" x2="18" y2="9" stroke="currentColor" strokeWidth="1.6" />
      <line x1="7" y1="2" x2="7" y2="6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="13" y1="2" x2="13" y2="6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}
function IconTasks() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="2" y="3" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <polyline points="4,7 6,9 9,5" stroke="currentColor" strokeWidth="1.6"
        strokeLinecap="round" strokeLinejoin="round" />
      <line x1="13" y1="6" x2="18" y2="6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="2" y1="15" x2="18" y2="15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="2" y1="18" x2="14" y2="18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}
function IconFocus() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="10" cy="10" r="1.8" fill="currentColor" />
      <line x1="10" y1="2.5" x2="10" y2="5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="10" y1="15" x2="10" y2="17.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="2.5" y1="10" x2="5" y2="10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="15" y1="10" x2="17.5" y2="10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}
function IconDashboard() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="7" height="7" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <rect x="11" y="2" width="7" height="7" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <rect x="2" y="11" width="7" height="7" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <rect x="11" y="11" width="7" height="7" rx="2" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

const TAB_ICONS = {
  calendar:  <IconCalendar  />,
  tasks:     <IconTasks     />,
  focus:     <IconFocus     />,
  dashboard: <IconDashboard />,
}

/* ─── Main component ─────────────────────────────────────────────────────────── */
function Workflow() {
  const [active, setActive] = useState('calendar')

  return (
    <section className="workflow" id="product" aria-labelledby="workflow-heading">
      <div className="workflow__inner">

        {/* ── Section header ── */}
        <header className="workflow__header">
          <span className="workflow__eyebrow">How It Works</span>
          <h2 className="workflow__heading" id="workflow-heading">
            One display. Your workflow.
          </h2>
          <p className="workflow__subtext">
            Choose what matters most and keep it visible throughout your day.
          </p>
        </header>

        {/* ── Two-column body ── */}
        <div className="workflow__body">

          {/* Left: tab navigation */}
          <div className="workflow__tabs" role="tablist" aria-label="Display view selector">
            <ul role="list">
              {TABS.map((tab) => (
                <li key={tab.id}>
                  <button
                    className={`workflow__tab${active === tab.id ? ' workflow__tab--active' : ''}`}
                    onClick={() => setActive(tab.id)}
                    aria-selected={active === tab.id}
                    role="tab"
                    aria-controls="workflow-display-panel"
                    id={`workflow-tab-${tab.id}`}
                  >
                    <span className="workflow__tab-icon">
                      {TAB_ICONS[tab.id]}
                    </span>
                    <span className="workflow__tab-label">{tab.label}</span>
                    <span className="workflow__tab-arrow" aria-hidden="true">→</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: simulated display */}
          <div
            className="workflow__display-wrap"
            id="workflow-display-panel"
            role="tabpanel"
            aria-labelledby={`workflow-tab-${active}`}
          >
            <div className="workflow__display-frame">
              {/* CSS key-swap gives us the cross-fade on view change */}
              <div className="workflow__display-inner" key={active}>
                {VIEWS[active]}
              </div>
            </div>
            {/* Stand */}
            <div className="workflow__device-neck" aria-hidden="true" />
            <div className="workflow__device-base" aria-hidden="true" />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Workflow
