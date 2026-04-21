import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="flex items-center justify-between mb-20">
      <Link
        href="/"
        className="font-mono text-sm text-zinc-50 hover:text-emerald-400 transition-colors duration-200"
      >
        kshitiz.
      </Link>
      <div className="flex items-center gap-6">
        <Link
          href="/blog"
          className="text-sm text-zinc-500 hover:text-zinc-200 transition-colors duration-200"
        >
          writing
        </Link>
        <a
          href="/resume"
          className="text-sm text-zinc-500 hover:text-zinc-200 transition-colors duration-200"
        >
          resume
        </a>
      </div>
    </nav>
  )
}
