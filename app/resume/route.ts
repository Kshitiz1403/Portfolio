import { cookies } from 'next/headers'
import { getPostHogClient } from '@/lib/posthog-server'
import { readFile } from 'fs/promises'
import path from 'path'
import config from '@/site.config'

export async function GET() {
  try {
    const cookieStore = await cookies()
    const phCookie = cookieStore.get(`ph_${process.env.NEXT_PUBLIC_POSTHOG_KEY}_posthog`)
    let distinctId = 'anonymous'
    if (phCookie) {
      const parsed = JSON.parse(phCookie.value) as { distinct_id?: string }
      if (parsed.distinct_id) distinctId = parsed.distinct_id
    }

    const posthog = getPostHogClient()
    posthog.capture({
      distinctId,
      event: 'resume_downloaded',
      properties: { source: 'resume_route' },
    })
  } catch {
    // Non-critical — proceed with serving even if tracking fails
  }

  const filePath = path.join(process.cwd(), 'public', 'resume.pdf')
  const fileBuffer = await readFile(filePath)

  return new Response(fileBuffer, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `inline; filename="${config.site.name}.pdf"`,
    },
  })
}
