'use client'

import posthog from 'posthog-js'

export default function Footer() {
  return (
    <footer className="mt-24 pt-8 border-t border-stone-200 dark:border-zinc-900 flex items-center justify-between">
      <p className="text-xs text-stone-400 dark:text-zinc-700">
        Kshitiz Agrawal · {new Date().getFullYear()}
      </p>
      <div className="flex items-center gap-5">
        <a
          href="https://github.com/Kshitiz1403"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => posthog.capture('footer_social_link_clicked', { label: 'GitHub' })}
          className="text-xs text-stone-400 dark:text-zinc-700 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors duration-200"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/kshitizagrawal"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => posthog.capture('footer_social_link_clicked', { label: 'LinkedIn' })}
          className="text-xs text-stone-400 dark:text-zinc-700 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors duration-200"
        >
          LinkedIn
        </a>
        <a
          href="mailto:kshitizagrawal@outlook.com"
          onClick={() => posthog.capture('footer_social_link_clicked', { label: 'Contact' })}
          className="text-xs text-stone-400 dark:text-zinc-700 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors duration-200"
        >
          Email
        </a>
      </div>
    </footer>
  )
}
