"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pessoa_js_1 = __importDefault(require("./Pessoa.js"));
class Funcionario extends Pessoa_js_1.default {
    constructor(cpf, nome, telefone, cargo, salario) {
        super(cpf, nome, telefone);
        this.cargo = cargo;
        this.salario = salario;
    }
    authenticateUser() {
        return true;
    }
    ;
}
exports.default = Funcionario;
