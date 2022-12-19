export default abstract class Account {
    constructor(
        protected number: string
    ) { this.number = number }

    //por enquanto void pq nao sei o que retornar ainda
    abstract deposit(): void;
    abstract withdraw(): void;

}
