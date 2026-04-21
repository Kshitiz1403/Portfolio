import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'

export const metadata = {
  title: 'Writing — Kshitiz Agrawal',
  description: 'Thoughts on distributed systems, infrastructure, and engineering.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div>
      <h1 className="text-xs font-mono text-emerald-700 dark:text-emerald-400 uppercase tracking-widest mb-12">
        Writing
      </h1>
      {posts.length === 0 ? (
        <p className="text-stone-400 dark:text-zinc-700 text-sm">No posts yet.</p>
      ) : (
        <div className="space-y-10">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
              <div className="flex items-baseline justify-between mb-1">
                <span className="text-sm text-stone-700 dark:text-zinc-300 group-hover:text-stone-900 dark:group-hover:text-zinc-50 transition-colors duration-200">
                  {post.title}
                </span>
                <span className="text-xs text-stone-400 dark:text-zinc-700 font-mono ml-4 shrink-0 whitespace-nowrap">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'short',
                    year: 'numeric',
                  })}
                  {' · '}{post.readingTime} min
                </span>
              </div>
              <p className="text-sm text-stone-500 dark:text-zinc-600">{post.description}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
