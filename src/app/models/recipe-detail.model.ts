import { IIngredient } from "./ingredient.model"
import { IRecipe } from "./recipe.model"
import { IStep } from "./step.model"
import { ITool } from "./tool.model"

export interface IRecipeDetail {
  recipe: IRecipe
  ingredientList: IIngredient[]
  stepList: IStep[]
  toolList: ITool[]
}