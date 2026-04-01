import Link from 'next/link'
import { Navbar } from '@/components/ui/navbar'
import { Footer } from '@/components/ui/footer'
import { ArrowRight, Zap, Clock, DollarSign, CheckCircle, Star } from 'lucide-react'

const stats = [
  { label: 'Projects Delivered', value: '50+' },
  { label: 'Avg. Delivery Time', value: '2 days' },
  { label: 'Client Satisfaction', value: '100%' },
  { label: 'Cost vs Agencies', value: '60% less' },
]

const features = [
  {
    icon: Zap,
    title: '10x Faster Delivery',
    description: 'We deliver marketing sites in 2 days and web apps in under a week — not the 2–4 weeks you\'d wait from a traditional agency.',
  },
  {
    icon: DollarSign,
    title: 'Competitive Pricing',
    description: 'Full market-quality websites at rates that undercut traditional agencies. No bloat, no project management overhead.',
  },
  {
    icon: Clock,
    title: 'Always Available',
    description: 'Rush project? Weekend deadline? We\'re available 24/7. No booking wait lists, no scheduling friction.',
  },
]

const services = [
  { name: 'Marketing Site', price: '$2,000–5,000', time: '2 days' },
  { name: 'Landing Page', price: '$500–1,500', time: '1 day' },
  { name: 'Web Application', price: '$5,000–15,000', time: '5–10 days' },
  { name: 'API Development', price: '$3,000–8,000', time: '3–5 days' },
]

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white pt-20 pb-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full mb-6">
              <Zap className="h-3.5 w-3.5" />
              Fast website delivery — 10x the throughput
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Web development that{' '}
              <span className="text-blue-600">ships fast</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10">
              We build professional marketing sites, web apps, and APIs at competitive rates —
              delivered in days, not weeks. Quality you expect, speed you won't believe.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors text-lg">
                Get a Free Quote
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/portfolio" className="flex items-center gap-2 text-gray-700 font-semibold px-6 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors text-lg">
                See Our Work
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-3xl font-bold text-gray-900">{s.value}</div>
                  <div className="text-sm text-gray-500 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why us */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why clients choose us</h2>
              <p className="text-lg text-gray-500 max-w-xl mx-auto">We combine speed, quality, and competitive pricing that traditional agencies can't match.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((f) => (
                <div key={f.title} className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
                  <div className="h-12 w-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5">
                    <f.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services preview */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Services & Pricing</h2>
              <p className="text-lg text-gray-500">Transparent pricing. Fast delivery. No surprises.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {services.map((s) => (
                <div key={s.name} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <h3 className="font-semibold text-gray-900">{s.name}</h3>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{s.price}</div>
                  <div className="text-sm text-blue-600 font-medium">Delivered in {s.time}</div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link href="/services" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline">
                View full service details <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Portfolio preview */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Recent Work</h2>
              <p className="text-lg text-gray-500">Real projects, real results.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-10 text-white flex flex-col md:flex-row items-start gap-8">
              <div className="flex-1">
                <div className="inline-flex items-center gap-1.5 bg-white/20 text-white text-xs font-medium px-2.5 py-1 rounded-full mb-4">
                  <Star className="h-3 w-3" /> Featured Project
                </div>
                <h3 className="text-2xl font-bold mb-3">NovaSpark</h3>
                <p className="text-blue-100 mb-6">
                  Full marketing site for a SaaS startup — hero section, features, pricing, and contact form.
                  Delivered in 2 days. Lighthouse scores: 94 performance, 98 accessibility, 100 best practices, 100 SEO.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Next.js 14', 'Tailwind CSS', 'Resend', 'Vercel'].map((t) => (
                    <span key={t} className="bg-white/20 text-white text-xs font-medium px-2.5 py-1 rounded-full">{t}</span>
                  ))}
                </div>
                <Link href="/portfolio" className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-5 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm">
                  View Case Study <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="flex flex-col gap-3 md:w-56 w-full">
                {[
                  { label: 'Performance', value: '94' },
                  { label: 'Accessibility', value: '98' },
                  { label: 'Best Practices', value: '100' },
                  { label: 'SEO', value: '100' },
                ].map((m) => (
                  <div key={m.label} className="bg-white/10 rounded-xl px-4 py-3 flex justify-between items-center">
                    <span className="text-sm text-blue-100">{m.label}</span>
                    <span className="text-lg font-bold text-white">{m.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center mt-8">
              <Link href="/portfolio" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline">
                See all projects <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to ship faster?</h2>
            <p className="text-lg text-gray-400 mb-8">Tell us about your project. We'll get back to you same day.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors text-lg">
              Start Your Project <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
