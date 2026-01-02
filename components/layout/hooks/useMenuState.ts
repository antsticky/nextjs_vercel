'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export function useMenuState() {
  const [open, setOpen] = useState(false)
  const [hoveredTab, setHoveredTab] = useState<
    'home' | 'about' | 'settings' | null
  >(null)
  const router = useRouter()

  const handleNavigation = (
    tab: 'home' | 'about' | 'settings',
    path: string,
  ) => {
    setOpen(false)
    setHoveredTab(null)
    router.push(path)
  }

  return {
    open,
    setOpen,
    hoveredTab,
    setHoveredTab,
    handleNavigation,
  }
}
