export class UnitRef {
  id: Number;
  lang: String;
  name: String;
  symbol: String;
  description: String;

  constructor(
    id: Number,
    lang: String,
    name: String,
    symbol: String,
    description: String
  ) {
    this.id = id;
    this.lang = lang;
    this.name = name;
    this.symbol = symbol;
    this.description = description;
  }
}
