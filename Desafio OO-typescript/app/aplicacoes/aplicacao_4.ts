import Cliente from "../Cliente"
import ContaCorrente from "../ContaCorrente"
import ContaPoupanca from "../ContaPoupanca"
import Endereco from "../Endereco"

export function aplicacao_4(): void {

    const cliente1 = new Cliente("222.000.000-01", "Lauro Otávio", "(41)97654-9999", true)
    const conta2 = new ContaCorrente('002', cliente1, 1_000)
    const conta3 = new ContaPoupanca('003', cliente1, 1_000)


    //conta2.depositar(1000)

    //conta3.depositar(1000)

    //conta2.transferir(conta3, 500)

}