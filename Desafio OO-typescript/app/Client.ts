import People from "./People.js";
import Adress from "./Adress.js";
import IUsuario from "./IUser.js";

export default class Client extends People implements IUsuario {

    constructor(cpf: string, name: string, telephone: string, vip: boolean, adress?: Adress) {
        super(cpf, name, telephone);
    }

    //por enquanto void pq nao sei o que retornar ainda
    //lista endereços
    addressList(): void {
        console.log()
    }
    //implementado de IUsuario
    //autentica usuario
    authenticateUser(): boolean {
        return true
    };

    Geuvanio = new Client("000.000.000-00", "Euclides Cunha", "(41)99999-9999", true,)
}