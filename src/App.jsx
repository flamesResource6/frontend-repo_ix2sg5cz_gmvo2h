import React, { useEffect, useMemo, useState } from 'react'
import Spline from '@splinetool/react-spline'

function useScrollOffset() {
  const [offset, setOffset] = useState(0)
  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY || window.pageYOffset)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return offset
}

function Layer({ speed = 0.1, className = '', children }) {
  const offset = useScrollOffset()
  const translate = useMemo(() => `translate3d(0, ${-offset * speed}px, 0)`, [offset, speed])
  return (
    <div className={`pointer-events-none absolute inset-0 will-change-transform ${className}`} style={{ transform: translate }}>
      {children}
    </div>
  )
}

function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md/0">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-teal-400 to-emerald-500 shadow-lg shadow-emerald-500/30" />
          <span className="text-white/90 font-semibold tracking-wide">Your Name</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-white/70">
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>
        <a href="#contact" className="relative inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium text-charcoal bg-white/10 hover:bg-white/20 text-white shadow-inner shadow-black/30 border border-white/10 transition">
          Let’s talk
          <span className="absolute inset-0 -z-10 rounded-full bg-emerald-400/0 blur-lg" />
        </a>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="relative h-[92vh] w-full overflow-hidden">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Overlays for depth and color grading */}
      <Layer speed={0.02}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70 pointer-events-none" />
      </Layer>
      <Layer speed={0.06}>
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl pointer-events-none" />
      </Layer>
      <Layer speed={0.12}>
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-teal-400/10 blur-2xl pointer-events-none" />
      </Layer>

      {/* Hero content */}
      <div className="relative z-10 h-full">
        <Navbar />
        <div className="mx-auto max-w-7xl h-full px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          <div className="pt-28 md:pt-0">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-widest text-white/70 shadow-inner shadow-black/30">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /> Available for projects
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white drop-shadow">
              Building futuristic, elegant experiences with depth and motion
            </h1>
            <p className="mt-5 text-white/70 max-w-xl">
              I craft clean, minimalist interfaces enhanced by subtle parallax, cinematic lighting, and tactile interactions.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#work" className="group relative inline-flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-3 text-charcoal font-semibold shadow-lg shadow-emerald-500/30">
                View Portfolio
                <span className="h-2 w-2 rounded-full bg-emerald-700 group-hover:bg-emerald-800 transition" />
              </a>
              <a href="#about" className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-white/80 hover:bg-white/10 transition">
                About Me
              </a>
            </div>
          </div>
          <div className="relative mt-20 md:mt-0 md:pl-8">
            <div className="relative mx-auto w-64 sm:w-72 md:w-80 aspect-[4/5] rounded-2xl overflow-hidden ring-1 ring-white/20 shadow-2xl">
              <img
                alt="Professional portrait"
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-emerald-400/40 to-teal-400/0 blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ParallaxScenery() {
  return (
    <section className="relative bg-[#0b0f12] text-white py-36 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <Layer speed={0.02}>
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-emerald-500/10 to-transparent" />
        </Layer>
        <Layer speed={0.06}>
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 h-96 w-[120%] rounded-[50%] bg-gradient-to-r from-teal-500/10 via-emerald-500/5 to-transparent blur-3xl" />
        </Layer>
        <Layer speed={0.12}>
          <svg className="absolute bottom-0 left-0 right-0 mx-auto w-[140%] text-white/8" viewBox="0 0 1200 200" fill="currentColor" aria-hidden>
            <path d="M0 150 L150 120 L300 160 L450 110 L600 170 L750 130 L900 180 L1050 140 L1200 160 L1200 200 L0 200 Z" />
          </svg>
        </Layer>
      </div>
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Designed for motion and clarity</h2>
        <p className="mt-4 text-white/70 max-w-2xl mx-auto">
          Depth-driven layouts with layered parallax to guide attention and create a sense of place.
        </p>
      </div>
    </section>
  )
}

