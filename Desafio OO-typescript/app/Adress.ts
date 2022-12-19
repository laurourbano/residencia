export default class Adress {
    private arrayAdress: Array<Adress>

    constructor(
        private zipCode: string,
        private publicPlace: string,
        private number: string,
        private complement: string,
        private city: string,
        private state: string,
    ) { this.arrayAdress = [] };

    //por enquanto void, por não saber o retorno
    resgisterAdress(adress: Adress): Array<Adress> {

        adress = new Adress('80000-000', 'Avenida São Paulo', '1000', 'apto a1', 'Santo André', 'São Paulo')
        console.log(adress)
        return this.arrayAdress
    };

};
