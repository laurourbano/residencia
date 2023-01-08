"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Conta_js_1 = __importDefault(require("./Conta.js"));
const Credito_js_1 = __importDefault(require("./Credito.js"));
const Debito_js_1 = __importDefault(require("./Debito.js"));
class ContaPoupanca extends Conta_js_1.default {
    constructor(numeroDaConta, cliente) {
        super(numeroDaConta, cliente);
        this.rentabilidadeMensal = 1 / 100;
        this.saldo = 0;
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
    depositar(valor) {
        const credito = new Credito_js_1.default(valor, new Date());
        const dataDeposito = credito.getData();
        const valorDeposito = credito.getValor();
        const saldoAtual = this.getSaldo();
        if (valor > 0) {
            this.adicionaCreditos(credito);
            this.setSaldo(saldoAtual + valor);
            this.mensagemDepositoProcessado(this.getNumeroDaConta(), valorDeposito);
            this.calculaRendimentoMensal();
        }
        return dataDeposito;
    }
    sacar(valor) {
        const debito = new Debito_js_1.default(valor, new Date());
        const dataSaque = debito.getData();
        const numeroDaConta = this.getNumeroDaConta();
        const valorSaque = debito.getValor();
        const saldoAtual = this.getSaldo();
        const novoSaldo = saldoAtual - valorSaque;
        if (this.getSaldo() < valor) {
            this.mensagemSemSaldo(valorSaque, saldoAtual);
        }
        else {
            this.setSaldo(novoSaldo);
            this.mensagemSaqueProcessado(numeroDaConta, valorSaque);
            this.adicionaDebitos(debito);
        }
        return dataSaque;
    }
    calculaRendimentoMensal() {
        let saldo = this.getSaldo();
        this.creditos.forEach((elemento) => {
            elemento.getData();
            if (!this.getSaldo()) {
                this.setSaldo(elemento.getValor());
            }
            else {
                this.setSaldo(((elemento.getValor() * this.rentabilidadeMensal)) + saldo);
            }
        });
    }
    ;
    mensagemSemSaldo(valor, saldoAtual) {
        console.log(`
---------------------------------------
Não é possível realizar a operação no valor de R$ ${valor.toFixed(2)}, 
pois seu saldo é de R$ ${saldoAtual.toFixed(2)}.
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
        Saldo atual de: R$ ${this.getSaldo()}
        `);
    }
}
exports.default = ContaPoupanca;
//# sourceMappingURL=ContaPoupanca.js.map