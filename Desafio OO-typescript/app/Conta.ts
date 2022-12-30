import Cliente from "./Cliente";
import Credito from "./Credito";
import Debito from "./Debito";

export default abstract class Conta {
    protected numeroDaConta: string;
    private cliente: Cliente
    private debitos: Debito[] = [];
    private creditos: Credito[] = [];

    constructor(numeroDaConta: string, cliente: Cliente) {
        this.numeroDaConta = numeroDaConta;
        this.cliente = cliente
    };
    public getCliente(): Cliente {
        return this.cliente;
    };
    public setCliente(cliente: Cliente) {
        this.cliente = cliente
    }
    public adicionaCreditos(credito: Credito): void {
        this.creditos.push(credito);
    };
    public adicionaDebitos(debito: Debito): void {
        this.debitos.push(debito);
    };



    //por enquanto void pq nao sei o que retornar ainda
    abstract depositar(valor: number): void;
    abstract sacar(valor: number): void;
};
