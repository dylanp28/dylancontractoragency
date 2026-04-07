import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/ui/navbar'
import { Footer } from '@/components/ui/footer'
import { AnimateOnScroll } from '@/components/ui/animate-on-scroll'
import { ArrowRight, Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'See our delivered projects. Real clients, real results — marketing sites and web apps shipped fast.',
}

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section className="pt-36 pb-20 lg:pt-48 lg:pb-28 relative overflow-hidden">
          <div className="hero-orb hero-orb-1" />
          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-wider mb-3 animate-in" style={{ color: 'var(--accent)' }}>
                Portfolio
              </p>
              <h1
                className="text-4xl lg:text-6xl font-light leading-[1.08] tracking-tight mb-6 animate-in"
                style={{ fontFamily: 'var(--font-display), Georgia, serif' }}
              >
                Our work speaks<br />for itself.
              </h1>
              <p className="text-lg lg:text-xl leading-relaxed animate-in-delay-1" style={{ color: 'var(--fg-muted)' }}>
                Every project ships on time, on budget, and with production-quality code.
              </p>
            </div>
          </div>
        </section>

        {/* ── NOVASPARK CASE STUDY ── */}
        <AnimateOnScroll>
          <section className="pb-24 lg:pb-32">
            <div className="max-w-7xl mx-auto px-8">
              <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid var(--border-light)', boxShadow: '0 16px 48px -12px rgba(25, 25, 25, 0.08)' }}>
                {/* Header */}
                <div className="p-8 lg:p-12 relative" style={{ background: 'var(--fg)' }}>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div>
                      <div className="flex items-center gap-2 mb-6">
                        <span
                          className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full"
                          style={{ border: '1px solid rgba(250,250,248,0.2)', color: 'rgba(250,250,248,0.5)' }}
                        >
                          Marketing Site
                        </span>
                        <span
                          className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full"
                          style={{ background: 'rgba(204,120,92,0.2)', color: 'var(--accent)' }}
                        >
                          Delivered
                        </span>
                      </div>
                      <h2
                        className="text-4xl lg:text-5xl font-light tracking-tight mb-4"
                        style={{ fontFamily: 'var(--font-display), Georgia, serif', color: 'var(--bg)' }}
                      >
                        NovaSpark
                      </h2>
                      <p className="text-base leading-relaxed mb-6" style={{ color: 'rgba(250,250,248,0.6)' }}>
                        Full marketing site for a SaaS startup preparing for their Product Hunt launch. 5 pages, contact form, full SEO.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {['Next.js 14', 'Tailwind', 'Resend', 'Vercel'].map((t) => (
                          <span
                            key={t}
                            className="text-xs font-medium px-3 py-1 rounded-full transition-colors duration-200"
                            style={{ border: '1px solid rgba(250,250,248,0.12)', color: 'rgba(250,250,248,0.45)' }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Scores */}
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { label: 'Performance', score: 94 },
                        { label: 'Accessibility', score: 98 },
                        { label: 'Best Practices', score: 100 },
                        { label: 'SEO', score: 100 },
                      ].map((m, i) => (
                        <AnimateOnScroll key={m.label} delay={i * 0.08}>
                          <div
                            className="p-5 rounded-xl text-center transition-all duration-300 hover:scale-105"
                            style={{ background: 'rgba(250,250,248,0.06)' }}
                          >
                            <div
                              className="text-3xl font-light mb-1"
                              style={{
                                fontFamily: 'var(--font-display), Georgia, serif',
                                color: m.score === 100 ? 'var(--accent)' : 'var(--bg)',
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

                {/* Highlights */}
                <div className="p-8 lg:p-12" style={{ background: 'var(--bg-card)' }}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                      'Delivered in 2 days',
                      '60% under budget',
                      'Full contact form with email',
                      'SEO-optimized for SaaS keywords',
                    ].map((h, i) => (
                      <AnimateOnScroll key={h} delay={i * 0.06}>
                        <div className="flex items-start gap-2">
                          <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: 'var(--accent-light)' }}>
                            <Check className="h-2.5 w-2.5" style={{ color: 'var(--accent)' }} />
                          </div>
                          <span className="text-[15px]" style={{ color: 'var(--fg-muted)' }}>{h}</span>
                        </div>
                      </AnimateOnScroll>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimateOnScroll>

        {/* ── EMBER & OAK CASE STUDY ── */}
        <AnimateOnScroll>
          <section className="pb-24 lg:pb-32">
            <div className="max-w-7xl mx-auto px-8">
              <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid var(--border-light)', boxShadow: '0 16px 48px -12px rgba(25, 25, 25, 0.08)' }}>
                {/* Header */}
                <div className="p-8 lg:p-12 relative" style={{ background: 'linear-gradient(135deg, #2d1a0a 0%, #1a0f06 100%)' }}>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div>
                      <div className="flex items-center gap-2 mb-6">
                        <span
                          className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full"
                          style={{ border: '1px solid rgba(250,250,248,0.2)', color: 'rgba(250,250,248,0.5)' }}
                        >
                          Restaurant Landing Page
                        </span>
                        <span
                          className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full"
                          style={{ background: 'rgba(204,120,92,0.2)', color: 'var(--accent)' }}
                        >
                          Delivered
                        </span>
                      </div>
                      <h2
                        className="text-4xl lg:text-5xl font-light tracking-tight mb-4"
                        style={{ fontFamily: 'var(--font-display), Georgia, serif', color: 'var(--bg)' }}
                      >
                        Ember &amp; Oak
                      </h2>
                      <p className="text-base leading-relaxed mb-6" style={{ color: 'rgba(250,250,248,0.6)' }}>
                        Farm-to-table restaurant landing page with interactive menu, reservation form, reviews section, and mobile-first design. Exactly the kind of site we deliver for local businesses at a fraction of agency cost.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {['Next.js 14', 'Tailwind', 'Vercel', 'Static Export'].map((t) => (
                          <span
                            key={t}
                            className="text-xs font-medium px-3 py-1 rounded-full transition-colors duration-200"
                            style={{ border: '1px solid rgba(250,250,248,0.12)', color: 'rgba(250,250,248,0.45)' }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Scores */}
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { label: 'Performance', score: 97 },
                        { label: 'Accessibility', score: 96 },
                        { label: 'Best Practices', score: 100 },
                        { label: 'SEO', score: 100 },
                      ].map((m, i) => (
                        <AnimateOnScroll key={m.label} delay={i * 0.08}>
                          <div
                            className="p-5 rounded-xl text-center transition-all duration-300 hover:scale-105"
                            style={{ background: 'rgba(250,250,248,0.06)' }}
                          >
                            <div
                              className="text-3xl font-light mb-1"
                              style={{
                                fontFamily: 'var(--font-display), Georgia, serif',
                                color: m.score === 100 ? 'var(--accent)' : 'var(--bg)',
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

                {/* Highlights */}
                <div className="p-8 lg:p-12" style={{ background: 'var(--bg-card)' }}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                      'Delivered in 3 days',
                      'Interactive menu with tabs',
                      'Reservation form built-in',
                      'Mobile-first, fully responsive',
                    ].map((h, i) => (
                      <AnimateOnScroll key={h} delay={i * 0.06}>
                        <div className="flex items-start gap-2">
                          <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: 'var(--accent-light)' }}>
                            <Check className="h-2.5 w-2.5" style={{ color: 'var(--accent)' }} />
                          </div>
                          <span className="text-[15px]" style={{ color: 'var(--fg-muted)' }}>{h}</span>
                        </div>
                      </AnimateOnScroll>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimateOnScroll>

        {/* ── CTA ── */}
        <AnimateOnScroll>
          <section className="pb-24 lg:pb-32">
            <div className="max-w-7xl mx-auto px-8 text-center">
              <div className="py-16 rounded-2xl relative overflow-hidden" style={{ background: 'var(--bg-alt)' }}>
                <p
                  className="text-xl font-light mb-4"
                  style={{ fontFamily: 'var(--font-display), Georgia, serif' }}
                >
                  Ready to be our next case study?
                </p>
                <p className="text-sm mb-6" style={{ color: 'var(--fg-muted)' }}>
                  We&apos;re taking on new projects now. Fixed pricing, fast delivery, no surprises.
                </p>
                <Link
                  href="/contact"
                  className="btn-shine inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-200"
                  style={{ background: 'var(--fg)', color: 'var(--bg)' }}
                >
                  Start Your Project <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </section>
        </AnimateOnScroll>

      </main>
      <Footer />
    </>
  )
}
