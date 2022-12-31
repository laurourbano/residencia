# Projeto de banco desenvolvido para rodar em  console

## Utilizado node.js para apresentação dos dados gerados em console.


**Este projeto foi criado para solucionar um desafio apresentado pela IUUL para criação de uma aplicação em console de um banco em que foi apresentado um diagrama com as classes e métodos.**

 abstract class - classes abstratas

    atributos para serem herdados

 class - classes concretas

    atributos e métodos

 interface - interfaces

    método de implementação obrigatória


Descrevendo os atributos, já informando as classes abstratas e a interface que seria de implementação obrigatória.

Ao final do desafio foram apresentadas 5 comportamentos que seriam testados na aplicação e o retorno esperado sobre estes comportamentos desejados.

## Coisas como:

     - Instanciar clientes;

     - Atribuir contas aos clientes;

     - Atribuir endereços aos clientes e exibir a lista de endereços de clientes;

     - Realizar saques, depósitos e transferências na conta corrente - levando em consideração o limite atribuído à conta como dinheiro disponível para saque;

     - Realizar depósitos e saques na conta poupança e atribuir os rendimentos definidos através da taxa de rendimento mensal;

## Utilização do sistema:

    - O sistema roda com npm start;

    - Para utilizar deverá ter instalado o node.js;
    
    - Desenvolvendo abrir um terminal para digitar o comando tsc -w, para ir transpilando sempre que houver mudanças nos arquivos da pasta app, e colocar os arquivos compilados na pasta dist;
    
    - Abrir novo terminal, confirmar que está na pasta correta e executar o comando npm start para cada aplicação;

    - Descomentar no arquivo main.ts cada aplicação que deve ser apresentada no console com npm start;


link para o trello utilizado para organizar as tarefas e as ideias do projeto:

      https://trello.com/b/OpmFDR5B/desafio-oo-typescript-iuul-ed

link para baixar o typescript:

      https://www.typescriptlang.org/download

link para baixar o node.js:

###### baixar conforme seu sistema operacional - para o meu projeto foi utilizado a versão para windows.

      https://nodejs.org/en/download/

tsconfig.json:

      compilerOptions:

      - echma script 2016;
      - commonjs;
      - diretório raiz ./app;
      - determinar como o typescript verifica os arquivos através do node;
      - diretório que é criado com os arquivos ".js" ./dist;
      - remover os comentários no quando for compilado;
      - não emitir arquivos compilados com erros no typescript;
      - faciliar a importação de módulos (não tenho certeza do que isso faz)
      - usar o modo estrito;
      - usar any só de modo explícito;
      - verificar se existe parametros nulos ou indefinidos;

