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
            console.log(`
TRANFERENCIA EFETUADA COM SUCESSO.
        Conta: ${this.numeroDaConta}
        Nome: ${this.cliente.nome}
        -----------------------------
        Valor transferido: R$ ${valor}
        Conta de destino: ${conta.numeroDaConta}
        -----------------------------
        Saldo atual da conta ${this.numeroDaConta}: R$ ${this.saldo}`);
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
    depositar(valor) {
        if (this.saldo) {
            this.saldo += valor;
        }
        else {
            this.saldo = valor;
        }
        console.log(`
DEPÓSITO PROCESSADO
        Conta: ${this.numeroDaConta}
        Nome: ${this.cliente.nome}
        Depósito de: R$ ${valor.toFixed(2)}
        -----------------------------
        Saldo atual de: R$ ${this.saldo.toFixed(2)}
        `);
    }
    ;
    sacar(valor) {
        if (this.saldo < valor) {
            console.log(`Não é possível sacar R$ ${valor.toFixed(2)}, pois seu saldo é de R$ ${this.saldo.toFixed(2)}. Reinicie a operação.`);
        }
        else {
            console.log(`
SAQUE PROCESSADO
        Conta: ${this.numeroDaConta}
        Nome: ${this.cliente.nome}
        -----------------------------
        Saldo Anterior: ${this.saldo.toFixed(2)}
        Valor sacado: ${valor.toFixed(2)}`);
            this.saldo -= valor;
            console.log(`
        -----------------------------
        Saldo Atual: R$ ${this.saldo.toFixed(2)}
        `);
        }
        ;
    }
}
exports.default = ContaCorrente;
