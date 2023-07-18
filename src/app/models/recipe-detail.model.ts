import { Ingredient } from './ingredient.model';
import { Recipe } from './recipe.model';
import { Step } from './step.model';
import { Tool } from './tool.model';

export interface RecipeDetail {
  recipe: Recipe;
  ingredientList: Ingredient[];
  stepList: Step[];
  toolList: Tool[];
}
