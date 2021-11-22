export class Usuario {
  id?: number;
  email?: string;
  first_name?: string;
  last_name?: string;
  avatar?: string;

  static from(values: any): Usuario {
    var user = new Usuario();
    Object.assign(user, values);
    return user;
  }
}
