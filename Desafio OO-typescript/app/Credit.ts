export default class Credit {

    constructor(
        private amount: number,
        private date: Date
    ) { }

    //instance
    credit = new Credit(1_000, new Date())
}