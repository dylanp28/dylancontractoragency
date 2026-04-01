import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/ui/navbar'
import { Footer } from '@/components/ui/footer'
import { ArrowRight, Star, Clock, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'See our delivered projects. Real clients, real results — marketing sites and web apps shipped fast.',
}

const projects = [
  {
    id: 'novaspark',
    name: 'NovaSpark',
    type: 'Marketing Site',
    status: 'Delivered',
    description: 'Full marketing site for a SaaS startup. Hero, features, pricing, contact — all delivered in 2 days.',
    longDescription: 'NovaSpark needed a professional marketing site to launch their product. We built a complete 5-page site using Next.js 14 and Tailwind CSS, with a Resend-powered contact form, full SEO optimization, and deployment to Vercel.',
    tech: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Resend', 'PostHog', 'Sentry', 'Vercel'],
    deliveredIn: '2 days',
    lighthouse: { performance: 94, accessibility: 98, bestPractices: 100, seo: 100 },
    highlights: [
      'Delivered 60% under the 5-day budget',
      'Lighthouse 94/98/100/100 scores',
      'Full contact form with email forwarding',
      'SEO-optimized for SaaS keywords',
    ],
    gradient: 'from-blue-600 to-indigo-700',
  },
]

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-b from-gray-50 to-white pt-16 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Our Work</h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Every project ships on time, on budget, and with production-quality code.
            </p>
          </div>
        </section>

        {/* Projects */}
        <section className="pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {projects.map((project) => (
              <article key={project.id} className="rounded-3xl overflow-hidden border border-gray-100 shadow-sm">
                {/* Header */}
                <div className={`bg-gradient-to-br ${project.gradient} p-10 text-white`}>
                  <div className="flex flex-col md:flex-row items-start justify-between gap-6">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-semibold bg-white/20 px-2.5 py-1 rounded-full">{project.type}</span>
                        <span className="text-xs font-semibold bg-green-400/20 text-green-100 px-2.5 py-1 rounded-full flex items-center gap-1">
                          <Star className="h-3 w-3" /> {project.status}
                        </span>
                      </div>
                      <h2 className="text-3xl font-bold mb-3">{project.name}</h2>
                      <p className="text-blue-100 max-w-xl">{project.longDescription}</p>
                    </div>
                    <div className="flex items-center gap-2 bg-white/10 px-4 py-3 rounded-xl whitespace-nowrap">
                      <Clock className="h-5 w-5 text-blue-200" />
                      <span className="text-sm font-semibold">Delivered in {project.deliveredIn}</span>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="bg-white p-10">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {/* Highlights */}
                    <div className="lg:col-span-2">
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Highlights</h3>
                      <ul className="space-y-3">
                        {project.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-3">
                            <TrendingUp className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{h}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6">
                        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Tech Stack</h3>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((t) => (
                            <span key={t} className="bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-1.5 rounded-lg">{t}</span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Lighthouse scores */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Lighthouse Scores</h3>
                      <div className="space-y-3">
                        {Object.entries(project.lighthouse).map(([key, score]) => {
                          const labels: Record<string, string> = {
                            performance: 'Performance',
                            accessibility: 'Accessibility',
                            bestPractices: 'Best Practices',
                            seo: 'SEO',
                          }
                          const color = score >= 90 ? 'text-green-600' : score >= 50 ? 'text-yellow-600' : 'text-red-600'
                          return (
                            <div key={key} className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3">
                              <span className="text-sm text-gray-600">{labels[key]}</span>
                              <span className={`text-xl font-bold ${color}`}>{score}</span>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Want results like these?</h2>
            <p className="text-lg text-gray-500 mb-8">Tell us about your project and we'll have a quote to you same-day.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors">
              Start Your Project <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
