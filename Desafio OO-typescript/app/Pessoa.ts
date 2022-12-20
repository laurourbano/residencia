export default abstract class People {
    protected cpf: string
    protected nome: string
    protected telefone: string

    constructor(cpf: string, nome: string, telefone: string) {
        this.cpf = cpf
        this.nome = nome
        this.telefone = telefone
    }

};
