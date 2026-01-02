'use client'

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
          <LeftPanel
            isOpen={open}
            onHover={setHoveredTab}
            onNavigate={handleNavigation}
            onLeave={() => setHoveredTab(null)}
          />

          {hoveredTab && <RightPanel tab={hoveredTab} />}
        </div>
      )}
    </div>
  )
}
