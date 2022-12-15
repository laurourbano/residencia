export class Conta {
  constructor(
    private numero: string
  ) { }

  //por enquanto void pq nao sei o que retornar ainda
  depositar(): void {
    return console.log('depositar')
  }
  sacar(): void {
    return console.log('sacar')
  }

}
