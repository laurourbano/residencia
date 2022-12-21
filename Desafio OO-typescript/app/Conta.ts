export default abstract class Conta {
    public numeroDaConta: string;

    constructor(numeroDaConta: string) {
        this.numeroDaConta = numeroDaConta
    }

    //por enquanto void pq nao sei o que retornar ainda
    abstract depositar(valor: number): void;
    abstract sacar(valor: number): void;
}
