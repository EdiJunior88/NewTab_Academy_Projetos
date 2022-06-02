"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.JuridicPeopleAcount = void 0;
var acount_1 = require("../acount");
var JuridicPeopleAcount = /** @class */ (function (_super) {
    __extends(JuridicPeopleAcount, _super);
    function JuridicPeopleAcount(cnpj, nameOfHolder, amount) {
        var _this = _super.call(this, nameOfHolder, amount) || this;
        _this._cnpj = cnpj;
        return _this;
    }
    JuridicPeopleAcount.prototype.getCnpj = function () {
        return this._cnpj;
    };
    return JuridicPeopleAcount;
}(acount_1.Acount));
exports.JuridicPeopleAcount = JuridicPeopleAcount;
