'use client'

import { useEffect, useState } from 'react'

const FULL_TEXT = 'Backend engineer · Distributed systems · Bengaluru, India'

export default function TypewriterTitle() {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (displayed.length >= FULL_TEXT.length) {
      setDone(true)
      return
    }
    const id = setTimeout(() => {
      setDisplayed(FULL_TEXT.slice(0, displayed.length + 1))
    }, 35)
    return () => clearTimeout(id)
  }, [displayed])

  return (
    <p className="text-stone-500 dark:text-zinc-500 mb-6 text-base font-mono">
      {displayed}
      <span
        className={`inline-block w-px h-[0.85em] bg-emerald-600 dark:bg-emerald-400 ml-0.5 align-middle${
          done ? ' animate-blink' : ''
        }`}
      />
    </p>
  )
}
