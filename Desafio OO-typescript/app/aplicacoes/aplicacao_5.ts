import Cliente from "../Cliente"
import ContaPoupanca from "../ContaPoupanca"
import Endereco from "../Endereco"

export function aplicacao_5(): void {

    const endereco1 = new Endereco('80.000-005', 'rua b', '500', 'terreo', 'Assunção', 'Paraíba')
    const cliente1 = new Cliente("222.000.000-01", "Lauro Otávio", "(41)97654-9999", true, [ endereco1 ])

    const conta2 = new ContaPoupanca('005', 0.01, cliente1)
    conta2.depositar(100)
    conta2.depositar(100)
    conta2.depositar(100)
    conta2.sacar(50)
}