import { redirect } from 'next/navigation'

export function GET() {
  const url = process.env.RESUME_URL

  if (!url) {
    return new Response('Resume not available', { status: 404 })
  }

  redirect(url)
}
