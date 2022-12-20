"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Conta_js_1 = __importDefault(require("./Conta.js"));
class ContaCorrente extends Conta_js_1.default {
    constructor(numero, limite, cliente, saldo = 0, arrayDebitos = [], arrayCreditos = []) {
        super(numero);
        this.saldo = 0;
        this.arrayDebitos = [];
        this.arrayCreditos = [];
        this.limite = limite;
        this.cliente = cliente;
    }
    transferir(conta, valor) {
        if (this.saldo < valor) {
            console.log(`Não foi possível realizar a transferência de ${valor}, pois seu saldo atual é de R$ ${this.saldo}`);
        }
        else {
            this.saldo -= valor;
            conta.saldo += valor;
            console.log(`Transferência realizada com sucesso.
            Valor transferido: R$ ${valor}
            Conta de destino: ${conta}
            Saldo atual: R$ ${this.saldo}`);
        }
    }
    calcularSaldo(arrayDebitos, arrayCreditos) {
        arrayCreditos.forEach((credito) => {
            this.saldo += credito;
        });
        arrayDebitos.forEach((debito) => {
            this.saldo += debito;
        });
        console.log(`Saldo disponível é de R$ ${this.saldo}`);
    }
    depositar() { }
    ;
    sacar() {
    }
    ;
}
exports.default = ContaCorrente;
