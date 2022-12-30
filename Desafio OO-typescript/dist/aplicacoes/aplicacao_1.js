"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.aplicacao_1 = void 0;
const Cargo_1 = __importDefault(require("../Cargo"));
const Funcionario_1 = __importDefault(require("../Funcionario"));
function aplicacao_1() {
    const atendente = new Cargo_1.default('Atendente', 2000);
    const gerente = new Cargo_1.default('Gerente', 5000);
    const funcionario1 = new Funcionario_1.default('000.000.000-01', 'Flavio', '(41)97777-9999', atendente);
    const funcionario2 = new Funcionario_1.default('111.111.111-00', 'Joel', '(41)96666-9999', gerente);
    console.log(`
Nome: ${funcionario1.getNome()}
Cargo: ${funcionario1.getCargo().getNome()}
Salário: ${funcionario1.getCargo().getSalario().toFixed(2)}
`);
    console.log(`
Nome: ${funcionario2.getNome()}
Cargo: ${funcionario2.getCargo().getNome()}
Salário: ${funcionario2.getCargo().getSalario().toFixed(2)}
`);
}
exports.aplicacao_1 = aplicacao_1;
//# sourceMappingURL=aplicacao_1.js.map