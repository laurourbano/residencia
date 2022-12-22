import Cliente from "./Cliente.js";
import Conta from "./Conta"
import Credito from "./Credito.js";
import Debito from "./Debito.js";

export default class ContaPoupanca extends Conta {
    private rentabilidadeMensal: number
    private saldo: number = 0
    private readonly cliente: Cliente
    private arrayDebitos: Debito[] = []
    private arrayCreditos: Credito[] = []

    constructor(numeroDaConta: string, cliente: Cliente, rentabilidadeMensal: number) {
        super(numeroDaConta)
        this.rentabilidadeMensal = rentabilidadeMensal
        this.cliente = cliente
    }

    public getNumeroDaConta() {
        return this.numeroDaConta
    }
    public setNumeroDaConta(numeroDaConta: string) {
        this.numeroDaConta = numeroDaConta
    }
    public getRentabilidadeMensal() {
        return this.rentabilidadeMensal
    }
    public setRentabilidadeMensal(rentabilidadeMensal: number) {
        this.rentabilidadeMensal = rentabilidadeMensal
    }
    public getSaldo() {
        return this.saldo
    }
    public setSaldo(saldo: number) {
        this.saldo = saldo
    }
    public getCliente() {
        return this.cliente
    }

    public adicionaCreditos(credito: Credito): void {
        this.arrayCreditos.push(credito)
    }
    public adicionaDebitos(debito: Debito): void {
        this.arrayDebitos.push(debito)
    }

    /*-------------------------------------------------------------------------*/
    //VERIFICAR METODO ------ TRABALHAR NA LOGICA
    public calculaRendimentoMensal(rentabilidadeMensal: number): number {
        this.rentabilidadeMensal = rentabilidadeMensal
        rentabilidadeMensal = 0.01
        return rentabilidadeMensal
    };
    /*-------------------------------------------------------------------------*/

    public mensagemSemSaldo(valor: number) {
        `
        Não é possível realizar a operação no valor de R$ ${valor.toFixed(2)}, pois seu saldo é de R$ ${this.getSaldo().toFixed(2)}. Reinicie a operação.
        `}

    public mensagemSaqueProcessado(valor: number) {
        `
SAQUE PROCESSADO
        Conta Poupança: ${this.getNumeroDaConta()}
        Nome: ${this.getCliente().getNome()}
        -----------------------------
        Saldo Anterior: ${this.getSaldo().toFixed(2)}
        Valor sacado: ${valor.toFixed(2)}
        `}
    public mensagemDepositoProcessado(valor: number) {
        `
DEPÓSITO PROCESSADO
        Conta Poupança: ${this.getNumeroDaConta()}
        Nome: ${this.getCliente().getNome()}
        -----------------------------
        Depósito de: R$ ${valor.toFixed(2)}
        -----------------------------
        Saldo atual de: R$ ${this.getSaldo().toFixed(2)}
        `}
    public mensagemSaldo() {
        `
SALDO
        Conta Poupança: ${this.getNumeroDaConta()}
        Nome: ${this.getCliente().getNome()}
        -----------------------------
        Saldo atual de: R$ ${this.getSaldo().toFixed(2)}
        `}

    //deposita
    public depositar(valor: Credito): void {
        const credito = new Credito(valor.getValor(), new Date())
        this.adicionaCreditos(credito)

        this.setSaldo(this.getSaldo() + valor.getValor())

        console.log(this.mensagemDepositoProcessado(valor.getValor()))
    };

    //saca
    public sacar(valor: Debito): void {
        const debito = new Debito(valor.getValor(), new Date())
        this.adicionaDebitos(debito)

        if (this.getSaldo() < valor.getValor()) {
            console.log(this.mensagemSemSaldo(valor.getValor()))
        } else {
            this.setSaldo(this.getSaldo() - valor.getValor())
            console.log(this.mensagemSaqueProcessado(valor.getValor()))
        }

    };

    public calcularSaldo(debitos: number, creditos: number, rentabilidade: number): void {
        this.setSaldo((creditos - debitos) + rentabilidade)

        console.log(this.mensagemSaldo())
    };

}
