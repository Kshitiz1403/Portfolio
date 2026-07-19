import { ImageResponse } from 'next/og'
import { getPost } from '@/lib/blog'
import config from '@/site.config'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage({ params }: { params: { slug: string } }) {
  const { meta } = getPost(params.slug)

  return new ImageResponse(
    (
      <div
        style={{
          background: '#09090b',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
        }}
      >
        <div
          style={{
            fontFamily: 'monospace',
            fontSize: '14px',
            color: '#34d399',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: '24px',
          }}
        >
          {`${config.site.url.replace('https://', '')} · writing`}
        </div>
        <div
          style={{
            fontSize: '52px',
            fontWeight: 600,
            color: '#fafafa',
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            marginBottom: '24px',
          }}
        >
          {meta.title}
        </div>
        <div
          style={{
            fontSize: '22px',
            color: '#71717a',
            fontFamily: 'monospace',
            lineHeight: 1.4,
          }}
        >
          {meta.description}
        </div>
      </div>
    ),
    { ...size }
  )
}
