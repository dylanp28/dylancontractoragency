import type { Metadata } from 'next'
import { Instrument_Serif, Inter } from 'next/font/google'
import './globals.css'
import { PostHogProvider } from '@/components/providers/posthog-provider'

const instrumentSerif = Instrument_Serif({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Dylan Agency — Web Development Studio',
    template: '%s | Dylan Agency',
  },
  description: 'Professional websites from $200. Marketing sites, web apps, and APIs delivered in days — not months. Hosting included or code delivered.',
  keywords: ['affordable web development', 'small business website', 'fast website delivery', 'cheap marketing site', 'web development agency'],
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://dylanagency.dev'),
  openGraph: {
    type: 'website',
    siteName: 'Dylan Agency',
    title: 'Dylan Agency — Web Development Studio',
    description: 'Professional websites from $200. Delivered in days, not weeks.',
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${inter.variable}`}>
      <body style={{ fontFamily: 'var(--font-body), system-ui, sans-serif' }}>
        <PostHogProvider>
          {children}
        </PostHogProvider>
      </body>
    </html>
  )
}
