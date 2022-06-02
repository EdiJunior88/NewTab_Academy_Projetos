import { Acount } from '../acount';
import { IAcount } from '../interfaces/acount_interface';
import { IFisicPeople } from '../interfaces/fisic_people_interface';

export class FisicPeopleAcount extends Acount implements IAcount, IFisicPeople {
  //Polimorfismo
  cpf: number;
  name: string;
  email: string;

  constructor(
    cpf: number,
    name: string,
    email: string,
    nameOfHolder: string,
    amount: number
  ) {
    super(nameOfHolder, amount);
    this.cpf = cpf;
    this.name = name;
    this.email = email;
  }
}
