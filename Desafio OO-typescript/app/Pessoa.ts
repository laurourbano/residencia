export default abstract class People {
    public cpf: string
    public nome: string
    public telefone: string

    constructor(cpf: string, nome: string, telefone: string) {
        this.cpf = cpf
        this.nome = nome
        this.telefone = telefone
    }

};
