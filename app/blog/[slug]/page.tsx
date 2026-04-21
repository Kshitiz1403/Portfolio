import { MDXRemote } from 'next-mdx-remote/rsc'
import { getPost, getAllSlugs } from '@/lib/blog'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await params
    const { meta } = getPost(slug)
    return {
      title: `${meta.title} — Kshitiz Agrawal`,
      description: meta.description,
    }
  } catch {
    return {}
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await params
    const { meta, content, readingTime } = getPost(slug)

    return (
      <div>
        <Link
          href="/blog"
          className="text-xs text-stone-400 dark:text-zinc-700 hover:text-stone-600 dark:hover:text-zinc-400 transition-colors duration-200 mb-12 block"
        >
          ← writing
        </Link>

        <header className="mb-12">
          <h1 className="text-xl font-semibold text-stone-900 dark:text-zinc-50 mb-3 leading-snug tracking-tight">
            {meta.title}
          </h1>
          <div className="flex items-center gap-3 text-xs text-stone-400 dark:text-zinc-600">
            <span className="font-mono">
              {new Date(meta.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
            <span>·</span>
            <span className="font-mono">{readingTime} min read</span>
            {meta.tags && meta.tags.length > 0 && (
              <>
                <span>·</span>
                <div className="flex gap-2 font-mono">
                  {meta.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </>
            )}
          </div>
        </header>

        <article className="prose prose-sm max-w-none
          prose-headings:font-semibold prose-headings:tracking-tight
          prose-h2:text-base prose-h3:text-sm
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
