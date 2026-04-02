import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/ui/navbar'
import { Footer } from '@/components/ui/footer'
import { AnimateOnScroll } from '@/components/ui/animate-on-scroll'
import { ArrowRight, Globe, Layers, Code2, Zap, Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Professional web development starting at $200. Marketing sites, web apps, landing pages, and APIs. Hosting included or code delivered. Built by engineers, delivered fast.',
}

const services = [
  {
    icon: Layers,
    name: 'Landing Pages',
    price: '$200–750',
    delivery: '2 days',
    desc: 'A professional page for your business — perfect for contractors, salons, restaurants, and anyone who needs a web presence fast.',
    features: ['Single page', 'Hero + CTA', 'Lead capture', 'Mobile-first', 'Fast load', 'Hosting available'],
    popular: true,
  },
  {
    icon: Globe,
    name: 'Marketing Sites',
    price: '$1,000–2,500',
    delivery: '4 days',
    desc: 'Multi-page websites that turn visitors into customers. Ideal for service businesses ready to grow.',
    features: ['5+ pages', 'Mobile-responsive', 'Contact form', 'SEO optimized', 'Lighthouse 90+', 'Hosting available'],
    popular: false,
  },
  {
    icon: Code2,
    name: 'Web Applications',
    price: '$2,500–7,500',
    delivery: '10–20 days',
    desc: 'Full-stack apps with auth, database, and business logic — the kind of build that used to cost $30k+.',
    features: ['Next.js + TS', 'Authentication', 'Database', 'API layer', 'Testing', 'CI/CD'],
    popular: false,
  },
  {
    icon: Zap,
    name: 'API Development',
    price: '$1,500–4,000',
    delivery: '6–10 days',
    desc: 'RESTful or GraphQL APIs built for scale.',
    features: ['REST or GraphQL', 'TypeScript', 'Auth + rate limits', 'DB design', 'Test suite', 'Documentation'],
    popular: false,
  },
]

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section className="pt-36 pb-20 lg:pt-48 lg:pb-28 relative overflow-hidden">
          <div className="hero-orb hero-orb-2" />
          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-wider mb-3 animate-in" style={{ color: 'var(--accent)' }}>
                Services
              </p>
              <h1
                className="text-4xl lg:text-6xl font-light leading-[1.08] tracking-tight mb-6 animate-in"
                style={{ fontFamily: 'var(--font-display), Georgia, serif' }}
              >
                Sites from <span className="gradient-text">$200.</span><br />No hidden fees.
              </h1>
              <p className="text-lg lg:text-xl leading-relaxed animate-in-delay-1" style={{ color: 'var(--fg-muted)' }}>
                Our engineering team built a custom platform that delivers what agencies charge thousands for — in days, with human oversight on every project.
              </p>
            </div>
          </div>
        </section>

        {/* ── SERVICE CARDS ── */}
        <section className="pb-24 lg:pb-32">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {services.map((s, i) => (
                <AnimateOnScroll key={s.name} delay={i * 0.1}>
                  <div
                    className={`p-8 rounded-2xl relative ${s.popular ? 'card-glow' : 'card-hover'}`}
                    style={{
                      background: 'var(--bg-card)',
                      border: s.popular ? '2px solid var(--accent)' : '1px solid var(--border-light)',
                    }}
                  >
                    {s.popular && (
                      <span
                        className="absolute top-4 right-4 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full"
                        style={{ background: 'var(--accent-light)', color: 'var(--accent)' }}
                      >
                        Popular
                      </span>
                    )}
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                      style={{ background: 'var(--accent-light)' }}
                    >
                      <s.icon className="h-5 w-5" style={{ color: 'var(--accent)' }} />
                    </div>
                    <h2 className="text-xl font-semibold mb-1">{s.name}</h2>
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-2xl font-light gradient-text" style={{ fontFamily: 'var(--font-display), Georgia, serif' }}>
                        {s.price}
                      </span>
                      <span className="text-sm" style={{ color: 'var(--fg-faint)' }}>
                        &middot; {s.delivery}
                      </span>
                    </div>
                    <p className="text-[15px] mb-6 leading-relaxed" style={{ color: 'var(--fg-muted)' }}>{s.desc}</p>
                    <ul className="space-y-2.5 mb-6">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-center gap-2.5 text-[15px]" style={{ color: 'var(--fg-muted)' }}>
                          <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0" style={{ background: 'var(--accent-light)' }}>
                            <Check className="h-2.5 w-2.5" style={{ color: 'var(--accent)' }} />
                          </div>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className="btn-shine inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200"
                      style={{
                        background: s.popular ? 'var(--accent)' : 'var(--fg)',
                        color: 'var(--bg)',
                      }}
                    >
                      Get a Quote <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ── DELIVERY OPTIONS ── */}
        <AnimateOnScroll>
          <section className="pb-24 lg:pb-32">
            <div className="max-w-7xl mx-auto px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div
                  className="p-8 rounded-2xl card-hover"
                  style={{ background: 'var(--bg-card)', border: '1px solid var(--border-light)' }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: 'var(--accent-light)' }}>
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Done-for-you hosting</h3>
                  <p className="text-[15px] leading-relaxed mb-3" style={{ color: 'var(--fg-muted)' }}>
                    We deploy your site, manage updates, and keep it running. Small monthly retainer — you never touch a line of code.
                  </p>
                  <span className="text-sm font-semibold" style={{ color: 'var(--accent)' }}>Perfect for non-technical teams</span>
                </div>
                <div
                  className="p-8 rounded-2xl card-hover"
                  style={{ background: 'var(--bg-card)', border: '1px solid var(--border-light)' }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: 'var(--accent-light)' }}>
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Code delivery</h3>
                  <p className="text-[15px] leading-relaxed mb-3" style={{ color: 'var(--fg-muted)' }}>
                    We hand you the finished project — full source code, documentation, and deployment guide. Host it anywhere you want.
                  </p>
                  <span className="text-sm font-semibold" style={{ color: 'var(--accent)' }}>Full ownership, no lock-in</span>
                </div>
              </div>
            </div>
          </section>
        </AnimateOnScroll>

        {/* ── HOW IT WORKS ── */}
        <section className="py-24 lg:py-32" style={{ background: 'var(--bg-alt)' }}>
          <div className="max-w-7xl mx-auto px-8">
            <AnimateOnScroll>
              <div className="text-center mb-14">
                <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--accent)' }}>
                  Simple process
                </p>
                <h2
                  className="text-3xl lg:text-4xl font-light tracking-tight"
                  style={{ fontFamily: 'var(--font-display), Georgia, serif' }}
                >
                  How it works
                </h2>
              </div>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { num: '1', title: 'Tell us what you need', desc: 'A quick form — describe your business and what you are looking for.' },
                { num: '2', title: 'Fixed price, same day', desc: 'We respond with a clear quote and timeline. No back-and-forth.' },
                { num: '3', title: 'We build and deliver', desc: 'Your site goes live — hosted and managed by us, or delivered as code you own.' },
              ].map((step, i) => (
                <AnimateOnScroll key={step.num} delay={i * 0.12}>
                  <div className="text-center">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-semibold transition-transform duration-300 hover:scale-110"
                      style={{ background: 'var(--accent)', color: 'white' }}
                    >
                      {step.num}
                    </div>
                    <h3 className="text-base font-semibold mb-1">{step.title}</h3>
                    <p className="text-sm" style={{ color: 'var(--fg-muted)' }}>{step.desc}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
            <AnimateOnScroll delay={0.3}>
              <div className="text-center mt-12">
                <Link
                  href="/contact"
                  className="btn-shine inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-200"
                  style={{ background: 'var(--fg)', color: 'var(--bg)' }}
                >
                  Start a Project <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
