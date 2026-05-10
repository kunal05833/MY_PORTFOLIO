import { useScrollReveal } from '../hooks/useScrollReveal'

/* =========================
   REACT ICONS
========================= */

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaFigma,
  FaJava,
  FaPalette,
  FaPencilRuler,
} from 'react-icons/fa'

import {
  SiJavascript,
  SiSpringboot,
  SiFirebase,
  SiRedux,
  SiTailwindcss,
  SiOpenai,
  SiPostman,
  SiClaude,
} from 'react-icons/si'

import { TbApi } from 'react-icons/tb'

function FadeIn({ children, delay = 0 }) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(28px)',
        transition: 'opacity 0.55s ease, transform 0.55s ease',
      }}
    >
      {children}
    </div>
  )
}

/* =========================
   REAL ICON COMPONENTS
========================= */

const ReactIcon = () => (
  <FaReact className="w-8 h-8 text-[#61DAFB]" />
)

const JsIcon = () => (
  <SiJavascript className="w-8 h-8 text-[#F7DF1E]" />
)

const JavaIcon = () => (
  <FaJava className="w-8 h-8 text-[#f89820]" />
)

const SpringIcon = () => (
  <SiSpringboot className="w-8 h-8 text-[#6DB33F]" />
)

const FirebaseIcon = () => (
  <SiFirebase className="w-8 h-8 text-[#FF9100]" />
)

const ReduxIcon = () => (
  <SiRedux className="w-8 h-8 text-[#764ABC]" />
)

const HtmlIcon = () => (
  <FaHtml5 className="w-8 h-8 text-[#E34F26]" />
)

const CssIcon = () => (
  <FaCss3Alt className="w-8 h-8 text-[#1572B6]" />
)

const TailwindIcon = () => (
  <SiTailwindcss className="w-8 h-8 text-[#06B6D4]" />
)

/* =========================
   UI/UX ICONS
========================= */

const FigmaIcon = () => (
  <FaFigma className="w-8 h-8 text-[#A259FF]" />
)

const UiIcon = () => (
  <FaPalette className="w-8 h-8 text-[#ec4899]" />
)

const UxIcon = () => (
  <FaPencilRuler className="w-8 h-8 text-[#8b5cf6]" />
)

const PsIcon = () => (
  <div
    className="w-9 h-9 rounded-xl flex items-center justify-center text-[11px] font-bold text-[#31A8FF]"
    style={{
      background:
        'linear-gradient(145deg, rgba(49,168,255,0.18), rgba(0,0,0,0.2))',
      border: '1px solid rgba(49,168,255,0.4)',
      boxShadow: '0 0 15px rgba(49,168,255,0.25)',
    }}
  >
    Ps
  </div>
)

/* =========================
   AI / API ICONS
========================= */

const AiIcon = () => (
  <SiOpenai className="w-8 h-8 text-[#10A37F]" />
)

const ClaudeIcon = () => (
  <SiClaude className="w-8 h-8 text-[#D97706]" />
)

const ApiIcon = () => (
  <TbApi className="w-8 h-8 text-[#0ea5e9]" />
)

const PostmanIcon = () => (
  <SiPostman className="w-8 h-8 text-[#FF6C37]" />
)

const PromptIcon = () => (
  <div
    className="w-9 h-9 rounded-xl flex items-center justify-center text-[10px] font-bold text-white"
    style={{
      background:
        'linear-gradient(145deg, #7c3aed, #4f46e5)',
      boxShadow: '0 0 18px rgba(124,58,237,0.45)',
    }}
  >
    AI
  </div>
)

/* =========================
   CATEGORY DATA
========================= */

