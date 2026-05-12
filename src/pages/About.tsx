import {
  BrainCircuit,
  Briefcase,
  Code2,
  Database,
  GraduationCap,
  MapPin,
  ShieldCheck,
  Sparkles,
  Terminal,
  User,
  Zap,
} from 'lucide-react';

export function About() {
  const focusAreas = [
    {
      title: 'Secure Web Development',
      description: 'Building responsive web experiences while keeping structure, usability, and security in the same conversation.',
      icon: Code2,
    },
    {
      title: 'Cybersecurity Practice',
      description: 'Hands-on exposure to anti-cryptojacking tools, network safety, malware prevention, and vulnerability awareness.',
      icon: ShieldCheck,
    },
    {
      title: 'Programming Fundamentals',
      description: 'Strong foundation in C++, Java OOP, C, data structures, SQL queries, and practical problem solving.',
      icon: Terminal,
    },
    {
      title: 'AI Curiosity',
      description: 'Exploring AI concepts and modern tools like Claude AI to understand intelligent systems and productivity workflows.',
      icon: BrainCircuit,
    },
  ];

  const skillGroups = [
    {
      title: 'Languages',
      icon: Code2,
      skills: ['C++', 'Java OOP', 'C', 'Python Basics', 'JavaScript', 'PHP Basics'],
    },
    {
      title: 'Web & UI',
      icon: Sparkles,
      skills: ['HTML', 'CSS', 'React', 'Tailwind CSS', 'Responsive Design'],
    },
    {
      title: 'Data & Tools',
      icon: Database,
      skills: ['MySQL', 'SQL Queries', 'GitHub', 'VS Code', 'MS Office'],
    },
    {
      title: 'Security',
      icon: ShieldCheck,
      skills: ['Cybersecurity Basics', 'Ethical Hacking', 'Anti-Cryptojacking', 'Network Safety'],
    },
  ];

  const milestones = [
    {
      period: '2023 - 2027',
      title: 'B.Tech Information Technology Engineering',
      place: 'Baba Ghulam Shah Badshah University, Rajouri',
    },
    {
      period: 'Jan 2025 - Mar 2025',
      title: 'Cybersecurity Intern',
      place: 'Cyber Gyan, C-DAC Noida',
    },
    {
      period: 'Jun 2025 - Aug 2025',
      title: 'Summer School Intern - Cybersecurity',
      place: 'IIT Jammu, I3C Lab with Techible',
    },
  ];

  const stats = [
    { value: '2027', label: 'B.Tech IT Graduation' },
    { value: '2+', label: 'Cybersecurity Trainings' },
    { value: '10+', label: 'Practical Web Projects' },
  ];

  return (
    <section className="about-page">
      <div className="about-bg-grid" />
      <div className="about-aurora about-aurora-one" />
      <div className="about-aurora about-aurora-two" />

      <div className="about-wrap">
        <div className="about-hero">
          <div className="about-copy about-reveal">
            <div className="about-eyebrow">
              <Sparkles size={16} />
              Information Technology Engineer
            </div>

            <h1>
              Building secure digital products with a developer's craft and a security mindset.
            </h1>

            <p className="about-lead">
              I am Zaheer Ahmed, a B.Tech Information Technology Engineering student from Poonch,
              Jammu & Kashmir. My work combines programming fundamentals, web development,
              databases, and practical cybersecurity exposure from C-DAC Noida and IIT Jammu.
            </p>

            <div className="about-actions">
              <a href="/Assets/Zaheer's CV.pdf" className="about-primary-action">
                Download CV
              </a>
              <a href="mailto:zaheerahmed.ite@gmail.com" className="about-secondary-action">
                Contact Me
              </a>
            </div>

            <div className="about-stats">
              {stats.map((item) => (
                <div key={item.label} className="about-stat">
                  <span>{item.value}</span>
                  <p>{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="about-stage about-reveal about-reveal-delay">
            <div className="about-profile-3d">
              <div className="about-orbit about-orbit-a">
                <ShieldCheck size={18} />
              </div>
              <div className="about-orbit about-orbit-b">
                <Terminal size={18} />
              </div>
              <div className="about-orbit about-orbit-c">
                <Database size={18} />
              </div>

              <div className="about-photo-card">
                <div className="about-photo-frame">
                  <img
                    src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjH2wRGtw2cwFNWkLnjJWmuk-BjeOo1dpbUpI48xvsJahBGUk6TS_KEEguCto-8Cbszm17uGivHoZGabEoefEiX0PVgUPw5zHnskSxEVI04PYo-LSPHdGPGGj7MbUT7_nvGjqhfAeXSfC8QxrAx-k7hqEf3YVcBUtJx7wzsvZGCIAwksp78jQdc6jZwHfoX/s463/zaheer.jpeg"
                    alt="Zaheer Ahmed"
                    onError={(e) => {
                      const fallback = e.currentTarget.nextElementSibling as HTMLElement | null;
                      e.currentTarget.style.display = 'none';
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div className="about-photo-fallback">
                    <User size={72} />
                  </div>
                </div>
                <div className="about-floating-badge">
                  <span />
                  Open to internships
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-info-strip about-reveal">
          <div>
            <MapPin size={18} />
            <span>Poonch, J&K, India</span>
          </div>
          <div>
            <GraduationCap size={18} />
            <span>B.Tech IT, BGSBU Rajouri</span>
          </div>
          <div>
            <Briefcase size={18} />
            <span>Cybersecurity and secure development focus</span>
          </div>
        </div>

        <div className="about-section-head">
          <span>Focus Areas</span>
          <h2>What I am building toward</h2>
        </div>

        <div className="about-focus-grid">
          {focusAreas.map((item, index) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="about-tilt-card" style={{ animationDelay: `${index * 90}ms` }}>
                <div className="about-card-shine" />
                <div className="about-card-icon">
                  <Icon size={24} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            );
          })}
        </div>

        <div className="about-lower-grid">
          <section className="about-panel about-reveal">
            <div className="about-section-head compact">
              <span>Technical Stack</span>
              <h2>Skills from the CV</h2>
            </div>

            <div className="about-skill-groups">
              {skillGroups.map((group) => {
                const Icon = group.icon;
                return (
                  <div key={group.title} className="about-skill-group">
                    <div className="about-skill-title">
                      <Icon size={18} />
                      <h3>{group.title}</h3>
                    </div>
                    <div className="about-chips">
                      {group.skills.map((skill) => (
                        <span key={skill}>{skill}</span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <aside className="about-panel about-timeline-panel about-reveal about-reveal-delay">
            <div className="about-section-head compact">
              <span>Timeline</span>
              <h2>Education and experience</h2>
            </div>

            <div className="about-timeline">
              {milestones.map((item) => (
                <div key={`${item.period}-${item.title}`} className="about-timeline-item">
                  <span className="about-dot" />
                  <p>{item.period}</p>
                  <h3>{item.title}</h3>
                  <span>{item.place}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>

        <div className="about-cta about-reveal">
          <div>
            <h2>Currently sharpening web development, SQL, and cybersecurity practice.</h2>
            <p>
              I am interested in internships, security-focused development work, and collaborative projects
              where I can keep improving through real systems and real feedback.
            </p>
          </div>
          <a href="/contact">Start a Conversation</a>
        </div>
      </div>
    </section>
  );
}
