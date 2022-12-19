"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Job_js_1 = __importDefault(require("./Job.js"));
const People_js_1 = __importDefault(require("./People.js"));
class Employee extends People_js_1.default {
    constructor(cpf, name, telephone, job, salary) {
        super(cpf, name, telephone);
        this.gerente = new Employee("000.000.000-00", "Euclides Cunha", "(41)99999-9999", Job_js_1.default.gerente, 2000);
        this.atendente = new Employee("000.000.000-00", "Roberson Leite", "(41)99999-9999", Job_js_1.default.atendente, 1000);
    }
    authenticateUser() {
        return true;
    }
    ;
}
exports.default = Employee;
