"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Conta_1 = __importDefault(require("./Conta"));
const Credito_js_1 = __importDefault(require("./Credito.js"));
const Debito_js_1 = __importDefault(require("./Debito.js"));
class ContaPoupanca extends Conta_1.default {
    constructor(numeroDaConta, cliente, rentabilidadeMensal) {
        super(numeroDaConta);
        this.saldo = 0;
        this.arrayDebitos = [];
        this.arrayCreditos = [];
        this.rentabilidadeMensal = rentabilidadeMensal;
        this.cliente = cliente;
    }
    getNumeroDaConta() {
        return this.numeroDaConta;
    }
    setNumeroDaConta(numeroDaConta) {
        this.numeroDaConta = numeroDaConta;
    }
    getRentabilidadeMensal() {
        return this.rentabilidadeMensal;
    }
    setRentabilidadeMensal(rentabilidadeMensal) {
        this.rentabilidadeMensal = rentabilidadeMensal;
    }
    getSaldo() {
        return this.saldo;
    }
    setSaldo(saldo) {
        this.saldo = saldo;
    }
    getCliente() {
        return this.cliente;
    }
    adicionaCreditos(credito) {
        this.arrayCreditos.push(credito);
    }
    adicionaDebitos(debito) {
        this.arrayDebitos.push(debito);
    }
    calculaRendimentoMensal(rentabilidadeMensal) {
        this.rentabilidadeMensal = rentabilidadeMensal;
        rentabilidadeMensal = 0.01;
        return rentabilidadeMensal;
    }
    ;
    mensagemSemSaldo(valor) {
        `
        Não é possível realizar a operação no valor de R$ ${valor.toFixed(2)}, pois seu saldo é de R$ ${this.getSaldo().toFixed(2)}. Reinicie a operação.
        `;
    }
    mensagemSaqueProcessado(valor) {
        `
SAQUE PROCESSADO
        Conta Poupança: ${this.getNumeroDaConta()}
        Nome: ${this.getCliente().getNome()}
        -----------------------------
        Saldo Anterior: ${this.getSaldo().toFixed(2)}
        Valor sacado: ${valor.toFixed(2)}
        `;
    }
    mensagemDepositoProcessado(valor) {
        `
DEPÓSITO PROCESSADO
        Conta Poupança: ${this.getNumeroDaConta()}
        Nome: ${this.getCliente().getNome()}
        -----------------------------
        Depósito de: R$ ${valor.toFixed(2)}
        -----------------------------
        Saldo atual de: R$ ${this.getSaldo().toFixed(2)}
        `;
    }
    mensagemSaldo() {
        `
SALDO
        Conta Poupança: ${this.getNumeroDaConta()}
        Nome: ${this.getCliente().getNome()}
        -----------------------------
        Saldo atual de: R$ ${this.getSaldo().toFixed(2)}
        `;
    }
    depositar(valor) {
        const credito = new Credito_js_1.default(valor.getValor(), new Date());
        this.adicionaCreditos(credito);
        this.setSaldo(this.getSaldo() + valor.getValor());
        console.log(this.mensagemDepositoProcessado(valor.getValor()));
    }
    ;
    sacar(valor) {
        const debito = new Debito_js_1.default(valor.getValor(), new Date());
        this.adicionaDebitos(debito);
        if (this.getSaldo() < valor.getValor()) {
            console.log(this.mensagemSemSaldo(valor.getValor()));
        }
        else {
            this.setSaldo(this.getSaldo() - valor.getValor());
            console.log(this.mensagemSaqueProcessado(valor.getValor()));
        }
    }
    ;
    calcularSaldo(debitos, creditos, rentabilidade) {
        this.setSaldo((creditos - debitos) + rentabilidade);
        console.log(this.mensagemSaldo());
    }
    ;
}
exports.default = ContaPoupanca;
