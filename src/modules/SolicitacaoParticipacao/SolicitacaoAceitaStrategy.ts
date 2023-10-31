import UpdateStatusService from "@modules/pais/services/UpdateStatusService";
import { container } from "tsyringe";
import SolicitacaoStrategy from "./Interface/SolicitacaoStrategy";
import UpdatePaisService from "@modules/pais/services/UpdateStatusService";

export default  class SolicitacaoAceitaStrategy implements SolicitacaoStrategy {
  isStatus(tipo: string): boolean {
    return tipo === 'aceitar';
  }

  process(solicitacao: any): void {
    const { id } = solicitacao;
    const novoStatus = "Aceito";
    const updateStatusPais = container.resolve(UpdatePaisService);
  
    try {
      updateStatusPais.execute({ id, status: novoStatus });
      console.log("Solicitação aceita e status atualizado no banco");
  
    } catch (error) {
      console.error("Erro ao atualizar o status:", error);
    }
  }
}
