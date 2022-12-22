import Credito from "./Credito";
import Debito from "./Debito";

export default abstract class Conta {
    protected numeroDaConta: string;

    constructor(numeroDaConta: string) {
        this.numeroDaConta = numeroDaConta
    }

    //por enquanto void pq nao sei o que retornar ainda
    abstract depositar(valor: Credito): void;
    abstract sacar(valor: Debito): void;
}
