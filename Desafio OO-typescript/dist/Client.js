"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const People_js_1 = __importDefault(require("./People.js"));
class Client extends People_js_1.default {
    constructor(cpf, name, telephone, vip, adress) {
        super(cpf, name, telephone);
        this.Geuvanio = new Client("000.000.000-00", "Euclides Cunha", "(41)99999-9999", true);
    }
    addressList() {
        console.log();
    }
    authenticateUser() {
        return true;
    }
    ;
}
exports.default = Client;
