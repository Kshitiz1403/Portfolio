import { MDXRemote } from 'next-mdx-remote/rsc'
import { getPost, getAllSlugs } from '@/lib/blog'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  try {
    const { meta } = getPost(params.slug)
    return {
      title: `${meta.title} — Kshitiz Agrawal`,
      description: meta.description,
    }
  } catch {
    return {}
  }
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  try {
    const { meta, content } = getPost(params.slug)

    return (
      <div>
        <Link
          href="/blog"
          className="text-xs text-zinc-700 hover:text-zinc-400 transition-colors duration-200 mb-12 block"
        >
          ← writing
        </Link>

        <header className="mb-12">
          <h1 className="text-xl font-semibold text-zinc-50 mb-3 leading-snug tracking-tight">
            {meta.title}
          </h1>
          <div className="flex items-center gap-3 text-xs text-zinc-600">
            <span className="font-mono">
              {new Date(meta.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
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

        <article
          className="
            prose prose-sm prose-invert max-w-none
            prose-headings:font-semibold prose-headings:text-zinc-100 prose-headings:tracking-tight
            prose-h2:text-base prose-h3:text-sm
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
