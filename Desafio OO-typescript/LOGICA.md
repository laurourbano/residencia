abstrata Pessoa construtor(nome, cpf, telefone)

CRIACLIENTE construtor (pessoa.nome, pessoa.cpf, pessoa.telefone, vip, Adress, Conta.contaCorrente && | Conta.contaPoupanca)

abstrata Conta construtor (numero)
    metodo sacar
    metodo depositar 

contaCorrente = construtor (numero, objeto debito, objeto credito, limite, data)
    metodo transferir(contaDestino, valor) tira da minha conta e atualiza o saldo
    metodo calcularSaldo

contaPoupanca construtor (debito credito rendimentoMensal data)
    metodo calcularRendimentoMensal - levar em conta o valor da conta e o periodo
    metodo calcularSaldo

CRIAFUNCIONARIO construtor (pessoa.nome, pessoa.cpf, pessoa.telefone, salario, Cargo.cargo)

CRIACARGO construtor (nome)

