'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

const links = [
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{ background: 'rgba(250,250,248,0.88)', backdropFilter: 'blur(20px)', borderColor: 'var(--border-light)' }}
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-[11px] font-semibold"
              style={{ background: 'var(--accent)' }}
            >
              D
            </div>
            <span className="text-[15px] font-semibold tracking-tight" style={{ color: 'var(--fg)' }}>
              Dylan Agency
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[15px] font-medium transition-colors duration-200"
                style={{ color: 'var(--fg-muted)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--fg)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--fg-muted)')}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-[13px] font-semibold px-4 py-2 rounded-full transition-all duration-200"
              style={{ background: 'var(--fg)', color: 'var(--bg)' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--accent)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--fg)')}
            >
              Get Started <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </nav>

          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            <div className="w-5 flex flex-col gap-[5px]">
              <span
                className="block h-[1.5px] transition-all duration-300"
                style={{
                  background: 'var(--fg)',
                  transform: open ? 'rotate(45deg) translateY(3.25px)' : 'none',
                }}
              />
              <span
                className="block h-[1.5px] transition-all duration-300"
                style={{
                  background: 'var(--fg)',
                  transform: open ? 'rotate(-45deg) translateY(-3.25px)' : 'none',
                  width: open ? '100%' : '60%',
                  marginLeft: open ? '0' : 'auto',
                }}
              />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden px-6 py-6 space-y-4" style={{ background: 'var(--bg)', borderTop: '1px solid var(--border-light)' }}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block text-lg font-medium"
              style={{ color: 'var(--fg)' }}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block text-center text-[13px] font-semibold px-4 py-3 rounded-full mt-4"
            style={{ background: 'var(--fg)', color: 'var(--bg)' }}
            onClick={() => setOpen(false)}
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  )
}
