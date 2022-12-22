"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Conta_js_1 = __importDefault(require("./Conta.js"));
const Credito_js_1 = __importDefault(require("./Credito.js"));
const Debito_js_1 = __importDefault(require("./Debito.js"));
class ContaCorrente extends Conta_js_1.default {
    constructor(numeroDaConta, cliente, limite) {
        super(numeroDaConta);
        this.saldo = 0;
        this.arrayDebitos = [];
        this.arrayCreditos = [];
        this.limite = limite;
        this.cliente = cliente;
    }
    getNumeroDaConta() {
        return this.numeroDaConta;
    }
    setNumeroDaConta(numeroDaConta) {
        this.numeroDaConta = numeroDaConta;
    }
    getLimite() {
        return this.limite;
    }
    setLimite(limite) {
        this.limite = limite;
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
    mensagemSemSaldo(valor) {
        `
Não foi possível realizar a operação no valor de ${valor.getValor()}, pois seu saldo atual é de R$ ${this.getSaldo()}
    `;
    }
    mensagemTransferenciaProcessada(conta, valor) {
        `
TRANFERENCIA EFETUADA COM SUCESSO.
        Conta: ${this.getNumeroDaConta()}
        Nome: ${this.getCliente().getNome()}
        -----------------------------
        Valor transferido: R$ ${valor.getValor()}
        Conta de destino: ${conta.getNumeroDaConta()}
        -----------------------------
        Saldo atual da conta ${this.getNumeroDaConta()}: R$ ${this.getSaldo()}
            `;
    }
    mensagemDepositoProcessado(valor) {
        `
DEPÓSITO PROCESSADO
        Conta Corrente: ${this.getNumeroDaConta()}
        Nome: ${this.getCliente().getNome()}
        Depósito de: R$ ${valor.getValor().toFixed(2)}
        -----------------------------
        Saldo atual de: R$ ${this.getSaldo().toFixed(2)}
            `;
    }
    mensagemSaqueProcessado(valor) {
    }
    mensagemSaldo() {
        `Saldo disponível é de R$ ${this.getSaldo()}`;
    }
    transferir(conta, valor) {
        const debito = new Debito_js_1.default(valor.getValor(), new Date());
        this.adicionaDebitos(debito);
        if (this.getSaldo() < valor.getValor()) {
            console.log(this.mensagemSemSaldo);
        }
        else {
            this.setSaldo(this.getSaldo() - valor.getValor());
            conta.setSaldo(conta.getSaldo() + valor.getValor());
            console.log(this.mensagemTransferenciaProcessada(conta, valor));
        }
    }
    depositar(valor) {
        const credito = new Credito_js_1.default(valor.getValor(), new Date());
        this.adicionaCreditos(credito);
        this.setSaldo(this.getSaldo() + valor.getValor());
        console.log(this.mensagemDepositoProcessado(valor));
    }
    ;
    sacar(valor) {
        if (this.getSaldo() < valor.getValor()) {
            console.log(this.mensagemSemSaldo(valor));
        }
        else {
            console.log(this.mensagemSaqueProcessado(valor));
            this.setSaldo(this.getSaldo() - valor.getValor());
            const debito = new Debito_js_1.default(valor.getValor(), new Date());
            this.adicionaDebitos(debito);
            console.log(`
        -----------------------------
        Saldo Atual: R$ ${this.getSaldo().toFixed(2)}
        `);
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
exports.default = ContaCorrente;
