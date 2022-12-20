"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pessoa_js_1 = __importDefault(require("./Pessoa.js"));
class Cliente extends Pessoa_js_1.default {
    constructor(cpf, nome, telefone, vip, endereco, conta) {
        super(cpf, nome, telefone);
        this.arrayEnderecos = [];
        this.vip = vip;
        this.endereco = endereco;
        this.conta = conta;
    }
    addEndereco() {
    }
    listarEnderecos() {
        console.log(this.arrayEnderecos);
    }
    authenticateUser() {
        return true;
    }
    ;
}
exports.default = Cliente;
