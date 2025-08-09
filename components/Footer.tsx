export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-slate-950 text-slate-400">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p>&copy; 2024 Shababu. All rights reserved.</p>
        </div>
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Legal</a>
        </div>
      </div>
    </footer>
  )
}