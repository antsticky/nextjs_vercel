'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'

export default function RecipePage() {
  const { id } = useParams()
  const [recipe, setRecipe] = useState<any>(null)

  useEffect(() => {
    async function loadRecipe() {
      const res = await fetch(process.env.NEXT_PUBLIC_FASTAPI_URL + 'recipe/' + id)
      const data = await res.json()
      setRecipe(data)
    }
    loadRecipe()
  }, [id])

  if (!recipe) {
    return <div style={{ padding: '2rem' }}>Loading…</div>
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{recipe.name}</h1>

      <h2 style={{ marginTop: '1.5rem' }}>Categories</h2>
      <ul>
        {recipe.categories?.map((cat: string, i: number) => (
          <li key={i}>{cat}</li>
        ))}
      </ul>

      <h2 style={{ marginTop: '1.5rem' }}>Ingredients</h2>
      <ul>
        {recipe.ingredients?.map((ing: any, i: number) => (
          <li key={i}>{ing.name} – {ing.quantity}</li>
        ))}
      </ul>

      <h2 style={{ marginTop: '1.5rem' }}>Steps</h2>
      <ol>
        {recipe.steps?.map((step: string, i: number) => (
          <li key={i}>{step}</li>
        ))}
      </ol>
    </div>
  )
}
