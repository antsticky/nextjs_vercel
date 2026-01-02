export const dynamic = 'force-dynamic'

import RecipeForm from '@/components/forms/RecipeForm'

export default function RecipePage() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ textAlign: 'center' }}>Add a Recipe</h1>
      <RecipeForm />
    </div>
  )
}
