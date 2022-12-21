import Cliente from "../Cliente"
import ContaCorrente from "../ContaCorrente"
import ContaPoupanca from "../ContaPoupanca"
import Endereco from "../Endereco"

export function aplicacao_4(): void {

    const endereco1 = new Endereco('80.000-005', 'rua b', '500', 'terreo', 'Assunção', 'Paraíba')
    const cliente1 = new Cliente("222.000.000-01", "Lauro Otávio", "(41)97654-9999", true, [ endereco1 ])

    const conta2 = new ContaCorrente('002', 1_000, cliente1)
    conta2.depositar(1000)

    const conta3 = new ContaPoupanca('003', 1_000, cliente1)
    conta3.depositar(1000)

    conta2.transferir(conta3, 500)

}