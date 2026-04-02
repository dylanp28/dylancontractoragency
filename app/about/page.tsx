import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/ui/navbar'
import { Footer } from '@/components/ui/footer'
import { AnimateOnScroll } from '@/components/ui/animate-on-scroll'
import { ArrowRight, Clock, Shield, DollarSign, Headphones } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About',
  description: 'About Dylan Agency — a team of engineers who built a custom development platform to deliver professional websites and apps faster, cheaper, and with human oversight on every project.',
}

const values = [
  { icon: Clock, title: 'Days, not weeks', desc: 'Marketing sites in 4 days. Landing pages in 2. We ship fast because our platform is built for it.' },
  { icon: Shield, title: 'Human oversight', desc: 'Every project is reviewed by experienced engineers. Lighthouse 90+ guaranteed.' },
  { icon: DollarSign, title: 'Honest pricing', desc: 'Sites from $200. No surprise fees, no scope creep, no hourly billing.' },
  { icon: Headphones, title: 'Built for small business', desc: 'Landscapers, contractors, salons, restaurants — we serve businesses that need a great site without the hassle.' },
]

const steps = [
  { num: '01', title: 'You describe it', desc: 'Share your project requirements.' },
  { num: '02', title: 'We scope it', desc: 'Fixed price and timeline, same day.' },
  { num: '03', title: 'We build it', desc: 'Focused execution on your specs.' },
  { num: '04', title: 'We ship it', desc: 'Live URL, deployed and documented.' },
]

export default function AboutPage() {
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
                About
              </p>
              <h1
                className="text-4xl lg:text-6xl font-light leading-[1.08] tracking-tight mb-6 animate-in"
                style={{ fontFamily: 'var(--font-display), Georgia, serif' }}
              >
                Engineers who built<br />a better way.
              </h1>
              <p className="text-lg lg:text-xl leading-relaxed animate-in-delay-1" style={{ color: 'var(--fg-muted)' }}>
                Our team of experienced engineers designed a custom development platform that lets us deliver production-quality websites and apps at a fraction of the traditional cost — with human oversight on every single project. The result: the same work that used to take weeks and cost thousands, done in days, starting at $200.
              </p>
            </div>
          </div>
        </section>

        {/* ── MISSION ── */}
        <AnimateOnScroll>
          <section className="py-20 lg:py-24 relative" style={{ background: 'var(--fg)' }}>
            <div className="max-w-7xl mx-auto px-8">
              <p
                className="text-xl lg:text-2xl font-light leading-relaxed max-w-3xl"
                style={{ fontFamily: 'var(--font-display), Georgia, serif', color: 'var(--bg)' }}
              >
                Small businesses deserve professional websites without the agency price tag. Our engineering team built a custom platform that handles the heavy lifting — so every project ships faster, costs less, and meets the same standard that companies used to spend <span className="gradient-text">thousands on. Human engineers review every build.</span>
              </p>
            </div>
          </section>
        </AnimateOnScroll>

        {/* ── VALUES ── */}
        <section className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-8">
            <AnimateOnScroll>
              <div className="mb-12">
                <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--accent)' }}>
                  What drives us
                </p>
                <h2
                  className="text-3xl lg:text-4xl font-light tracking-tight"
                  style={{ fontFamily: 'var(--font-display), Georgia, serif' }}
                >
                  Our values
                </h2>
              </div>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {values.map((v, i) => (
                <AnimateOnScroll key={v.title} delay={i * 0.08}>
                  <div
                    className="p-6 rounded-2xl card-hover h-full"
                    style={{ background: 'var(--bg-card)', border: '1px solid var(--border-light)' }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                      style={{ background: 'var(--accent-light)' }}
                    >
                      <v.icon className="h-5 w-5" style={{ color: 'var(--accent)' }} />
                    </div>
                    <h3 className="text-base font-semibold mb-1">{v.title}</h3>
                    <p className="text-[15px] leading-relaxed" style={{ color: 'var(--fg-muted)' }}>{v.desc}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="py-24 lg:py-32" style={{ background: 'var(--bg-alt)' }}>
          <div className="max-w-7xl mx-auto px-8">
            <AnimateOnScroll>
              <div className="text-center mb-14">
                <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--accent)' }}>
                  How it works
                </p>
                <h2
                  className="text-3xl lg:text-4xl font-light tracking-tight"
                  style={{ fontFamily: 'var(--font-display), Georgia, serif' }}
                >
                  Four simple steps
                </h2>
              </div>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((s, i) => (
                <AnimateOnScroll key={s.num} delay={i * 0.1}>
                  <div className="text-center">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-semibold transition-transform duration-300 hover:scale-110"
                      style={{ background: 'var(--accent)', color: 'white' }}
                    >
                      {s.num}
                    </div>
                    <h3 className="text-base font-semibold mb-1">{s.title}</h3>
                    <p className="text-[15px]" style={{ color: 'var(--fg-muted)' }}>{s.desc}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <AnimateOnScroll>
          <section className="py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-8 text-center">
              <h2
                className="text-3xl lg:text-4xl font-light tracking-tight mb-4"
                style={{ fontFamily: 'var(--font-display), Georgia, serif' }}
              >
                Let&apos;s work together
              </h2>
              <p className="text-base mb-8 max-w-md mx-auto" style={{ color: 'var(--fg-muted)' }}>
                We take on new projects every week. Same-day response guaranteed.
              </p>
              <Link
                href="/contact"
                className="btn-shine inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-200"
                style={{ background: 'var(--fg)', color: 'var(--bg)' }}
              >
                Get in Touch <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </section>
        </AnimateOnScroll>

      </main>
      <Footer />
    </>
  )
}
