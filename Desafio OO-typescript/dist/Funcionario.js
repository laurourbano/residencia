"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pessoa_js_1 = __importDefault(require("./Pessoa.js"));
class Funcionario extends Pessoa_js_1.default {
    constructor(cpf, nome, telefone, cargo) {
        super(cpf, nome, telefone);
        this.cargo = cargo;
    }
    getCpf() {
        return this.cpf;
    }
    setCpf(cpf) {
        this.cpf = cpf;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getTelefone() {
        return this.telefone;
    }
    setTelefone(telefone) {
        this.telefone = telefone;
    }
    getCargo() {
        return this.cargo;
    }
    setCargo(cargo) {
        this.cargo = cargo;
    }
    autenticaUsuario() {
        return true;
    }
    ;
}
exports.default = Funcionario;
//# sourceMappingURL=Funcionario.js.map