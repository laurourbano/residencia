import IUsuario from "./IUsuario.js";
import Cargo from "./Cargo.js";
import Pessoa from "./Pessoa.js";

export default class Funcionario extends Pessoa implements IUsuario {
    private cargo: Cargo
    private salario?: number

    constructor(cpf: string, nome: string, telefone: string, cargo: Cargo) {
        super(cpf, nome, telefone)
        this.cargo = cargo
    }
    public getCpf() {
        return this.cpf
    }
    public setCpf(cpf: string) {
        this.cpf = cpf
    }
    public getNome() {
        return this.nome
    }
    public setNome(nome: string) {
        this.nome = nome
    }
    public getTelefone() {
        return this.telefone
    }
    public setTelefone(telefone: string) {
        this.telefone = telefone
    }
    public getCargo() {
        return this.cargo
    }
    public setCargo(cargo: Cargo) {
        this.cargo = cargo
    }

    //implementa método do IUsuario
    autenticaUsuario(): boolean {
        return true
    };

}

