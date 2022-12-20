import IUsuario from "./IUsuario.js";
import Cargo from "./Cargo.js";
import Pessoa from "./Pessoa.js";

export default class Funcionario extends Pessoa implements IUsuario {
    public cargo: Cargo
    public salario?: number

    constructor(cpf: string, nome: string, telefone: string, cargo: Cargo, salario?: number) {
        super(cpf, nome, telefone)
        this.cargo = cargo
        this.salario = salario
    }
    //implementa método do IUsuario
    authenticateUser(): boolean {
        return true
    };

}

