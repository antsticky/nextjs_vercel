'use client'
import { useEffect, useState } from 'react'

export default function InfiniteList() {
  const [items, setItems] = useState<number[]>(Array.from({ length: 20 }, (_, i) => i + 1))

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        setItems(prev => [...prev, ...Array.from({ length: 10 }, (_, i) => prev.length + i + 1)])
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div style={{ marginTop: '70px', padding: '1rem' }}>
      {items.map(item => (
        <div key={item} style={{ 
          height: '100px', 
          marginBottom: '10px', 
          background: '#ddd', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center' 
        }}>
          keksz {item}
        </div>
      ))}
    </div>
  )
}
