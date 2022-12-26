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
    mensagemSemSaldoTransferencia(valorTransferencia, saldoAtual) {
        console.log(`
---------------------------------------
Não foi possível realizar a operação no valor de R$ ${valorTransferencia.toFixed(2)}, pois seu saldo atual é de R$ ${saldoAtual.toFixed(2)}
    `);
    }
    mensagemSemSaldoSaque(valorSaque, saldoAtual) {
        let disponivel = parseInt(saldoAtual.toFixed(2)) + parseInt(this.limite.toFixed(2));
        console.log(`
---------------------------------------
Não foi possível realizar a operação no valor de R$ ${valorSaque.toFixed(2)}, pois seu saldo atual é de R$ ${saldoAtual.toFixed(2)} e seu limite é de R$ ${this.limite.toFixed(2)}, sendo o total disponível R$ ${disponivel.toFixed(2)}
    `);
    }
    mensagemTransferenciaProcessada(contaDestino, clienteDestino, valorTransferencia) {
        console.log(`
---------------------------------------
TRANFERENCIA EFETUADA COM SUCESSO.
        Conta Corrente: ${this.getNumeroDaConta()}
        Nome: ${this.getCliente().getNome()}
        -----------------------------
        Valor transferido: R$ ${valorTransferencia.toFixed(2)}
        -----------------------------
        Conta de destino: ${contaDestino}
        Nome: ${clienteDestino}
        `);
    }
    mensagemDepositoProcessado(numeroDaConta, valorDeposito) {
        console.log(`
--------------------------------------- 
DEPÓSITO PROCESSADO
        Conta Corrente: ${numeroDaConta}
        Nome: ${this.getCliente().getNome()}
        ----------------------------
        Depósito de: R$ ${valorDeposito.toFixed(2)}
        `);
    }
    mensagemSaqueProcessado(numeroDaConta, valorSaque) {
        console.log(`
--------------------------------------- 
SAQUE PROCESSADO
        Conta Corrente: ${numeroDaConta}
        Nome: ${this.getCliente().getNome()}
        -----------------------------
        Valor sacado: ${valorSaque.toFixed(2)}
        `);
    }
    mensagemSaldo() {
        let disponivel = parseInt(this.getSaldo().toFixed(2)) + parseInt(this.getLimite().toFixed(2));
        console.log(`
--------------------------------------- 
SALDO
        Conta Corrente: ${this.getNumeroDaConta()}
        Nome: ${this.getCliente().getNome()}
        -----------------------------
        Saldo atual de: R$ ${this.getSaldo().toFixed(2)}
        -----------------------------
        Limite: R$ ${this.getLimite().toFixed(2)}
        Total disponível: R$ ${disponivel.toFixed(2)}
        `);
        console.log(this.arrayCreditos);
        console.log(this.arrayDebitos);
    }
    transferir(conta, valor) {
        const debito = new Debito_js_1.default(valor, new Date());
        const credito = new Credito_js_1.default(valor, new Date());
        const saldoAtual = this.getSaldo();
        const valorTransferencia = valor;
        const dataTransferencia = debito.getData();
        const dataTransacao = dataTransferencia.toLocaleDateString('pt-BR');
        const contaDestino = conta.getNumeroDaConta();
        const clienteDestino = conta.getCliente().getNome();
        const limite = this.getLimite();
        const novoSaldo = saldoAtual - valorTransferencia;
        let disponivel = saldoAtual + limite;
        if ((disponivel) < valorTransferencia) {
            this.mensagemSemSaldoTransferencia(valorTransferencia, saldoAtual);
        }
        else {
            conta.adicionaCreditos(credito);
            conta.setSaldo(conta.getSaldo() + valorTransferencia);
            this.adicionaDebitos(debito);
            this.setSaldo(novoSaldo);
            if (novoSaldo < 0 && disponivel > 0) {
                disponivel = this.limite + novoSaldo;
            }
            this.mensagemTransferenciaProcessada(contaDestino, clienteDestino, valorTransferencia);
        }
    }
    depositar(valor) {
        const credito = new Credito_js_1.default(valor, new Date());
        const dataDeposito = credito.getData();
        const conta = this.getNumeroDaConta();
        const dataTransacao = dataDeposito.toLocaleDateString('pt-BR');
        const valorDeposito = credito.getValor();
        const saldoAtual = this.getSaldo();
        const novoSaldo = saldoAtual + valorDeposito;
        this.setSaldo(novoSaldo);
        this.adicionaCreditos(credito);
        this.mensagemDepositoProcessado(conta, valorDeposito);
    }
    ;
    sacar(valor) {
        const debito = new Debito_js_1.default(valor, new Date());
        const valorSaque = debito.getValor();
        const dataTransacao = debito.getData().toLocaleDateString('pt-br');
        const saldoAtual = this.getSaldo();
        let limite = this.getLimite();
        const novoSaldo = saldoAtual - valorSaque;
        const conta = this.getNumeroDaConta();
        let disponivel = saldoAtual + limite;
        if (disponivel < debito.valor) {
            this.mensagemSemSaldoSaque(valorSaque, saldoAtual);
        }
        else {
            this.adicionaDebitos(debito);
            this.setSaldo(novoSaldo);
            disponivel = limite + novoSaldo;
            this.mensagemSaqueProcessado(conta, valorSaque);
        }
        ;
    }
}
exports.default = ContaCorrente;
