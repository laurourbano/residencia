import Cargo from "../Cargo"
import Funcionario from "../Funcionario"

export function aplicacao_1(): void {

    const atendente = new Cargo('Atendente', 2_000)
    const gerente = new Cargo('Gerente', 5_000)
    const funcionario1 = new Funcionario('000.000.000-01', 'Flavio', '(41)97777-9999', atendente)
    const funcionario2 = new Funcionario('111.111.111-00', 'Joel', '(41)96666-9999', gerente)

    console.log(`
Nome: ${funcionario1.nome}
Cargo: ${funcionario1.cargo.nome}
Salário: ${funcionario1.cargo.salario.toFixed(2)}
`)

    console.log(`
Nome: ${funcionario2.nome}
Cargo: ${funcionario2.cargo.nome}
Salário: ${funcionario2.cargo.salario.toFixed(2)}
`)

}