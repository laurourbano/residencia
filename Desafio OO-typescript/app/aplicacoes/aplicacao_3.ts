import Cliente from "../Cliente"
import ContaCorrente from "../ContaCorrente"
import ContaPoupanca from "../ContaPoupanca"
import Endereco from "../Endereco"

export function aplicacao_3(): void {

    const endereco1 = new Endereco('80.000-001', 'rua androidum', '123', 'casa', 'Curitiba', 'Paraná')
    const cliente1 = new Cliente("100.000.000-00", "Euclides Cunha", "(41)99999-9999", true, [ endereco1 ])

    const conta1 = new ContaCorrente('001', 1_000, cliente1)
    conta1.depositar(100)
    conta1.depositar(100)
    conta1.depositar(100)
    conta1.sacar(50)
}