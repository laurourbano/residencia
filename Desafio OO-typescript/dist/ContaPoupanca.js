"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Conta_1 = __importDefault(require("./Conta"));
class ContaPoupanca extends Conta_1.default {
    constructor(numero, rentabilidadeMensal, cliente) {
        super(numero);
        this.saldo = 0;
        this.valor = 0;
        this.rentabilidadeMensal = rentabilidadeMensal;
        this.cliente = cliente;
    }
    calculaRendimentoMensal(rentabilidadeMensal) {
        this.rentabilidadeMensal = rentabilidadeMensal;
        rentabilidadeMensal = 0.01;
        return rentabilidadeMensal;
    }
    ;
    calcularSaldo(debitos, creditos, rentabilidade) {
        let saldo = (creditos - debitos) + rentabilidade;
        return saldo;
    }
    ;
    depositar(valor) {
        if (this.saldo) {
            this.saldo += valor;
        }
        else {
            this.saldo = valor;
        }
        console.log(`
DEPÓSITO PROCESSADO
        Conta Poupança: ${this.numeroDaConta}
        Nome: ${this.cliente.nome}
        -----------------------------
        Depósito de: R$ ${valor.toFixed(2)}
        -----------------------------
        Saldo atual de: R$ ${this.saldo.toFixed(2)}
        `);
    }
    ;
    sacar(valor) {
        if (this.saldo < valor) {
            console.log(`
            Não é possível sacar R$ ${valor.toFixed(2)}, pois seu saldo é de R$ ${this.saldo.toFixed(2)}. Reinicie a operação.
            `);
        }
        else {
            console.log(`
SAQUE PROCESSADO
        Conta Poupança: ${this.numeroDaConta}
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
    }
    ;
}
exports.default = ContaPoupanca;
