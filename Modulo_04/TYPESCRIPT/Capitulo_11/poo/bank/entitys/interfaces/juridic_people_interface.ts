import { IPeople } from './people_interface';

export interface IJuridicPeople extends IPeople {
  cnpj: number;
  acount: number;
}