function PortfolioGrid() {
  const projects = [
    { title: 'Neon Dashboard', tag: 'UI/UX' },
    { title: '3D Product Site', tag: 'Web' },
    { title: 'AI Analytics', tag: 'App' },
    { title: 'Fintech Brand', tag: 'Brand' },
    { title: 'Immersive Landing', tag: 'Web' },
    { title: 'Motion System', tag: 'Motion' },
  ]

  return (
    <section id="work" className="relative bg-white text-charcoal py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900">Selected work</h3>
            <p className="mt-2 text-gray-600">Hover to explore interactions</p>
          </div>
          <a href="#" className="hidden sm:inline-flex items-center rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition">All projects</a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <article key={i} className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-gradient-to-br from-gray-50 to-white shadow-sm transition-transform duration-300 will-change-transform hover:-translate-y-1">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(20,184,166,0.12),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(16,185,129,0.12),transparent_30%)] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="aspect-[16/10] w-full bg-gray-100">
                <img
                  src={`https://picsum.photos/seed/portfolio-${i+1}/800/500`}
                  alt="Project preview"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-gray-900">{p.title}</h4>
                  <span className="text-xs rounded-full bg-teal-50 text-teal-700 px-2 py-1">{p.tag}</span>
                </div>
                <p className="mt-2 text-sm text-gray-600">A sleek, modern interface emphasizing clarity and depth.</p>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-emerald-400/0 group-hover:ring-2 group-hover:ring-emerald-400/40 transition" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="relative bg-[#0b0f12] text-white py-28 overflow-hidden">
      <div className="absolute inset-0">
        <Layer speed={0.05}>
          <div className="absolute right-10 top-10 h-40 w-40 rounded-full bg-emerald-400/20 blur-2xl" />
        </Layer>
        <Layer speed={0.1}>
          <div className="absolute left-0 bottom-0 h-64 w-64 rounded-full bg-teal-400/10 blur-3xl" />
        </Layer>
      </div>
      <div className="relative mx-auto max-w-5xl px-6 grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-3xl font-extrabold">About</h3>
          <p className="mt-4 text-white/70">
            I blend crisp typography, considered spacing, and motion to tell product stories. My toolkit spans design systems, WebGL-inspired visuals, and micro-interactions.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-white/70">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="font-semibold text-white">Expertise</p>
              <p className="mt-1">UI/UX, Prototyping, Motion</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="font-semibold text-white">Stack</p>
              <p className="mt-1">React, Tailwind, Three/Spline</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="font-semibold text-white">Approach</p>
              <p className="mt-1">Minimal, Futuristic, Accessible</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="font-semibold text-white">Location</p>
              <p className="mt-1">Remote / Worldwide</p>
            </div>
          </div>
        </div>
        <div className="md:pt-8">
          <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl">
            <p className="text-lg text-white/80">“Working with depth requires restraint. I aim for interfaces that feel alive, not loud.”</p>
            <div className="mt-6 flex items-center gap-4">
              <img className="h-12 w-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=400&auto=format&fit=crop" alt="Portrait" />
              <div>
                <p className="font-semibold text-white">Your Name</p>
                <p className="text-white/60 text-sm">Designer & Frontend Engineer</p>
              </div>
            </div>
            <div className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-br from-emerald-400/20 to-teal-400/0 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-2xl font-extrabold text-gray-900">Let’s collaborate</h3>
              <p className="mt-2 text-gray-600">Tell me about your vision and timeline.</p>
            </div>
            <a href="mailto:hello@example.com" className="group relative inline-flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-3 font-semibold text-charcoal shadow-lg shadow-emerald-500/30">
              hello@example.com
              <span className="absolute inset-0 -z-10 rounded-full bg-emerald-400/30 blur-md group-hover:blur-lg transition" />
            </a>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-gray-500">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Hero />
      <ParallaxScenery />
      <PortfolioGrid />
      <About />
      <Contact />
    </div>
  )
}
