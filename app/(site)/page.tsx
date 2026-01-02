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
                  <img src="/placeholder.png" alt={recipe.name} />
                </div>

                <div className={styles.cardContent}>
                  <div className={styles.cardTitle}>
                    {recipe.name || `Recipe ${id}`}
                  </div>

                  <div className={styles.pills}>
                    {recipe.categories?.map((cat: string, index: number) => (
                      <span key={index} className={styles.pill}>
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* BACK */}
              <div className={styles.cardBack}>
                <h3 className={styles.backTitle}>Ingredients</h3>
                <ul className={styles.ingList}>
                  {recipe.ingredients?.map((ing: any, i: number) => (
                    <li key={i}>
                      {ing.name} – {ing.quantity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
