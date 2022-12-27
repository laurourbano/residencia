Requisitos
1. Criação das Classes Abstratas: as Classes

 Classe Abstrata Conta/
 
 e 
 
 Classe Abstrata Pessoa 
 
 são classes abstratas, isto é, não podem instanciar objetos, mas somente auxiliar na definição de outras classes.

2. Criação da interface IUsuario:

a interface IUsuario possui apenas a assinatura de um método.

Esse método, quando implementado nas classes que realizam a interface, deve retornar apenas retunr true.

3. Criação das Classes Concretas:

as classes concretas são todas as demais classes.

Repare que algumas delas possuem relacionamento de herança com as classes abstratas existentes
no modelo.

    a. Método listarEnderecos() da classe Cliente: o método deve imprimir no console
    todos os endereços armazenados para um cliente.

        - criaEndereço, armazenaEndereçoarray de objetos Adress, listaEndereço

    b. Método depositar() da classe Conta: cria um objeto do tipo Credito vinculado à
    conta que está recebendo o depósito.

        - criaLançamento crédito

    c. Método sacar() da classe Conta: cria um objeto do tipo Debito vinculado à conta
    que está sofrendo o saque. (conta não pode ter saldo negativo além do seu limite).

        - criaLancamento débito

    d. Método transferir() da classe ContaCorrente: retira dinheiro da conta corrente de
    origem e envia para uma conta destino. (a conta não pode ter saldo negativo além
    do seu limite).

        - verifica conta origem

        - se tem saldo tira o dinheiro da conta

        - adiciona o dinheiro na conta destino

        - mostra novo saldo

    e. Método calcularRendimento() da ContaPoupanca: 

    implementar a sua regra para cálculo de rendimento da conta poupança

        - todo dia 5 calcula percentual de rendimento e adiciona ao saldo da conta

        - mostra novo saldo

    f. Método calcularSaldo() da ContaPoupanca: soma o valor de todos os créditos e
    subtrai pela soma dos valores de todos os débitos. Além disso, soma o rendimento
    ao valor final.

        - cria método saldo += (somaCréditos() - somaDébitos()) 

        - saldoParcial + (saldoParcial * percentualRendimento)
    g. Método calcularSaldo() da ContaCorrente: soma o valor de todos os créditos e
    subtrai pela soma dos valores de todos os débitos. Após, soma o valor do limite. Ao
    final, retorna o valor.

        - cria método saldo += (somaCréditos() - somaDébitos())+limite

4. Criação dos Relacionamento entre Classes: as linhas que ligam as classes são chamadas de associação. 
A existência de uma associação entre a Classe A e a Classe B significa, em programação, que existirá um 
atributo da Classe B na definição da Classe A e vice-versa (a depender da navegabilidade atribuída no 
modelo → direção da seta). 
As cardinalidades (números presentes nas associações) dizem respeito a quantos objetos da Classe B podem
existir se ligando com um objeto da classe A (e vice-versa).
Esses números vão auxiliar na definição da estrutura de dados a ser utilizada para representar o atributo de uma determinada classe.

5. Criação de Objetos:
● Aplicação 1

    ○ Crie dois funcionários do banco, um gerente e um atendente.
instanciar new Employee

● Aplicação 2

    ○ Crie um cliente e adicione 3 endereços a ele
instanciar 3 * new Adress

    ○ Imprima os endereços desse cliente
imprimir {console.log} AdressList

● Aplicação 3

    ○ Crie um cliente que possua uma ContaCorrente
instanciar new Client = new CheckingAccount

    ○ Efetue três depósitos de 100 nessa ContaCorrente
chamar metodo deposit 3 * parametro 100

    ○ Efetue um saque de 50 reais nessa ContaCorrente
chamar metodo withdraw * 1 parametro 50 

    ○ Imprima o valor do saldo dessa ContaCorrente
chamar metodo calculateBalance {console.log}

● Aplicação 4

    ○ Crie um cliente que possua uma ContaCorrente
instanciar new Client = new CheckingAccount

    ○ Efetue um depósito de 1000 nessa ContaCorrente
chamar metodo deposit * 1 com parametro 1000

    ○ Crie um cliente que possua uma ContaPoupanca
instanciar new Client = new SavingsAccount 

    ○ Efetue um depósito de 1000 reais nessa conta Poupanca
chamar metodo deposit * 1 com parametro 1000

    ○ Efetue uma transferência de 500 reais da ContaCorrente para ContaPoupanca
chamar metodo transfer sai da CheckingAccount vai para SavingsAccount

● Aplicação 5

    ○ Crie um cliente que possua uma ContaPoupanca
instaciar new Client = new SavingsAccount

    ○ Defina a rentabilidadeMensal em 1%
setProfitability = 0.01

    ○ Efetue 1 depósito por mês de 200 reais do dia 01/01/2022 até 31/12/2022
criar metodo depositoMensal = 200 por um determinado periodo

    ○ Efetue um saque de 100 reais no dia 05/03/2022
chamar metodo withdraw * 1 parametro 100 na data 05-03-2022

    ○ Efetue um saque de 200 reais no dia 08/07/2022
chamar metodo withdraw * 1 parametro 200 na data 08-07-2022

    ○ Calcule o saldo da conta poupança considerando os rendimentos
chamar metodo calculateBalance somar os rendimentos acumulados

Obs.: Você está livre para definir novos atributos/métodos que julgar necessário para apresentar o
que se pede.

abstração
herança - classe filha é um classe pai
encapsulamento
metodos
atributos
