'use client'

import posthog from 'posthog-js'
import config from '@/site.config'

const { socialLinks } = config.footer

export default function Footer() {
  return (
    <footer className="mt-24 pt-8 border-t border-stone-200 dark:border-zinc-900 flex items-center justify-between">
      <p className="text-xs text-stone-400 dark:text-zinc-700">
        {config.site.name} · {new Date().getFullYear()}
      </p>
      <div className="flex items-center gap-5">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            {...(link.href.startsWith('mailto:') ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
            onClick={() => posthog.capture('footer_social_link_clicked', { label: link.label })}
            className="text-xs text-stone-400 dark:text-zinc-700 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors duration-200"
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  )
}
