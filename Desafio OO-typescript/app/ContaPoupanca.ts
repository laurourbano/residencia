import Cliente from "./Cliente.js";
import Conta from "./Conta"
import Credito from "./Credito.js";
import Debito from "./Debito.js";

export default class ContaPoupanca extends Conta {
    private rentabilidadeMensal: number = 1 / 100 //1 por cento ao mês
    private saldo: number = 0
    private readonly cliente: Cliente
    private arrayDebitos: Debito[] = []
    private arrayCreditos: Credito[] = []

    constructor(numeroDaConta: string, cliente: Cliente) {
        super(numeroDaConta)
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

    public mensagemSemSaldo(valor: number, saldoAtual: number) {
        console.log(`
---------------------------------------
Não é possível realizar a operação no valor de R$ ${valor.toFixed(2)}, pois seu saldo é de R$ ${saldoAtual.toFixed(2)}.
        `)
    }

    public mensagemSaqueProcessado(numeroDaConta: string, valorSaque: number) {
        console.log(`
---------------------------------------
SAQUE PROCESSADO
        Conta Poupança: ${numeroDaConta}
        Nome: ${this.getCliente().getNome()}
        -----------------------------
        Valor sacado: ${valorSaque.toFixed(2)}
        `)
    }
    public mensagemDepositoProcessado(numeroDaConta: string, valorDeposito: number) {
        console.log(`
---------------------------------------
DEPÓSITO PROCESSADO
        Conta Poupança: ${numeroDaConta}
        Nome: ${this.getCliente().getNome()}
        -----------------------------
        Depósito de: R$ ${valorDeposito.toFixed(2)}
        `)
    }
    public mensagemSaldo() {
        console.log(`
---------------------------------------
SALDO
        Conta Poupança: ${this.getNumeroDaConta()}
        Nome: ${this.getCliente().getNome()}
        -----------------------------
        Saldo atual de: R$ ${this.getSaldo().toFixed(2)}
        `
        )
        //console.log(this.arrayCreditos)
        //console.log(this.arrayDebitos)
    }

    //deposita
    public depositar(valor: number): Date {
        const credito = new Credito(valor, new Date())
        const dataDeposito = credito.getData()
        const dataTransacao = dataDeposito.toLocaleDateString('pt-BR')
        const valorDeposito = credito.getValor()
        const saldoAtual = this.getSaldo()
        if (valor > 0) {
            this.adicionaCreditos(credito)
            this.setSaldo((saldoAtual + valor) + (saldoAtual * this.rentabilidadeMensal))

            this.mensagemDepositoProcessado(this.getNumeroDaConta(), valorDeposito)
        }
        return dataDeposito
    }

    //saca
    public sacar(valor: number) {
        const debito = new Debito(valor, new Date())
        const dataSaque = debito.getData()

        const valorSaque = debito.getValor()
        const dataTransacao = dataSaque.toLocaleDateString('pt-BR')
        const saldoAtual = this.getSaldo()
        const novoSaldo = saldoAtual - valorSaque

        if (this.getSaldo() < valor) {
            this.mensagemSemSaldo(valorSaque, saldoAtual)
        } else {
            this.setSaldo(novoSaldo)
            this.mensagemSaqueProcessado(this.getNumeroDaConta(), valorSaque)
            this.adicionaDebitos(debito)
        };
        return dataSaque

    }

    /*-------------------------------------------------------------------------*/
    //VERIFICAR METODO ------ TRABALHAR NA LOGICA
    public calculaRendimentoMensal(): void {
        this.arrayCreditos.forEach((elemento) => {
            elemento.getValor() + (elemento.getValor() * this.rentabilidadeMensal)
        })
    };
    /*-------------------------------------------------------------------------*/

}
