'use client'

import MenuItem from './MenuItem'
import styles from '../Header.module.css'

export default function MenuList({
  onHover,
  onNavigate,
}: {
  onHover: (tab: 'home' | 'about' | 'new_recipe') => void
  onNavigate: (tab: 'home' | 'about' | 'new_recipe', path: string) => void
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
        onHover={() => onHover('new_recipe')}
        onClick={() => onNavigate('new_recipe', '/new_recipe')}
      />

      <MenuItem
        label="About"
        onHover={() => onHover('about')}
        onClick={() => onNavigate('about', '/about')}
      />
    </ul>
  )
}