const categories = [
  {
    title: 'Frontend & Full Stack Development',
    color: '#00d4ff',
    border: '#00d4ff22',
    sub: 'Building scalable and responsive web applications using modern frontend and backend technologies.',
    rows: [
      [
        { n: 'React.js', C: ReactIcon },
        { n: 'JavaScript', C: JsIcon },
        { n: 'Java', C: JavaIcon },
        { n: 'Spring Boot', C: SpringIcon },
      ],
      [
        { n: 'Firebase', C: FirebaseIcon },
        { n: 'Redux', C: ReduxIcon },
        { n: 'HTML5', C: HtmlIcon },
        { n: 'CSS3', C: CssIcon },
      ],
    ],
  },

  {
    title: 'UI/UX & Creative Designing',
    color: '#f472b6',
    border: '#f472b622',
    sub: 'Designing modern, user-friendly and visually engaging interfaces with strong UI/UX principles.',
    rows: [
      [
        { n: 'Figma', C: FigmaIcon },
        { n: 'UI Design', C: UiIcon },
        { n: 'UX Research', C: UxIcon },
        { n: 'Photoshop', C: PsIcon },
      ],
      [{ n: 'Tailwind CSS', C: TailwindIcon }],
    ],
  },

  {
    title: 'AI, APIs & Smart Integrations',
    color: '#10b981',
    border: '#10b98122',
    sub: 'Working with AI tools, prompt engineering and REST APIs for intelligent application development.',
    rows: [
      [
        { n: 'OpenAI', C: AiIcon },
        { n: 'Claude AI', C: ClaudeIcon },
        { n: 'REST APIs', C: ApiIcon },
        { n: 'Postman', C: PostmanIcon },
      ],
      [
        { n: 'Prompt Engineering', C: PromptIcon },
      ],
    ],
  },
]

/* =========================
   ICON TILE
========================= */

function IconTile({ n, C, color }) {
  return (
    <div className="group relative flex flex-col items-center gap-2">
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-default"
        style={{
          background:
            'linear-gradient(145deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))',
          border: '1px solid rgba(255,255,255,0.08)',
          backdropFilter: 'blur(12px)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = `${color}60`
          e.currentTarget.style.boxShadow = `0 0 20px ${color}35`
          e.currentTarget.style.transform =
            'translateY(-4px) scale(1.08)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor =
            'rgba(255,255,255,0.08)'
          e.currentTarget.style.boxShadow = 'none'
          e.currentTarget.style.transform =
            'translateY(0) scale(1)'
        }}
      >
        <C />
      </div>

      <span className="text-[10px] text-slate-400 font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 absolute -bottom-5 whitespace-nowrap">
        {n}
      </span>
    </div>
  )
}

/* =========================
   MAIN COMPONENT
========================= */

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 relative overflow-hidden grid-bg"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-[#00d4ff1a] to-transparent" />

        <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-[#7c3aed1a] to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <h2 className="section-title">
            Explore My <span className="highlight">Skills</span>
          </h2>

          <p className="text-center text-slate-500 text-sm mb-2 font-mono">
            Technologies and tools I use to build modern full stack and AI-powered web applications.
          </p>

          <div className="underline-glow" />
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {categories.map((cat, ci) => (
            <FadeIn key={cat.title} delay={ci * 120}>
              <div
                className="rounded-3xl p-7 h-full transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: 'rgba(13,21,38,0.88)',
                  border: `1px solid ${cat.border}`,
                  backdropFilter: 'blur(14px)',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.25)',
                }}
              >
                <h3
                  className="font-bold text-[15px] font-mono mb-2 leading-snug"
                  style={{ color: cat.color }}
                >
                  {cat.title}
                </h3>

                <p className="text-[13px] text-slate-500 mb-7 leading-relaxed">
                  {cat.sub}
                </p>

                <div className="flex flex-col gap-5">
                  {cat.rows.map((row, ri) => (
                    <div
                      key={ri}
                      className="flex gap-4 flex-wrap"
                    >
                      {row.map(({ n, C }) => (
                        <IconTile
                          key={n}
                          n={n}
                          C={C}
                          color={cat.color}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}