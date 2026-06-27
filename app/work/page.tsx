import Link from 'next/link'
import { getAllWork } from '@/lib/work'
import config from '@/site.config'

export const metadata = {
  title: `Work — ${config.site.name}`,
  description: 'Projects I built at FinBox.',
}

export default function WorkPage() {
  const projects = getAllWork()

  return (
    <div>
      <h1 className="text-xs font-mono text-emerald-700 dark:text-emerald-400 uppercase tracking-widest mb-12">
        Work
      </h1>
      <div className="space-y-10">
        {projects.map(({ slug, meta }) => (
          <Link
            key={slug}
            href={`/work/${slug}`}
            className="block group"
          >
            <div className="flex items-baseline justify-between mb-1">
              <span className="text-sm text-stone-700 dark:text-zinc-300 group-hover:text-stone-900 dark:group-hover:text-zinc-50 transition-colors duration-200">
                {meta.title}
              </span>
              <span className="text-xs text-stone-400 dark:text-zinc-700 font-mono ml-4 shrink-0 whitespace-nowrap">
                {meta.period}
              </span>
            </div>
            <p className="text-sm text-stone-500 dark:text-zinc-600 mb-3">{meta.description}</p>
            <div className="flex flex-wrap gap-2">
              {meta.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono text-stone-500 dark:text-zinc-600 bg-stone-100 dark:bg-zinc-900 px-2 py-0.5 rounded"
                >
                  {t}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
