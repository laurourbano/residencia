"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Endereco {
    constructor(cep, logradouro, numero, complemento, cidade, estado) {
        this.arrayEnderecos = [];
        this.cep = cep;
        this.logradouro = logradouro;
        this.numero = numero;
        this.complemento = complemento;
        this.cidade = cidade;
        this.estado = estado;
    }
    ;
    resgisterAdress(endereco) {
        this.arrayEnderecos.push(endereco);
        return this.arrayEnderecos;
    }
    ;
}
exports.default = Endereco;
;
