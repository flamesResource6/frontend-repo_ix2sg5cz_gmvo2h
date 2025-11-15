import { motion } from 'framer-motion'

const projects = [
  { id: 1, title: 'Neon Commerce', tag: 'E-commerce', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop' },
  { id: 2, title: 'Pulse Analytics', tag: 'Dashboard', img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop' },
  { id: 3, title: 'Orbit Landing', tag: 'Marketing', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop' },
  { id: 4, title: 'Quantum UI', tag: 'Design System', img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1600&auto=format&fit=crop' },
  { id: 5, title: 'Flux Mobile', tag: 'App', img: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?q=80&w=1600&auto=format&fit=crop' },
  { id: 6, title: 'Nova CMS', tag: 'Platform', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop' },
]

export default function PortfolioGrid() {
  return (
    <section id="work" className="relative py-20 md:py-28">
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between gap-6 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Selected Work</h2>
          <p className="text-white/60 max-w-md">A mix of interface design, product builds, and experimental concepts exploring motion and depth.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.a
              key={p.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              href="#"
              className="group relative block overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/10 hover:ring-white/20 focus:outline-none"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d10] via-transparent to-transparent opacity-80" />
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-emerald-400/10 mix-blend-overlay" />
                <div className="absolute -inset-12 blur-3xl bg-emerald-400/20" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between">
                <div>
                  <h3 className="text-white font-semibold text-lg">{p.title}</h3>
                  <span className="text-emerald-300 text-sm">{p.tag}</span>
                </div>
                <div className="px-3 py-1 rounded-md bg-emerald-400 text-black text-sm font-semibold shadow-[0_0_16px_rgba(45,212,191,0.45)]">
                  View
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* parallax separators */}
      <div className="pointer-events-none absolute -z-10 inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0b0d10] via-transparent to-transparent" />
      <div className="pointer-events-none absolute -z-10 inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0b0d10] via-transparent to-transparent" />
    </section>
  )
}
