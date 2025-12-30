// components/layout/Header/hooks/useSwipeMenu.ts
'use client'

import { useState } from 'react'
import type { TouchEvent } from 'react'

export function useSwipeMenu(onOpen: () => void, onClose: () => void) {
  const [touchStartX, setTouchStartX] = useState<number | null>(null)
  const [touchEndX, setTouchEndX] = useState<number | null>(null)

  const handleTouchStart = (e: TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return

    const distance = touchEndX - touchStartX

    if (distance > 60) onOpen()
    if (distance < -60) onClose()

    setTouchStartX(null)
    setTouchEndX(null)
  }

  return { handleTouchStart, handleTouchMove, handleTouchEnd }
}
