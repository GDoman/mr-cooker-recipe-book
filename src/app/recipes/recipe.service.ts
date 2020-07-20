import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Sea food salad',
      'An healthy and delicious salad from shrimps and vegetables',
      'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg',
      [
        new Ingredient('Cabbage', 1),
        new Ingredient('Shrimps', 10),
        new Ingredient('Cucumber', 3),
      ]
    ),
  ];

  getRecipes() {
    // return this.recipes.slice();
    return [...this.recipes];
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }
}
