import Cargo from "./Cargo.js"
import Cliente from "./Cliente.js"
import ContaCorrente from "./ContaCorrente.js"
import ContaPoupanca from "./ContaPoupanca.js"
import Endereco from "./Endereco.js"
import Funcionario from "./Funcionario.js"

const atendente = new Cargo('atendente', 2_000)
const gerente = new Cargo('gerente', 5_000)
const funcionario1 = new Funcionario('Flavio', '000.000.000-01', '(41)97777-9999', atendente)
const funcionario2 = new Funcionario('Fulvio', '111.111.111-00', '(41)96666-9999', gerente)
const endereco1 = new Endereco('0', '1', '0', '0', '0', '0')
const endereco2 = new Endereco('0', '0', '0', '0', '0', '2')
const cliente1 = new Cliente("000.000.000-00", "Euclides Cunha", "(41)99999-9999", true, endereco1)
const cliente2 = new Cliente("000.000.000-00", "Carlos Jucá", "(41)98888-9999", true, endereco2)
const conta1 = new ContaCorrente('001', 1_000, cliente1)
const conta2 = new ContaPoupanca('002', 0.05, cliente1)
const conta3 = new ContaCorrente('003', 2_000, cliente2)
const conta4 = new ContaPoupanca('004', 0.05, cliente2)
conta2.depositar(100)
console.log(`O saldo da conta ${conta2} é ${conta2.saldo}`)
