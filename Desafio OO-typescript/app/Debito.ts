export default class Debito {
    valor: number
    private data: Date

    constructor(valor: number, data: Date) {
        this.valor = valor
        this.data = data
    };
    public getValor() {
        return this.valor
    }
    public setValor(valor: number) {
        this.valor = valor
    }
    public getData(){
        return this.data
    }
    public setData(data: Date){
        this.data = data
    }

};
