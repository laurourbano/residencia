//--------------------------------------------------------------------//

export abstract class Pessoa {
    constructor(
        protected nome: string,
        protected cpf: string,
        protected telefone: string
    ) { }
}

export class Cliente extends Pessoa implements IUsuario {
    constructor(
        readonly nome: string,
        readonly cpf: string,
        readonly telefone: string,
        readonly vip: boolean,
    ) {
        super(nome, cpf, telefone)
        vip = false
    }
    autenticar(ehvalido: boolean) {
        ehvalido = true
        return ehvalido
    }
}

export class Funcionario extends Pessoa implements IUsuario {
    constructor(
        readonly nome: string,
        readonly cpf: string,
        readonly telefone: string,
        readonly cargo: Cargo,
        readonly salario: number,
    ) {
        super(
            nome,
            cpf,
            telefone
        )
        //???
        salario = 0
        console.log(cargo.atendente.nome)
    }
    autenticar(ehvalido: boolean) {
        ehvalido = true
        return ehvalido
    }
}

export class Cargo {
    constructor(
        readonly nome: string,
        readonly salario: number
    ) { }
    atendente = new Cargo("atendente", 2_000)
    gerente = new Cargo('gerente', 5_000)
}

export interface IUsuario {
    autenticar(ehvalido: boolean): boolean;
}

//--------------------------------------------------------------------//

export abstract class Conta {
    constructor(protected numeroDaConta: string) { }
    criarConta(numeroDaConta: string) {
        this.criaNumeroDaConta(numeroDaConta)
    }
    criaNumeroDaConta(stringNumeroDaConta: string) {
        let contaNumero = 1
        contaNumero = Number(this.numeroDaConta)
        contaNumero++
        stringNumeroDaConta = contaNumero.toString()

        console.log(contaNumero)
    }
    abstract depositar(
        numeroDaConta: string,
        saldo: number,
        valor: number,
    ): number | string;
    abstract sacar(
        numeroDaConta: string,
        saldo: number,
        valor: number
    ): number | string;
}

export class contaCorrente extends Conta {
    constructor(
        readonly numeroDaConta: string,
        private limite: number,
    ) {
        super(numeroDaConta);
    }
    getLimite() {
        return this.limite
    }
    setLimite(limite: number) {
        this.limite = limite
    }

    depositar(
        numeroDaConta: string,
        saldo: number,
        valor: number,
    ) {
        return saldo += valor;
    }
    sacar(
        numeroDaConta: string,
        saldo: number,
        valor: number,
    ): number | string {
        if (valor < saldo) {
            saldo = saldo - valor;
            return saldo
        } else {
            return `Não foi possível realizar o saque, seu saldo de ${saldo} é menor que a quantia de ${valor}, que foi solicitada`;
        }
    }
    tranferir(
        numeroDaConta: string,
        contaDestino: Conta,
        saldo: number, valor: number
    ) {
        if (valor < saldo) {
            saldo = saldo - valor;
        } else {
            return `Não foi possível realizar a transferência, seu saldo de ${saldo} é menor que a quantia de ${valor}, que foi solicitada`;
        }
        return saldo;
    }
}

export class contaPoupanca extends Conta {
    constructor(
        numeroDaConta: string,
        rendimento: number = 0.01
    ) {
        super(numeroDaConta);
    }
    depositar(
        numeroDaConta: string,
        saldo: number,
        valor: number,
    ) {
        return saldo += valor;
    }
    sacar(
        numeroDaConta: string,
        saldo: number,
        valor: number,
    ): number | string {
        if (valor < saldo) {
            saldo = saldo - valor;
            return saldo
        } else {
            return `Não foi possível realizar a transferência, seu saldo de ${saldo} é menor que a quantia de ${valor}, que foi solicitada`;
        }
    }
}

