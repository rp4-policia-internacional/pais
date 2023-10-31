export default interface SolicitacaoStrategy {
  isStatus(tipo: string): boolean;
  process(solicitacao: any): void;
}