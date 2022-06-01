export class Acount {
  //Atributos
  numberOfAcount: number;
  nameOfHolder: string;
  amount: number;

  //Construtor
  constructor(numberOfAcount: number, nameOfHolder: string, amount: number) {
    this.numberOfAcount = numberOfAcount;
    this.nameOfHolder = nameOfHolder;
    this.amount = amount;
  }

  //Métodos
  consultAmout(): string {
    let response = `Seu saldo atual é: ${this.amount}`;
    console.log(response);
    return response;
  }

  addValueToAmount(value: number): void {
    this.amount = this.amount + value;
    console.log(this.amount);
  }

  removeValueOfAmount(value: number): boolean {
    if (this.amount <= 0) {
      console.log('ERRO: Você não possui saldo');
      return false;
    } else if (value > this.amount) {
      console.log('ERRO: Saldo Insuficiente');
      return false;
    } else {
      console.log('SUCESSO: Operação realizada');
      this.amount -= value;
      return true;
    }
  }
}
