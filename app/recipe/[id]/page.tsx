import { getRecipeById } from '@/lib/recipes';
import { Navbar } from '@/components/Navbar';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export default async function RecipePage({ params }: { params: { id: string } }) {
  const recipe = await getRecipeById(parseInt(params.id));

  if (!recipe) {
    return <div>Receta no encontrada</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto py-6">
        <Card>
          <CardHeader>
            <CardTitle>{recipe.title}</CardTitle>
            <CardDescription>{recipe.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Ingredientes:</h2>
              <ul className="list-disc list-inside space-y-1">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">Instrucciones:</h2>
              <ol className="list-decimal list-inside space-y-2">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index}>{instruction}</li>
                ))}
              </ol>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}