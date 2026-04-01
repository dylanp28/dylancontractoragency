import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/ui/navbar'
import { Footer } from '@/components/ui/footer'
import { ArrowRight, Zap, Shield, TrendingUp, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About',
  description: 'About Dylan Contractor Agency — a modern web development agency built for speed, quality, and volume.',
}

const values = [
  {
    icon: Zap,
    title: 'Speed first',
    description: 'We built our entire workflow around fast delivery. Every tool, every process, every decision optimizes for shipping quality work quickly.',
  },
  {
    icon: Shield,
    title: 'Quality you can measure',
    description: 'Every site ships with Lighthouse 90+ across all categories. No exceptions. We use automated testing to ensure consistent quality.',
  },
  {
    icon: TrendingUp,
    title: 'Competitive pricing',
    description: 'We pass our efficiency advantage directly to clients. Market-quality work at rates that undercut traditional agencies by up to 60%.',
  },
  {
    icon: Users,
    title: 'Always available',
    description: 'Rush project? Weekend deadline? We operate without the scheduling bottlenecks of traditional teams. We\'re available when you need us.',
  },
]

const processSteps = [
  {
    step: '1',
    title: 'Intake & Scoping',
    description: 'You describe your project. We assess requirements and return a fixed price and delivery date — same day.',
  },
  {
    step: '2',
    title: 'Build',
    description: 'We build from battle-tested templates and patterns. No reinventing the wheel — just focused execution on your specific requirements.',
  },
  {
    step: '3',
    title: 'Review & QA',
    description: 'Every project goes through automated quality checks: Lighthouse scoring, functionality testing, mobile/browser compatibility.',
  },
  {
    step: '4',
    title: 'Deploy & Handoff',
    description: 'Deployed to Vercel with full delivery notes. You get a live URL, credentials, and everything you need to maintain and extend the site.',
  },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-b from-gray-50 to-white pt-16 pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Built for speed. Obsessed with quality.</h1>
            <p className="text-xl text-gray-500 leading-relaxed">
              Dylan Contractor Agency is a modern web development agency. We specialize in shipping
              marketing sites, web apps, and APIs faster than anyone else — without compromising on quality or price.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 border-y border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-blue-600 rounded-3xl p-10 text-white">
              <h2 className="text-2xl font-bold mb-4">Our mission</h2>
              <p className="text-blue-100 text-lg leading-relaxed">
                Traditional web agencies are slow, expensive, and hard to scale. We built a different kind of agency —
                one that delivers the same quality work at 10x the throughput. Our clients get fast delivery,
                transparent pricing, and a consistent quality bar they can count on, project after project.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What we stand for</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {values.map((v) => (
                <div key={v.title} className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
                  <div className="h-12 w-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5">
                    <v.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{v.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our process</h2>
              <p className="text-lg text-gray-500">Repeatable, efficient, quality-controlled.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step) => (
                <div key={step.step} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="text-4xl font-bold text-blue-100 mb-4">{step.step}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Let's work together</h2>
            <p className="text-lg text-gray-500 mb-8">We take on new projects every week. Reach out and we'll respond same-day.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors">
              Get in Touch <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
