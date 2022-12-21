import Cliente from "../Cliente"
import Endereco from "../Endereco"

export function aplicacao_2(): void {

    const endereco1 = new Endereco('80.000-001', 'rua androidum', '123', 'casa', 'Curitiba', 'Paraná')
    const endereco2 = new Endereco('80.000-002', 'rua bulmerangue', '1127', 'casa b', 'Londrina', 'Paraná')
    const endereco3 = new Endereco('80.000-003', 'rua taquara', '2', 'apartamento a', 'Nova Iguaçu', 'Rio de Janeiro')
    const cliente1 = new Cliente("100.000.000-00", "Euclides Cunha", "(41)99999-9999", true, [ endereco1, endereco2, endereco3 ])

    console.log(`
Nome: ${cliente1.nome}
`)
    cliente1.listarEnderecos()
}



