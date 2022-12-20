"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contaPoupanca = exports.contaCorrente = exports.Conta = exports.Cargo = exports.Funcionario = exports.Cliente = exports.Pessoa = void 0;
class Pessoa {
    constructor(nome, cpf, telefone) {
        this.nome = nome;
        this.cpf = cpf;
        this.telefone = telefone;
    }
}
exports.Pessoa = Pessoa;
class Cliente extends Pessoa {
    constructor(nome, cpf, telefone, vip) {
        super(nome, cpf, telefone);
        this.nome = nome;
        this.cpf = cpf;
        this.telefone = telefone;
        this.vip = vip;
        vip = false;
    }
    autenticar(ehvalido) {
        ehvalido = true;
        return ehvalido;
    }
}
exports.Cliente = Cliente;
class Funcionario extends Pessoa {
    constructor(nome, cpf, telefone, cargo, salario) {
        super(nome, cpf, telefone);
        this.nome = nome;
        this.cpf = cpf;
        this.telefone = telefone;
        this.cargo = cargo;
        this.salario = salario;
        salario = 0;
        console.log(cargo.atendente.nome);
    }
    autenticar(ehvalido) {
        ehvalido = true;
        return ehvalido;
    }
}
exports.Funcionario = Funcionario;
class Cargo {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
        this.atendente = new Cargo("atendente", 2000);
        this.gerente = new Cargo('gerente', 5000);
    }
}
exports.Cargo = Cargo;
class Conta {
    constructor(numeroDaConta) {
        this.numeroDaConta = numeroDaConta;
    }
    criarConta(numeroDaConta) {
        this.criaNumeroDaConta(numeroDaConta);
    }
    criaNumeroDaConta(stringNumeroDaConta) {
        let contaNumero = 1;
        contaNumero = Number(this.numeroDaConta);
        contaNumero++;
        stringNumeroDaConta = contaNumero.toString();
        console.log(contaNumero);
    }
}
exports.Conta = Conta;
class contaCorrente extends Conta {
    constructor(numeroDaConta, limite) {
        super(numeroDaConta);
        this.numeroDaConta = numeroDaConta;
        this.limite = limite;
    }
    getLimite() {
        return this.limite;
    }
    setLimite(limite) {
        this.limite = limite;
    }
    depositar(numeroDaConta, saldo, valor) {
        return saldo += valor;
    }
    sacar(numeroDaConta, saldo, valor) {
        if (valor < saldo) {
            saldo = saldo - valor;
            return saldo;
        }
        else {
            return `Não foi possível realizar o saque, seu saldo de ${saldo} é menor que a quantia de ${valor}, que foi solicitada`;
        }
    }
    tranferir(numeroDaConta, contaDestino, saldo, valor) {
        if (valor < saldo) {
            saldo = saldo - valor;
        }
        else {
            return `Não foi possível realizar a transferência, seu saldo de ${saldo} é menor que a quantia de ${valor}, que foi solicitada`;
        }
        return saldo;
    }
}
exports.contaCorrente = contaCorrente;
class contaPoupanca extends Conta {
    constructor(numeroDaConta, rendimento = 0.01) {
        super(numeroDaConta);
    }
    depositar(numeroDaConta, saldo, valor) {
        return saldo += valor;
    }
    sacar(numeroDaConta, saldo, valor) {
        if (valor < saldo) {
            saldo = saldo - valor;
            return saldo;
        }
        else {
            return `Não foi possível realizar a transferência, seu saldo de ${saldo} é menor que a quantia de ${valor}, que foi solicitada`;
        }
    }
}
exports.contaPoupanca = contaPoupanca;
