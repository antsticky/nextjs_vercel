'use client'

import { useState } from 'react'
import styles from './RecipeForm.module.css'

export default function RecipeForm() {
  const [name, setName] = useState('')
  const [categories, setCategories] = useState([''])
  const [ingredients, setIngredients] = useState([{ name: '', quantity: '' }])
  const [steps, setSteps] = useState([''])

  // Toast state
  const [toast, setToast] = useState<null | { type: 'success' | 'error'; message: string }>(null)

  const apiUrl = process.env.NEXT_PUBLIC_FASTAPI_URL + 'recipe'

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const payload = {
      name,
      categories: categories.filter(Boolean),
      ingredients: ingredients.filter((i) => i.name && i.quantity),
      steps: steps.filter(Boolean),
    }

    try {
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        throw new Error('Failed to save recipe')
      }

      const data = await res.json()

      setToast({ type: 'success', message: 'Recipe saved' })
      setTimeout(() => setToast(null), 2500)

      // Reset form
      setName('')
      setCategories([''])
      setIngredients([{ name: '', quantity: '' }])
      setSteps([''])

    } catch (err) {
      setToast({ type: 'error', message: 'Error saving recipe. Please try again.' })
      setTimeout(() => setToast(null), 3000)
    }
  }

  return (
    <>
      {/* Toast Popup */}
      {toast && (
        <div
          className={`${styles.toast} ${
            toast.type === 'success' ? styles.toastSuccess : styles.toastError
          }`}
        >
          <div className={styles.toastIcon}>
            {toast.type === 'success' ? (
              <span className={styles.checkmark}>✓</span>
            ) : (
              <span className={styles.cross}>✕</span>
            )}
          </div>
          <p>{toast.message}</p>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className={styles.form}>
        {/* Name */}
        <h2>Recipe Name</h2>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter recipe name"
          className={styles.input}
        />

        {/* Categories */}
        <h2>Categories</h2>
        {categories.map((cat, i) => (
          <input
            key={i}
            value={cat}
            onChange={(e) => {
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
              onChange={(e) => {
                const copy = [...ingredients]
                copy[i].name = e.target.value
                setIngredients(copy)
              }}
              placeholder="Name"
              className={styles.input}
            />
            <input
              value={ing.quantity}
              onChange={(e) => {
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
          onClick={() => setIngredients([...ingredients, { name: '', quantity: '' }])}
        >
          + Add Ingredient
        </button>

        {/* Steps */}
        <h2 className={styles.sectionTitle}>Steps</h2>
        {steps.map((step, i) => (
          <textarea
            key={i}
            value={step}
            onChange={(e) => {
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
      </form>
    </>
  )
}
