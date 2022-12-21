export default class Endereco {
    public cep: string
    public logradouro: string
    public numero: string
    public complemento: string
    public cidade: string
    public estado: string
    public arrayEnderecos: Array<Endereco> = []

    constructor(cep: string, logradouro: string, numero: string, complemento: string, cidade: string, estado: string) {
        this.cep = cep
        this.logradouro = logradouro
        this.numero = numero
        this.complemento = complemento
        this.cidade = cidade
        this.estado = estado
    };

    //por enquanto void, por não saber o retorno
    resgisterAdress(endereco: Endereco): Array<Endereco> {
        this.arrayEnderecos.push(endereco)
        return this.arrayEnderecos
    };

};
