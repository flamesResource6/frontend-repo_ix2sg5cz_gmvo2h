import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="mx-auto container px-6 md:px-10">
        <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5 py-3 px-4">
          <a href="#" className="text-white font-semibold tracking-tight">FLAMES<span className="text-emerald-300">.PORTFOLIO</span></a>
          <nav className="hidden md:flex items-center gap-6 text-white/80">
            <a href="#work" className="hover:text-white transition">Work</a>
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
            <a href="#" className="px-4 py-2 rounded-lg bg-emerald-400 text-black font-semibold shadow-[0_0_16px_rgba(45,212,191,0.45)]">Resume</a>
          </nav>
          <button className="md:hidden text-white/80" aria-label="Open menu">
            <Menu size={22} />
          </button>
        </div>
      </div>
    </header>
  )
}
