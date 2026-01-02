'use client'

import { useState } from 'react'
import styles from './RecipeForm.module.css'

export default function RecipeForm() {
  const [categories, setCategories] = useState([''])
  const [ingredients, setIngredients] = useState([{ name: '', quantity: '' }])
  const [steps, setSteps] = useState([''])
  const [message, setMessage] = useState('')

  const apiUrl = process.env.NEXT_PUBLIC_FASTAPI_URL + 'recipe'

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const payload = {
      categories: categories.filter(Boolean),
      ingredients: ingredients.filter((i) => i.name && i.quantity),
      steps: steps.filter(Boolean),
    }

    const res = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    const data = await res.json()
    setMessage('Recipe saved with ID: ' + data.id)
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {/* Categories */}
      <h2>Categories</h2>
      {categories.map((cat, i) => (
        <input
          key={i}
          value={cat}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const copy = [...categories]
            copy[i] = e.target.value
            setCategories(copy)
          }}
          placeholder="Category"
          className={styles.input}
        />
      ))}
      <button type="button" onClick={() => setCategories([...categories, ''])}>
        + Add Category
      </button>

      {/* Ingredients */}
      <h2 className={styles.sectionTitle}>Ingredients</h2>
      {ingredients.map((ing, i) => (
        <div key={i} className={styles.ingredientRow}>
          <input
            value={ing.name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const copy = [...ingredients]
              copy[i].name = e.target.value
              setIngredients(copy)
            }}
            placeholder="Name"
            className={styles.input}
          />
          <input
            value={ing.quantity}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const copy = [...ingredients]
              copy[i].quantity = e.target.value
              setIngredients(copy)
            }}
            placeholder="Quantity"
            className={styles.input}
          />
        </div>
      ))}
      <button
        type="button"
        onClick={() =>
          setIngredients([...ingredients, { name: '', quantity: '' }])
        }
      >
        + Add Ingredient
      </button>

      {/* Steps */}
      <h2 className={styles.sectionTitle}>Steps</h2>
      {steps.map((step, i) => (
        <textarea
          key={i}
          value={step}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            const copy = [...steps]
            copy[i] = e.target.value
            setSteps(copy)
          }}
          placeholder={`Step ${i + 1}`}
          className={styles.textarea}
        />
      ))}
      <button type="button" onClick={() => setSteps([...steps, ''])}>
        + Add Step
      </button>

      {/* Submit */}
      <div className={styles.submitWrapper}>
        <button type="submit">Save Recipe</button>
      </div>

      {message && <p className={styles.successMessage}>{message}</p>}
    </form>
  )
}
