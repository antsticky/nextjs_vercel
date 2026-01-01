'use client'

import styles from './HeaderBar.module.css'
import Hamburger from '../icons/Hamburger'
import LogoSmall from '../icons/LogoSmall'

export default function HeaderBar({
  onToggle,
}: {
  onToggle: () => void
}) {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <button className={styles.hamburger} onClick={onToggle}>
          <Hamburger />
        </button>

        <button className={styles.smallIcon} onClick={onToggle}>
          <LogoSmall />
        </button>

        <h1 className={styles.textTitle}>Sinkovicz's Cookbook</h1>
      </div>

      <button className={styles.loginButton}>Login</button>
    </header>
  )
}
