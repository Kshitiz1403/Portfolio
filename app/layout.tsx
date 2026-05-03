import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import ScrollProgress from '@/components/scroll-progress'
import config from '@/site.config'
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
  name: config.site.name,
  jobTitle: config.site.jobTitle,
  url: config.site.url,
  sameAs: config.site.sameAs,
  knowsAbout: config.site.knowsAbout,
  worksFor: { '@type': 'Organization', name: config.site.company },
  address: { '@type': 'PostalAddress', addressLocality: config.site.city, addressCountry: config.site.country },
}

export const metadata: Metadata = {
  title: config.site.title,
  description: config.site.description,
  openGraph: {
    title: config.site.title,
    description: config.site.description,
    url: config.site.url,
    siteName: config.site.name,
    type: 'website',
  },
  metadataBase: new URL(config.site.url),
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
        <Analytics />
      </body>
    </html>
  )
}
