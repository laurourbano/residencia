import IUser from "./IUser.js";
import People from "./People.js";

export default class Employee extends People implements IUser {

    constructor(cpf: string, name: string, telephone: string) {
        super(cpf, name, telephone)
    }
    //implementa método do IUsuario
    authenticateUser(): boolean {
        return false
    };

    //instance
    funcionario = new Employee("cpf", "name", "telefone")
}