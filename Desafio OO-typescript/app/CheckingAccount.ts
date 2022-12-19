import Account from "./Account.js";

export default class CheckingAccount extends Account {

    constructor(
        numero: string,
        private limit: number,
    ) {
        super(numero)
    }

    //transferir
    transfer(
        //Conta: contaDestino,
        amount: number,
    ) { }
    //saldo
    calculateBalance(): number {
        return 1
    }
    //implementados de Conta
    //deposita
    deposit(): void { };
    //saca
    withdraw(): void { };

    //instance
    checking = new CheckingAccount('001', 1_000)

}