export default function Footer() {
  return (
    <footer className="mt-24 pt-8 border-t border-stone-200 dark:border-zinc-900">
      <p className="text-xs text-stone-400 dark:text-zinc-700">
        Kshitiz Agrawal · {new Date().getFullYear()}
      </p>
    </footer>
  )
}
