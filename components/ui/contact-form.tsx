'use client'

import { useState } from 'react'
import { Send, Loader2, CheckCircle } from 'lucide-react'

type Status = 'idle' | 'loading' | 'success' | 'error'

const services = [
  'Landing Page',
  'Marketing Site',
  'Web Application',
  'API Development',
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
      <div className="py-16 text-center">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
          style={{ background: 'var(--accent-light)' }}
        >
          <CheckCircle className="h-7 w-7" style={{ color: 'var(--accent)' }} />
        </div>
        <h3
          className="text-xl font-light mb-2"
          style={{ fontFamily: 'var(--font-display), Georgia, serif' }}
        >
          Message sent
        </h3>
        <p className="text-sm" style={{ color: 'var(--fg-muted)' }}>
          We&apos;ll respond with a quote same-day.
        </p>
      </div>
    )
  }

  const inputClass = "w-full px-4 py-3.5 text-[15px] rounded-xl bg-transparent outline-none transition-colors duration-200"
  const inputStyle: React.CSSProperties = {
    border: '1px solid var(--border)',
    color: 'var(--fg)',
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--fg-faint)' }}>
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className={inputClass}
            style={inputStyle}
            onFocus={e => (e.currentTarget.style.borderColor = 'var(--accent)')}
            onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--fg-faint)' }}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className={inputClass}
            style={inputStyle}
            onFocus={e => (e.currentTarget.style.borderColor = 'var(--accent)')}
            onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--fg-faint)' }}>
          Service
        </label>
        <select
          id="service"
          name="service"
          className={inputClass}
          style={{ ...inputStyle, cursor: 'pointer' }}
          onFocus={e => (e.currentTarget.style.borderColor = 'var(--accent)')}
          onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
        >
          {services.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--fg-faint)' }}>
          Project details
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="What do you need? Timeline, budget, design references..."
          className={inputClass}
          style={{ ...inputStyle, resize: 'none' }}
          onFocus={e => (e.currentTarget.style.borderColor = 'var(--accent)')}
          onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
        />
      </div>

      {status === 'error' && (
        <p className="text-sm px-4 py-3 rounded-xl" style={{ color: 'var(--accent)', background: 'var(--accent-light)' }}>
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200"
        style={{
          background: 'var(--fg)',
          color: 'var(--bg)',
          opacity: status === 'loading' ? 0.6 : 1,
          cursor: status === 'loading' ? 'not-allowed' : 'pointer',
        }}
      >
        {status === 'loading' ? (
          <><Loader2 className="h-4 w-4 animate-spin" /> Sending...</>
        ) : (
          <><Send className="h-4 w-4" /> Send Message</>
        )}
      </button>
    </form>
  )
}
