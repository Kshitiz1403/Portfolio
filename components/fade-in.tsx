'use client'

import React, { useEffect, useRef } from 'react'

type FadeInProps = {
  children: React.ReactNode
  delay?: number
  className?: string
  as?: keyof React.JSX.IntrinsicElements
}

export default function FadeIn({ children, delay = 0, className = '', as: Tag = 'div' }: FadeInProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.setAttribute('data-visible', 'true')
          observer.unobserve(el)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return React.createElement(
    Tag,
    {
      ref,
      'data-visible': 'false',
      style: delay ? { transitionDelay: `${delay}ms` } : undefined,
      className: `fade-in-up${className ? ` ${className}` : ''}`,
    },
    children
  )
}
