'use client'

import Link from 'next/link'
import { Navbar } from '@/components/ui/navbar'
import { Footer } from '@/components/ui/footer'
import { AnimateOnScroll } from '@/components/ui/animate-on-scroll'
import { ArrowRight, Globe, Layers, Code2, Zap } from 'lucide-react'

const services = [
  { icon: Layers, name: 'Landing Pages', desc: 'High-converting pages for any business — live in days.' },
  { icon: Globe, name: 'Marketing Sites', desc: 'Professional multi-page websites that turn visitors into customers.' },
  { icon: Code2, name: 'Web Applications', desc: 'Full-stack custom builds with auth, database, and CI/CD.' },
  { icon: Zap, name: 'API Development', desc: 'Scalable backend systems built for production.' },
]

const stats = [
  { value: '$200', label: 'Sites starting at' },
  { value: '4 day', label: 'Avg. delivery' },
  { value: '10x', label: 'Faster than agencies' },
]

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section className="pt-36 pb-24 lg:pt-48 lg:pb-32 relative overflow-hidden">
          {/* Floating gradient orbs */}
          <div className="hero-orb hero-orb-1" />
          <div className="hero-orb hero-orb-2" />

          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <div className="max-w-4xl">
              <div className="animate-in">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-8"
                  style={{ background: 'var(--accent-light)', color: 'var(--accent)' }}
                >
                  <span className="w-1.5 h-1.5 rounded-full pulse-dot" style={{ background: 'var(--accent)' }} />
                  Accepting new projects
                </div>
              </div>
              <h1
                className="text-4xl sm:text-5xl lg:text-7xl font-light leading-[1.08] tracking-tight mb-6 animate-in"
                style={{ fontFamily: 'var(--font-display), Georgia, serif' }}
              >
                Professional sites<br />
                from <span className="gradient-text">$200.</span><br />
                Delivered in days.
              </h1>
              <p className="text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl animate-in-delay-1" style={{ color: 'var(--fg-muted)' }}>
                Our engineering team built a custom development platform so we can deliver the same work agencies charge thousands for — faster, and at a fraction of the cost.
              </p>
              <div className="flex flex-wrap gap-3 animate-in-delay-2">
                <Link
                  href="/contact"
                  className="btn-shine inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-200"
                  style={{ background: 'var(--fg)', color: 'var(--bg)' }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'var(--accent)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'var(--fg)')}
                >
                  Start a Project <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-300"
                  style={{ border: '1px solid var(--border)', color: 'var(--fg)' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--fg)'; e.currentTarget.style.background = 'var(--bg-card)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'transparent' }}
                >
                  View Our Work
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <div className="section-divider" />
        <AnimateOnScroll>
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-8">
              <div className="grid grid-cols-3 gap-8">
                {stats.map((s, i) => (
                  <div key={s.label} className="text-center">
                    <div
                      className="text-3xl lg:text-5xl font-light mb-2 stat-shimmer"
                      style={{ fontFamily: 'var(--font-display), Georgia, serif', letterSpacing: '-0.02em', animationDelay: `${i * 0.5}s` }}
                    >
                      {s.value}
                    </div>
                    <div className="text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--fg-faint)' }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </AnimateOnScroll>
        <div className="section-divider" />

        {/* ── SERVICES ── */}
        <section className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-8">
            <AnimateOnScroll>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--accent)' }}>
                    What we do
                  </p>
                  <h2
                    className="text-3xl lg:text-4xl font-light tracking-tight"
                    style={{ fontFamily: 'var(--font-display), Georgia, serif' }}
                  >
                    Services
                  </h2>
                </div>
                <Link
                  href="/services"
                  className="text-sm font-medium flex items-center gap-1 transition-colors duration-200"
                  style={{ color: 'var(--accent)' }}
                >
                  View all services <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {services.map((s, i) => (
                <AnimateOnScroll key={s.name} delay={i * 0.08}>
                  <Link
                    href="/services"
                    className="group block p-7 rounded-2xl card-hover"
                    style={{ background: 'var(--bg-card)', border: '1px solid var(--border-light)' }}
                    onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--accent-light)')}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border-light)')}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                      style={{ background: 'var(--accent-light)' }}
                    >
                      <s.icon className="h-5 w-5" style={{ color: 'var(--accent)' }} />
                    </div>
                    <h3 className="text-base font-semibold mb-2">{s.name}</h3>
                    <p className="text-[15px] leading-relaxed" style={{ color: 'var(--fg-muted)' }}>{s.desc}</p>
                    <div className="mt-4 flex items-center gap-1 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: 'var(--accent)' }}>
                      Learn more <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </Link>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ── FEATURED PROJECT ── */}
        <AnimateOnScroll>
          <section className="py-24 lg:py-32 relative overflow-hidden" style={{ background: 'var(--fg)' }}>
            <div className="max-w-7xl mx-auto px-8 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--accent)' }}>
                    Case Studies
                  </p>
                  <h2
                    className="text-3xl lg:text-5xl font-light tracking-tight mb-6"
                    style={{ fontFamily: 'var(--font-display), Georgia, serif', color: 'var(--bg)' }}
                  >
                    NovaSpark &amp; Ember&nbsp;&amp;&nbsp;Oak
                  </h2>
                  <p className="text-base leading-relaxed mb-8" style={{ color: 'rgba(250,250,248,0.6)' }}>
                    A SaaS marketing site and a restaurant landing page — two projects, two industries, one standard: delivered fast, built to last.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {['Next.js', 'Tailwind', 'Vercel'].map((t) => (
                      <span
                        key={t}
                        className="text-xs font-medium px-3 py-1 rounded-full transition-colors duration-200"
                        style={{ border: '1px solid rgba(250,250,248,0.15)', color: 'rgba(250,250,248,0.5)' }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200 group"
                    style={{ color: 'var(--accent)' }}
                  >
                    Read case study <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Performance', score: '94' },
                    { label: 'Accessibility', score: '98' },
                    { label: 'Best Practices', score: '100' },
                    { label: 'SEO', score: '100' },
                  ].map((m, i) => (
                    <AnimateOnScroll key={m.label} delay={i * 0.1}>
                      <div
                        className="p-5 rounded-xl transition-all duration-300 hover:scale-105"
                        style={{ background: 'rgba(250,250,248,0.06)', border: '1px solid rgba(250,250,248,0.08)' }}
                      >
                        <div
                          className="text-3xl font-light mb-2"
                          style={{
                            fontFamily: 'var(--font-display), Georgia, serif',
                            color: m.score === '100' ? 'var(--accent)' : 'var(--bg)',
                          }}
                        >
                          {m.score}
                        </div>
                        <div className="text-xs" style={{ color: 'rgba(250,250,248,0.4)' }}>{m.label}</div>
                      </div>
                    </AnimateOnScroll>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </AnimateOnScroll>

        {/* ── WHY US ── */}
        <section className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-8">
            <AnimateOnScroll>
              <div className="text-center mb-14">
                <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--accent)' }}>
                  Why us
                </p>
                <h2
                  className="text-3xl lg:text-4xl font-light tracking-tight"
                  style={{ fontFamily: 'var(--font-display), Georgia, serif' }}
                >
                  Speed without compromise
                </h2>
              </div>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Sites from $200', desc: 'Landing pages, marketing sites, full apps — all at prices that make sense for growing businesses.' },
                { title: 'We handle everything', desc: 'Hosting, deployment, and ongoing maintenance on a small retainer. Or we just hand you the finished code.' },
                { title: 'Human-built system', desc: 'Our engineers designed a custom platform that lets us deliver agency-quality work in a fraction of the time — with human oversight on every project.' },
              ].map((f, i) => (
                <AnimateOnScroll key={f.title} delay={i * 0.1}>
                  <div
                    className="p-8 rounded-2xl card-hover h-full"
                    style={{ background: 'var(--bg-alt)', border: '1px solid transparent' }}
                    onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--border)')}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = 'transparent')}
                  >
                    <h3 className="text-lg font-semibold mb-3">{f.title}</h3>
                    <p className="text-[15px] leading-relaxed" style={{ color: 'var(--fg-muted)' }}>{f.desc}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <AnimateOnScroll>
          <section
            className="py-24 lg:py-32 relative overflow-hidden"
            style={{ background: 'var(--accent-light)' }}
          >
            <div className="max-w-7xl mx-auto px-8 text-center relative z-10">
              <h2
                className="text-3xl lg:text-5xl font-light tracking-tight mb-4"
                style={{ fontFamily: 'var(--font-display), Georgia, serif' }}
              >
                Ready to build?
              </h2>
              <p className="text-lg mb-10 max-w-lg mx-auto" style={{ color: 'var(--fg-muted)' }}>
                Tell us what you need. Same-day response, fixed pricing, no surprises.
              </p>
              <Link
                href="/contact"
                className="btn-shine inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-200"
                style={{ background: 'var(--fg)', color: 'var(--bg)' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'var(--accent)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'var(--fg)')}
              >
                Start Your Project <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </section>
        </AnimateOnScroll>

      </main>
      <Footer />
    </>
  )
}
