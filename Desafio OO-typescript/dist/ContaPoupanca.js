"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Conta_1 = __importDefault(require("./Conta"));
const Credito_js_1 = __importDefault(require("./Credito.js"));
const Debito_js_1 = __importDefault(require("./Debito.js"));
class ContaPoupanca extends Conta_1.default {
    constructor(numeroDaConta, cliente) {
        super(numeroDaConta);
        this.rentabilidadeMensal = 1 / 100;
        this.saldo = 0;
        this.arrayDebitos = [];
        this.arrayCreditos = [];
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
    mensagemSemSaldo(valor, saldoAtual) {
        console.log(`
---------------------------------------
Não é possível realizar a operação no valor de R$ ${valor.toFixed(2)}, pois seu saldo é de R$ ${saldoAtual.toFixed(2)}.
        `);
    }
    mensagemSaqueProcessado(numeroDaConta, valorSaque) {
        console.log(`
---------------------------------------
SAQUE PROCESSADO
        Conta Poupança: ${numeroDaConta}
        Nome: ${this.getCliente().getNome()}
        -----------------------------
        Valor sacado: ${valorSaque.toFixed(2)}
        `);
    }
    mensagemDepositoProcessado(numeroDaConta, valorDeposito) {
        console.log(`
---------------------------------------
DEPÓSITO PROCESSADO
        Conta Poupança: ${numeroDaConta}
        Nome: ${this.getCliente().getNome()}
        -----------------------------
        Depósito de: R$ ${valorDeposito.toFixed(2)}
        `);
    }
    mensagemSaldo() {
        console.log(`
---------------------------------------
SALDO
        Conta Poupança: ${this.getNumeroDaConta()}
        Nome: ${this.getCliente().getNome()}
        -----------------------------
        Saldo atual de: R$ ${this.getSaldo().toFixed(2)}
        `);
    }
    depositar(valor) {
        const credito = new Credito_js_1.default(valor, new Date());
        const dataDeposito = credito.getData();
        const dataTransacao = dataDeposito.toLocaleDateString('pt-BR');
        const valorDeposito = credito.getValor();
        const saldoAtual = this.getSaldo();
        if (valor > 0) {
            this.adicionaCreditos(credito);
            this.setSaldo((saldoAtual + valor) + (saldoAtual * this.rentabilidadeMensal));
            this.mensagemDepositoProcessado(this.getNumeroDaConta(), valorDeposito);
        }
        return dataDeposito;
    }
    sacar(valor) {
        const debito = new Debito_js_1.default(valor, new Date());
        const dataSaque = debito.getData();
        const valorSaque = debito.getValor();
        const dataTransacao = dataSaque.toLocaleDateString('pt-BR');
        const saldoAtual = this.getSaldo();
        const novoSaldo = saldoAtual - valorSaque;
        if (this.getSaldo() < valor) {
            this.mensagemSemSaldo(valorSaque, saldoAtual);
        }
        else {
            this.setSaldo(novoSaldo);
            this.mensagemSaqueProcessado(this.getNumeroDaConta(), valorSaque);
            this.adicionaDebitos(debito);
        }
        ;
        return dataSaque;
    }
    calculaRendimentoMensal() {
        this.arrayCreditos.forEach((elemento) => {
            elemento.getValor() + (elemento.getValor() * this.rentabilidadeMensal);
        });
    }
    ;
}
exports.default = ContaPoupanca;
//# sourceMappingURL=ContaPoupanca.js.map