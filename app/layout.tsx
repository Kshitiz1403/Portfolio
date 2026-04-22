import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import ScrollProgress from '@/components/scroll-progress'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Kshitiz Agrawal',
  jobTitle: 'Backend Engineer',
  url: 'https://kshitizagrawal.in',
  sameAs: [
    'https://github.com/Kshitiz1403',
    'https://linkedin.com/in/kshitizagrawal',
  ],
  knowsAbout: ['Go', 'Distributed Systems', 'Kubernetes', 'Temporal', 'gRPC'],
  worksFor: { '@type': 'Organization', name: 'FinBox' },
  address: { '@type': 'PostalAddress', addressLocality: 'Bengaluru', addressCountry: 'IN' },
}

export const metadata: Metadata = {
  title: 'Kshitiz Agrawal',
  description: 'Backend engineer. Distributed systems.',
  openGraph: {
    title: 'Kshitiz Agrawal',
    description: 'Backend engineer. Distributed systems.',
    url: 'https://kshitizagrawal.in',
    siteName: 'Kshitiz Agrawal',
    type: 'website',
  },
  metadataBase: new URL('https://kshitizagrawal.in'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})()`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#faf8f5] dark:bg-zinc-950 text-stone-900 dark:text-zinc-100 antialiased font-sans transition-colors duration-200">
        <ScrollProgress />
        <div className="mx-auto max-w-2xl px-6 py-16">
          <Nav />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
