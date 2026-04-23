'use client'

import Link from 'next/link'
import posthog from 'posthog-js'

interface Post {
  slug: string
  title: string
  date: string
  description: string
  readingTime: number
}

export default function BlogList({ posts }: { posts: Post[] }) {
  if (posts.length === 0) {
    return <p className="text-stone-400 dark:text-zinc-700 text-sm">No posts yet.</p>
  }

  return (
    <div className="space-y-10">
      {posts.map((post) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          onClick={() => posthog.capture('blog_post_clicked', { post_slug: post.slug, post_title: post.title })}
          className="block group"
        >
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
  )
}
