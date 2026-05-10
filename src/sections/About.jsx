import { useScrollReveal } from '../hooks/useScrollReveal'

const workExp = [
  {
    role: 'Full Stack Java Developer',
    company: 'Personal & Freelance Projects',
    period: 'Present',
    color: '#00d4ff',
    bullets: [
      'Developing scalable full stack web applications using Java, Spring Boot, React.js and Firebase',
      'Building responsive UI with modern frontend technologies including React, JavaScript, HTML and CSS',
      'Integrating REST APIs, authentication systems, Firestore databases and role-based access control',
      'Working with AI-powered features, prompt engineering concepts and API integrations for smart applications',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Academic & Training Projects',
    period: '2024 - Present',
    color: '#a78bfa',
    bullets: [
      'Built hospital management systems with appointment booking, admin panels and patient management',
      'Created modern and optimized user interfaces with reusable React components and Redux state management',
      'Implemented backend connectivity using Spring Boot, Firebase and RESTful APIs',
      'Focused on performance optimization, clean UI/UX and real-world project architecture',
    ],
  },
]

const education = [
  {
    degree: 'B.Tech - Computer Science Engineering',
    institution: 'Medi-Caps University, Indore',
    period: '2023 - Present',
  },
  {
    degree: 'Class 12th - 82%',
    institution: 'Higher Secondary Education',
    period: '2022 - 2023',
  },
  {
    degree: 'Class 10th - 90%',
    institution: 'Secondary Education',
    period: '2020 - 2021',
  },
]

const certs = [
  {
    name: 'Java Full Stack Development with Spring Boot',
    org: 'The Prime Step, Indore',
  },
  {
    name: 'React.js Frontend Development',
    org: 'The Prime Step, Indore',
  },
  {
    name: 'API Integration & Modern Web Development',
    org: 'Self Learning & Project Based Experience',
  },
]

const summaryCards = [
  {
    icon: '⚡',
    title: 'Full Stack Development',
    desc: 'Building scalable and responsive full stack applications using React.js, Java and Spring Boot.',
    color: '#00d4ff',
    bg: '#00d4ff10',
  },
  {
    icon: '🤖',
    title: 'AI & Prompt Engineering',
    desc: 'Exploring AI tools, prompt engineering, intelligent workflows and API-based AI integrations.',
    color: '#10b981',
    bg: '#10b98110',
  },
  {
    icon: '🔗',
    title: 'Backend & APIs',
    desc: 'Experience with REST APIs, Firebase, Spring Boot, authentication systems and database integration.',
    color: '#a78bfa',
    bg: '#a78bfa10',
  },
  {
    icon: '💡',
    title: 'Problem Solving',
    desc: 'Passionate about creating clean, optimized and user-focused software solutions for real-world problems.',
    color: '#f59e0b',
    bg: '#f59e0b10',
  },
]

function FadeIn({ children, delay = 0 }) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
      }}
    >
      {children}
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00d4ff20] to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <FadeIn>
          <h2 className="section-title">
            About My <span className="highlight">Journey</span>
          </h2>
          <div className="underline-glow" />
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* LEFT SIDE */}
          <div>
            {/* Work Experience */}
            <FadeIn delay={100}>
              <h3 className="text-lg font-bold text-[#00d4ff] mb-6 font-mono flex items-center gap-2">
                <span className="w-4 h-4 rounded-sm bg-[#00d4ff20] border border-[#00d4ff40] flex items-center justify-center text-[10px]">
                  ⚙
                </span>
                Work Experience
              </h3>
            </FadeIn>

            <div className="relative pl-6 border-l border-[#1a2a4a]">
              {workExp.map((job, i) => (
                <FadeIn key={job.role} delay={150 + i * 100}>
                  <div className="mb-8 relative group">
                    {/* Timeline Dot */}
                    <div
                      className="absolute -left-[25px] top-2 w-3 h-3 rounded-full dot-pulse"
                      style={{
                        background: job.color,
                        boxShadow: `0 0 8px ${job.color}`,
                      }}
                    />

                    <div className="glass-card rounded-xl p-5 glow-border transition-all duration-300">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-bold text-white text-sm">
                            {job.role}
                          </h4>

                          <p className="text-xs text-slate-500 mt-0.5">
                            {job.company}
                          </p>
                        </div>

                        <span
                          className="text-xs px-2 py-0.5 rounded-full font-mono"
                          style={{
                            background: `${job.color}15`,
                            color: job.color,
                            border: `1px solid ${job.color}30`,
                          }}
                        >
                          {job.period}
                        </span>
                      </div>

                      <ul className="mt-3 space-y-1.5">
                        {job.bullets.map((b) => (
                          <li
                            key={b}
                            className="flex gap-2 text-xs text-slate-400"
                          >
                            <span className="text-[#00d4ff] mt-0.5 shrink-0">
                              ›
                            </span>
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Education */}
            <FadeIn delay={200}>
              <h3 className="text-lg font-bold text-[#a78bfa] mb-6 mt-8 font-mono flex items-center gap-2">
                <span className="w-4 h-4 rounded-sm bg-[#a78bfa20] border border-[#a78bfa40] flex items-center justify-center text-[10px]">
                  🎓
                </span>
                Education Background
              </h3>
            </FadeIn>

            <div className="relative pl-6 border-l border-[#1a2a4a]">
              {education.map((edu, i) => (
                <FadeIn key={edu.degree} delay={250 + i * 80}>
                  <div className="mb-6 relative group">
                    <div
                      className="absolute -left-[25px] top-2 w-3 h-3 rounded-full bg-[#a78bfa]"
                      style={{ boxShadow: '0 0 8px #a78bfa' }}
                    />

                    <div className="glass-card rounded-xl p-4 glow-border">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-bold text-white text-sm">
                            {edu.degree}
                          </h4>

                          <p className="text-xs text-slate-500 mt-0.5">
                            {edu.institution}
                          </p>
                        </div>

                        <span className="text-xs px-2 py-0.5 rounded-full font-mono bg-[#a78bfa15] text-[#a78bfa] border border-[#a78bfa30]">
                          {edu.period}
                        </span>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}

              {/* Certifications */}
              {certs.map((cert, i) => (
                <FadeIn key={cert.name} delay={400 + i * 80}>
                  <div className="mb-6 relative">
                    <div
                      className="absolute -left-[25px] top-2 w-3 h-3 rounded-full bg-[#10b981]"
                      style={{ boxShadow: '0 0 8px #10b981' }}
                    />

                    <div className="glass-card rounded-xl p-4 glow-border">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-bold text-white text-sm">
                            {cert.name}
                          </h4>

                          <p className="text-xs text-slate-500 mt-0.5">
                            {cert.org}
                          </p>
                        </div>

                        <span className="text-xs px-2 py-0.5 rounded-full font-mono bg-[#10b98115] text-[#10b981] border border-[#10b98130]">
                          Cert
                        </span>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div>
            <FadeIn delay={100}>
              <h3 className="text-lg font-bold text-[#00d4ff] mb-6 font-mono flex items-center gap-2">
                <span className="w-4 h-4 rounded-sm bg-[#00d4ff20] border border-[#00d4ff40] flex items-center justify-center text-[10px]">
                  {'{}'}
                </span>
                Professional Summary
              </h3>
            </FadeIn>

            {/* Intro */}
            <FadeIn delay={150}>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                Passionate Computer Science Engineering student at Medi-Caps
                University with hands-on experience in React.js, Java Full Stack
                Development and Spring Boot. Skilled in building modern web
                applications, REST APIs and AI-integrated solutions with a
                strong focus on clean UI, performance and real-world problem
                solving.
              </p>
            </FadeIn>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {summaryCards.map((card, i) => (
                <FadeIn key={card.title} delay={200 + i * 100}>
                  <div
                    className="rounded-xl p-5 glass-card glow-border h-full transition-all duration-300 hover:scale-[1.02] cursor-default"
                    style={{
                      background: card.bg,
                      borderColor: `${card.color}30`,
                    }}
                  >
                    <div className="text-2xl mb-3">{card.icon}</div>

                    <h4
                      className="font-bold text-sm mb-2"
                      style={{ color: card.color }}
                    >
                      {card.title}
                    </h4>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Hobbies */}
            <FadeIn delay={500}>
              <div className="glass-card rounded-xl p-5 glow-border">
                <h4 className="text-sm font-bold text-[#00d4ff] mb-4 font-mono">
                  My Interests
                </h4>

                <div className="flex flex-wrap gap-2">
                  {[
                    'Full Stack Development',
                    'AI Tools',
                    'Prompt Engineering',
                    'React Projects',
                    'Backend Development',
                    'Portrait Sketching',
                    'UI/UX Designing',
                  ].map((h) => (
                    <span key={h} className="tag text-xs">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}