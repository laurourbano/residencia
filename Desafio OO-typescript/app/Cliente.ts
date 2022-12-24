import Pessoa from "./Pessoa.js";
import Endereco from "./Endereco.js";
import IUsuario from "./IUsuario.js";
export default class Cliente extends Pessoa implements IUsuario {
    private readonly arrayEnderecos: Endereco[] = []
    private vip: boolean

    constructor(cpf: string, nome: string, telefone: string, vip: boolean) {
        super(cpf, nome, telefone);
        this.vip = vip
    }
    public getCpf() {
        return this.cpf
    }
    public setCpf(cpf: string) {
        this.cpf = cpf
    }
    public getNome() {
        return this.nome
    }
    public setNome(nome: string) {
        this.nome = nome
    }
    public getTelefone() {
        return this.telefone
    }
    public setTelefone(telefone: string) {
        this.telefone = telefone
    }
    public getVip() {
        return this.vip
    }
    public setVip(vip: boolean) {
        this.vip = vip
    }

    public cadastrarEnderecos(endereco: Endereco): void {
        this.arrayEnderecos.push(endereco)
    }
    public listarEnderecos(): void {
        console.log(this.getNome())
        console.log(this.getCpf())
        for (const endereco of this.arrayEnderecos) {
            console.log(endereco)
        }
    }

    //autentica usuario
    public autenticaUsuario(): boolean {
        return true
    };

}
