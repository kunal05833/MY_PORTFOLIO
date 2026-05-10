import { useScrollReveal } from '../hooks/useScrollReveal'

function FadeIn({ children, delay = 0, from = 'bottom' }) {
  const { ref, isVisible } = useScrollReveal(0.08)

  const xforms = {
    bottom: 'translateY(36px)',
    left: 'translateX(-36px)',
    right: 'translateX(36px)',
  }

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0,0)' : xforms[from],
        transition: 'opacity 0.65s ease, transform 0.65s ease',
      }}
    >
      {children}
    </div>
  )
}

/* ───────────────────────────── */
/* PROJECT IMAGE PANELS */
/* ───────────────────────────── */

const RecruitmentImage = () => (
  <div
    className="w-full h-full relative overflow-hidden"
    style={{
      background:
        'linear-gradient(135deg,#0f172a 0%,#111827 45%,#1e293b 100%)',
    }}
  >
    <div className="absolute inset-0 opacity-10 grid-bg" />

    <div className="absolute top-4 left-4">
      <div className="text-cyan-300 font-black text-[14px]">
        AI Recruitment System
      </div>

      <div className="text-[10px] text-slate-300">
        Resume Screening & AI Hiring
      </div>
    </div>

    <div className="absolute bottom-4 left-4 right-4 bg-[#111827]/70 rounded-xl border border-cyan-400/20 p-3">
      <div className="space-y-2">
        <div className="h-2 bg-cyan-400/30 rounded w-full" />
        <div className="h-2 bg-cyan-400/20 rounded w-3/4" />
        <div className="h-2 bg-cyan-400/10 rounded w-1/2" />
      </div>

      <div className="mt-3 flex gap-2">
        <div className="px-2 py-1 rounded bg-cyan-500/20 text-[9px] text-cyan-300">
          AI Match
        </div>

        <div className="px-2 py-1 rounded bg-green-500/20 text-[9px] text-green-300">
          ATS
        </div>
      </div>
    </div>
  </div>
)

const HMSImage = () => (
  <div
    className="w-full h-full relative overflow-hidden"
    style={{
      background:
        'linear-gradient(135deg,#1e3a8a 0%,#2563eb 45%,#0ea5e9 100%)',
    }}
  >
    <div className="absolute inset-0 opacity-10 grid-bg" />

    <div className="absolute top-4 left-4">
      <div className="text-white font-black text-[14px]">
        AI Powered HMS
      </div>

      <div className="text-[10px] text-blue-100">
        Hospital Management System
      </div>
    </div>

    <div className="absolute bottom-4 left-4 right-4 bg-[#0f172a]/60 rounded-xl border border-white/10 p-3">
      <div className="grid grid-cols-2 gap-2">
        <div className="h-10 rounded-lg bg-blue-400/20 flex items-center justify-center text-[10px] text-blue-200">
          Patients
        </div>

        <div className="h-10 rounded-lg bg-cyan-400/20 flex items-center justify-center text-[10px] text-cyan-200">
          Doctors
        </div>

        <div className="h-10 rounded-lg bg-green-400/20 flex items-center justify-center text-[10px] text-green-200">
          Appointments
        </div>

        <div className="h-10 rounded-lg bg-violet-400/20 flex items-center justify-center text-[10px] text-violet-200">
          Admin
        </div>
      </div>
    </div>
  </div>
)

const ChatbotImage = () => (
  <div
    className="w-full h-full relative overflow-hidden"
    style={{
      background:
        'linear-gradient(135deg,#020617 0%,#0f172a 50%,#111827 100%)',
    }}
  >
    <div className="absolute inset-0 opacity-10 grid-bg" />

    <div className="absolute top-4 left-4">
      <div className="text-emerald-300 font-black text-[14px]">
        GPT Style AI Chatbot
      </div>

      <div className="text-[10px] text-slate-300">
        AI Conversation Interface
      </div>
    </div>

    <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-emerald-400/20 bg-[#111827]/70 p-3">
      <div className="space-y-2">
        <div className="ml-auto w-3/4 h-5 rounded-lg bg-emerald-500/20" />
        <div className="w-full h-5 rounded-lg bg-slate-700/40" />
        <div className="ml-auto w-1/2 h-5 rounded-lg bg-emerald-500/20" />
      </div>
    </div>
  </div>
)

const PortfolioImage = () => (
  <div
    className="w-full h-full relative overflow-hidden"
    style={{
      background:
        'linear-gradient(135deg,#111827 0%,#1e293b 50%,#0f172a 100%)',
    }}
  >
    <div className="absolute inset-0 opacity-10 grid-bg" />

    <div className="absolute top-4 left-4">
      <div className="text-violet-300 font-black text-[14px]">
        Modern Portfolio
      </div>

      <div className="text-[10px] text-slate-300">
        UI/UX + Animation Design
      </div>
    </div>

    <div className="absolute bottom-4 left-4 right-4 flex gap-2">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="flex-1 h-20 rounded-xl border border-white/10 bg-white/5"
        />
      ))}
    </div>
  </div>
)

/* ───────────────────────────── */
/* PROJECTS */
/* ───────────────────────────── */

