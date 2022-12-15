import { Pessoa } from "./pessoa";
import { Endereco } from "./endereco";

export class Cliente {
  constructor(
    private vip: boolean
  ) { }

  //por enquanto void pq nao sei o que retornar ainda
  listarEnderecos(): void {
  }
}