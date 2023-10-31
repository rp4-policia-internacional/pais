import SolicitacaoStrategy from "./Interface/SolicitacaoStrategy";


export default class SolicitacaoEmAnaliseStrategy implements SolicitacaoStrategy {
  isStatus(tipo: string): boolean {
    return tipo === 'EmAnalise';
  }
  process(solicitacao: any): void {

    console.log("Solicitação está em análise");
  }
}