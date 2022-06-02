import { Acount } from '../acount';
import { IAcount } from '../interfaces/acount_interface';
import { IJuridicPeople } from '../interfaces/juridic_people_interface';

export class JuridicPeopleAcount
  extends Acount
  implements IAcount, IJuridicPeople
{
  //Polimorfismo
  cnpj: number;
  name: string;
  email: string;

  constructor(cnpj: number, email:string, nameOfHolder: string, amount: number) {
    super(nameOfHolder, amount);
    this.cnpj = cnpj;
    this.name = nameOfHolder;
    this.email = email;
  }

  getCnpj(): number {
    return this.cnpj;
  }
}
