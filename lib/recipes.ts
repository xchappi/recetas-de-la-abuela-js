import prisma from './prisma';

export async function getAllRecipes() {
  return await prisma.recipe.findMany();
}

export async function getRecipeById(id: number) {
  return await prisma.recipe.findUnique({
    where: { id },
  });
}

export async function createRecipe(data: {
  title: string;
  description: string;
  ingredients: string[];
  instructions: string[];
}) {
  return await prisma.recipe.create({
    data: {
      ...data,
      ingredients: { set: data.ingredients },
      instructions: { set: data.instructions },
    },
  });
}

export async function updateRecipe(id: number, data: {
  title?: string;
  description?: string;
  ingredients?: string[];
  instructions?: string[];
}) {
  return await prisma.recipe.update({
    where: { id },
    data: {
      ...data,
      ingredients: data.ingredients ? { set: data.ingredients } : undefined,
      instructions: data.instructions ? { set: data.instructions } : undefined,
    },
  });
}

export async function deleteRecipe(id: number) {
  return await prisma.recipe.delete({
    where: { id },
  });
}