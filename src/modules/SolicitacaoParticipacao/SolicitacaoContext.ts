import SolicitacaoStrategy from "./Interface/SolicitacaoStrategy";
import SolicitacaoAceitaStrategy from "./SolicitacaoAceitaStrategy";
import SolicitacaoEmAnaliseStrategy from "./SolicitacaoEmAnaliseStrategy";
import SolicitacaoRecusadaStrategy from "./SolicitacaoRecusadaStrategy";


export default class SolicitacaoContext {
  private listaDeStrategias: SolicitacaoStrategy[] = [
    new SolicitacaoAceitaStrategy(),
    new SolicitacaoRecusadaStrategy(),
    new SolicitacaoEmAnaliseStrategy()
  ];

  executar(solicitacao: any): string {
    for (const estrategia of this.listaDeStrategias) {
      if (estrategia.isStatus(solicitacao.status)) {
        estrategia.process(solicitacao);
      
        return "Ação processada com sucesso"; 
      }
    }
    return "Ação não pôde ser processada"; 
  }
}