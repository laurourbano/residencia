import Conta from "./Conta.js";
import Cliente from "./Cliente.js";
import ContaPoupanca from "./ContaPoupanca.js";
import Credito from "./Credito.js";
import Debito from "./Debito.js";
export default class ContaCorrente extends Conta {
    private limite: number
    private saldo: number = 0
    private readonly cliente: Cliente
    private readonly arrayDebitos: Debito[] = []
    private readonly arrayCreditos: Credito[] = []

    constructor(numeroDaConta: string, cliente: Cliente, limite: number) {
        super(numeroDaConta)
        this.limite = limite
        this.cliente = cliente
    }

    public getNumeroDaConta() {
        return this.numeroDaConta
    }
    public setNumeroDaConta(numeroDaConta: string) {
        this.numeroDaConta = numeroDaConta
    }
    public getLimite() {
        return this.limite
    }
    public setLimite(limite: number) {
        this.limite = limite
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

    public mensagemSemSaldo(dataTransacao: Date, valorSaque: number) {
        `
--------------${dataTransacao}
Não foi possível realizar a operação no valor de ${valorSaque}, pois seu saldo atual é de R$ ${this.getSaldo()}
    `}

    public mensagemTransferenciaProcessada(dataTransacao: Date, conta: ContaCorrente | ContaPoupanca, valorDeposito: number, saldoAtual: number, novoSaldo: number) {
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
            `}
    public mensagemDepositoProcessado(dataTransacao: Date, numeroDaConta: string, valorDeposito: number, saldoAtual: number, novoSaldo: number) {
        `
--------------${dataTransacao}
DEPÓSITO PROCESSADO
        Conta Corrente: ${this.getNumeroDaConta()}
        Nome: ${this.getCliente().getNome()}
        Depósito de: R$ ${valorDeposito.toFixed(2)}
        -----------------------------
        Saldo atual de: R$ ${this.getSaldo().toFixed(2)}
            `}
    public mensagemSaqueProcessado(dataTransacao: Date, numeroDaConta: string, valorSaque: number, saldoAtual: number, novoSaldo: number) {
        `
SAQUE PROCESSADO
        Conta Poupança: ${this.getNumeroDaConta()}
        Nome: ${this.getCliente().getNome()}
        -----------------------------
        Saldo Anterior: ${this.getSaldo().toFixed(2)}
        Valor sacado: ${valorSaque.toFixed(2)}
        `}
    public mensagemSaldo() {
        `
    Saldo disponível é de R$ ${this.getSaldo()}
    -----------------------------
    Saldo Atual: R$ ${this.getSaldo().toFixed(2)}
`}

    //transferir
    transferir(conta: ContaCorrente| ContaPoupanca, valor: number): void {
        const debito = new Debito(valor, new Date())
        this.adicionaDebitos(debito)
        const saldoAtual = this.getSaldo()
        const valorTransferencia = valor
        const dataTransacao = debito.getData()

        if (this.getSaldo() < valorTransferencia) {
            console.log(this.mensagemSemSaldo)
        } else {
            this.setSaldo(this.getSaldo() - valor)
            const novoSaldo = this.getSaldo()

            conta.setSaldo(conta.getSaldo() + valor)

            console.log(this.mensagemTransferenciaProcessada(dataTransacao, conta, valorTransferencia, saldoAtual, novoSaldo,))
        }

    }

    //deposita
    public depositar(valor: number): void {
        const credito = new Credito(valor, new Date())
        this.adicionaCreditos(credito)
        const dataTransacao = credito.getData()
        const valorDeposito = credito.getValor()
        const saldoAtual = this.getSaldo()
        const novoSaldo = this.getSaldo()+saldoAtual
        this.setSaldo(this.getSaldo() + valor)

        console.log(this.mensagemDepositoProcessado(dataTransacao, this.getNumeroDaConta(), valorDeposito, saldoAtual, novoSaldo))
        console.log(this.mensagemDepositoProcessado(dataTransacao, this.getNumeroDaConta(), valorDeposito, 
        saldoAtual, novoSaldo))
    };




    //saca
    public sacar(valor: number) {
        const debito = new Debito(valor, new Date())
        this.adicionaDebitos(debito)
        const valorSaque = debito.getValor()
        const dataTransacao = debito.getData()
        const saldoAtual = this.getSaldo()
        const novoSaldo = saldoAtual - valorSaque

        if (this.getSaldo() < valor) {
            console.log(this.mensagemSemSaldo(dataTransacao, valorSaque))
        } else {
            this.setSaldo(novoSaldo)
            console.log(this.mensagemSaqueProcessado(dataTransacao, this.getNumeroDaConta(),  valorSaque,saldoAtual, novoSaldo))
        };
    }

    //saldo
    calcularSaldo(arrayDebitos: Array<number>, arrayCreditos: Array<number>) {
        arrayCreditos.forEach((credito) => {
            this.setSaldo(this.getSaldo() + credito)
        });
        arrayDebitos.forEach((debito) => {
            this.setSaldo(this.getSaldo() - debito)
        });
        console.log(this.mensagemSaldo())
    }
}
