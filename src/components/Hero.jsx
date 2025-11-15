import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full flex items-center">
      {/* Spline cover background */}
      <div className="absolute inset-0 -z-10">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0d10]/40 via-[#0b0d10]/60 to-[#0b0d10]" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto md:mx-0 w-40 h-40 md:w-56 md:h-56 rounded-2xl overflow-hidden ring-2 ring-white/10 shadow-2xl shadow-emerald-500/10"
          >
            <img
              src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=1200&auto=format&fit=crop"
              alt="Professional headshot"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-emerald-300/10" />
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Building elegant, futuristic web experiences
            </h1>
            <p className="mt-5 text-lg md:text-xl text-white/70 max-w-xl">
              I design and develop interfaces with depth, motion, and clarity. Focused on polished visuals, performance, and delightful interactions.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a href="#work" className="px-5 py-3 rounded-lg bg-teal-400 text-black font-semibold hover:brightness-110 transition shadow-[0_0_20px_rgba(45,212,191,0.35)]">
                View Work
              </a>
              <a href="#contact" className="px-5 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10 transition">
                Contact
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
