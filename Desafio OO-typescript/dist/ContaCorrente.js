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
    mensagemSemSaldoTransferencia(dataSemSaldo, valorTransferencia, saldoAtual) {
        console.log(`
--------------------------------------- ${dataSemSaldo}
Não foi possível realizar a operação no valor de R$ ${valorTransferencia.toFixed(2)}, pois seu saldo atual é de R$ ${saldoAtual.toFixed(2)}
    `);
    }
    mensagemSemSaldoSaque(dataSemSaldo, valorSaque, saldoAtual) {
        console.log(`
--------------------------------------- ${dataSemSaldo}
Não foi possível realizar a operação no valor de R$ ${valorSaque.toFixed(2)}, pois seu saldo atual é de R$ ${saldoAtual.toFixed(2)}
    `);
    }
    mensagemTransferenciaProcessada(dataTransacao, contaDestino, valorTransferencia) {
        console.log(`
--------------------------------------- ${dataTransacao}
TRANFERENCIA EFETUADA COM SUCESSO.
        Conta Corrente: ${this.getNumeroDaConta()}
        Nome: ${this.getCliente().getNome()}
        -----------------------------
        Valor transferido: R$ ${valorTransferencia.toFixed(2)}
        Conta de destino: ${contaDestino}
        `);
    }
    mensagemDepositoProcessado(dataTransacao, numeroDaConta, valorDeposito) {
        console.log(`
--------------------------------------- ${dataTransacao}
DEPÓSITO PROCESSADO
        Conta Corrente: ${numeroDaConta}
        Nome: ${this.getCliente().getNome()}
        ----------------------------
        Depósito de: R$ ${valorDeposito.toFixed(2)}
        `);
    }
    mensagemSaqueProcessado(dataTransacao, numeroDaConta, valorSaque) {
        console.log(`
--------------------------------------- ${dataTransacao}
SAQUE PROCESSADO
        Conta Corrente: ${numeroDaConta}
        Nome: ${this.getCliente().getNome()}
        -----------------------------
        Valor sacado: ${valorSaque.toFixed(2)}
        `);
    }
    mensagemSaldo() {
        const dataSaldo = new Date().toLocaleDateString('pt-BR');
        console.log(`
--------------------------------------- Data: ${dataSaldo}
SALDO
        Conta Corrente: ${this.getNumeroDaConta()}
        Nome: ${this.getCliente().getNome()}
        -----------------------------
        Saldo atual de: R$ ${this.getSaldo().toFixed(2)}
        Limite: R$ ${this.getLimite().toFixed(2)}
        Total disponível: R$ ${(this.getSaldo() + this.getLimite()).toFixed(2)}
        `);
        console.log(this.arrayCreditos);
        console.log(this.arrayDebitos);
    }
    transferir(conta, valor) {
        const debito = new Debito_js_1.default(valor, new Date());
        const credito = new Credito_js_1.default(valor, new Date());
        const saldoAtual = this.getSaldo();
        const valorTransferencia = valor;
        const dataTransacao = debito.getData().toLocaleDateString('pt-BR');
        const contaDestino = conta.getNumeroDaConta();
        const limite = this.getLimite();
        const novoSaldo = saldoAtual - valorTransferencia;
        if ((saldoAtual + limite) < valorTransferencia) {
            this.mensagemSemSaldoTransferencia(dataTransacao, valorTransferencia, saldoAtual);
        }
        else {
            conta.adicionaCreditos(credito);
            this.adicionaDebitos(debito);
            conta.setSaldo(conta.getSaldo() + valorTransferencia);
            this.setSaldo(novoSaldo);
            this.mensagemTransferenciaProcessada(dataTransacao, contaDestino, valorTransferencia);
        }
    }
    depositar(valor) {
        const credito = new Credito_js_1.default(valor, new Date());
        const conta = this.getNumeroDaConta();
        const dataTransacao = credito.getData().toLocaleDateString('pt-BR');
        const valorDeposito = credito.getValor();
        const saldoAtual = this.getSaldo();
        const novoSaldo = saldoAtual + valorDeposito;
        this.setSaldo(novoSaldo);
        this.adicionaCreditos(credito);
        this.mensagemDepositoProcessado(dataTransacao, conta, valorDeposito);
    }
    ;
    sacar(valor) {
        const debito = new Debito_js_1.default(valor, new Date());
        this.adicionaDebitos(debito);
        const valorSaque = debito.getValor();
        const dataTransacao = debito.getData().toLocaleDateString('pt-br');
        const saldoAtual = this.getSaldo();
        const novoSaldo = saldoAtual - valorSaque;
        const conta = this.getNumeroDaConta();
        if (this.getSaldo() < debito.valor) {
            this.mensagemSemSaldoSaque(dataTransacao, valorSaque, saldoAtual);
        }
        else {
            this.setSaldo(novoSaldo);
            this.mensagemSaqueProcessado(dataTransacao, conta, valorSaque);
        }
        ;
    }
}
exports.default = ContaCorrente;
