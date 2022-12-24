import Cliente from "../Cliente"
import ContaPoupanca from "../ContaPoupanca"

export function aplicacao_5(): void {

    const cliente1 = new Cliente("222.000.000-01", "Lauro Otávio", "(41)97654-9999", true)
    const conta5 = new ContaPoupanca('005', cliente1)


    conta5.depositar(0)
    conta5.depositar(12)
    conta5.depositar(4)
    conta5.sacar(23)

    
}