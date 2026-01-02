'use client'

import { useEffect, useState } from 'react'

export default function HomePage() {
  const [recipes, setRecipes] = useState<{ [key: string]: any }>({})

  useEffect(() => {
    async function loadRecipes() {
      const res = await fetch(process.env.NEXT_PUBLIC_FASTAPI_URL + 'recipe')
      const data = await res.json()
      setRecipes(data)
    }
    loadRecipes()
  }, [])

  return (
    <div
      style={{
        padding: '2rem',
        maxWidth: '800px',
        margin: '0 auto',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h1
        style={{
          fontSize: '2rem',
          marginBottom: '1rem',
          color: '#00aced',
        }}
      >
        Welcome
      </h1>

      <h2
        style={{
          fontSize: '1.4rem',
          marginBottom: '1rem',
          borderBottom: '2px solid #eee',
          paddingBottom: '0.4rem',
          color: '#00aced',
        }}
      >
        Recipes
      </h2>

      <ul
        style={{
          listStyle: 'none',
          padding: 0,
          margin: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
        }}
      >
        {Object.entries(recipes).map(([id, recipe]) => (
          <li
            key={id}
            style={{
              padding: '1.2rem 1.4rem',
              background: '#00aced',
              borderRadius: '12px',
              boxShadow:
                '0 2px 6px rgba(0,0,0,0.05), 0 6px 18px rgba(0,0,0,0.08)',
              fontSize: '1rem',
              color: '#fff',
              cursor: 'pointer',
              transition: 'transform 0.15s ease, box-shadow 0.15s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)'
              e.currentTarget.style.boxShadow =
                '0 4px 10px rgba(0,0,0,0.08), 0 10px 24px rgba(0,0,0,0.12)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow =
                '0 2px 6px rgba(0,0,0,0.05), 0 6px 18px rgba(0,0,0,0.08)'
            }}
          >
            {/* Recipe Name */}
            <div
              style={{
                fontSize: '1.2rem',
                fontWeight: 'bold',
                marginBottom: '0.5rem',
              }}
            >
              {recipe.name || `Recipe ${id}`}
            </div>

            {/* Category Pills */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.4rem',
              }}
            >
              {recipe.categories?.map((cat: string, index: number) => (
                <span
                  key={index}
                  style={{
                    background: '#051c2c',
                    padding: '0.25rem 0.7rem',
                    borderRadius: '999px',
                    fontSize: '0.85rem',
                    color: '#fff',
                    whiteSpace: 'nowrap',
                    maxWidth: '150px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {cat}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
