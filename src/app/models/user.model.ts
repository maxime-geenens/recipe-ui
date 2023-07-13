export class User {
  id: Number;
  username: String;
  email: String;
  password: String;
  authorities: String[];
  country: String;
  region: String;
  city: String;

  constructor(
    id: Number,
    username: String,
    email: String,
    password: String,
    authorities: String[],
    country: String,
    region: String,
    city: String
  ) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
    this.authorities = authorities;
    this.country = country;
    this.region = region;
    this.city = city;
  }
}
