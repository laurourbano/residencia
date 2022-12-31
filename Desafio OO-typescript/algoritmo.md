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

**tipocontacorrente**

    Conta
        numero
    cliente
        dados

    gera débitos e créditos e tem um limite

    faz saque, depositos e transferencias



