import IUser from "./IUser.js";
import Job from "./Job.js";
import People from "./People.js";

export default class Employee extends People implements IUser {

    constructor(cpf: string, name: string, telephone: string, job: Job, salary: number) {
        super(cpf, name, telephone)
    }
    //implementa método do IUsuario
    authenticateUser(): boolean {
        return true
    };

    //instance
    gerente = new Employee("000.000.000-00", "Euclides Cunha", "(41)99999-9999", Job.gerente, 2000)
    atendente = new Employee("000.000.000-00", "Roberson Leite", "(41)99999-9999", Job.atendente, 1000)
}