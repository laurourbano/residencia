import Account from "./Account"

export default class SavingsAccount extends Account {
    constructor(
        numero: string,
        private profitability: number
    ) {
        super(numero)
        this.profitability = profitability
    }

    calculateIncome(): number {
        return 1
    };

    calculateBalance(): number {
        return 1
    };
    //implementados de Conta
    deposit(): void { };

    withdraw(): void { };

    //instance
    savings = new SavingsAccount('002', 0.05)
}