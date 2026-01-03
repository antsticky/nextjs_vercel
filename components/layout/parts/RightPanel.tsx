'use client'

import styles from './RightPanel.module.css'

export default function RightPanel({
  tab,
}: {
  tab: 'home' | 'about' | 'new_recipe'
}) {
  return (
    <div className={styles.rightPanel}>
      {tab === 'home' && (
        <>
          <h2 className={styles.heading}>Recipes</h2>
          <p className={styles.text}>
            Explore a growing collection of recipes—from quick meals to detailed
            step‑by‑step creations. Each recipe includes ingredients, images,
            and clear instructions to guide you through the process.
          </p>
        </>
      )}

      {tab === 'new_recipe' && (
        <>
          <h2 className={styles.heading}>Add a New Recipe</h2>
          <p className={styles.text}>
            Share your own culinary ideas. Add ingredients, write instructions,
            upload photos, and publish your recipe to the collection.
          </p>
        </>
      )}

      {tab === 'about' && (
        <>
          <h2 className={styles.heading}>About This Project</h2>
          <p className={styles.text}>
            This website is built with Next.js and demonstrates dynamic routing,
            infinite scrolling, and a clean recipe‑focused interface. It’s a
            personal project combining web development and a love for cooking.
          </p>
        </>
      )}
    </div>
  )
}
