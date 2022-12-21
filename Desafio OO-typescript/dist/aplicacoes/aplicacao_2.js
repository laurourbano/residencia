"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.aplicacao_2 = void 0;
const Cliente_1 = __importDefault(require("../Cliente"));
const Endereco_1 = __importDefault(require("../Endereco"));
function aplicacao_2() {
    const endereco1 = new Endereco_1.default('80.000-001', 'rua androidum', '123', 'casa', 'Curitiba', 'Paraná');
    const endereco2 = new Endereco_1.default('80.000-002', 'rua bulmerangue', '1127', 'casa b', 'Londrina', 'Paraná');
    const endereco3 = new Endereco_1.default('80.000-003', 'rua taquara', '2', 'apartamento a', 'Nova Iguaçu', 'Rio de Janeiro');
    const cliente1 = new Cliente_1.default("100.000.000-00", "Euclides Cunha", "(41)99999-9999", true, [endereco1, endereco2, endereco3]);
    console.log(`
Nome: ${cliente1.nome}
`);
    cliente1.listarEnderecos();
}
exports.aplicacao_2 = aplicacao_2;
