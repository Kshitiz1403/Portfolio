'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggle from '@/components/theme-toggle'

export default function Nav() {
  const pathname = usePathname()

  const linkClass = (href: string) => {
    const active = pathname === href || pathname.startsWith(href + '/')
    return `text-sm transition-colors duration-200 ${
      active
        ? 'text-stone-900 dark:text-zinc-100'
        : 'text-stone-500 dark:text-zinc-500 hover:text-stone-800 dark:hover:text-zinc-200'
    }`
  }

  return (
    <nav className="flex items-center justify-between mb-20">
      <Link
        href="/"
        className="font-mono text-sm text-stone-900 dark:text-zinc-50 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors duration-200"
      >
        kshitiz.
      </Link>
      <div className="flex items-center gap-6">
        <Link href="/blog" className={linkClass('/blog')}>
          writing
        </Link>
        <a
          href="/resume"
          className="text-sm text-stone-500 dark:text-zinc-500 hover:text-stone-800 dark:hover:text-zinc-200 transition-colors duration-200"
        >
          resume
        </a>
        <ThemeToggle />
      </div>
    </nav>
  )
}
