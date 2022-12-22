import Cliente from "../Cliente"
import ContaCorrente from "../ContaCorrente"
import Endereco from "../Endereco"

export function aplicacao_2(): void {

    const cliente5 = new Cliente("100.000.000-00", "Euclides Cunha", "(41)99999-9999", true)
    const conta1 = new ContaCorrente('005', cliente5, 1_000)

    const endereco1 = new Endereco('80.111-001', 'rua a', '555', 'casa', 'Curitiba', 'Paraná')
    const endereco2 = new Endereco('80.222-001', 'rua b', '444', 'casa', 'Curitiba', 'Paraná')
    const endereco3 = new Endereco('80.333-001', 'rua c', '333', 'casa', 'Curitiba', 'Paraná')
    cliente5.cadastrarEnderecos(endereco1)
    cliente5.cadastrarEnderecos(endereco2)
    cliente5.cadastrarEnderecos(endereco3)

    console.log(`
Nome: ${cliente5.getNome()}
${cliente5.listarEnderecos()}
`)
}



