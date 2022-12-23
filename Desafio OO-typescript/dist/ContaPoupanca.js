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
    mensagemSemSaldo(dataTransacao, valor, saldoAtual) {
        `
------------------${dataTransacao}
Não é possível realizar a operação no valor de R$ ${valor.toFixed(2)}, pois seu saldo é de R$ ${saldoAtual.toFixed(2)}. Reinicie a operação.
        `;
    }
    mensagemSaqueProcessado(dataTransacao, numeroDaConta, valorSaque, saldoAtual, novoSaldo) {
        `
-----------------${dataTransacao}
SAQUE PROCESSADO
        Conta Poupança: ${numeroDaConta})}
        Nome: ${this.getCliente().getNome()}
        -----------------------------
        Saldo atual: ${saldoAtual.toFixed(2)}
        -----------------------------
        Valor sacado: ${valorSaque.toFixed(2)}
        -----------------------------
        Novo Saldo: ${novoSaldo.toFixed(2)}
        `;
    }
    mensagemDepositoProcessado(dataTransacao, numeroDaConta, valorDeposito, saldoAtual, novoSaldo) {
        `
------------------${dataTransacao}
DEPÓSITO PROCESSADO
        Conta Poupança: ${numeroDaConta}
        Nome: ${this.getCliente().getNome()}
        -----------------------------
        Saldo Atual: R$ ${saldoAtual}
        -----------------------------
        Depósito de: R$ ${valorDeposito.toFixed(2)}
        -----------------------------
        Novo saldo de: R$ ${novoSaldo.toFixed(2)}
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
        const credito = new Credito_js_1.default(valor, new Date());
        this.adicionaCreditos(credito);
        const dataTransacao = credito.getData();
        const valorDeposito = credito.getValor();
        const saldoAtual = this.getSaldo();
        const novoSaldo = this.getSaldo() + saldoAtual;
        this.setSaldo(this.getSaldo() + valor);
        console.log(this.mensagemDepositoProcessado(dataTransacao, this.getNumeroDaConta(), valorDeposito, saldoAtual, novoSaldo));
        console.log(this.mensagemDepositoProcessado(dataTransacao, this.getNumeroDaConta(), valorDeposito, saldoAtual, novoSaldo));
    }
    ;
    sacar(valor) {
        const debito = new Debito_js_1.default(valor, new Date());
        this.adicionaDebitos(debito);
        const valorSaque = debito.getValor();
        const dataTransacao = debito.getData();
        const saldoAtual = this.getSaldo();
        const novoSaldo = saldoAtual - valorSaque;
        if (this.getSaldo() < valor) {
            console.log(this.mensagemSemSaldo(dataTransacao, valorSaque, saldoAtual));
        }
        else {
            this.setSaldo(novoSaldo);
            console.log(this.mensagemSaqueProcessado(dataTransacao, this.getNumeroDaConta(), valorSaque, saldoAtual, novoSaldo));
        }
        ;
    }
    calcularSaldo(arrayDebitos, arrayCreditos) {
        arrayCreditos.forEach((credito) => {
            this.setSaldo(this.getSaldo() + credito);
        });
        arrayDebitos.forEach((debito) => {
            this.setSaldo(this.getSaldo() - debito);
        });
        console.log(this.mensagemSaldo());
    }
}
exports.default = ContaPoupanca;
