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
        this.adress = new Adress('zipCode', 'publicPlace', 'number', 'complement', 'city', 'state');
    }
    ;
    resgisterAdress() {
    }
    ;
}
exports.default = Adress;
;
