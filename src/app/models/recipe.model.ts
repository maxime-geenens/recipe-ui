import { Type } from './types/type.model';

export class Recipe {
  id: Number;
  lang: String;
  name: String;
  description: String;
  type: Type;

  constructor(
    id: Number,
    lang: String,
    name: String,
    description: String,
    type: Type
  ) {
    this.id = id;
    this.lang = lang;
    this.name = name;
    this.description = description;
    this.type = type;
  }
}
