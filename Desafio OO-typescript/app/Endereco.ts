export default class Endereco {
    private cep: string
    private logradouro: string
    private numero: string
    private complemento: string
    private cidade: string
    private estado: string

    constructor(cep: string, logradouro: string, numero: string, complemento: string, cidade: string, estado: string) {
        this.cep = cep
        this.logradouro = logradouro
        this.numero = numero
        this.complemento = complemento
        this.cidade = cidade
        this.estado = estado
    };

    public getCep() {
        return this.cep
    }
    public setCep(cep: string) {
        this.cep = cep
    }
    public getLogradouro() {
        return this.logradouro
    }
    public setLogradouro(logradouro: string) {
        this.logradouro = logradouro
    }
    public getNumero() {
        return this.numero
    }
    public setNumero(numero: string) {
        this.numero = numero
    }
    public getComplemento() {
        return this.complemento
    }
    public setComplemento(complemento: string) {
        this.complemento = complemento
    }
    public getCidade() {
        return this.cidade
    }
    public setCidade(cidade: string) {
        this.cidade = cidade
    }
    public getEstado() {
        return this.estado
    }
    public setEstado(estado: string) {
        this.estado = estado
    }

};
