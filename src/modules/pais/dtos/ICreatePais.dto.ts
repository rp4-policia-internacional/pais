import { Decimal } from "@prisma/client/runtime/library";

export default interface ICreatePaisDTO {
  id: string;
  nome: string;
  gentilico: string;
  extensaoTerritorial: Decimal;
  capital: string;
  continente: string;
  governo: string;
  idioma: string;
  populacao: Decimal;
  moeda: string;
  emailDeContato: string;
  emailDepartamento: string;
  status: string;
  dataIngresso: Date;
}
