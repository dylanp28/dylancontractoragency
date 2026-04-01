import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/ui/navbar'
import { Footer } from '@/components/ui/footer'
import { ArrowRight, CheckCircle, Globe, Layers, Code2, Cpu } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Web development services: marketing sites, web apps, landing pages, and API development. Fast delivery at competitive rates.',
}

const services = [
  {
    icon: Globe,
    id: 'marketing-sites',
    name: 'Marketing Sites',
    price: '$2,000 – $5,000',
    delivery: '2 business days',
    description: 'Professional marketing websites that convert visitors into customers. Built with Next.js 14, Tailwind CSS, and shadcn/ui for top performance and SEO.',
    features: [
      'Home, About, Services, Contact pages',
      'Mobile-responsive design',
      'Contact form (Resend-powered)',
      'SEO meta tags & sitemap',
      'Lighthouse 90+ scores',
      'Vercel deployment',
      'Analytics (PostHog) + error tracking (Sentry)',
      '1 round of revision included',
    ],
    highlight: true,
  },
  {
    icon: Layers,
    id: 'landing-pages',
    name: 'Landing Pages',
    price: '$500 – $1,500',
    delivery: '1 business day',
    description: 'High-converting single-page campaigns. Perfect for product launches, promotions, or lead generation.',
    features: [
      'Single-page design',
      'Hero + CTA sections',
      'Lead capture form',
      'Mobile-responsive',
      'Fast load times (Core Web Vitals optimized)',
      'Vercel deployment',
    ],
  },
  {
    icon: Cpu,
    id: 'web-apps',
    name: 'Web Applications',
    price: '$5,000 – $15,000',
    delivery: '5–10 business days',
    description: 'Full-stack web applications with authentication, database, and business logic. Next.js 14 App Router with server components.',
    features: [
      'Next.js 14 + TypeScript',
      'Authentication (NextAuth or Clerk)',
      'Database integration (Postgres/Supabase)',
      'REST or tRPC API layer',
      'Admin dashboard (if needed)',
      'CI/CD with GitHub Actions',
      'Vercel deployment',
      'Full test coverage',
    ],
  },
  {
    icon: Code2,
    id: 'apis',
    name: 'API Development',
    price: '$3,000 – $8,000',
    delivery: '3–5 business days',
    description: 'RESTful or GraphQL APIs built for scale. Node.js/Express or Next.js API routes, with documentation and testing.',
    features: [
      'RESTful or GraphQL API',
      'TypeScript + OpenAPI spec',
      'Authentication & rate limiting',
      'Database design and migrations',
      'Automated tests',
      'API documentation',
      'Vercel or Railway deployment',
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-b from-gray-50 to-white pt-16 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Services & Pricing</h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Transparent pricing. Fast delivery. No retainers, no hourly billing surprises — just fixed-price projects delivered fast.
            </p>
          </div>
        </section>

        {/* Service cards */}
        <section className="pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            {services.map((s) => (
              <div
                key={s.id}
                id={s.id}
                className={`rounded-3xl border p-8 lg:p-10 ${s.highlight ? 'border-blue-200 bg-blue-50' : 'border-gray-100 bg-white'} shadow-sm`}
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`h-12 w-12 rounded-xl flex items-center justify-center ${s.highlight ? 'bg-blue-100' : 'bg-gray-100'}`}>
                        <s.icon className={`h-6 w-6 ${s.highlight ? 'text-blue-600' : 'text-gray-600'}`} />
                      </div>
                      {s.highlight && (
                        <span className="text-xs font-semibold bg-blue-600 text-white px-2.5 py-1 rounded-full">Most Popular</span>
                      )}
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{s.name}</h2>
                    <div className="flex items-baseline gap-3 mb-3">
                      <span className="text-3xl font-bold text-gray-900">{s.price}</span>
                      <span className="text-sm text-blue-600 font-medium">· Delivered in {s.delivery}</span>
                    </div>
                    <p className="text-gray-600 mb-6">{s.description}</p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-blue-700 transition-colors text-sm"
                    >
                      Get a Quote <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                  <div className="lg:w-72">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">What's included</h3>
                    <ul className="space-y-2">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ / Process */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How it works</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 text-left">
              {[
                { step: '01', title: 'Tell us your project', desc: 'Fill out the contact form with your requirements, timeline, and budget.' },
                { step: '02', title: 'We scope and confirm', desc: 'We respond same-day with a fixed price and delivery date. No surprises.' },
                { step: '03', title: 'We ship it', desc: 'You get a live, production-ready site delivered to your specs, on time.' },
              ].map((item) => (
                <div key={item.step} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="text-3xl font-bold text-blue-600 mb-3">{item.step}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors">
                Start a Project <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
