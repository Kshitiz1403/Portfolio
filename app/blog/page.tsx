import { getAllPosts } from '@/lib/blog'
import BlogList from '@/components/blog-list'

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
      <BlogList posts={posts} />
    </div>
  )
}
