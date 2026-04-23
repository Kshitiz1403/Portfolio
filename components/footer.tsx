export default function Footer() {
  return (
    <footer className="mt-24 pt-8 border-t border-stone-200 dark:border-zinc-900">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <p className="text-xs text-stone-400 dark:text-zinc-700 font-mono">
          © {new Date().getFullYear()} Kshitiz Agrawal
        </p>
        <div className="flex items-center gap-5 text-xs text-stone-400 dark:text-zinc-700">
          <a
            href="https://github.com/Kshitiz1403"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-stone-600 dark:hover:text-zinc-400 transition-colors duration-200"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/kshitizagrawal"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-stone-600 dark:hover:text-zinc-400 transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a
            href="mailto:kshitizagrawal@outlook.com"
            className="hover:text-stone-600 dark:hover:text-zinc-400 transition-colors duration-200"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
