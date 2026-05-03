'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import ThemeToggle from '@/components/theme-toggle'
import posthog from 'posthog-js'
import config from '@/site.config'

const { links: navLinks, sections } = config.nav

export default function Nav() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [activeSection, setActiveSection] = useState<string | null>(null)

  useEffect(() => {
    if (!isHome) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          } else if (
            entry.target.id === sections[0] &&
            entry.boundingClientRect.top > 0
          ) {
            // First section scrolled back above the trigger band — clear the label
            setActiveSection(null)
          }
        }
      },
      { rootMargin: '-10% 0px -70% 0px', threshold: 0 }
    )

    for (const id of sections) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [isHome])

  const linkClass = (href: string) => {
    const active = pathname === href || pathname.startsWith(href + '/')
    return `text-sm transition-colors duration-200 ${
      active
        ? 'text-stone-900 dark:text-zinc-100'
        : 'text-stone-500 dark:text-zinc-500 hover:text-stone-800 dark:hover:text-zinc-200'
    }`
  }

  return (
    <nav className="sticky top-0 z-10 flex items-center justify-between mb-20 -mx-6 px-6 py-4 bg-[#faf8f5]/90 dark:bg-zinc-950/90 backdrop-blur-sm transition-colors duration-200">
      <div className="flex items-center gap-1.5 font-mono text-sm">
        <Link
          href="/"
          className="text-stone-900 dark:text-zinc-50 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors duration-200"
        >
          {config.site.logo}
        </Link>
        {isHome && activeSection && (
          <span className="text-stone-400 dark:text-zinc-600 transition-all duration-300 select-none">
            · {activeSection}
          </span>
        )}
      </div>
      <div className="flex items-center gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={linkClass(link.href)}
            onClick={() => posthog.capture('nav_link_clicked', { label: link.label, href: link.href })}
          >
            {link.label}
          </Link>
        ))}
        <ThemeToggle />
      </div>
    </nav>
  )
}
