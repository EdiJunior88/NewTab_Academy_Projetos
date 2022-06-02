export interface IAcount {
  nameOfHolder: string;

  openAcount(): boolean;
  consultAmount(): string;
  addValueToAmount(value: number): void;
  removeValueOfAmount(value: number): boolean;
}
