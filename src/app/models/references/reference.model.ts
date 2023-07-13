import { Type } from '../types/type.model';

export class Reference {
  id: Number;
  lang: String;
  name: String;
  type: Type;

  constructor(id: Number, lang: String, name: String, type: Type) {
    this.id = id;
    this.lang = lang;
    this.name = name;
    this.type = type;
  }
}
