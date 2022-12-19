import Account from "./Account";

export default class CheckingAccount extends Account {
    constructor(
        numero: string,
        private limit: number,
    ) {
        super(numero)
        this.limit = limit
    }

    transfer(
        //Conta: contaDestino,
        amount: number,
    ) { }

    calculateBalance(): number {
        return 1
    }
    //implementados de Conta
    deposit(): void { };

    withdraw(): void { };

    //instance
    checking = new CheckingAccount('001', 1_000)
}