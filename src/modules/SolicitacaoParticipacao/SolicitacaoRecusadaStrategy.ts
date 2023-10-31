import UpdateStatusService from "@modules/pais/services/UpdateStatusService";
import { container } from "tsyringe";
import SolicitacaoStrategy from "./Interface/SolicitacaoStrategy";
import UpdatePaisService from "@modules/pais/services/UpdateStatusService";

export default class SolicitacaoRecusadaStrategy implements SolicitacaoStrategy {
  isStatus(tipo: string): boolean {
    return tipo === 'recusar';
  }

  process(solicitacao: any): void {
    const { id } = solicitacao;
    const novoStatus = "Recusado";
  
    const updateStatusPais = container.resolve(UpdatePaisService);
  
    try {
      updateStatusPais.execute({ id, status: novoStatus });
      console.log("Solicitação recusada e status atualizado no banco");
    } catch (error) {
      console.error("Erro ao atualizar o status:", error);
    }
  }
}
