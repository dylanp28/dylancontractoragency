import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { PostHogProvider } from '@/components/providers/posthog-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Dylan Contractor Agency — Web Development Agency',
    template: '%s | Dylan Contractor Agency',
  },
  description: 'AI-powered web development agency. 10x faster delivery, competitive pricing. Marketing sites, web apps, and APIs in days, not weeks.',
  keywords: ['web development agency', 'fast website delivery', 'marketing site', 'Next.js development', 'web app development'],
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://youragency.dev'),
  openGraph: {
    type: 'website',
    siteName: 'Dylan Contractor Agency',
    title: 'Dylan Contractor Agency — Web Development Agency',
    description: 'AI-powered web development agency. 10x faster delivery, competitive pricing.',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <PostHogProvider>
          {children}
        </PostHogProvider>
      </body>
    </html>
  )
}
