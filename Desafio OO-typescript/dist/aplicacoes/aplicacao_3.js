"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.aplicacao_3 = void 0;
const Cliente_1 = __importDefault(require("../Cliente"));
const ContaCorrente_1 = __importDefault(require("../ContaCorrente"));
function aplicacao_3() {
    const cliente1 = new Cliente_1.default("100.000.000-00", "Euclides Cunha", "(41)99999-9999", true);
    const conta1 = new ContaCorrente_1.default('001', cliente1, 1000);
    conta1.depositar(100);
    conta1.depositar(100);
    conta1.depositar(100);
    conta1.sacar(50);
    conta1.mensagemSaldo();
}
exports.aplicacao_3 = aplicacao_3;
