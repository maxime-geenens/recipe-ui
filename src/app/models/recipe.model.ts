import { IType } from "./types/type.model"

export interface IRecipe {
  id: Number
  lang: String
  name: String
  description: String
  type: IType
}