const projects = [
  {
    id: 1,
    title: 'AI Powered Recruitment System',
    sub: 'Smart Hiring Platform',

    desc:
      'An AI-powered recruitment platform that helps companies shortlist candidates automatically using resume analysis, AI matching, candidate ranking, and smart filtering systems.',

    tags: [
      '#ReactJS',
      '#SpringBoot',
      '#Firebase',
      '#AI',
      '#Recruitment',
    ],

    accent: '#00d4ff',
    dot: '#00d4ff',

    Image: RecruitmentImage,
    flip: false,
  },

  {
    id: 2,
    title: 'AI Powered Hospital Management System',
    sub: 'Full Stack Healthcare Platform',

    desc:
      'A modern hospital management system featuring doctor and patient login, appointment booking, admin dashboard, Firebase authentication, role-based access, and AI-powered features.',

    tags: [
      '#ReactJS',
      '#Firebase',
      '#SpringBoot',
      '#RoleBasedAuth',
      '#HMS',
    ],

    accent: '#3b82f6',
    dot: '#3b82f6',

    Image: HMSImage,
    flip: true,
  },

  {
    id: 3,
    title: 'GPT Style AI Chatbot',
    sub: 'AI Conversation Platform',

    desc:
      'A ChatGPT-inspired AI chatbot application with markdown rendering, dark/light mode, chat history, code formatting, AI responses, and a modern interactive interface.',

    tags: [
      '#ReactJS',
      '#AI',
      '#OpenAI',
      '#Chatbot',
      '#TailwindCSS',
    ],

    accent: '#10b981',
    dot: '#10b981',

    Image: ChatbotImage,
    flip: false,
  },

  {
    id: 4,
    title: 'Modern Animated Portfolio',
    sub: 'Personal Branding Website',

    desc:
      'A premium portfolio website with advanced animations, glassmorphism UI, responsive layouts, smooth transitions, and a futuristic modern design built using React and Tailwind CSS.',

    tags: [
      '#Portfolio',
      '#UIUX',
      '#ReactJS',
      '#TailwindCSS',
      '#Animations',
    ],

    accent: '#a855f7',
    dot: '#a855f7',

    Image: PortfolioImage,
    flip: true,
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-[#00d4ff1a] to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto px-6">

        <FadeIn>
          <h2 className="section-title">
            Latest{' '}
            <span className="highlight">
              Works
            </span>
          </h2>

          <div className="underline-glow" />
        </FadeIn>

        {/* Timeline */}
        <div className="relative mt-4">

          {/* Center Line */}
          <div
            className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1.5px]"
            style={{
              background:
                'linear-gradient(to bottom,transparent 0%,rgba(255,255,255,0.12) 8%,rgba(255,255,255,0.12) 92%,transparent 100%)',
            }}
          />

          {projects.map((p) => (
            <div
              key={p.id}
              className="relative mb-20 last:mb-0"
            >

              {/* Dot */}
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{
                    background: p.dot,
                    boxShadow: `0 0 10px ${p.dot}, 0 0 20px ${p.dot}60`,
                    border: `2px solid ${p.dot}70`,
                  }}
                />
              </div>

              <div
                className={`flex flex-col md:flex-row items-center gap-6 md:gap-0 ${
                  p.flip ? 'md:flex-row-reverse' : ''
                }`}
              >

                {/* IMAGE */}
                <div
                  className={`w-full md:w-[48%] ${
                    p.flip ? 'md:pl-10' : 'md:pr-10'
                  }`}
                >
                  <FadeIn
                    from={p.flip ? 'right' : 'left'}
                    delay={80}
                  >
                    <div
                      className="rounded-2xl overflow-hidden h-[210px] group transition-all duration-300"
                      style={{
                        border: `1px solid ${p.accent}28`,
                      }}
                    >
                      <p.Image />
                    </div>
                  </FadeIn>
                </div>

                <div className="hidden md:block w-[4%] shrink-0" />

                {/* TEXT */}
                <div
                  className={`w-full md:w-[48%] ${
                    p.flip ? 'md:pr-10' : 'md:pl-10'
                  }`}
                >
                  <FadeIn
                    from={p.flip ? 'left' : 'right'}
                    delay={140}
                  >
                    <div className="space-y-3">

                      <div>
                        <h3
                          className="text-[1.25rem] md:text-[1.35rem] font-bold font-mono leading-snug"
                          style={{ color: p.accent }}
                        >
                          {p.title}
                        </h3>

                        <p
                          className="text-[12px] mt-0.5 font-mono"
                          style={{
                            color: p.accent,
                            opacity: 0.75,
                          }}
                        >
                          {p.sub}
                        </p>
                      </div>

                      <p className="text-slate-400 text-[0.87rem] leading-[1.7]">
                        {p.desc}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-1">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="text-[11px] px-2.5 py-0.5 rounded-full font-mono"
                            style={{
                              background: `${p.accent}12`,
                              color: p.accent,
                              border: `1px solid ${p.accent}30`,
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                    </div>
                  </FadeIn>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <FadeIn delay={80}>
          <div
            className="mt-10 mx-auto max-w-xl rounded-2xl p-6"
            style={{
              background: 'rgba(13,21,38,0.88)',
              border:
                '1px solid rgba(0,212,255,0.1)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <p className="text-[13px] text-slate-300 leading-[1.75] text-center">

              <span className="text-[#00d4ff] font-semibold">
                Development Journey:
              </span>{' '}

              Alongside these major projects, I have also built
              multiple practice applications including calculators,
              UI clones, authentication systems, dashboards,
              animations, and responsive websites to continuously
              improve my frontend, backend, and AI integration skills.

            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  )
}