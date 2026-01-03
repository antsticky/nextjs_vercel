'use client'

import { useEffect, useRef } from 'react'
import styles from './Header.module.css'

import HeaderBar from './parts/HeaderBar'
import LeftPanel from './parts/LeftPanel'
import RightPanel from './parts/RightPanel'

import { useSwipeMenu } from './hooks/useSwipeMenu'
import { useMenuState } from './hooks/useMenuState'

export default function Header() {
  const { open, setOpen, hoveredTab, setHoveredTab, handleNavigation } =
    useMenuState()

  const { handleTouchStart, handleTouchMove, handleTouchEnd } = useSwipeMenu(
    () => setOpen(true),
    () => setOpen(false),
  )

  // ⬇️ NEW: detect clicks outside the left panel
  const leftPanelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (!open) return

      if (
        leftPanelRef.current &&
        !leftPanelRef.current.contains(e.target as Node)
      ) {
        setOpen(false)
        setHoveredTab(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [open, setOpen, setHoveredTab])
  // ⬆️ END NEW

  return (
    <div
      className={styles.swipeLayer}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <HeaderBar onToggle={() => setOpen(!open)} />

      {open && (
        <div className={styles.overlay}>
          <div ref={leftPanelRef}>
            <LeftPanel
              isOpen={open}
              onHover={setHoveredTab}
              onNavigate={handleNavigation}
              onLeave={() => setHoveredTab(null)}
            />
          </div>

          {hoveredTab && <RightPanel tab={hoveredTab} />}
        </div>
      )}
    </div>
  )
}
