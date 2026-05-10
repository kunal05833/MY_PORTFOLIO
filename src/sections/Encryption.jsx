import { useState, useEffect } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { Lock, Shield, Eye, Cpu } from 'lucide-react'

function FadeIn({ children, delay = 0 }) {
  const { ref, isVisible } = useScrollReveal()
  return (
    <div ref={ref} style={{
      transitionDelay: `${delay}ms`,
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
      transition: 'opacity 0.6s ease, transform 0.6s ease',
    }}>
      {children}
    </div>
  )
}

function AnimatedBinary() {
  const [chars, setChars] = useState(() =>
    Array.from({ length: 60 }, () => Math.random() > 0.5 ? '1' : '0')
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setChars(prev => prev.map(c => Math.random() > 0.85 ? (c === '1' ? '0' : '1') : c))
    }, 200)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none select-none">
      <div className="flex flex-wrap gap-2 p-4 font-mono text-xs text-[#00d4ff]">
        {chars.map((c, i) => (
          <span key={i} className="transition-opacity duration-300">{c}</span>
        ))}
      </div>
    </div>
  )
}

export default function Encryption() {
  const [unlocked, setUnlocked] = useState(false)

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00d4ff20] to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00d4ff03] to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center">
        <FadeIn>
          <div className="glass-card rounded-3xl p-10 md:p-16 relative overflow-hidden border border-[#00d4ff15]"
            style={{ boxShadow: '0 0 60px rgba(0,212,255,0.05)' }}>

            <AnimatedBinary />

            {/* Lock icon */}
            <button
              className="relative z-10 mx-auto mb-6 w-20 h-20 rounded-full flex items-center justify-center transition-all duration-500 group"
              style={{
                background: unlocked ? 'rgba(16,185,129,0.15)' : 'rgba(0,212,255,0.1)',
                border: `2px solid ${unlocked ? '#10b981' : '#00d4ff'}40`,
                boxShadow: unlocked ? '0 0 30px rgba(16,185,129,0.3)' : '0 0 30px rgba(0,212,255,0.15)',
              }}
              onClick={() => setUnlocked(u => !u)}
            >
              <Lock
                size={32}
                className="transition-all duration-500"
                style={{
                  color: unlocked ? '#10b981' : '#00d4ff',
                  transform: unlocked ? 'rotate(-15deg)' : 'rotate(0deg)',
                }}
              />
            </button>

            <FadeIn delay={100}>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {unlocked ? 'Access Granted' : 'Encryption'}
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed max-w-lg mx-auto mb-8">
                Securing your data with advanced encryption algorithms. Every solution I build prioritizes security from the ground up — implementing AES-256, TLS, and OWASP best practices.
              </p>
            </FadeIn>

            <button
              className={`relative z-10 px-8 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                unlocked ? 'bg-[#10b981] text-white shadow-[0_0_20px_#10b98140]' : 'btn-primary'
              }`}
              onClick={() => setUnlocked(u => !u)}
            >
              {unlocked ? '🔓 Unlocked' : '🔒 Encrypt'}
            </button>

            {/* Feature row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
              {[
                { icon: Shield, label: 'AES-256', sub: 'Encryption' },
                { icon: Lock, label: 'TLS/SSL', sub: 'Secure Transport' },
                { icon: Eye, label: 'OWASP', sub: 'Security Guidelines' },
                { icon: Cpu, label: 'Zero Trust', sub: 'Architecture' },
              ].map(({ icon: Icon, label, sub }) => (
                <div key={label} className="glass-card rounded-xl p-3 border border-[#00d4ff10]">
                  <Icon size={18} className="text-[#00d4ff] mx-auto mb-1" />
                  <div className="text-xs font-bold text-white">{label}</div>
                  <div className="text-[10px] text-slate-500">{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
