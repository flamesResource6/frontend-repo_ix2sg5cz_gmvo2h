export default function Footer() {
  return (
    <footer className="relative py-14 text-white/60">
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Flames Portfolio. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
            <a href="#" className="hover:text-white">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
