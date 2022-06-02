import { Acount } from '../acount';

export class JuridicPeopleAcount extends Acount {
  //Polimorfismo
  private _cnpj: number;

  constructor(cnpj: number, nameOfHolder: string, amount: number) {
    super(nameOfHolder, amount);
    this._cnpj = cnpj;
  }

  getCnpj(): number {
    return this._cnpj
  }
}
