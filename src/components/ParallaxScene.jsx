import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

// Full-page layered parallax background
export default function ParallaxScene() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })

  // Parallax mappings
  const ySlow = useTransform(scrollYProgress, [0, 1], [0, -120])
  const yMid = useTransform(scrollYProgress, [0, 1], [0, -220])
  const yFast = useTransform(scrollYProgress, [0, 1], [0, -360])
  const opacityFade = useTransform(scrollYProgress, [0, 0.4, 1], [1, 0.9, 0.75])

  return (
    <div ref={ref} className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <motion.div
        style={{ opacity: opacityFade }}
        className="absolute inset-0 bg-gradient-to-b from-[#0b0d10] via-[#0e1116] to-[#0b0d10]"
      />

      {/* Glow grid background */}
      <motion.div style={{ y: ySlow }} className="absolute inset-0">
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(rgba(0,255,200,0.08)_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,255,200,0.12),transparent_50%)]" />
      </motion.div>

      {/* Abstract teal blobs */}
      <motion.div style={{ y: yMid }} className="absolute -top-24 -left-24 w-[52rem] h-[52rem] rounded-full blur-3xl opacity-30"
        aria-hidden>
        <div className="w-full h-full bg-teal-400/30 dark:bg-teal-300/20 rounded-full mix-blend-screen" />
      </motion.div>
      <motion.div style={{ y: yFast }} className="absolute top-32 -right-32 w-[40rem] h-[40rem] rounded-full blur-3xl opacity-25"
        aria-hidden>
        <div className="w-full h-full bg-emerald-400/30 dark:bg-emerald-300/20 rounded-full mix-blend-screen" />
      </motion.div>

      {/* Stylized mountains (SVG silhouettes) */}
      <motion.svg
        style={{ y: ySlow }}
        className="absolute bottom-[-6rem] left-0 w-[140%] h-64 opacity-40"
        viewBox="0 0 1440 320" preserveAspectRatio="none"
      >
        <path fill="#0f141b" d="M0,224L40,208C80,192,160,160,240,138.7C320,117,400,107,480,117.3C560,128,640,160,720,181.3C800,203,880,213,960,208C1040,203,1120,181,1200,165.3C1280,149,1360,139,1400,133.3L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z" />
      </motion.svg>

      <motion.svg
        style={{ y: yMid }}
        className="absolute bottom-[-4rem] left-0 w-[140%] h-64 opacity-60"
        viewBox="0 0 1440 320" preserveAspectRatio="none"
      >
        <path fill="#121923" d="M0,256L60,240C120,224,240,192,360,165.3C480,139,600,117,720,128C840,139,960,181,1080,181.3C1200,181,1320,139,1380,117.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
      </motion.svg>

      {/* Neon particles */}
      <motion.div style={{ y: yFast }} className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
          <span
            key={i}
            className="absolute block w-[2px] h-[2px] rounded-full bg-teal-300 shadow-[0_0_8px_#2dd4bf]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.7,
            }}
          />
        ))}
      </motion.div>
    </div>
  )
}
