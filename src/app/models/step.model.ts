export class Step {
  id: Number;
  lang: String;
  position: Number;
  description: String;
  recipeId: Number;

  constructor(
    id: Number,
    lang: String,
    position: Number,
    description: String,
    recipeId: Number
  ) {
    this.id = id;
    this.lang = lang;
    this.position = position;
    this.description = description;
    this.recipeId = recipeId;
  }
}
