'use client'

import { useEffect } from 'react'
import posthog from 'posthog-js'

interface PostHogCaptureProps {
  event: string
  properties?: Record<string, unknown>
}

export default function PostHogCapture({ event, properties }: PostHogCaptureProps) {
  useEffect(() => {
    posthog.capture(event, properties)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return null
}
