import { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import img1 from "../assests/img1.jpeg";

import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiTailwindcss,
  SiFigma,
  SiPostman,
  SiOpenai,
  SiSpringboot,
  SiFirebase,
  SiMysql,
  SiGit,
  SiGithub,
} from "react-icons/si";

import { FaCss3Alt } from "react-icons/fa6";
import { BsStars } from "react-icons/bs";

const roles = [
  'Full Stack Developer',
  'UI/UX Designer',
  'React & Spring Boot Developer',
  'AI Prompt Engineer',
]

/* Floating Tech Icons */
const floatingIcons = [
  {
    pos: 'top-[6%] right-[18%]',
    cls: 'float-b',
    node: <SiReact className="w-7 h-7 text-cyan-400" />
  },
  {
    pos: 'top-[18%] left-[8%]',
    cls: 'float-a',
    node: <SiJavascript className="w-7 h-7 text-yellow-300" />
  },
  {
    pos: 'top-[30%] left-[18%]',
    cls: 'float-c',
    node: <SiSpringboot className="w-7 h-7 text-green-400" />
  },
  {
    pos: 'top-[22%] right-[5%]',
    cls: 'float-d',
    node: <SiFirebase className="w-7 h-7 text-orange-400" />
  },
  {
    pos: 'top-[50%] right-[4%]',
    cls: 'float-e',
    node: <SiFigma className="w-7 h-7 text-pink-400" />
  },
  {
    pos: 'bottom-[24%] left-[6%]',
    cls: 'float-f',
    node: <SiPostman className="w-7 h-7 text-orange-500" />
  },
  {
    pos: 'bottom-[18%] right-[12%]',
    cls: 'float-b',
    node: <SiOpenai className="w-7 h-7 text-emerald-400" />
  },
  {
    pos: 'bottom-[12%] left-[22%]',
    cls: 'float-c',
    node: <BsStars className="w-7 h-7 text-orange-300" />
  },
]

/* Code Card */
const CODE = [
  { text: 'const developer = {', color: '#cbd5e1' },

  {
    text: '  name: ',
    color: '#cbd5e1',
    val: '"Kunal Khare",',
    vc: '#38bdf8'
  },

  {
    text: '  education: ',
    color: '#cbd5e1',
    val: '"B.Tech CSE - MediCaps University",',
    vc: '#a78bfa'
  },

  {
    text: '  training: ',
    color: '#cbd5e1',
    val: '"React + Java Full Stack (Spring Boot)",',
    vc: '#22c55e'
  },

  {
    text: '  skills: ',
    color: '#cbd5e1',
    val: '["React", "Spring Boot", "Firebase"],',
    vc: '#10b981'
  },

  {
    text: '  aiTools: ',
    color: '#cbd5e1',
    val: '["OpenAI API", "Claude AI", "Prompt Engineering"],',
    vc: '#f59e0b'
  },

  {
    text: '  passion: ',
    color: '#cbd5e1',
    val: '"Modern UI/UX & AI Integration",',
    vc: '#ec4899'
  },

  { text: '  buildProjects: () => {', color: '#cbd5e1' },
  { text: '     code();', color: '#475569' },
  { text: '     design();', color: '#475569' },
  { text: '     innovate();', color: '#475569' },
  { text: '     repeat();', color: '#475569' },
  { text: '  }', color: '#cbd5e1' },
  { text: '}', color: '#cbd5e1' },
]

