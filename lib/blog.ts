import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDir = path.join(process.cwd(), 'content/blog')

export type PostMeta = {
  title: string
  date: string
  description: string
  tags?: string[]
}

export type Post = PostMeta & {
  slug: string
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(contentDir)) return []

  const files = fs.readdirSync(contentDir)
  return files
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => {
      const slug = f.replace('.mdx', '')
      const raw = fs.readFileSync(path.join(contentDir, f), 'utf-8')
      const { data } = matter(raw)
      return { slug, ...(data as PostMeta) }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPost(slug: string): { meta: PostMeta; content: string } {
  const filePath = path.join(contentDir, `${slug}.mdx`)
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  return { meta: data as PostMeta, content }
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(contentDir)) return []
  return fs
    .readdirSync(contentDir)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace('.mdx', ''))
}
