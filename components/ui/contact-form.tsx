'use client'

import { useState } from 'react'
import { Send, Loader2, CheckCircle } from 'lucide-react'

type Status = 'idle' | 'loading' | 'success' | 'error'

const services = [
  'Marketing Site ($2,000–5,000)',
  'Landing Page ($500–1,500)',
  'Web Application ($5,000–15,000)',
  'API Development ($3,000–8,000)',
  'Not sure yet',
]

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setError('')

    const fd = new FormData(e.currentTarget)
    const body = {
      name: fd.get('name') as string,
      email: fd.get('email') as string,
      message: `Service: ${fd.get('service')}\n\nProject details:\n${fd.get('message')}`,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      if (res.ok) {
        setStatus('success')
      } else {
        const data = await res.json()
        setError(data.error || 'Something went wrong. Please try again.')
        setStatus('error')
      }
    } catch {
      setError('Network error. Please try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
        <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-gray-900 mb-2">Message sent!</h3>
        <p className="text-gray-600">We'll get back to you with a quote same-day.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">Name *</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">Email *</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1.5">Service needed</label>
        <select
          id="service"
          name="service"
          className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          {services.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">Project details *</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your project: what you need, your timeline, any existing design assets or references..."
          className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
        />
      </div>

      {status === 'error' && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">{error}</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
      >
        {status === 'loading' ? (
          <><Loader2 className="h-5 w-5 animate-spin" /> Sending...</>
        ) : (
          <><Send className="h-5 w-5" /> Send Message</>
        )}
      </button>
    </form>
  )
}