export default function Hero() {

  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {

    const role = roles[roleIdx]
    let t

    if (typing) {

      if (displayed.length < role.length) {

        t = setTimeout(() => {
          setDisplayed(role.slice(0, displayed.length + 1))
        }, 70)

      } else {

        t = setTimeout(() => setTyping(false), 1800)
      }

    } else {

      if (displayed.length > 0) {

        t = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1))
        }, 35)

      } else {

        setRoleIdx((i) => (i + 1) % roles.length)
        setTyping(true)
      }
    }

    return () => clearTimeout(t)

  }, [displayed, typing, roleIdx])

  return (
    <section className="relative overflow-hidden grid-bg bg-[#050816]">

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-1/3 left-1/5 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px]" />

        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-violet-500/5 rounded-full blur-[130px]" />

      </div>

      {/* HERO */}
      <div className="max-w-7xl mx-auto px-8 pt-28 pb-16 min-h-screen flex items-center w-full">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 w-full">

          {/* LEFT */}
          <div className="flex-1 max-w-[560px]">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 mb-7">

              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

              <span className="text-[11px] text-cyan-300 font-mono tracking-widest">
                AVAILABLE FOR FREELANCE PROJECTS
              </span>

            </div>

            {/* Heading */}
            <h1 className="font-extrabold leading-[1.12] mb-6">

              <span className="text-white text-5xl md:text-[4rem]">
                Hey, I'm
              </span>

              <br />

              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent text-5xl md:text-[4rem]">
                Kunal Khare
              </span>

              <br />

              <span className="text-white text-4xl md:text-[3rem]">
                A{' '}
              </span>

              <span className="text-cyan-300 text-4xl md:text-[3rem]">
                {displayed}
                <span className="animate-pulse text-white">|</span>
              </span>

            </h1>

            {/* Description */}
            <p className="text-slate-400 text-[15px] leading-relaxed mb-8 max-w-[520px]">

              I'm a B.Tech CSE student at Medi-Caps University with expertise in React.js,
              Java Full Stack Development, Spring Boot, Firebase, and modern UI/UX design.
              I create scalable, responsive, and high-performance web applications while also
              integrating AI APIs, Prompt Engineering, and backend services to build smart
              and modern digital experiences.

            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-3 mb-8">

              {[
                'React.js',
                'Spring Boot',
                'Firebase',
                'UI/UX',
                'AI APIs',
                'Prompt Engineering',
                'REST APIs',
                'Postman',
              ].map((item) => (

                <span
                  key={item}
                  className="px-3 py-1 rounded-full text-xs border border-white/10 bg-white/5 text-slate-300 hover:border-cyan-400/40 hover:text-cyan-300 transition-all"
                >
                  {item}
                </span>

              ))}

            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">

              <a
                href="#projects"
                className="px-7 py-3 rounded-xl font-semibold text-sm text-white transition-all duration-300 hover:scale-105"
                style={{
                  background:
                    'linear-gradient(135deg,#06b6d4,#2563eb)',
                  boxShadow: '0 0 30px rgba(37,99,235,0.35)',
                }}
              >
                View Portfolio
              </a>

              <a
                href="#contact"
                className="px-7 py-3 rounded-xl font-semibold text-sm text-white border border-white/15 hover:border-cyan-400/40 transition-all duration-300 bg-white/5 backdrop-blur-md"
              >
                Hire Me
              </a>

            </div>
          </div>

          {/* RIGHT */}
          <div className="flex-1 flex justify-center items-center relative w-full max-w-[520px] min-h-[460px]">

            {/* Floating Icons */}
            {floatingIcons.map((ic, i) => (

              <div key={i} className={`absolute ${ic.pos} ${ic.cls} z-10`}>

                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300"
                  style={{
                    background: 'rgba(10,15,30,0.75)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    backdropFilter: 'blur(12px)',
                    boxShadow: '0 0 20px rgba(0,212,255,0.08)',
                  }}
                >
                  {ic.node}
                </div>

              </div>

            ))}

            {/* Orbit */}
            <div className="absolute w-[360px] h-[360px] md:w-[430px] md:h-[430px] orbit-spin">

              <svg viewBox="0 0 400 400" className="w-full h-full">

                <circle
                  cx="200"
                  cy="200"
                  r="188"
                  fill="none"
                  stroke="#00d4ff"
                  strokeWidth="1.5"
                  strokeDasharray="10 10"
                  opacity="0.28"
                />

              </svg>

            </div>

            {/* Profile */}
            <div
              className="relative z-20 w-[270px] h-[270px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden"
              style={{
                border: '2px solid rgba(0,212,255,0.35)',
                boxShadow:
                  '0 0 60px rgba(0,212,255,0.18), 0 0 100px rgba(124,58,237,0.12)',
              }}
            >

              <img
                src={img1}
                alt="Kunal"
                className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
              />

            </div>

          </div>
        </div>
      </div>

      {/* Bottom Cards */}
      <div className="max-w-7xl mx-auto px-8 pb-24 w-full">

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1.4fr] gap-5">

          {/* Card 1 */}
          <div
            className="rounded-3xl p-6 flex flex-col gap-5"
            style={{
              background: 'rgba(13,21,38,0.88)',
              border: '1px solid rgba(0,212,255,0.14)',
              backdropFilter: 'blur(16px)',
            }}
          >

            <div className="flex items-center gap-4">

              <div className="w-12 h-12 rounded-full overflow-hidden border border-cyan-400/30">

                <img
                  src={img1}
                  alt=""
                  className="w-full h-full object-cover"
                />

              </div>

              <div>

                <h4 className="text-white font-bold text-sm">
                  Kunal Khare
                </h4>

                <p className="text-slate-500 text-xs">
                  Full Stack Developer
                </p>

              </div>

            </div>

            <div>

              <h3 className="text-cyan-400 text-[1.2rem] font-bold mb-1">
                Passionate
              </h3>

              <h3 className="text-white text-[1.2rem] font-bold">
                Developer & UI/UX
              </h3>

              <h3 className="text-white text-[1.2rem] font-bold">
                Problem Solver
              </h3>

            </div>

            <p className="text-slate-400 text-[13px] leading-relaxed">

              I focus on building scalable applications, modern UI/UX designs,
              and AI-powered experiences using the latest frontend and backend
              technologies.

            </p>

          </div>

          {/* Card 2 */}
          <div
            className="rounded-3xl overflow-hidden"
            style={{
              background: 'rgba(6,10,20,0.96)',
              border: '1px solid rgba(255,255,255,0.07)',
              backdropFilter: 'blur(16px)',
            }}
          >

            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06]">

              <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <span className="w-3 h-3 rounded-full bg-[#28c840]" />

            </div>

            <div className="p-5 font-mono text-[11.5px] leading-[1.8]">

              {CODE.map((line, i) => (

                <div key={i}>

                  {line.val ? (
                    <>
                      <span style={{ color: line.color }}>
                        {line.text}
                      </span>

                      <span style={{ color: line.vc }}>
                        {line.val}
                      </span>
                    </>
                  ) : (
                    <span style={{ color: line.color }}>
                      {line.text}
                    </span>
                  )}

                </div>

              ))}

            </div>

          </div>

          {/* Card 3 */}
          <div
            className="rounded-3xl p-7 flex flex-col justify-center"
            style={{
              background: 'rgba(13,21,38,0.88)',
              border: '1px solid rgba(124,58,237,0.16)',
              backdropFilter: 'blur(16px)',
            }}
          >

            <h3 className="text-[1.5rem] font-bold mb-5">

              <span className="text-white">
                What
              </span>{' '}

              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Drives Me
              </span>

            </h3>

            <p className="text-slate-300 text-[14px] leading-[1.9]">

              I enjoy combining development, UI/UX design, and AI technologies
              to build modern digital products. From frontend interfaces to backend APIs,
              database integration, and AI-powered systems, I love turning ideas into
              scalable and visually engaging experiences.

            </p>

            <div className="flex flex-wrap gap-4 mt-6">

              <SiReact className="text-cyan-400 text-2xl" />
              <SiSpringboot className="text-green-400 text-2xl" />
              <SiHtml5 className="text-orange-500 text-2xl" />
              <FaCss3Alt className="text-blue-400 text-2xl" />
              <SiMysql className="text-sky-400 text-2xl" />
              <SiTailwindcss className="text-cyan-300 text-2xl" />
              <SiOpenai className="text-emerald-400 text-2xl" />
              <BsStars className="text-orange-300 text-2xl" />
              <SiPostman className="text-orange-500 text-2xl" />
              <SiGithub className="text-white text-2xl" />

            </div>

          </div>

        </div>

      </div>

      {/* Scroll */}
      <a
        href="#about"
        className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-600 hover:text-cyan-400 transition-colors"
      >

        <span className="text-[9px] font-mono tracking-widest">
          SCROLL
        </span>

        <ChevronDown
          size={14}
          className="animate-bounce"
        />

      </a>

    </section>
  )
}