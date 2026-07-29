import { Link } from '@tanstack/react-router'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/resume', label: 'Resume' },
  { to: '/projects', label: 'Showreel' },
  { to: '/news', label: 'News' },
  { to: '/contact', label: 'Contact' },
] as const

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="font-display text-2xl tracking-widest text-white">
          ARREY <span className="text-red-600">WAAH</span>
        </Link>
        <nav className="flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm uppercase tracking-wide text-neutral-300 hover:text-red-500 transition-colors [&.active]:text-red-500"
              activeOptions={{ exact: link.to === '/' }}
              activeProps={{ className: 'active' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
