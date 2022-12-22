export default class Cargo {
    private nome: string;
    private salario: number;

    constructor(nome: string, salario: number) {
        this.nome = nome
        this.salario = salario
    }
    public getNome() {
        return this.nome
    }
    public setNome(nome: string) {
        this.nome = nome
    }
    public getSalario() {
        return this.salario
    }
    public setSalario(salario: number) {
        this.salario = salario
    }

};
