import Cliente from "../Cliente"
import ContaPoupanca from "../ContaPoupanca"

export function aplicacao_5(): void {

    const cliente1 = new Cliente("222.000.000-01", "Lauro Otávio", "(41)97654-9999", true)
    const conta2 = new ContaPoupanca('005', cliente1, 0.01)


    conta2.depositar(100)
    conta2.depositar(100)
    conta2.depositar(100)
    conta2.sacar(50)
}