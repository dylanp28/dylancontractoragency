import Link from 'next/link'
import { Zap } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-gray-900 mb-3">
              <Zap className="h-5 w-5 text-blue-600" />
              Dylan Agency
            </Link>
            <p className="text-sm text-gray-500 max-w-xs">
              AI-powered web development agency. We deliver 10x faster than traditional agencies at competitive market rates.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Services</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link href="/services#marketing-sites" className="hover:text-gray-900">Marketing Sites</Link></li>
              <li><Link href="/services#web-apps" className="hover:text-gray-900">Web Applications</Link></li>
              <li><Link href="/services#landing-pages" className="hover:text-gray-900">Landing Pages</Link></li>
              <li><Link href="/services#apis" className="hover:text-gray-900">API Development</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Company</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link href="/portfolio" className="hover:text-gray-900">Portfolio</Link></li>
              <li><Link href="/about" className="hover:text-gray-900">About</Link></li>
              <li><Link href="/contact" className="hover:text-gray-900">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} Dylan Contractor Agency. All rights reserved.</p>
          <p className="text-xs text-gray-400">Delivering quality websites in days, not weeks.</p>
        </div>
      </div>
    </footer>
  )
}
