export default class Adress {

    constructor(
        private zipCode: string,
        private publicPlace: string,
        private number: string,
        private complement: string,
        private city: string,
        private state: string
    ) { };

    adress = new Adress('zipCode', 'publicPlace', 'number', 'complement', 'city', 'state')
    //por enquanto void, por não saber o retorno
    resgisterAdress(adress: Adress): void {
        console.log(adress)
    };

};
