import Conta from "./Conta.js";
import Cliente from "./Cliente.js";
import ContaPoupanca from "./ContaPoupanca.js";
import Credito from "./Credito.js";
import Debito from "./Debito.js";
export default class ContaCorrente extends Conta {
    private limite: number
    private saldo: number = 0
    private cliente: Cliente
    private arrayDebitos: Debito[] = []
    private arrayCreditos: Credito[] = []

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

    public mensagemSemSaldoTransferencia(dataSemSaldo: string, valorTransferencia: number, saldoAtual: number) {
        console.log(`
--------------------------------------- ${dataSemSaldo}
Não foi possível realizar a operação no valor de R$ ${valorTransferencia.toFixed(2)}, pois seu saldo atual é de R$ ${saldoAtual.toFixed(2)}
    `)
    }

    public mensagemSemSaldoSaque(dataSemSaldo: string, valorSaque: number, saldoAtual: number) {
        console.log(`
--------------------------------------- ${dataSemSaldo}
Não foi possível realizar a operação no valor de R$ ${valorSaque.toFixed(2)}, pois seu saldo atual é de R$ ${saldoAtual.toFixed(2)}
    `)
    }

    public mensagemTransferenciaProcessada(dataTransacao: string, contaDestino: string, valorTransferencia: number) {
        console.log(`
--------------------------------------- ${dataTransacao}
TRANFERENCIA EFETUADA COM SUCESSO.
        Conta Corrente: ${this.getNumeroDaConta()}
        Nome: ${this.getCliente().getNome()}
        -----------------------------
        Valor transferido: R$ ${valorTransferencia.toFixed(2)}
        Conta de destino: ${contaDestino}
        `)
    }

    public mensagemDepositoProcessado(dataTransacao: string, numeroDaConta: string, valorDeposito: number) {
        console.log(`
--------------------------------------- ${dataTransacao}
DEPÓSITO PROCESSADO
        Conta Corrente: ${numeroDaConta}
        Nome: ${this.getCliente().getNome()}
        ----------------------------
        Depósito de: R$ ${valorDeposito.toFixed(2)}
        `)
    }

    public mensagemSaqueProcessado(dataTransacao: string, numeroDaConta: string, valorSaque: number) {
        console.log(`
--------------------------------------- ${dataTransacao}
SAQUE PROCESSADO
        Conta Corrente: ${numeroDaConta}
        Nome: ${this.getCliente().getNome()}
        -----------------------------
        Valor sacado: ${valorSaque.toFixed(2)}
        `)
    }
    public mensagemSaldo() {
        const dataSaldo = new Date().toLocaleDateString('pt-BR')
        console.log(`
--------------------------------------- Data: ${dataSaldo}
SALDO
        Conta Corrente: ${this.getNumeroDaConta()}
        Nome: ${this.getCliente().getNome()}
        -----------------------------
        Saldo atual de: R$ ${this.getSaldo().toFixed(2)}
        Limite: R$ ${this.getLimite().toFixed(2)}
        Total disponível: R$ ${(this.getSaldo() + this.getLimite()).toFixed(2)}
        `)
        console.log(this.arrayCreditos)
        console.log(this.arrayDebitos)

    }

    //transferir
    transferir(conta: ContaCorrente | ContaPoupanca, valor: number): void {
        const debito = new Debito(valor, new Date())
        const credito = new Credito(valor, new Date())
        const saldoAtual = this.getSaldo()
        const valorTransferencia = valor
        const dataTransacao = debito.getData().toLocaleDateString('pt-BR')
        const contaDestino = conta.getNumeroDaConta()
        const limite = this.getLimite()
        const novoSaldo = saldoAtual - valorTransferencia

        if ((saldoAtual + limite) < valorTransferencia) {
            this.mensagemSemSaldoTransferencia(dataTransacao, valorTransferencia, saldoAtual)
        } else {
            conta.adicionaCreditos(credito)
            this.adicionaDebitos(debito)
            conta.setSaldo(conta.getSaldo() + valorTransferencia)
            this.setSaldo(novoSaldo)
            this.mensagemTransferenciaProcessada(dataTransacao, contaDestino, valorTransferencia)
        }

    }

    //deposita
    public depositar(valor: number): void {
        const credito = new Credito(valor, new Date())

        const conta = this.getNumeroDaConta()
        const dataTransacao = credito.getData().toLocaleDateString('pt-BR')
        const valorDeposito = credito.getValor()
        const saldoAtual = this.getSaldo()
        const novoSaldo = saldoAtual + valorDeposito
        this.setSaldo(novoSaldo)
        this.adicionaCreditos(credito)

        this.mensagemDepositoProcessado(dataTransacao, conta, valorDeposito)
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
            this.mensagemSemSaldoSaque(dataTransacao, valorSaque, saldoAtual)
        } else {
            this.setSaldo(novoSaldo)
            this.mensagemSaqueProcessado(dataTransacao, conta, valorSaque)
        };
    }

    //saldo
    /*public calcularSaldo(arrayDebitos: Array<number>, arrayCreditos: Array<number>) {
        arrayCreditos.forEach((credito) => {
            this.setSaldo(this.getSaldo() + credito)
        });
        arrayDebitos.forEach((debito) => {
            this.setSaldo(this.getSaldo() - debito)
        });
        this.mensagemSaldo()
    }*/
}
