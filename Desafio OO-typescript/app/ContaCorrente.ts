import Conta from "./Conta.js";
import Cliente from "./Cliente.js";

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
    transferir(conta: ContaCorrente, valor: number) {
        if (this.saldo < valor) {
            console.log(`Não foi possível realizar a transferência de ${valor}, pois seu saldo atual é de R$ ${this.saldo}`)
        } else {
            this.saldo -= valor
            conta.saldo += valor
            console.log(`Transferência realizada com sucesso.
            Valor transferido: R$ ${valor}
            Conta de destino: ${conta}
            Saldo atual: R$ ${this.saldo}`)
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
    depositar(): void { };
    //saca
    sacar(): void {

    };
}

