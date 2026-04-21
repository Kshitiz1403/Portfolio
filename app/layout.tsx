import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Kshitiz Agrawal',
  description: 'Backend engineer. Distributed systems.',
  openGraph: {
    title: 'Kshitiz Agrawal',
    description: 'Backend engineer. Distributed systems.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})()`,
          }}
        />
      </head>
      <body className="bg-[#faf8f5] dark:bg-zinc-950 text-stone-900 dark:text-zinc-100 antialiased font-sans transition-colors duration-200">
        <div className="mx-auto max-w-2xl px-6 py-16">
          <Nav />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
