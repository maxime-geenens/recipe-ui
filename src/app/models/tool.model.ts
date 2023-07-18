import { Reference } from './references/reference.model';

export interface Tool {
  id: Number;
  lang: String;
  quantity: Number;
  toolRef: Reference;
  recipeId: Number;
}
