import { MDXRemote } from 'next-mdx-remote/rsc'
import { getWork, getAllWorkSlugs } from '@/lib/work'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return getAllWorkSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  try {
    const { meta } = getWork(params.slug)
    return {
      title: `${meta.title} — Kshitiz Agrawal`,
      description: meta.description,
    }
  } catch {
    return {}
  }
}

export default async function WorkPage({ params }: { params: { slug: string } }) {
  try {
    const { meta, content } = getWork(params.slug)

    return (
      <div>
        <Link
          href="/#experience"
          className="text-xs text-zinc-700 hover:text-zinc-400 transition-colors duration-200 mb-12 block"
        >
          ← back
        </Link>

        <header className="mb-12">
          <p className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-4">
            FinBox · {meta.period}
          </p>
          <h1 className="text-xl font-semibold text-zinc-50 mb-3 leading-snug tracking-tight">
            {meta.title}
          </h1>
          <p className="text-sm text-zinc-500 mb-6">{meta.description}</p>
          <div className="flex flex-wrap gap-2">
            {meta.tech.map((t) => (
              <span
                key={t}
                className="text-xs font-mono text-zinc-600 bg-zinc-900 px-2 py-0.5 rounded"
              >
                {t}
              </span>
            ))}
          </div>
        </header>

        <article
          className="
            prose prose-sm prose-invert max-w-none
            prose-headings:font-semibold prose-headings:text-zinc-100 prose-headings:tracking-tight
            prose-h2:text-base prose-h2:mt-10 prose-h3:text-sm
            prose-p:text-zinc-500 prose-p:leading-relaxed
            prose-a:text-emerald-500 prose-a:no-underline hover:prose-a:text-emerald-400
            prose-strong:text-zinc-300 prose-strong:font-medium
            prose-code:text-emerald-400 prose-code:bg-zinc-900 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-xs prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
            prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-zinc-800 prose-pre:rounded-lg
            prose-blockquote:border-l-emerald-500 prose-blockquote:text-zinc-600 prose-blockquote:not-italic
            prose-hr:border-zinc-900
            prose-li:text-zinc-500
            prose-ul:text-zinc-500
            prose-ol:text-zinc-500
          "
        >
          <MDXRemote source={content} />
        </article>
      </div>
    )
  } catch {
    notFound()
  }
}
