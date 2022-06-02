import { Acount } from '../acount';

export class FisicPeopleAcount extends Acount {
  //Polimorfismo
  private _cpf: number;

  constructor(cpf: number, nameOfHolder: string, amount: number) {
    super(nameOfHolder, amount);
    this._cpf = cpf;
  }
}
