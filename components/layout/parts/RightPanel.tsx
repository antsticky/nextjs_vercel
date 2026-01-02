'use client'

import styles from './RightPanel.module.css'

export default function RightPanel({
  tab,
}: {
  tab: 'home' | 'about' | 'settings'
}) {
  return (
    <div className={styles.rightPanel}>
      {tab === 'home' && (
        <>
          <h2>Summary</h2>
          <p>Welcome to the home summary page.</p>
        </>
      )}

      {tab === 'about' && (
        <>
          <h2>About</h2>
          <p>
            This application demonstrates Next.js with a dynamic menu and
            infinite scroll.
          </p>
        </>
      )}

      {tab === 'settings' && (
        <>
          <h2>Settings</h2>
          <p>Here you can configure preferences, themes, and other options.</p>
        </>
      )}
    </div>
  )
}
