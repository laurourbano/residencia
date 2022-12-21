import Cliente from "./Cliente.js";
import Conta from "./Conta"

export default class ContaPoupanca extends Conta {
    public rentabilidadeMensal: number
    public cliente: Cliente
    public saldo: number = 0
    public valor: number = 0

    constructor(numero: string, rentabilidadeMensal: number, cliente: Cliente) {
        super(numero)
        this.rentabilidadeMensal = rentabilidadeMensal
        this.cliente = cliente
    }

    calculaRendimentoMensal(rentabilidadeMensal: number): number {
        this.rentabilidadeMensal = rentabilidadeMensal
        rentabilidadeMensal = 0.01
        return rentabilidadeMensal
    };
    calcularSaldo(debitos: number, creditos: number, rentabilidade: number): number {
        let saldo = (creditos - debitos) + rentabilidade
        return saldo
    };
    //implementados de Conta
    //deposita
    depositar(valor: number): void {
        if (this.saldo) {
            this.saldo += valor
        } else {
            this.saldo = valor
        }
        console.log(`
DEPÓSITO PROCESSADO
        Conta Poupança: ${this.numeroDaConta}
        Nome: ${this.cliente.nome}
        -----------------------------
        Depósito de: R$ ${valor.toFixed(2)}
        -----------------------------
        Saldo atual de: R$ ${this.saldo.toFixed(2)}
        `)
    };
    //saca
    sacar(valor: number): void {
        if (this.saldo < valor) {
            console.log(`
            Não é possível sacar R$ ${valor.toFixed(2)}, pois seu saldo é de R$ ${this.saldo.toFixed(2)}. Reinicie a operação.
            `)
        } else {
            console.log(`
SAQUE PROCESSADO
        Conta Poupança: ${this.numeroDaConta}
        Nome: ${this.cliente.nome}
        -----------------------------
        Saldo Anterior: ${this.saldo.toFixed(2)}
        Valor sacado: ${valor.toFixed(2)}`
            )
            this.saldo -= valor
            console.log(`
        -----------------------------
        Saldo Atual: R$ ${this.saldo.toFixed(2)}
        `)
        }

    };

}
