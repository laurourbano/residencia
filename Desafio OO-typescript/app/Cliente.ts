import Endereco from "./Endereco.js";
import IUsuario from "./IUsuario.js";
import ContaCorrente from "./ContaCorrente.js";
import ContaPoupanca from "./ContaPoupanca.js";
import Pessoa from "./Pessoa.js";

export default class Cliente extends Pessoa implements IUsuario {
    public vip: boolean
    public arrayEnderecos: Array<Endereco> = []
    public conta: ContaCorrente | ContaPoupanca

    constructor(cpf: string, nome: string, telefone: string, vip: boolean, arrayEnderecos: Array<Endereco>, conta?: ContaCorrente | ContaPoupanca) {
        super(cpf, nome, telefone);
        this.vip = vip
        this.arrayEnderecos = arrayEnderecos
        this.conta = conta as ContaCorrente | ContaPoupanca
    }

    /*addEndereco() {

    }*/

    //por enquanto void pq nao sei o que retornar ainda
    //lista endereços
    listarEnderecos(): void {
        console.log('fazer a lógica')
    }
    //implementado de IUsuario
    //autentica usuario
    authenticateUser(): boolean {
        return true
    };

}
