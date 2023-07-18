import { Type } from './types/type.model';

export interface Recipe {
  id: Number;
  lang: String;
  name: String;
  description: String;
  type: Type;
}
