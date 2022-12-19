"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Credit {
    constructor(amount, date) {
        this.amount = amount;
        this.date = date;
        this.credit = new Credit(1000, new Date());
        this.amount = amount;
        this.date = date;
    }
}
exports.default = Credit;
