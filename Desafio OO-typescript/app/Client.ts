import People from "./People.js";
import Adress from "./Adress.js";
import IUsuario from "./IUser.js";

export default class Client extends People implements IUsuario {

    constructor(cpf: string, name: string, telephone: string, adress: Adress) {
        super(cpf, name, telephone);
    }
    //vip: boolean

    //por enquanto void pq nao sei o que retornar ainda
    //lista endereços
    addressList(): void {

    }
    //implementado de IUsuario
    //autentica usuario
    authenticateUser(): boolean {
        return false
    };

}