import { JuridicPeopleAcount } from './entitys/pj/juridic_people.acount';
import { FisicPeopleAcount } from './entitys/pf/fisic_people_acount';
import { Acount } from './entitys/acount';

const pedrosAcount = new FisicPeopleAcount(999999999999, 'Pedro Lucas', 0);

pedrosAcount.consultAmount();
pedrosAcount.addValueToAmount(5000);
pedrosAcount.consultAmount();
pedrosAcount.removeValueOfAmount(10000);
pedrosAcount.removeValueOfAmount(6550);
pedrosAcount.removeValueOfAmount(1);

console.log(pedrosAcount.getAmount());
console.log(pedrosAcount.getNumberOfAcount());

const newtabAcount = new JuridicPeopleAcount(
  999999999999,
  'New Tab Academy',
  0
);

newtabAcount.consultAmount();
newtabAcount.addValueToAmount(5000);
newtabAcount.consultAmount();
newtabAcount.removeValueOfAmount(10000);
newtabAcount.removeValueOfAmount(6550);
newtabAcount.removeValueOfAmount(1);

console.log(newtabAcount.getAmount());
console.log(newtabAcount.getNumberOfAcount());
console.log(newtabAcount.getCnpj());
