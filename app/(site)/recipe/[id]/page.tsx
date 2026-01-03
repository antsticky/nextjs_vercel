'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import styles from './recipe.module.css'

export default function RecipePage() {
  const { id } = useParams()
  const [recipe, setRecipe] = useState<any>(null)

  useEffect(() => {
    async function loadRecipe() {
      const res = await fetch(
        process.env.NEXT_PUBLIC_FASTAPI_URL + 'recipe/' + id,
      )
      const data = await res.json()
      setRecipe(data)
    }
    loadRecipe()
  }, [id])

  if (!recipe) {
    return <div className={styles.loading}>Loading…</div>
  }

  // Normalize image paths
  const normalizeImage = (img: string) => {
    if (img.startsWith('http')) return img
    return '/' + img.replace(/^\//, '')
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{recipe.name}</h1>

      <h2 className={styles.subtitle}>Categories</h2>
      <div className={styles.chipRow}>
        {recipe.categories?.map((cat: string, i: number) => (
          <span key={i} className={styles.chip}>
            {cat}
          </span>
        ))}
      </div>

      <div className={styles.mainGrid}>
        {/* INGREDIENTS COLUMN */}
        <div className={styles.ingredientsCol}>
          <h2 className={styles.subtitle}>Ingredients</h2>
          <ul className={styles.ingList}>
            {recipe.ingredients?.map((ing: any, i: number) => (
              <li key={i} className={styles.ingItem}>
                <span className={styles.ingName}>{ing.name}</span>
                <span className={styles.ingQty}>{ing.quantity}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* IMAGE / SWIPER COLUMN */}
        {recipe.images?.length > 0 && (
          <div className={styles.swiperCol}>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={10}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
            >
              {recipe.images.map((img: string, i: number) => (
                <SwiperSlide key={i}>
                  <img
                    src={normalizeImage(img)}
                    alt=""
                    className={styles.slideImage}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>

      <h2 className={styles.subtitle}>Steps</h2>
      <ol className={styles.stepsList}>
        {recipe.steps?.map((step: string, i: number) => (
          <li key={i} className={styles.stepItem}>
            <span className={styles.stepCircle}>{i + 1}</span>
            <p>{step}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}
