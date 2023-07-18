import { Reference } from './references/reference.model';
import { UnitRef } from './references/unit-ref.model';

export interface Ingredient {
  id: Number;
  lang: String;
  quantity: Number;
  unitRef: UnitRef;
  ingredientRef: Reference;
  recipeId: Number;
}
