import type { Metadata } from 'next'
import { Navbar } from '@/components/ui/navbar'
import { Footer } from '@/components/ui/footer'
import { AnimateOnScroll } from '@/components/ui/animate-on-scroll'
import { ContactForm } from '@/components/ui/contact-form'
import { Clock, DollarSign, MessageSquare } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get a quote for your project. Sites from $200. Same-day response with fixed pricing.',
}

const promises = [
  { icon: Clock, title: 'Same-day response', desc: 'We respond within hours.' },
  { icon: DollarSign, title: 'Fixed pricing', desc: 'Flat price quoted upfront.' },
  { icon: MessageSquare, title: 'Direct line', desc: 'Talk to the team building it.' },
]

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section className="pt-36 pb-20 lg:pt-48 lg:pb-24 relative overflow-hidden">
          <div className="hero-orb hero-orb-2" />
          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-wider mb-3 animate-in" style={{ color: 'var(--accent)' }}>
                Contact
              </p>
              <h1
                className="text-4xl lg:text-6xl font-light leading-[1.08] tracking-tight mb-6 animate-in"
                style={{ fontFamily: 'var(--font-display), Georgia, serif' }}
              >
                Start your project
              </h1>
              <p className="text-lg lg:text-xl leading-relaxed animate-in-delay-1" style={{ color: 'var(--fg-muted)' }}>
                Describe your business and what you need. We will respond same day with a fixed price — no hourly billing, no surprises. Sites start at $200.
              </p>
            </div>
          </div>
        </section>

        {/* ── FORM + SIDEBAR ── */}
        <section className="pb-24 lg:pb-32">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

              {/* Promises sidebar */}
              <div className="lg:col-span-4">
                <div className="space-y-4">
                  {promises.map((p, i) => (
                    <AnimateOnScroll key={p.title} delay={i * 0.08} direction="right">
                      <div
                        className="flex items-start gap-4 p-5 rounded-xl card-hover"
                        style={{ background: 'var(--bg-alt)' }}
                      >
                        <div
                          className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                          style={{ background: 'var(--accent-light)' }}
                        >
                          <p.icon className="h-4 w-4" style={{ color: 'var(--accent)' }} />
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold mb-0.5">{p.title}</h3>
                          <p className="text-sm" style={{ color: 'var(--fg-muted)' }}>{p.desc}</p>
                        </div>
                      </div>
                    </AnimateOnScroll>
                  ))}
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-7 lg:col-start-6">
                <AnimateOnScroll direction="left">
                  <div
                    className="p-8 rounded-2xl"
                    style={{ background: 'var(--bg-card)', border: '1px solid var(--border-light)', boxShadow: '0 8px 32px -8px rgba(25, 25, 25, 0.06)' }}
                  >
                    <ContactForm />
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
