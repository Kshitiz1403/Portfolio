import { getAllPosts } from '@/lib/blog'
import { getAllWorkSlugs } from '@/lib/work'

const BASE_URL = 'https://kshitizagrawal.in'

export default function sitemap() {
  const posts = getAllPosts().map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }))

  const workPages = getAllWorkSlugs().map((slug) => ({
    url: `${BASE_URL}/work/${slug}`,
    lastModified: new Date(),
  }))

  return [
    { url: BASE_URL, lastModified: new Date() },
    { url: `${BASE_URL}/blog`, lastModified: new Date() },
    ...posts,
    ...workPages,
  ]
}
