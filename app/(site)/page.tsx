'use client'

import { useEffect, useState } from 'react'
import styles from './page.module.css'

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
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome</h1>
      <h2 className={styles.subtitle}>Recipes</h2>

      <ul className={styles.grid}>
        {Object.entries(recipes).map(([id, recipe]) => (
          <li key={id} className={styles.card}>
            <div className={styles.cardInner}>
              {/* FRONT */}
              <div className={styles.cardFront}>
                <div className={styles.cardImage}>
                  <img
                    src={recipe.images?.[0] || '/placeholder.png'}
                    alt={recipe.name}
                  />
                </div>

                <div className={styles.cardContent}>
                  <div className={styles.cardTitle}>
                    {recipe.name || `Recipe ${id}`}
                  </div>

                  <div className={styles.pills}>
                    {(() => {
                      const maxPills = 2
                      const cats = recipe.categories || []
                      const visible = cats.slice(0, maxPills)
                      const hasMore = cats.length > maxPills

                      return (
                        <>
                          {visible.map((cat: string, i: number) => (
                            <span key={i} className={styles.pill}>
                              {cat}
                            </span>
                          ))}
                          {hasMore && <span className={styles.pill}>…</span>}
                        </>
                      )
                    })()}
                  </div>
                </div>
              </div>

              {/* BACK — FULLY CLICKABLE */}
              <div
                className={styles.cardBack}
                onClick={() => (window.location.href = `/recipe/${id}`)}
              >
                <h3 className={styles.backTitle}>Ingredients</h3>

                <div className={styles.ingList}>
                  {(() => {
                    const maxLines = 5
                    const ings = recipe.ingredients || []
                    const visibleIngredients =
                      ings.length <= maxLines ? ings : ings.slice(0, maxLines)
                    const hasMore = ings.length > maxLines

                    return (
                      <div className={styles.ingList}>
                        {visibleIngredients.map((ing: any, i: number) => (
                          <div key={i}>
                            {ing.name} – {ing.quantity}
                          </div>
                        ))}
                        {hasMore && <div className={styles.ellipsis}>…</div>}
                      </div>
                    )
                  })()}
                </div>

                <div className={styles.moreLink}>
                  <a href={`/recipe/${id}`}>More…</a>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
