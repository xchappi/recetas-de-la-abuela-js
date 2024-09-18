'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Navbar } from '@/components/Navbar';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { PlusCircle, Trash2 } from 'lucide-react'

export default function NewRecipe() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState(['']);
  const [instructions, setInstructions] = useState(['']);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('/api/recipes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, description, ingredients, instructions }),
    });

    if (response.ok) {
      router.push('/');
    } else {
      alert('Error al crear la receta');
    }
  };

  const handleIngredientChange = (index: number, value: string) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = value;
    setIngredients(newIngredients);
  };

  const handleInstructionChange = (index: number, value: string) => {
    const newInstructions = [...instructions];
    newInstructions[index] = value;
    setInstructions(newInstructions);
  };

  const addIngredient = () => {
    setIngredients([...ingredients, '']);
  };

  const addInstruction = () => {
    setInstructions([...instructions, '']);
  };

  const removeIngredient = (index: number) => {
    const newIngredients = ingredients.filter((_, i) => i !== index);
    setIngredients(newIngredients);
  };

  const removeInstruction = (index: number) => {
    const newInstructions = instructions.filter((_, i) => i !== index);
    setInstructions(newInstructions);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto py-6">
        <Card>
          <CardHeader>
            <CardTitle>Nueva Receta</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium mb-1">Título:</label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="description" className="block text-sm font-medium mb-1">Descripción:</label>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Ingredientes:</label>
                {ingredients.map((ingredient, index) => (
                  <div key={index} className="flex mb-2">
                    <Input
                      value={ingredient}
                      onChange={(e) => handleIngredientChange(index, e.target.value)}
                      className="flex-grow"
                      required
                    />
                    <Button
                      type="button"
                      onClick={() => removeIngredient(index)}
                      variant="destructive"
                      size="icon"
                      className="ml-2"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <Button
                  type="button"
                  onClick={addIngredient}
                  variant="outline"
                  className="mt-2"
                >
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Añadir Ingrediente
                </Button>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Instrucciones:</label>
                {instructions.map((instruction, index) => (
                  <div key={index} className="flex mb-2">
                    <Textarea
                      value={instruction}
                      onChange={(e) => handleInstructionChange(index, e.target.value)}
                      className="flex-grow"
                      required
                    />
                    <Button
                      type="button"
                      onClick={() => removeInstruction(index)}
                      variant="destructive"
                      size="icon"
                      className="ml-2"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <Button
                  type="button"
                  onClick={addInstruction}
                  variant="outline"
                  className="mt-2"
                >
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Añadir Instrucción
                </Button>
              </div>
              <Button type="submit" className="w-full">
                Crear Receta
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}