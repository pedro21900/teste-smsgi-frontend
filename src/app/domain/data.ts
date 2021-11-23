import {Usuario} from "./usuario";
import {Suporte} from "./suporte";

export class Data {
  usuario?: Usuario;
  suporte?: Suporte;

  static from(values: any): Data {
    var data = new Data();
    Object.assign(data, values);
    return data;
  }
}
