import Cliente from "./Cliente.js";
import Conta from "./Conta"

export default class ContaPoupanca extends Conta {
    public rentabilidadeMensal: number
    public cliente: Cliente = new Cliente()
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
        console.log(`Saldo atual R$ ${this.saldo}`)
    };
    //saca
    sacar(valor: number): void {
        if (this.saldo < valor) {
            console.log(`Não é possível sacar R$ ${valor}, pois seu saldo de R$ ${this.saldo} é insuficiente. Reinicie a operação.`)
        } else {
            console.log(`Saldo Anterior: ${this.saldo}`)
            this.saldo -= valor
            console.log(`Saldo Atual: ${this.saldo}`)
        }

    };

}
