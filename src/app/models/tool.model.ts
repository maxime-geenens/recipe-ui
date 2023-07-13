import { Reference } from './references/reference.model';

export class Tool {
  id: Number;
  lang: String;
  quantity: Number;
  toolRef: Reference;
  recipeId: Number;

  constructor(
    id: Number,
    lang: String,
    quantity: Number,
    toolRef: Reference,
    recipeId: Number
  ) {
    this.id = id;
    this.lang = lang;
    this.quantity = quantity;
    this.toolRef = toolRef;
    this.recipeId = recipeId;
  }
}
