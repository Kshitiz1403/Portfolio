import { ImageResponse } from 'next/og'
import config from '@/site.config'

export const runtime = 'edge'
export const alt = `${config.site.name} — ${config.site.description}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
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
          {config.site.url.replace('https://', '')}
        </div>
        <div
          style={{
            fontSize: '64px',
            fontWeight: 600,
            color: '#fafafa',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            marginBottom: '20px',
          }}
        >
          {config.site.name}
        </div>
        <div
          style={{
            fontSize: '24px',
            color: '#71717a',
            fontFamily: 'monospace',
          }}
        >
          {config.hero.subtitle}
        </div>
      </div>
    ),
    { ...size }
  )
}
