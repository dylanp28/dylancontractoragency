'use client'

import Link from 'next/link'

export function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)' }}>
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-[11px] font-semibold"
                style={{ background: 'var(--accent)' }}
              >
                D
              </div>
              <span className="text-[15px] font-semibold tracking-tight">Dylan Agency</span>
            </div>
            <p className="text-sm" style={{ color: 'var(--fg-muted)' }}>
              Production-grade web development, fast.
            </p>
          </div>

          <div className="flex gap-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--fg-faint)' }}>
                Services
              </p>
              <ul className="space-y-2">
                {['Marketing Sites', 'Web Apps', 'Landing Pages', 'APIs'].map((s) => (
                  <li key={s}>
                    <Link href="/services" className="text-sm transition-colors duration-200" style={{ color: 'var(--fg-muted)' }}>
                      {s}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--fg-faint)' }}>
                Company
              </p>
              <ul className="space-y-2">
                {[
                  { href: '/portfolio', label: 'Work' },
                  { href: '/about', label: 'About' },
                  { href: '/contact', label: 'Contact' },
                ].map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm transition-colors duration-200" style={{ color: 'var(--fg-muted)' }}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div
          className="mt-10 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2"
          style={{ borderTop: '1px solid var(--border-light)' }}
        >
          <p className="text-xs" style={{ color: 'var(--fg-faint)' }}>
            &copy; {new Date().getFullYear()} Dylan Agency
          </p>
        </div>
      </div>
    </footer>
  )
}
