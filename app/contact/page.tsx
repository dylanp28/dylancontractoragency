import type { Metadata } from 'next'
import { Navbar } from '@/components/ui/navbar'
import { Footer } from '@/components/ui/footer'
import { ContactForm } from '@/components/ui/contact-form'
import { Mail, Clock, MessageSquare } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Dylan Contractor Agency. We respond same-day and have quotes ready within hours.',
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-gradient-to-b from-gray-50 to-white pt-16 pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Left */}
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Start your project</h1>
                <p className="text-lg text-gray-500 mb-10">
                  Tell us what you need. We'll respond with a fixed price and delivery estimate — same day.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Same-day response</h3>
                      <p className="text-sm text-gray-500 mt-1">We review every inquiry and respond within hours.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Fixed-price quotes</h3>
                      <p className="text-sm text-gray-500 mt-1">No hourly surprises. We quote a flat price before any work begins.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Direct communication</h3>
                      <p className="text-sm text-gray-500 mt-1">No account managers or middlemen. Direct line to the team building your project.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - form */}
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
