import { IReference } from "./references/reference.model"

export interface ITool {
  id: Number
  lang: String
  quantity: Number
  toolRef: IReference
  recipeId: Number
}