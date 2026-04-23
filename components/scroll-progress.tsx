'use client'

import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
    }

    window.addEventListener('scroll', updateProgress, { passive: true })
    return () => window.removeEventListener('scroll', updateProgress)
  }, [])

  return (
    <div
      aria-hidden="true"
      style={{ width: `${progress}%` }}
      className="fixed top-0 left-0 h-[2px] z-50 bg-emerald-600 dark:bg-emerald-400 transition-[width] duration-75 ease-out"
    />
  )
}
