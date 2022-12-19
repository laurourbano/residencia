"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Adress {
    constructor(zipCode, publicPlace, number, complement, city, state) {
        this.zipCode = zipCode;
        this.publicPlace = publicPlace;
        this.number = number;
        this.complement = complement;
        this.city = city;
        this.state = state;
        this.arrayAdress = [];
    }
    ;
    resgisterAdress(adress) {
        adress = new Adress('80000-000', 'Avenida São Paulo', '1000', 'apto a1', 'Santo André', 'São Paulo');
        console.log(adress);
        return this.arrayAdress;
    }
    ;
}
exports.default = Adress;
;
