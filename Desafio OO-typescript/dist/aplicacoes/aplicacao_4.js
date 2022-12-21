"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.aplicacao_4 = void 0;
const Cliente_1 = __importDefault(require("../Cliente"));
const ContaCorrente_1 = __importDefault(require("../ContaCorrente"));
const ContaPoupanca_1 = __importDefault(require("../ContaPoupanca"));
const Endereco_1 = __importDefault(require("../Endereco"));
function aplicacao_4() {
    const endereco1 = new Endereco_1.default('80.000-005', 'rua b', '500', 'terreo', 'Assunção', 'Paraíba');
    const cliente1 = new Cliente_1.default("222.000.000-01", "Lauro Otávio", "(41)97654-9999", true, [endereco1]);
    const conta2 = new ContaCorrente_1.default('002', 1000, cliente1);
    conta2.depositar(1000);
    const conta3 = new ContaPoupanca_1.default('003', 1000, cliente1);
    conta3.depositar(1000);
    conta2.transferir(conta3, 500);
}
exports.aplicacao_4 = aplicacao_4;
