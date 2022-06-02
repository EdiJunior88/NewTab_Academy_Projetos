export class Acount {
  //Atributos
  private _numberOfAcount: number;
  nameOfHolder: string;
  private _amount: number;

  //Construtor
  constructor(_numberOfAcount: number, nameOfHolder: string, _amount: number) {
    this._numberOfAcount = _numberOfAcount;
    this.nameOfHolder = nameOfHolder;
    this._amount = _amount;
  }

  getAmount(): number {
    return this._amount;
  }

  getNumberOfAcount(): number {
    return this._numberOfAcount;
  }

  //Métodos
  consultAmount(): string {
    let response = `Seu saldo atual é: ${this._amount}`;
    console.log(response);
    return response;
  }

  addValueToAmount(value: number): void {
    this._amount = this._amount + value;
    console.log(this._amount);
  }

  removeValueOfAmount(value: number): boolean {
    if (this._amount <= 0) {
      console.log('ERRO: Você não possui saldo');
      return false;
    } else if (value > this._amount) {
      console.log('ERRO: Saldo Insuficiente');
      return false;
    } else {
      console.log('SUCESSO: Operação realizada');
      this._amount -= value;
      return true;
    }
  }
}
