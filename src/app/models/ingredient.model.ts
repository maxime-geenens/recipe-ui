import { IReference } from "./references/reference.model"
import { IUnitRef } from "./references/unit-ref.model"

export interface IIngredient {
  id: Number
  lang: String
  quantity: Number
  unitRef: IUnitRef
  ingredientRef: IReference
  recipeId: Number
}