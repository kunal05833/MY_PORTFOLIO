export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[#1a2a4a] py-10 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-[#00d4ff04] blur-[60px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + tagline */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00d4ff] to-[#7c3aed] flex items-center justify-center text-xs font-bold text-white">
                KK
              </div>
              <span className="font-display font-bold text-white text-sm tracking-wider">
                KUNAL<span className="text-[#00d4ff]">.</span>DEV
              </span>
            </div>
            <p className="text-xs text-slate-500 max-w-xs">
              We blend strategy, storytelling, and scalable engineering to build high-performance web platforms and cinematic digital experiences.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap gap-6 justify-center text-xs text-slate-500">
            {['About', 'Skills', 'Projects', 'FAQ', 'Contact'].map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="hover:text-[#00d4ff] transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#1a2a4a] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-600">
          <span>© {year} Kunal Khare. All rights reserved.</span>
          <span className="font-mono">
            Built with <span className="text-[#00d4ff]">React</span> + <span className="text-[#a78bfa]">Tailwind CSS</span>
          </span>
        </div>
      </div>
    </footer>
  )
}
