import { Acount } from './entitys/acount';

const pedrosAcount = new Acount(19007, 'Pedro Lucas', 1550);

pedrosAcount.consultAmout();
pedrosAcount.addValueToAmount(5000);
pedrosAcount.consultAmout();
pedrosAcount.removeValueOfAmount(10000);
pedrosAcount.removeValueOfAmount(6550);
pedrosAcount.removeValueOfAmount(1);
