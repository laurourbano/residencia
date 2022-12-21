import Conta from "./Conta.js";
import Cliente from "./Cliente.js";
import ContaPoupanca from "./ContaPoupanca.js";

export default class ContaCorrente extends Conta {
    public limite: number
    public cliente: Cliente
    public saldo: number = 0
    public arrayDebitos: Array<number> = []
    public arrayCreditos: Array<number> = []


    constructor(numero: string, limite: number, cliente: Cliente, saldo: number = 0, arrayDebitos: Array<number> = [], arrayCreditos: Array<number> = []) {
        super(numero)
        this.limite = limite
        this.cliente = cliente
    }

    //transferir
    transferir(conta: ContaCorrente | ContaPoupanca, valor: number) {
        if (this.saldo < valor) {
            console.log(`Não foi possível realizar a transferência de ${valor}, pois seu saldo atual é de R$ ${this.saldo}`)
        } else {
            this.saldo -= valor
            conta.saldo += valor
            console.log(`
TRANFERENCIA EFETUADA COM SUCESSO.
        Conta: ${this.numeroDaConta}
        Nome: ${this.cliente.nome}
        -----------------------------
        Valor transferido: R$ ${valor}
        Conta de destino: ${conta.numeroDaConta}
        -----------------------------
        Saldo atual da conta ${this.numeroDaConta}: R$ ${this.saldo}`)
        }
    }
    //saldo
    calcularSaldo(arrayDebitos: Array<number>, arrayCreditos: Array<number>) {
        arrayCreditos.forEach((credito) => {
            this.saldo += credito
        });
        arrayDebitos.forEach((debito) => {
            this.saldo += debito
        });
        console.log(`Saldo disponível é de R$ ${this.saldo}`)
    }
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
        Conta: ${this.numeroDaConta}
        Nome: ${this.cliente.nome}
        Depósito de: R$ ${valor.toFixed(2)}
        -----------------------------
        Saldo atual de: R$ ${this.saldo.toFixed(2)}
        `)
    };
    //saca
    sacar(valor: number): void {
        if (this.saldo < valor) {
            console.log(`Não é possível sacar R$ ${valor.toFixed(2)}, pois seu saldo é de R$ ${this.saldo.toFixed(2)}. Reinicie a operação.`)
        } else {
            console.log(`
SAQUE PROCESSADO
        Conta: ${this.numeroDaConta}
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
        };
    }
}
