"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const People_js_1 = __importDefault(require("./People.js"));
class Employee extends People_js_1.default {
    constructor() {
        super(...arguments);
        this.funcionario = new Employee("cpf", "name", "telefone");
    }
    authenticateUser() {
        return false;
    }
    ;
}
exports.default = Employee;
