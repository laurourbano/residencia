"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Account_1 = __importDefault(require("./Account"));
class SavingsAccount extends Account_1.default {
    constructor(numero, profitability) {
        super(numero);
        this.profitability = profitability;
        this.savings = new SavingsAccount('002', 0.05);
        this.profitability = profitability;
    }
    calculateIncome() {
        return 1;
    }
    ;
    calculateBalance() {
        return 1;
    }
    ;
    deposit() { }
    ;
    withdraw() { }
    ;
}
exports.default = SavingsAccount;
