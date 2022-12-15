export class Endereco {
  constructor(
    private _cep: string,
    private _logradouro: string,
    private _numero: string,
    private _complemento: string,
    private _cidade: string,
    private _uf: string
  ) { };

  //por enquanto void, por não saber o retorno
  cadastrarEndereco( /*parametros*/): void {
    return
  };
};
