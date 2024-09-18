import { NextResponse } from 'next/server';
import { getAllRecipes, createRecipe, getRecipeById, updateRecipe, deleteRecipe } from '@/lib/recipes';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (id) {
    const recipe = await getRecipeById(parseInt(id));
    return NextResponse.json(recipe);
  } else {
    const recipes = await getAllRecipes();
    return NextResponse.json(recipes);
  }
}

export async function POST(request: Request) {
  const data = await request.json();
  const recipe = await createRecipe(data);
  return NextResponse.json(recipe);
}

export async function PUT(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const data = await request.json();

  if (!id) {
    return NextResponse.json({ error: 'Missing id' }, { status: 400 });
  }

  const recipe = await updateRecipe(parseInt(id), data);
  return NextResponse.json(recipe);
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.json({ error: 'Missing id' }, { status: 400 });
  }

  await deleteRecipe(parseInt(id));
  return NextResponse.json({ message: 'Recipe deleted successfully' });
}