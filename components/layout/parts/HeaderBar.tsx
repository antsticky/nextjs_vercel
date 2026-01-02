'use client'

import styles from './HeaderBar.module.css'
import Hamburger from '../icons/Hamburger'
import Image from 'next/image'

export default function HeaderBar({ onToggle }: { onToggle: () => void }) {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <button className={styles.hamburger} onClick={onToggle}>
          <Hamburger />
        </button>

        <button className={styles.smallIcon} onClick={onToggle}>
          <Image src="/cookbook.png" alt="LogoCooking" width={32} height={32} />
        </button>

        <p className={styles.textTitle}>Sinkovicz's Cookbook</p>
      </div>

      <button className={styles.loginButton}>Login</button>
    </header>
  )
}
