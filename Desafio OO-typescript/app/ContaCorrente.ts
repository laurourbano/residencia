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

    public mensagemSemSaldo(dataSemSaldo: string, valorSaque: number, saldoAtual: number) {
        console.log(`
--------------${dataSemSaldo}
Não foi possível realizar a operação no valor de R$ ${valorSaque.toFixed(2)}, pois seu saldo atual é de R$ ${saldoAtual.toFixed(2)}
    `)
    }

    public mensagemTransferenciaProcessada(dataTransacao: string, contaDestino: string, valorTransferencia: number, saldoAtual: number, novoSaldo: number) {
        console.log(`
--------------${dataTransacao}
TRANFERENCIA EFETUADA COM SUCESSO.
        Conta Corrente: ${this.getNumeroDaConta()}
        Nome: ${this.getCliente().getNome()}
        -----------------------------
        Saldo atual da sua conta: R$ ${saldoAtual}
        Valor transferido: R$ ${valorTransferencia}
        Conta de destino: ${contaDestino}
        -----------------------------
        Saldo atual da conta ${this.getNumeroDaConta()}: R$ ${novoSaldo}
    `)
    }

    public mensagemDepositoProcessado(dataTransacao: string, numeroDaConta: string, valorDeposito: number, saldoAtual: number, novoSaldo: number) {
        console.log(`
--------------${dataTransacao}
DEPÓSITO PROCESSADO
        Conta Corrente: ${numeroDaConta}
        Nome: ${this.getCliente().getNome()}
        ----------------------------
        Saldo atual: ${saldoAtual.toFixed(2)}
        -----------------------------
        Depósito de: R$ ${valorDeposito.toFixed(2)}
        -----------------------------
        Novo saldo de: R$ ${novoSaldo.toFixed(2)}
            `)
    }

    public mensagemSaqueProcessado(dataTransacao: string, numeroDaConta: string, valorSaque: number, saldoAtual: number, novoSaldo: number) {
        console.log(`
--------------${dataTransacao}
SAQUE PROCESSADO
        Conta Corrente: ${numeroDaConta}
        Nome: ${this.getCliente().getNome()}
        -----------------------------
        Saldo Anterior: ${saldoAtual.toFixed(2)}
        -----------------------------
        Valor sacado: ${valorSaque.toFixed(2)}
        -----------------------------
        Novo saldo: ${novoSaldo.toFixed(2)}
        `)
    }
    public mensagemSaldo() {
        const dataSaldo = new Date().toLocaleDateString('pt-BR')
        console.log(`
----------------------Data: ${dataSaldo}
SALDO
        Conta Corrente: ${this.getNumeroDaConta()}
        Nome: ${this.getCliente().getNome()}
        -----------------------------
        Saldo atual de: R$ ${this.getSaldo().toFixed(2)}
        `)
    }


    //transferir
    transferir(conta: ContaCorrente | ContaPoupanca, valor: number): void {
        const debito = new Debito(valor, new Date())
        this.adicionaDebitos(debito)
        const saldoAtual = this.getSaldo()
        const valorTransferencia = valor
        const dataTransacao = debito.getData().toLocaleDateString('pt-BR')
        const contaDestino = conta.getNumeroDaConta()

        if (saldoAtual < valorTransferencia) {
            this.mensagemSemSaldo(dataTransacao, valorTransferencia, saldoAtual)
        } else {
            const novoSaldo = saldoAtual - valor

            conta.setSaldo(conta.getSaldo() + valor)

            this.mensagemTransferenciaProcessada(dataTransacao, contaDestino, valorTransferencia, saldoAtual, novoSaldo)
        }

    }

    //deposita
    public depositar(valor: number): void {
        const credito = new Credito(valor, new Date())
        this.adicionaCreditos(credito)
        const dataTransacao = credito.getData().toLocaleDateString('PT-BR')
        const valorDeposito = credito.getValor()
        const saldoAtual = this.getSaldo()
        const novoSaldo = saldoAtual + valorDeposito
        const conta = this.getNumeroDaConta()
        this.setSaldo(this.getSaldo() + valor)

        this.mensagemDepositoProcessado(dataTransacao, conta, valorDeposito, saldoAtual, novoSaldo)
    };


    //saca
    public sacar(valor: number) {
        const debito = new Debito(valor, new Date())
        this.adicionaDebitos(debito)
        const valorSaque = debito.getValor()
        const dataTransacao = debito.getData().toLocaleDateString('pt-br')
        const saldoAtual = this.getSaldo()
        const novoSaldo = saldoAtual - valorSaque
        const conta = this.getNumeroDaConta()

        if (this.getSaldo() < debito.valor) {
            this.mensagemSemSaldo(dataTransacao, valorSaque, saldoAtual)
        } else {
            this.setSaldo(novoSaldo)
            this.mensagemSaqueProcessado(dataTransacao, conta, valorSaque, saldoAtual, novoSaldo)
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
        this.mensagemSaldo()
    }
}
