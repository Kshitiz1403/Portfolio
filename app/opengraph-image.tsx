import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Kshitiz Agrawal — Backend engineer. Distributed systems.'
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
          kshitizagrawal.in
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
          Kshitiz Agrawal
        </div>
        <div
          style={{
            fontSize: '24px',
            color: '#71717a',
            fontFamily: 'monospace',
          }}
        >
          Backend engineer · Distributed systems · Bengaluru
        </div>
      </div>
    ),
    { ...size }
  )
}
