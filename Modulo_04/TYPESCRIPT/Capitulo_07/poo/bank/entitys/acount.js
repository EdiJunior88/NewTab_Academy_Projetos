"use strict";
exports.__esModule = true;
exports.Acount = void 0;
var Acount = /** @class */ (function () {
    //Construtor
    function Acount(numberOfAcount, nameOfHolder, amount) {
        this.numberOfAcount = numberOfAcount;
        this.nameOfHolder = nameOfHolder;
        this.amount = amount;
    }
    //Métodos
    Acount.prototype.consultAmout = function () {
        var response = "Seu saldo atual \u00E9: ".concat(this.amount);
        console.log(response);
        return response;
    };
    Acount.prototype.addValueToAmount = function (value) {
        this.amount = this.amount + value;
        console.log(this.amount);
    };
    Acount.prototype.removeValueOfAmount = function (value) {
        if (this.amount <= 0) {
            console.log('ERRO: Você não possui saldo');
            return false;
        }
        else if (value > this.amount) {
            console.log('ERRO: Saldo Insuficiente');
            return false;
        }
        else {
            console.log('SUCESSO: Operação realizada');
            this.amount -= value;
            return true;
        }
    };
    return Acount;
}());
exports.Acount = Acount;
