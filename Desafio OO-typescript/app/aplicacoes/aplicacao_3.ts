import Cliente from "../Cliente"
import ContaCorrente from "../ContaCorrente"

export function aplicacao_3(): void {

    const cliente1 = new Cliente("100.000.000-00", "Euclides Cunha", "(41)99999-9999", true)
    const conta1 = new ContaCorrente('001', cliente1, 1_000)

    conta1.depositar(57)
    conta1.depositar(43.5)
    conta1.depositar(37.3)
    conta1.sacar(222.5)
}