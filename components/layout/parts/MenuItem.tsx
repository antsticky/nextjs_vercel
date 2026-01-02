'use client'

import styles from './MenuItem.module.css'

export default function MenuItem({
  label,
  onHover,
  onClick,
}: {
  label: string
  onHover: () => void
  onClick: () => void
}) {
  return (
    <li className={styles.menuItem} onMouseEnter={onHover} onClick={onClick}>
      {label}
    </li>
  )
}
