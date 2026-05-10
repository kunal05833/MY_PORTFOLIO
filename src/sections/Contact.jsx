import { useState } from 'react'
import {
  Mail,
  MessageSquare,
  User,
  Send,
  MapPin,
  Github,
  Linkedin,
  Instagram,
} from 'lucide-react'

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

export default function Contact() {

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm((f) => ({
      ...f,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setSent(true)

    setTimeout(() => {
      setSent(false)
    }, 4000)

    setForm({
      name: '',
      email: '',
      message: '',
    })
  }

  return (
    <section
      id="contact"
      className="relative py-24 overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-cyan-500/5 rounded-full blur-[120px]" />

        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-violet-500/5 rounded-full blur-[120px]" />

      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <FadeIn>

          <div className="text-center mb-16">

            <p className="text-cyan-400 uppercase tracking-[0.3em] text-xs font-mono mb-3">
              CONTACT
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">

              Let's Work{' '}

              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Together
              </span>

            </h2>

            <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
              Have a project idea, freelance work, startup collaboration,
              or full-time opportunity? Feel free to contact me.
              I’m always excited to build modern and impactful digital experiences.
            </p>

          </div>

        </FadeIn>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* LEFT SIDE */}
          <FadeIn delay={100}>

            <div className="space-y-8">

              {/* Intro Card */}
              <div
                className="rounded-3xl p-7"
                style={{
                  background: 'rgba(13,21,38,0.88)',
                  border: '1px solid rgba(0,212,255,0.12)',
                  backdropFilter: 'blur(18px)',
                }}
              >

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-400/20 bg-cyan-400/10 mb-5">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

                  <span className="text-[11px] text-cyan-300 font-mono tracking-wider">
                    AVAILABLE FOR WORK
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 leading-snug">
                  Building Modern Experiences with
                  <span className="text-cyan-400"> Code + Design + AI</span>
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed">
                  I specialize in React.js, Spring Boot, Firebase,
                  UI/UX design, API integrations, and AI-powered applications.
                  Whether you need a modern frontend, scalable backend,
                  or complete full-stack solution — I can help bring your ideas to life.
                </p>

              </div>

              {/* Contact Info */}
              <div className="space-y-4">

                {[
                  {
                    icon: Mail,
                    label: 'Email',
                    value: 'khare66@gmail.com',
                    color: '#06b6d4',
                  },

                  {
                    icon: MapPin,
                    label: 'Location',
                    value: 'Indore, Madhya Pradesh, India',
                    color: '#8b5cf6',
                  },

                ].map(({ icon: Icon, label, value, color }) => (

                  <div
                    key={label}
                    className="flex items-center gap-4 rounded-2xl p-4 transition-all duration-300 hover:scale-[1.02]"
                    style={{
                      background: 'rgba(13,21,38,0.88)',
                      border: '1px solid rgba(255,255,255,0.06)',
                      backdropFilter: 'blur(14px)',
                    }}
                  >

                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center"
                      style={{
                        background: `${color}15`,
                        border: `1px solid ${color}30`,
                      }}
                    >
                      <Icon size={18} style={{ color }} />
                    </div>

                    <div>

                      <p className="text-xs text-slate-500 font-mono">
                        {label}
                      </p>

                      <p className="text-sm text-slate-200 font-medium">
                        {value}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

              {/* Social Links */}
              <div>

                <p className="text-xs text-slate-500 font-mono mb-4 tracking-wider">
                  CONNECT WITH ME
                </p>

                <div className="flex gap-4">

                  {[
                    {
                      icon: Github,
                      color: '#e2e8f0',
                    },

                    {
                      icon: Linkedin,
                      color: '#0A66C2',
                    },

                    {
                      icon: Instagram,
                      color: '#ec4899',
                    },

                  ].map(({ icon: Icon, color }, i) => (

                    <button
                      key={i}
                      className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                      style={{
                        background: 'rgba(13,21,38,0.88)',
                        border: '1px solid rgba(255,255,255,0.06)',
                        backdropFilter: 'blur(12px)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = `${color}60`
                        e.currentTarget.style.boxShadow = `0 0 25px ${color}20`
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor =
                          'rgba(255,255,255,0.06)'

                        e.currentTarget.style.boxShadow = 'none'
                      }}
                    >
                      <Icon
                        size={18}
                        style={{ color }}
                      />
                    </button>

                  ))}

                </div>

              </div>

            </div>

          </FadeIn>

          {/* RIGHT SIDE FORM */}
          <FadeIn delay={200}>

            <div
              className="rounded-3xl p-7"
              style={{
                background: 'rgba(13,21,38,0.88)',
                border: '1px solid rgba(0,212,255,0.12)',
                backdropFilter: 'blur(18px)',
                boxShadow: '0 0 40px rgba(0,212,255,0.05)',
              }}
            >

              {sent ? (

                <div className="text-center py-10">

                  <div className="text-6xl mb-5">
                    🚀
                  </div>

                  <h3 className="text-2xl font-bold text-cyan-400 mb-2">
                    Message Sent Successfully!
                  </h3>

                  <p className="text-slate-400 text-sm">
                    Thanks for reaching out. I'll contact you soon.
                  </p>

                </div>

              ) : (

                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >

                  {/* Name */}
                  <div>

                    <label className="block text-xs text-slate-400 font-mono mb-2">
                      YOUR NAME
                    </label>

                    <div className="relative">

                      <User
                        size={16}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                      />

                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your name"
                        className="w-full bg-[#0d1526] border border-[#1a2a4a] rounded-2xl px-11 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-400/40 focus:shadow-[0_0_20px_rgba(0,212,255,0.12)] transition-all duration-300"
                      />

                    </div>

                  </div>

                  {/* Email */}
                  <div>

                    <label className="block text-xs text-slate-400 font-mono mb-2">
                      EMAIL ADDRESS
                    </label>

                    <div className="relative">

                      <Mail
                        size={16}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                      />

                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="Enter your email"
                        className="w-full bg-[#0d1526] border border-[#1a2a4a] rounded-2xl px-11 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-400/40 focus:shadow-[0_0_20px_rgba(0,212,255,0.12)] transition-all duration-300"
                      />

                    </div>

                  </div>

                  {/* Message */}
                  <div>

                    <label className="block text-xs text-slate-400 font-mono mb-2">
                      MESSAGE
                    </label>

                    <div className="relative">

                      <MessageSquare
                        size={16}
                        className="absolute left-4 top-4 text-slate-500"
                      />

                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        placeholder="Tell me about your project..."
                        className="w-full bg-[#0d1526] border border-[#1a2a4a] rounded-2xl px-11 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-400/40 focus:shadow-[0_0_20px_rgba(0,212,255,0.12)] transition-all duration-300 resize-none"
                      />

                    </div>

                  </div>

                  {/* Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-2xl font-semibold text-sm flex items-center justify-center gap-2 text-white transition-all duration-300 hover:scale-[1.02]"
                    style={{
                      background:
                        'linear-gradient(135deg,#06b6d4,#2563eb)',
                      boxShadow:
                        '0 0 25px rgba(37,99,235,0.35)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow =
                        '0 0 45px rgba(37,99,235,0.5)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow =
                        '0 0 25px rgba(37,99,235,0.35)'
                    }}
                  >

                    <Send size={17} />

                    Send Message

                  </button>

                </form>

              )}

            </div>

          </FadeIn>

        </div>

      </div>
    </section>
  )
}