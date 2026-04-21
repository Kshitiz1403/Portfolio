import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDir = path.join(process.cwd(), 'content/projects')

export type ProjectMeta = {
  title: string
  description: string
  period: string
  tech: string[]
}

export function getProject(slug: string): { meta: ProjectMeta; content: string } {
  const filePath = path.join(contentDir, `${slug}.mdx`)
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  return { meta: data as ProjectMeta, content }
}

export function getAllProjectSlugs(): string[] {
  if (!fs.existsSync(contentDir)) return []
  return fs
    .readdirSync(contentDir)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace('.mdx', ''))
}
