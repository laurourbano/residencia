"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Account_1 = __importDefault(require("./Account"));
class CheckingAccount extends Account_1.default {
    constructor(numero, limit) {
        super(numero);
        this.limit = limit;
        this.checking = new CheckingAccount('001', 1000);
        this.limit = limit;
    }
    transfer(amount) { }
    calculateBalance() {
        return 1;
    }
    deposit() { }
    ;
    withdraw() { }
    ;
}
exports.default = CheckingAccount;
