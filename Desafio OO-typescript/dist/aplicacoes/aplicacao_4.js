"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.aplicacao_4 = void 0;
const Cliente_1 = __importDefault(require("../Cliente"));
const ContaCorrente_1 = __importDefault(require("../ContaCorrente"));
const ContaPoupanca_1 = __importDefault(require("../ContaPoupanca"));
function aplicacao_4() {
    const cliente1 = new Cliente_1.default("222.000.000-01", "Lauro Otávio", "(41)97654-9999", true);
    const conta2 = new ContaCorrente_1.default('002', cliente1, 1000);
    const conta3 = new ContaPoupanca_1.default('003', cliente1, 1000);
}
exports.aplicacao_4 = aplicacao_4;
