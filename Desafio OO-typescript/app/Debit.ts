export default class Debit {

    constructor(
        private amount: number,
        private date: Date
    ) { };

    //instance
    debit = new Debit(1_000, new Date())
};
