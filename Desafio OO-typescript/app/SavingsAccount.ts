import Account from "./Account"

export default class SavingsAccount extends Account {
    constructor(
        numero: string,
        private profitability: number
    ) {
        super(numero)
    }
    //rendimento
    calculateYield(): number {
        return 1
    };
    //saldo
    calculateBalance(): number {
        return 1
    };
    //implementados de Conta
    //deposita
    deposit(): void { };
    //saca
    withdraw(): void { };

    //instance
    savings = new SavingsAccount('002', 0.05)
}