import People from "./People.js";
import Adress from "./Adress.js";
import IUsuario from "./IUser.js";

export default class Client extends People implements IUsuario {
    constructor(cpf: string, name: string, telephone: string, adress: Adress) {
        super(cpf, name, telephone);
        adress: Adress;
    }
    //vip: boolean

    //por enquanto void pq nao sei o que retornar ainda
    addressList(): void {

    }
    //implementado de IUsuario
    authenticateUser(): boolean {
        return false
    };

}