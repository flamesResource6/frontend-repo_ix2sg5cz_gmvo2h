import Navbar from './components/Navbar'
import ParallaxScene from './components/ParallaxScene'
import Hero from './components/Hero'
import PortfolioGrid from './components/PortfolioGrid'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0b0d10] text-white">
      <ParallaxScene />
      <Navbar />
      <main className="relative pt-28">
        <Hero />
        <section id="about" className="py-16 md:py-24">
          <div className="container mx-auto px-6 md:px-10 grid md:grid-cols-3 gap-10 items-start">
            <div className="md:col-span-1">
              <h2 className="text-3xl font-bold">About</h2>
            </div>
            <div className="md:col-span-2 text-white/70 leading-relaxed">
              <p>
                I craft interfaces that feel alive through subtle motion and thoughtful depth. My
                approach blends product thinking, engineering precision, and visual design.
              </p>
              <div className="mt-6 grid sm:grid-cols-2 gap-6">
                <div className="rounded-xl border border-white/10 p-5 bg-white/[0.04]">
                  <h3 className="font-semibold text-white">Expertise</h3>
                  <p className="text-sm text-white/70 mt-2">Design systems, animations, React, performance, accessibility</p>
                </div>
                <div className="rounded-xl border border-white/10 p-5 bg-white/[0.04]">
                  <h3 className="font-semibold text-white">Stack</h3>
                  <p className="text-sm text-white/70 mt-2">React, TypeScript, Node, GraphQL, Tailwind, Framer Motion</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <PortfolioGrid />
        <section id="contact" className="py-20 md:py-28">
          <div className="container mx-auto px-6 md:px-10">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold">Have a project in mind?</h3>
              <p className="mt-4 text-white/70">I’m available for select freelance engagements and collaborations.</p>
              <a href="mailto:hello@example.com" className="mt-6 inline-block px-6 py-3 rounded-lg bg-emerald-400 text-black font-semibold shadow-[0_0_20px_rgba(45,212,191,0.35)]">Let’s Talk</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
