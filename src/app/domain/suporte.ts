export class Suporte {
  id?: number;
  email?: string;
  first_name?: string;
  last_name?: string;
  avatar?: string;

  static from(values: any): Suporte {
    var user = new Suporte();
    Object.assign(user, values);
    return user;
  }
}
