'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from './Header.module.css'
import LogoSmall from './icons/LogoSmall'
import Hamburger from './icons/Hamburger'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<'home' | 'about' | 'settings'>('home')
  const [hoveredTab, setHoveredTab] = useState<'home' | 'about' | 'settings' | null>(null)
  const [touchStartX, setTouchStartX] = useState<number | null>(null)
  const [touchEndX, setTouchEndX] = useState<number | null>(null)

  const router = useRouter()

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return

    const distance = touchEndX - touchStartX

    if (distance > 60) setOpen(true)
    if (distance < -60) setOpen(false)

    setTouchStartX(null)
    setTouchEndX(null)
  }

  const handleNavigation = (tab: 'home' | 'about' | 'settings', path: string) => {
    setActiveTab(tab)
    setOpen(false)
    setHoveredTab(null)
    router.push(path)
  }

  return (
    <div
      className={styles.swipeLayer}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <header className={styles.header}>
        <div className={styles.left}>
          <button className={styles.hamburger} onClick={() => setOpen(!open)}>
            <Hamburger />
          </button>

          <button className={styles.smallIcon} onClick={() => setOpen(!open)}>
            <LogoSmall />
          </button>

          <h1 className={styles.textTitle}>Hello World!</h1>
        </div>

        <button className={styles.loginButton}>Login</button>
      </header>

      {open && (
        <div className={styles.overlay}>
          <div
            className={styles.leftPanel}
            onMouseLeave={() => setHoveredTab(null)}
          >
            <h2>Menu</h2>

            <ul className={styles.menuList}>
              <li
                className={styles.menuItem}
                onMouseEnter={() => setHoveredTab('home')}
                onClick={() => handleNavigation('home', '/home')}
              >
                Home
              </li>

              <li
                className={styles.menuItem}
                onMouseEnter={() => setHoveredTab('about')}
                onClick={() => handleNavigation('about', '/about')}
              >
                About
              </li>

              <li
                className={styles.menuItem}
                onMouseEnter={() => setHoveredTab('settings')}
                onClick={() => handleNavigation('settings', '/settings')}
              >
                Settings
              </li>
            </ul>
          </div>

          {hoveredTab && (
            <div className={styles.rightPanel}>
              {hoveredTab === 'home' && (
                <>
                  <h2>Summary</h2>
                  <p>Welcome to the home summary page.</p>
                </>
              )}

              {hoveredTab === 'about' && (
                <>
                  <h2>About</h2>
                  <p>This application demonstrates Next.js with a dynamic menu and infinite scroll.</p>
                </>
              )}

              {hoveredTab === 'settings' && (
                <>
                  <h2>Settings</h2>
                  <p>Here you can configure preferences, themes, and other options.</p>
                </>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
