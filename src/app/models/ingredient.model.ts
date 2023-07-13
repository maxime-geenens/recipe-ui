import { Reference } from './references/reference.model';
import { UnitRef } from './references/unit-ref.model';

export class Ingredient {
  id: Number;
  lang: String;
  quantity: Number;
  unitRef: UnitRef;
  ingredientRef: Reference;
  recipeId: Number;

  constructor(
    id: Number,
    lang: String,
    quantity: Number,
    unitRef: UnitRef,
    ingredientRef: Reference,
    recipeId: Number
  ) {
    this.id = id;
    this.lang = lang;
    this.quantity = quantity;
    this.unitRef = unitRef;
    this.ingredientRef = ingredientRef;
    this.recipeId = recipeId;
  }
}
