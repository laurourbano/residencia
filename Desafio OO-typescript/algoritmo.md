abstrata Pessoa 
    
    construtor(nome, cpf, telefone)

CRIACLIENTE 

    construtor

    (pessoa.nome, pessoa.cpf, pessoa.telefone, vip, Adress, Conta.contaCorrente && | Conta.contaPoupanca)

abstrata Conta 

    construtor (numero)

    metodo sacar
    metodo depositar 

contaCorrente 

    construtor (numero, objeto debito, objeto credito, limite, data)

    metodo transferir(contaDestino, valor) tira da minha conta e atualiza o saldo

    metodo calcularSaldo - fazer forEach(percorrer array de debitos e array de créditos) - somar os créditos - somar os débitos e diminuir os débitos dos créditos - somar o valor do limite

contaPoupanca 

    construtor (debito credito rendimentoMensal data)

    metodo calcularRendimentoMensal - levar em conta o valor da conta e o periodo

    metodo calcularSaldo - fazer forEach(percorrer array de debitos e array de créditos) - somar os créditos - somar os débitos e diminuir os débitos dos créditos - somar os rendimentos

CRIAFUNCIONARIO 

    construtor (pessoa.nome, pessoa.cpf, pessoa.telefone, salario, Cargo.cargo)

CRIACARGO 

    construtor (nome)

LOGICA CADASTRAR ENDERECOS:

    UNIAO DE DADOS PARA FORMAR UM OBJETO
**cadastracliente()**{

    Pessoa
        cpf
        nome
        telefone
    endereco
    criaconta()    
}

**cadastrafuncionario()**{

    Pessoa
        cpf
        nome
        telefone
    atribuicargo = atendente | gerente
    salario
}

**cadastracargo**(){

    gerente - salario 5000
    atentende - salario 2000
}

**criaconta()**{

    gera o numero
    escolhe se é poupanca ou corrente
    atribui a conta ao cliente
}

**tipocontapoupanca**

    Conta
        numero
    cliente
        dados
        
    gera débitos e créditos e tem um rendimentoMensal

    faz saques e depositos

    deposito na conta poupanca
        quando faz o deposito
        pega a data
        pega o valor

        **minha regra - aniversário sempre no dia 05 de cada mês**

        se faz 30 dias do depósito - então atualiza o saldo daquele depósito, somando a rentabilidademensal

**tipocontacorrente**

    Conta
        numero
    cliente
        dados

    gera débitos e créditos e tem um limite

    faz saque, depositos e transferencias

deposito 1 {

    data
    aniversario
    valorDeposito
    saldo
    rendimento
}


deposito 2 {

    data
    aniversario
    valorDeposito
    saldo
    rendimento
}