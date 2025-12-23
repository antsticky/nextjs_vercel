'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation' 

export default function Header() {
  const [open, setOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<'home' | 'about' | 'settings'>('home')
  const router = useRouter()

const handleNavigation = (tab: 'home' | 'about' | 'settings', path: string) => {
    setActiveTab(tab)   // update right panel state if needed
    setOpen(false)      // close overlay
    router.push(path)   // navigate to route
  }

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '60px',
          background: '#333',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 1rem',
          zIndex: 1000,
        }}
      >
        {/* Left side: Hamburger + Title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button
            onClick={() => setOpen(!open)}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#fff',
              fontSize: '1.5rem',
              cursor: 'pointer',
            }}
          >
            ☰
          </button>
          <h1 style={{ margin: 0 }}>Hello World</h1>
        </div>
      </header>

      {/* Overlay menu */}
      {open && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            bottom: 0,
            width: '100%',
            display: 'flex',
            background: 'rgba(0,0,0,0.5)',
            zIndex: 999,
          }}
        >
          {/* Left Panel */}
          <div
            style={{
              width: '250px',
              background: '#222',
              color: '#fff',
              padding: '1rem',
            }}
          >
            <h2>Menu</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li
                style={{ marginBottom: '1rem', cursor: 'pointer' }}
                onClick={() => handleNavigation('home', '/home')}
              >
                Home
              </li>
              <li
                style={{ marginBottom: '1rem', cursor: 'pointer' }}
                onClick={() => handleNavigation('about', '/about')}
                onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#00aced'
                    setActiveTab('about')
                }}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
              >
                About
              </li>
              <li
                style={{ marginBottom: '1rem', cursor: 'pointer' }}
                onClick={() => handleNavigation('settings', '/settings')}
                onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#00aced'
                    setActiveTab('settings')
                }}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
              >
                Settings
              </li>
            </ul>
          </div>

          {/* Right Panel */}
          <div style={{ flex: 1, background: '#888aeeff', padding: '1rem', paddingTop: '60px' }}>
            {activeTab === 'home' && (
              <>
                <h2>Summary</h2>
                <p>Welcome to the home summary page.</p>
              </>
            )}
            {activeTab === 'about' && (
              <>
                <h2>About</h2>
                <p>This application demonstrates Next.js with a dynamic menu and infinite scroll.</p>
              </>
            )}
            {activeTab === 'settings' && (
              <>
                <h2>Settings</h2>
                <p>Here you can configure preferences, themes, and other options.</p>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}
