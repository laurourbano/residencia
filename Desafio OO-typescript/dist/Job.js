"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Job {
    constructor(name) {
        this.name = name;
        this.gerente = new Job("gerente");
        this.atendente = new Job("atendente");
        this.name = name;
    }
}
exports.default = Job;
;
