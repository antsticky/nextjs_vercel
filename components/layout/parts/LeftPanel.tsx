'use client'

import styles from './LeftPanel.module.css'
import MenuList from './MenuList'

export default function LeftPanel({
  isOpen,
  onHover,
  onNavigate,
  onLeave,
}: {
  isOpen: boolean
  onHover: (tab: 'home' | 'about' | 'new_recipe') => void
  onNavigate: (tab: 'home' | 'about' | 'new_recipe', path: string) => void
  onLeave: () => void
}) {
  return (
    <div
      className={`${styles.leftPanel} ${isOpen ? styles.open : styles.close}`}
      onMouseLeave={onLeave}
    >
      <MenuList onHover={onHover} onNavigate={onNavigate} />
    </div>
  )
}
