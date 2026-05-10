import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

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

const faqs = [
  {
    q: 'What technologies do you specialize in?',
    a: 'I specialize in React.js, JavaScript, Spring Boot, Firebase, Tailwind CSS, and modern full-stack web development. I also work with REST APIs, MySQL, UI/UX design, and AI integrations.',
  },

  {
    q: 'What kind of projects have you built?',
    a: 'I have built hospital management systems, AI chatbot applications, modern portfolio websites, appointment booking platforms, Firebase authentication systems, and responsive full-stack web applications.',
  },

  {
    q: 'Do you have backend development experience?',
    a: 'Yes. I work with Spring Boot, Firebase, REST APIs, authentication systems, role-based access, and database integration using MySQL and Firestore.',
  },

  {
    q: 'Do you work with AI technologies?',
    a: 'Yes. I integrate AI APIs, work on prompt engineering, build AI chatbot interfaces, and create AI-powered web experiences using modern tools and APIs.',
  },

  {
    q: 'Are your websites mobile responsive?',
    a: 'Absolutely. I follow a mobile-first development approach using Tailwind CSS to ensure responsive layouts across phones, tablets, and desktops.',
  },

  {
    q: 'What is your UI/UX design approach?',
    a: 'I focus on clean layouts, smooth animations, modern glassmorphism effects, responsive design, and user-friendly interfaces that create premium user experiences.',
  },

  {
    q: 'How do you ensure code quality?',
    a: 'I use reusable components, proper folder structures, clean coding practices, responsive testing, optimized rendering, and scalable architecture while building applications.',
  },

  {
    q: 'Do you use version control and deployment tools?',
    a: 'Yes. I use Git and GitHub for version control and work with deployment platforms like Firebase Hosting, Vercel, and Netlify.',
  },

  {
    q: 'What are you currently learning?',
    a: 'Currently, I am improving my backend architecture skills, advanced React development, AI integrations, and scalable full-stack application development.',
  },
]

function AccordionItem({ item, isOpen, onToggle, delay }) {
  return (
    <FadeIn delay={delay}>
      <div
        className={`glass-card rounded-xl overflow-hidden mb-3 transition-all duration-300 ${
          isOpen ? 'border-[#00d4ff30]' : 'border-[#1a2a4a]'
        } border`}
        style={
          isOpen
            ? {
                boxShadow: '0 0 20px rgba(0,212,255,0.06)',
              }
            : {}
        }
      >
        <button
          className="w-full flex items-center justify-between px-5 py-4 text-left group"
          onClick={onToggle}
        >
          <span
            className={`text-sm font-medium transition-colors duration-200 ${
              isOpen
                ? 'text-[#00d4ff]'
                : 'text-slate-200 group-hover:text-[#00d4ff]'
            }`}
          >
            {item.q}
          </span>

          <div
            className="shrink-0 ml-4 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200"
            style={{
              background: isOpen
                ? 'rgba(0,212,255,0.15)'
                : 'rgba(255,255,255,0.05)',

              border: `1px solid ${
                isOpen ? '#00d4ff40' : '#ffffff15'
              }`,
            }}
          >
            {isOpen ? (
              <Minus size={12} className="text-[#00d4ff]" />
            ) : (
              <Plus size={12} className="text-slate-400" />
            )}
          </div>
        </button>

        <div
          style={{
            maxHeight: isOpen ? '300px' : '0',
            opacity: isOpen ? 1 : 0,
            overflow: 'hidden',
            transition: 'max-height 0.4s ease, opacity 0.3s ease',
          }}
        >
          <p className="px-5 pb-4 text-sm text-slate-400 leading-relaxed">
            {item.a}
          </p>
        </div>
      </div>
    </FadeIn>
  )
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null)

  const toggle = (i) => {
    setOpenIdx(openIdx === i ? null : i)
  }

  return (
    <section
      id="faq"
      className="py-24 relative overflow-hidden grid-bg"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#7c3aed20] to-transparent" />
      </div>

      <div className="max-w-3xl mx-auto px-6">

        <FadeIn>
          <h2 className="section-title">
            Technical{' '}
            <span className="highlight">
              Insights
            </span>
          </h2>

          <p className="text-center text-slate-500 text-sm mb-4 font-mono">
            Learn more about my development process,
            technologies, AI integrations, and how I
            build scalable modern web applications.
          </p>

          <div className="underline-glow" />
        </FadeIn>

        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            item={faq}
            isOpen={openIdx === i}
            onToggle={() => toggle(i)}
            delay={i * 50}
          />
        ))}

      </div>
    </section>
  )
}