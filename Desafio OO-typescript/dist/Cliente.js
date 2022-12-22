"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pessoa_js_1 = __importDefault(require("./Pessoa.js"));
class Cliente extends Pessoa_js_1.default {
    constructor(cpf, nome, telefone, vip) {
        super(cpf, nome, telefone);
        this.arrayEnderecos = [];
        this.vip = vip;
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
    getVip() {
        return this.vip;
    }
    setVip(vip) {
        this.vip = vip;
    }
    cadastraEnderecos(endereco) {
        this.arrayEnderecos.push(endereco);
    }
    listarEnderecos() {
        for (const endereco of this.arrayEnderecos) {
            console.log(endereco);
        }
    }
    autenticaUsuario() {
        return true;
    }
    ;
}
exports.default = Cliente;
