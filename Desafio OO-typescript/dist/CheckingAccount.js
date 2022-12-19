"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Account_js_1 = __importDefault(require("./Account.js"));
class CheckingAccount extends Account_js_1.default {
    constructor(numero, limit) {
        super(numero);
        this.limit = limit;
        this.checking = new CheckingAccount('001', 1000);
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
