export default class Credit {
    constructor(
        private amount: number,
        private date: Date
    ) {
        this.amount = amount;
        this.date = date;
    }

    //instance
    credit = new Credit(1_000, new Date())
}