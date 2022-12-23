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
    mensagemSemSaldo(dataTransacao, valorSaque) {
        `
--------------${dataTransacao}
Não foi possível realizar a operação no valor de ${valorSaque}, pois seu saldo atual é de R$ ${this.getSaldo()}
    `;
    }
    mensagemTransferenciaProcessada(dataTransacao, conta, valorDeposito, saldoAtual, novoSaldo) {
        `
--------------${dataTransacao}
TRANFERENCIA EFETUADA COM SUCESSO.
        Conta: ${this.getNumeroDaConta()}
        Nome: ${this.getCliente().getNome()}
        -----------------------------
        Saldo atual da sua conta: R$ ${saldoAtual}
        Valor transferido: R$ ${valorDeposito}
        Conta de destino: ${conta.getNumeroDaConta()}
        -----------------------------
        Saldo atual da conta ${this.getNumeroDaConta()}: R$ ${novoSaldo}
            `;
    }
    mensagemDepositoProcessado(dataTransacao, numeroDaConta, valorDeposito, saldoAtual, novoSaldo) {
        `
--------------${dataTransacao}
DEPÓSITO PROCESSADO
        Conta Corrente: ${this.getNumeroDaConta()}
        Nome: ${this.getCliente().getNome()}
        Depósito de: R$ ${valorDeposito.toFixed(2)}
        -----------------------------
        Saldo atual de: R$ ${this.getSaldo().toFixed(2)}
            `;
    }
    mensagemSaqueProcessado(dataTransacao, numeroDaConta, valorSaque, saldoAtual, novoSaldo) {
        `
SAQUE PROCESSADO
        Conta Poupança: ${this.getNumeroDaConta()}
        Nome: ${this.getCliente().getNome()}
        -----------------------------
        Saldo Anterior: ${this.getSaldo().toFixed(2)}
        Valor sacado: ${valorSaque.toFixed(2)}
        `;
    }
    mensagemSaldo() {
        `
    Saldo disponível é de R$ ${this.getSaldo()}
    -----------------------------
    Saldo Atual: R$ ${this.getSaldo().toFixed(2)}
`;
    }
    transferir(conta, valor) {
        const debito = new Debito_js_1.default(valor, new Date());
        this.adicionaDebitos(debito);
        const saldoAtual = this.getSaldo();
        const valorTransferencia = valor;
        const dataTransacao = debito.getData();
        if (this.getSaldo() < valorTransferencia) {
            console.log(this.mensagemSemSaldo);
        }
        else {
            this.setSaldo(this.getSaldo() - valor);
            const novoSaldo = this.getSaldo();
            conta.setSaldo(conta.getSaldo() + valor);
            console.log(this.mensagemTransferenciaProcessada(dataTransacao, conta, valorTransferencia, saldoAtual, novoSaldo));
        }
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
            console.log(this.mensagemSemSaldo(dataTransacao, valorSaque));
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
exports.default = ContaCorrente;
