import { MDXRemote } from 'next-mdx-remote/rsc'
import { getWork, getAllWorkSlugs } from '@/lib/work'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import PostHogCapture from '@/components/posthog-capture'

export async function generateStaticParams() {
  return getAllWorkSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await params
    const { meta } = getWork(slug)
    return {
      title: `${meta.title} — Kshitiz Agrawal`,
      description: meta.description,
    }
  } catch {
    return {}
  }
}

export default async function WorkPage({ params }: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await params
    const { meta, content } = getWork(slug)

    return (
      <div>
        <PostHogCapture event="work_project_viewed" properties={{ project_slug: slug, project_title: meta.title }} />
        <Link
          href="/#experience"
          className="text-xs text-stone-400 dark:text-zinc-700 hover:text-stone-600 dark:hover:text-zinc-400 transition-colors duration-200 mb-12 block"
        >
          ← back
        </Link>

        <header className="mb-12">
          <p className="text-xs font-mono text-emerald-700 dark:text-emerald-400 uppercase tracking-widest mb-4">
            FinBox · {meta.period}
          </p>
          <h1 className="text-xl font-semibold text-stone-900 dark:text-zinc-50 mb-3 leading-snug tracking-tight">
            {meta.title}
          </h1>
          <p className="text-sm text-stone-500 dark:text-zinc-500 mb-6">{meta.description}</p>
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
        </header>

        <article className="prose prose-sm max-w-none
          prose-headings:font-semibold prose-headings:tracking-tight
          prose-h2:text-base prose-h2:mt-10 prose-h3:text-sm
          prose-p:leading-relaxed
          prose-a:no-underline
          prose-code:text-xs prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
          prose-pre:rounded-lg
          prose-blockquote:not-italic
        ">
          <MDXRemote source={content} />
        </article>
      </div>
    )
  } catch {
    notFound()
  }
}
