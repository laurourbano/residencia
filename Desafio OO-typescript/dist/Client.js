"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const People_js_1 = __importDefault(require("./People.js"));
class Client extends People_js_1.default {
    constructor(cpf, name, telephone, adress) {
        super(cpf, name, telephone);
    }
    addressList() {
    }
    authenticateUser() {
        return false;
    }
    ;
}
exports.default = Client;