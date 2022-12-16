"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
class Conta {
    constructor(numero) {
        this.numero = numero;
    }
    //por enquanto void pq nao sei o que retornar ainda
    depositar() {
        return console.log('depositar');
    }
    sacar() {
        return console.log('sacar');
    }
}
exports.Conta = Conta;
