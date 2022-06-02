"use strict";
exports.__esModule = true;
exports.Acount = void 0;
var Acount = /** @class */ (function () {
    //Construtor
    function Acount(_numberOfAcount, nameOfHolder, _amount) {
        this._numberOfAcount = _numberOfAcount;
        this.nameOfHolder = nameOfHolder;
        this._amount = _amount;
    }
    Acount.prototype.getAmount = function () {
        return this._amount;
    };
    Acount.prototype.getNumberOfAcount = function () {
        return this._numberOfAcount;
    };
    //Métodos
    Acount.prototype.consultAmount = function () {
        var response = "Seu saldo atual \u00E9: ".concat(this._amount);
        console.log(response);
        return response;
    };
    Acount.prototype.addValueToAmount = function (value) {
        this._amount = this._amount + value;
        console.log(this._amount);
    };
    Acount.prototype.removeValueOfAmount = function (value) {
        if (this._amount <= 0) {
            console.log('ERRO: Você não possui saldo');
            return false;
        }
        else if (value > this._amount) {
            console.log('ERRO: Saldo Insuficiente');
            return false;
        }
        else {
            console.log('SUCESSO: Operação realizada');
            this._amount -= value;
            return true;
        }
    };
    return Acount;
}());
exports.Acount = Acount;
