import { Ingredient } from './ingredient.model';
import { Recipe } from './recipe.model';
import { Step } from './step.model';
import { Tool } from './tool.model';

export class RecipeDetail {
  recipe: Recipe;
  ingredientList: Ingredient[];
  stepList: Step[];
  toolList: Tool[];

  constructor(
    recipe: Recipe,
    ingredientList: Ingredient[],
    stepList: Step[],
    toolList: Tool[]
  ) {
    this.recipe = recipe;
    this.ingredientList = ingredientList;
    this.stepList = stepList;
    this.toolList = toolList;
  }
}
