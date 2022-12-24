import Cliente from "../Cliente"
import ContaCorrente from "../ContaCorrente"
import ContaPoupanca from "../ContaPoupanca"

export function aplicacao_4(): void {

    const cliente1 = new Cliente("222.000.000-01", "Lauro Otávio", "(41)97654-9999", true)
    const conta2 = new ContaCorrente('002', cliente1, 2_000)
    conta2.mensagemSaldo()
    const conta3 = new ContaPoupanca('003', cliente1)
    conta3.mensagemSaldo()


    conta2.depositar(1000)
    conta2.mensagemSaldo()
    conta3.depositar(1000)
    conta3.mensagemSaldo()
    conta2.transferir(conta3, 500)
    conta2.mensagemSaldo()
    conta3.mensagemSaldo()


}