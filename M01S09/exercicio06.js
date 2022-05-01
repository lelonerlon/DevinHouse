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
var Conta = /** @class */ (function () {
    function Conta(numero, saldo, estaAtiva, dono) {
        this.numero = numero;
        this.saldo = saldo;
        this.estaAtiva = estaAtiva;
        this.dono = dono;
    }
    return Conta;
}());
var ContaEmpresa = /** @class */ (function (_super) {
    __extends(ContaEmpresa, _super);
    function ContaEmpresa(numero, saldo, estaAtiva, dono) {
        var _this = _super.call(this, numero, saldo, estaAtiva, dono) || this;
        _this.limiteDeDeposito = 1000;
        return _this;
    }
    ContaEmpresa.prototype.imprimeValorConta = function () {
        console.log("O saldo da conta \u00E9: ".concat(this.saldo));
    };
    ContaEmpresa.prototype.deposito = function (valor) {
        this.valor = valor;
        if (valor <= this.limiteDeDeposito) {
            this.saldo += valor;
            this.imprimeValorConta();
        }
        else {
            console.log("O valor depositado est\u00E1 acima do limete da conta. que \u00E9 de ".concat(this.limiteDeDeposito));
        }
    };
    return ContaEmpresa;
}(Conta));
var conta = new ContaEmpresa(10, 200, true, 'Antonio');
conta.deposito(100);
console.log(conta);
