'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export function useMenuState() {
  const [open, setOpen] = useState(false)
  const [hoveredTab, setHoveredTab] = useState<
    'home' | 'about' | 'new_recipe' | null
  >(null)
  const router = useRouter()

  const handleNavigation = (
    tab: 'home' | 'about' | 'new_recipe',
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
