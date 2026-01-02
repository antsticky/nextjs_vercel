'use client'

import MenuItem from './MenuItem'
import styles from '../Header.module.css'

export default function MenuList({
  onHover,
  onNavigate,
}: {
  onHover: (tab: 'home' | 'about' | 'settings') => void
  onNavigate: (tab: 'home' | 'about' | 'settings', path: string) => void
}) {
  return (
    <ul className={styles.menuList}>
      <MenuItem
        label="Recipes"
        onHover={() => onHover('home')}
        onClick={() => onNavigate('home', '/')}
      />

      <MenuItem
        label="Add New"
        onHover={() => onHover('settings')}
        onClick={() => onNavigate('settings', '/settings')}
      />

      <MenuItem
        label="About"
        onHover={() => onHover('about')}
        onClick={() => onNavigate('about', '/about')}
      />
    </ul>
  )
}
