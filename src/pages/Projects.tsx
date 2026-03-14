import { useState, useEffect, useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const projects = [
  {
    id: 1,
    num: "01",
    title: "Digital Prayer Timetable",
    status: "Live",
    problem:
      "Mosques and communities need a clear way to display daily prayer schedules digitally without expensive dedicated hardware.",
    solution:
      "A browser-based timetable with a live clock — deployable on any screen without dedicated hardware.",
    techStack: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Netlify"],
    liveUrl: "https://digitalprayerclock.netlify.app/",
    githubUrl: "https://github.com/ZaheerAhmed04/Digital--Prayer-Timetable",
  },
  {
    id: 2,
    num: "02",
    title: "File Encrypter & Decrypter",
    status: "Live",
    problem:
      "Users sharing sensitive files over insecure channels lack a simple tool to encrypt them without complex software.",
    solution:
      "A client-side AES encryption app that secures files entirely in the browser before sharing.",
    techStack: ["React", "Web Crypto API", "Tailwind CSS", "JavaScript", "Netlify"],
    liveUrl: "https://fileencrypter.netlify.app/",
    githubUrl: "https://github.com/ZaheerAhmed04/CyberDriveX",
  },
  {
    id: 3,
    num: "03",
    title: "Kanzul Irfan Digital Quran",
    status: "Live",
    problem:
      "Islamic texts and Tafsir commentaries are rarely available in portable, user-friendly digital formats.",
    solution:
      "A responsive platform digitising the Kanzul Irfan translation with intuitive multi-device navigation.",
    techStack: ["HTML", "JavaScript", "Tailwind CSS", "CSS", "Netlify"],
    liveUrl: "https://kanzul-irfan.netlify.app/",
    githubUrl: "https://github.com/ZaheerAhmed04/Kanzul-Irfan/",
  },
  {
    id: 4,
    num: "04",
    title: "TaskMate — To-Do List",
    status: "Live",
    problem:
      "Users need to organise daily activities with prioritisation, deadlines, and reminders in one place.",
    solution:
      "A full-stack to-do app allowing users to create, update, delete, and categorise tasks securely.",
    techStack: ["HTML", "CSS", "JavaScript", "Netlify"],
    liveUrl: "https://taskmate-me.netlify.app/",
    githubUrl: "https://github.com/ZaheerAhmed04/taskmate-me",
  },
  {
    id: 5,
    num: "05",
    title: "Scientific Calculator Web App",
    status: "Completed",
    problem:
      "Online learners lack a simple browser-based scientific calculator without needing external software.",
    solution:
      "A responsive calculator supporting arithmetic, trigonometric, logarithmic, and advanced math functions.",
    techStack: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://zaheerahmed04.github.io/Scientific-Calculator/",
    githubUrl: "https://github.com/zaheerahmed04/Scientific-Calculator",
  },
  {
    id: 6,
    num: "06",
    title: "BGSBU Cleanliness Feedback",
    status: "Completed",
    problem:
      "No centralised way for university students and staff to rate cleanliness across campus departments.",
    solution:
      "An interactive feedback page with waste categories and cleanliness ratings for departments and canteens.",
    techStack: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://zaheer-ahmed015.github.io/BGSBU-Cleanliness-Page/",
    githubUrl: "https://github.com/zaheer-ahmed015/BGSBU-Cleanliness-Page",
  },
  {
    id: 7,
    num: "07",
    title: "ZaheerAhmed | Portfolio",
    status: "Planned",
    problem:
      "Many personal portfolios lack proper structure, responsiveness, and usability for recruiters and visitors.",
    solution:
      "A responsive portfolio showcasing projects, skills, and professional profile with a clean modern interface.",
    techStack: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://zaheerahmed04.github.io/Portfolio/",
    githubUrl: "https://github.com/ZaheerAhmed04/Portfolio",
  },
];

const FILTERS = ["All", "Live", "Completed", "Planned"];

/* ─────────────────────────────────────────
   TYPES
───────────────────────────────────────── */
interface Project {
  id: number;
  num: string;
  title: string;
  status: string;
  problem: string;
  solution: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
}

/* ─────────────────────────────────────────
   CSS
───────────────────────────────────────── */
const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Syne:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

  :root {
    --bg-deep:        #07090e;
    --bg-card:        #0c0f16;
    --border:         rgba(255,255,255,0.07);
    --border-hover:   rgba(255,255,255,0.13);
    --text-primary:   #ede9df;
    --text-secondary: #74808f;
    --text-muted:     #363e4e;
    --gold:           #c9a84c;
    --gold-dim:       #6e5320;
    --live-color:     #34d399;
    --done-color:     #60a5fa;
    --plan-color:     #a78bfa;
    --font-display:   'Cormorant Garamond', Georgia, serif;
    --font-ui:        'Syne', sans-serif;
    --font-mono:      'JetBrains Mono', monospace;
    --ease:           cubic-bezier(0.4,0,0.2,1);
  }

  /* ── Page root ── */
  .pj-root {
    position: relative;
    min-height: 100vh;
    background: var(--bg-deep);
    overflow-x: hidden;
    opacity: 0;
    transform: translateY(14px);
    transition: opacity 0.65s var(--ease), transform 0.65s var(--ease);
  }
  .pj-root.in { opacity: 1; transform: translateY(0); }

  /* ── Ambient orbs only — NO grid overlay ── */
  .pj-orb {
    position: fixed;
    border-radius: 50%;
    pointer-events: none;
    z-index: 0;
  }
  .pj-orb-a {
    width: 700px; height: 700px;
    top: -250px; right: -180px;
    background: radial-gradient(circle, rgba(201,168,76,0.11) 0%, transparent 68%);
    filter: blur(80px);
    animation: orbA 20s ease-in-out infinite alternate;
  }
  .pj-orb-b {
    width: 550px; height: 550px;
    bottom: 5%; left: -220px;
    background: radial-gradient(circle, rgba(56,189,248,0.07) 0%, transparent 68%);
    filter: blur(80px);
    animation: orbB 26s ease-in-out infinite alternate;
  }
  .pj-orb-c {
    width: 420px; height: 420px;
    top: 55%; left: 45%;
    background: radial-gradient(circle, rgba(167,139,250,0.05) 0%, transparent 68%);
    filter: blur(80px);
    animation: orbC 15s ease-in-out infinite;
  }
  @keyframes orbA {
    from { transform: translate(0,0) scale(1); }
    to   { transform: translate(50px,35px) scale(1.1); }
  }
  @keyframes orbB {
    from { transform: translate(0,0); }
    to   { transform: translate(35px,-40px); }
  }
  @keyframes orbC {
    0%,100% { opacity:.5; transform: scale(1); }
    50%     { opacity:1;  transform: scale(1.18); }
  }

  /* ── Main wrap ── */
  .pj-wrap {
    position: relative;
    z-index: 1;
    max-width: 1300px;
    margin: 0 auto;
    padding: 5.5rem 2rem 7rem;
  }

  /* ══════════════════════════════
     HEADER — fully centered
  ══════════════════════════════ */
  .pj-header {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 4.5rem;
  }

  .pj-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 1.75rem;
  }
  .pj-eyebrow-bar {
    display: inline-block;
    width: 28px; height: 1px;
    background: linear-gradient(90deg, transparent, var(--gold));
  }
  .pj-eyebrow-bar.right {
    background: linear-gradient(90deg, var(--gold), transparent);
  }
  .pj-eyebrow-text {
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.24em;
    text-transform: uppercase;
    color: var(--gold);
  }

  .pj-title {
    font-family: var(--font-display);
    font-size: clamp(3.8rem, 9vw, 7.5rem);
    font-weight: 500;
    line-height: 1.0;
    letter-spacing: -0.01em;
    color: var(--text-primary);
    margin-bottom: 1.5rem;
    text-align: center;
  }
  .pj-title em {
    font-style: italic;
    font-weight: 400;
    color: var(--gold);
  }

  .pj-desc {
    font-family: var(--font-ui);
    font-size: 15px;
    font-weight: 400;
    line-height: 1.9;
    color: var(--text-secondary);
    max-width: 520px;
    text-align: center;
    margin-bottom: 3rem;
  }

  /* ── Stats — centered pill row ── */
  .pj-stats {
    display: inline-flex;
    align-items: stretch;
    border: 1px solid var(--border);
    border-radius: 14px;
    overflow: hidden;
    margin-bottom: 0;
  }
  .pj-stat {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.1rem 2.2rem;
  }
  .pj-stat + .pj-stat {
    border-left: 1px solid var(--border);
  }
  .pj-stat-num {
    font-family: var(--font-display);
    font-size: 2.6rem;
    font-weight: 500;
    line-height: 1;
    margin-bottom: 0.25rem;
    background: linear-gradient(135deg, var(--text-primary) 30%, var(--gold));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .pj-stat-label {
    font-family: var(--font-mono);
    font-size: 9px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--text-muted);
  }

  /* ── Filter bar — centered ── */
  .pj-filters {
    display: flex;
    justify-content: center;
    gap: 8px;
    flex-wrap: wrap;
    margin-bottom: 3rem;
  }
  .pj-filter-btn {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    padding: 8px 20px;
    font-family: var(--font-ui);
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.06em;
    border-radius: 100px;
    border: 1px solid var(--border);
    background: transparent;
    color: var(--text-secondary);
    cursor: pointer;
    transition: all 0.22s var(--ease);
  }
  .pj-filter-btn:hover {
    border-color: var(--border-hover);
    color: var(--text-primary);
    background: rgba(255,255,255,0.04);
  }
  .pj-filter-btn.active {
    background: linear-gradient(135deg, var(--gold) 0%, #e8bc55 100%);
    border-color: transparent;
    color: #080500;
    font-weight: 700;
    box-shadow: 0 0 24px rgba(201,168,76,0.38), 0 2px 8px rgba(0,0,0,0.4);
  }
  .pj-filter-count {
    font-family: var(--font-mono);
    font-size: 9px;
    opacity: 0.65;
  }

  /* ── Cards grid ── */
  .pj-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 370px), 1fr));
    gap: 1.25rem;
  }

  /* ── Card ── */
  .pj-card {
    position: relative;
    border-radius: 16px;
    background: var(--bg-card);
    border: 1px solid var(--border);
    overflow: hidden;
    transition: border-color 0.25s var(--ease), transform 0.28s var(--ease), box-shadow 0.28s var(--ease);
    animation: cardIn 0.5s var(--ease) both;
  }
  @keyframes cardIn {
    from { opacity: 0; transform: translateY(22px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* Mouse spotlight */
  .pj-card-spotlight {
    position: absolute;
    inset: 0;
    border-radius: inherit;
    opacity: 0;
    pointer-events: none;
    z-index: 0;
    transition: opacity 0.4s;
    background: radial-gradient(
      300px circle at var(--mx, 50%) var(--my, 50%),
      rgba(201,168,76,0.09),
      transparent 65%
    );
  }
  .pj-card:hover .pj-card-spotlight { opacity: 1; }

  /* Top accent bar */
  .pj-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    opacity: 0;
    transition: opacity 0.3s var(--ease);
    z-index: 2;
  }
  .pj-card.live::before      { background: linear-gradient(90deg, var(--live-color) 0%, transparent 70%); }
  .pj-card.completed::before { background: linear-gradient(90deg, var(--done-color) 0%, transparent 70%); }
  .pj-card.planned::before   { background: linear-gradient(90deg, var(--plan-color) 0%, transparent 70%); }

  .pj-card:hover {
    border-color: var(--border-hover);
    transform: translateY(-5px);
    box-shadow:
      0 0 0 1px rgba(201,168,76,0.08),
      0 24px 64px rgba(0,0,0,0.55),
      0 8px 20px rgba(0,0,0,0.35);
  }
  .pj-card:hover::before { opacity: 1; }

  .pj-card-inner {
    position: relative;
    z-index: 1;
    padding: 1.75rem;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .pj-card-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.2rem;
  }
  .pj-card-num {
    font-family: var(--font-mono);
    font-size: 11px;
    font-weight: 500;
    color: var(--text-muted);
    letter-spacing: 0.14em;
  }

  /* Status pill */
  .pj-status {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 500;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    padding: 4px 12px;
    border-radius: 100px;
    border: 1px solid;
  }
  .pj-status.live      { color:var(--live-color); border-color:rgba(52,211,153,.28); background:rgba(52,211,153,.07); }
  .pj-status.completed { color:var(--done-color); border-color:rgba(96,165,250,.28); background:rgba(96,165,250,.07); }
  .pj-status.planned   { color:var(--plan-color); border-color:rgba(167,139,250,.28); background:rgba(167,139,250,.07); }

  .pj-live-dot {
    display: inline-block;
    width: 6px; height: 6px;
    border-radius: 50%;
    background: var(--live-color);
    flex-shrink: 0;
    animation: livePulse 2.2s ease-in-out infinite;
  }
  @keyframes livePulse {
    0%,100% { opacity:1; box-shadow:0 0 0 0 rgba(52,211,153,.5); }
    50%     { opacity:.85; box-shadow:0 0 0 5px rgba(52,211,153,0); }
  }

  .pj-card-title {
    font-family: var(--font-display);
    font-size: 1.48rem;
    font-weight: 500;
    line-height: 1.22;
    color: var(--text-primary);
    margin-bottom: 1rem;
    letter-spacing: 0.01em;
  }

  .pj-rule {
    width: 100%; height: 1px;
    background: linear-gradient(90deg, var(--border), transparent);
    margin-bottom: 1rem;
  }

  .pj-section { margin-bottom: 0.85rem; }
  .pj-section-label {
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 500;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gold-dim);
    margin-bottom: 0.35rem;
  }
  .pj-section-body {
    font-family: var(--font-ui);
    font-size: 13px;
    font-weight: 400;
    line-height: 1.72;
    color: var(--text-secondary);
  }

  .pj-tech-row {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin: 1rem 0 1.2rem;
  }
  .pj-tech-tag {
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 500;
    padding: 3px 10px;
    border-radius: 5px;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.08);
    color: var(--text-secondary);
    letter-spacing: 0.04em;
    transition: border-color 0.22s var(--ease), color 0.22s var(--ease);
  }
  .pj-card:hover .pj-tech-tag {
    border-color: rgba(201,168,76,0.22);
    color: rgba(237,233,223,0.75);
  }

  .pj-card-footer {
    margin-top: auto;
    padding-top: 1.1rem;
    border-top: 1px solid var(--border);
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .pj-footer-dot { width:3px; height:3px; border-radius:50%; background:var(--text-muted); }
  .pj-link {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-family: var(--font-ui);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    text-decoration: none;
    transition: color 0.2s, opacity 0.2s;
  }
  .pj-link.primary       { color: var(--gold); }
  .pj-link.primary:hover { color: #dfc06a; }
  .pj-link.ghost         { color: var(--text-secondary); }
  .pj-link.ghost:hover   { color: var(--text-primary); }

  /* ── Scrollbar ── */
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: var(--bg-deep); }
  ::-webkit-scrollbar-thumb { background: var(--border-hover); border-radius: 2px; }
  ::-webkit-scrollbar-thumb:hover { background: rgba(201,168,76,0.45); }

  ::selection { background: rgba(201,168,76,0.22); color: var(--text-primary); }

  /* ── Responsive ── */
  @media (max-width: 768px) {
    .pj-wrap { padding: 3.5rem 1.25rem 5rem; }
    .pj-title { font-size: clamp(2.8rem, 12vw, 5rem); }
    .pj-stats { flex-direction: column; border-radius: 12px; }
    .pj-stat + .pj-stat { border-left: none; border-top: 1px solid var(--border); }
    .pj-stat { padding: 0.9rem 2rem; flex-direction: row; justify-content: space-between; align-items: center; }
    .pj-stat-num { font-size: 2rem; }
  }
  @media (max-width: 480px) {
    .pj-title { font-size: 2.6rem; }
    .pj-grid  { grid-template-columns: 1fr; }
    .pj-desc  { font-size: 14px; }
  }
`;

/* ─────────────────────────────────────────
   PROJECT CARD
───────────────────────────────────────── */
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  const sc = project.status.toLowerCase();

  return (
    <div
      ref={cardRef}
      className={`pj-card ${sc}`}
      style={{ animationDelay: `${index * 85}ms` }}
      onMouseMove={handleMouseMove}
    >
      <div className="pj-card-spotlight" />
      <div className="pj-card-inner">

        <div className="pj-card-top">
          <span className="pj-card-num">{project.num}</span>
          <span className={`pj-status ${sc}`}>
            {project.status === "Live" && <span className="pj-live-dot" />}
            {project.status}
          </span>
        </div>

        <h3 className="pj-card-title">{project.title}</h3>
        <div className="pj-rule" />

        <div className="pj-section">
          <p className="pj-section-label">Problem</p>
          <p className="pj-section-body">{project.problem}</p>
        </div>

        <div className="pj-section">
          <p className="pj-section-label">Solution</p>
          <p className="pj-section-body">{project.solution}</p>
        </div>

        <div className="pj-tech-row">
          {project.techStack.map((tech) => (
            <span key={tech} className="pj-tech-tag">{tech}</span>
          ))}
        </div>

        <div className="pj-card-footer">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="pj-link primary"
          >
            <ExternalLink size={12} />
            {project.status === "Planned" ? "Preview" : "Live Demo"}
          </a>
          <span className="pj-footer-dot" />
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="pj-link ghost"
          >
            <Github size={12} />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────── */
export function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 40);
    return () => clearTimeout(t);
  }, []);

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.status === activeFilter);

  const liveCount = projects.filter((p) => p.status === "Live").length;

  return (
    <>
      <style>{CSS}</style>

      <div className={`pj-root${mounted ? " in" : ""}`}>
        {/* Orbs only — no grid overlay */}
        <div className="pj-orb pj-orb-a" />
        <div className="pj-orb pj-orb-b" />
        <div className="pj-orb pj-orb-c" />

        <div className="pj-wrap">

          {/* ── Header — centered ── */}
          <header className="pj-header">
            <div className="pj-eyebrow">
              <span className="pj-eyebrow-bar" />
              <span className="pj-eyebrow-text">Selected Work</span>
              <span className="pj-eyebrow-bar right" />
            </div>

            <h1 className="pj-title">
              Projects
              <br />
              <em>&amp; Builds</em>
            </h1>

            <p className="pj-desc">
              A curated set of web development and cybersecurity projects —
              from interactive Islamic platforms to encryption tools — crafted
              with a focus on clarity, security, and real-world usefulness.
            </p>

            <div className="pj-stats">
              {[
                { num: String(projects.length), label: "Projects" },
                { num: String(liveCount),        label: "Live" },
                { num: "8+",                     label: "Technologies" },
              ].map(({ num, label }) => (
                <div key={label} className="pj-stat">
                  <span className="pj-stat-num">{num}</span>
                  <span className="pj-stat-label">{label}</span>
                </div>
              ))}
            </div>
          </header>

          {/* ── Filters — centered ── */}
          <div className="pj-filters">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`pj-filter-btn${activeFilter === f ? " active" : ""}`}
              >
                {f}
                {f !== "All" && (
                  <span className="pj-filter-count">
                    {projects.filter((p) => p.status === f).length}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* ── Cards ── */}
          <div className="pj-grid">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>

        </div>
      </div>
    </>
  );
}
