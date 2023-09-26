import { Decimal } from "@prisma/client/runtime/library";

class PaisEntity {
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

  constructor(
    id: string,
    nome: string,
    gentilico: string,
    extensaoTerritorial: Decimal,
    capital: string,
    continente: string,
    governo: string,
    idioma: string,
    populacao: Decimal,
    moeda: string,
    emailDeContato: string,
    emailDepartamento: string,
    status: string,
    dataIngresso: Date
  ) {
    this.id = id;
    this.nome = nome;
    this.gentilico = gentilico;
    this.extensaoTerritorial = extensaoTerritorial;
    this.capital = capital;
    this.continente = continente;
    this.governo = governo;
    this.idioma = idioma;
    this.populacao = populacao;
    this.moeda = moeda;
    this.emailDeContato = emailDeContato;
    this.emailDepartamento = emailDepartamento;
    this.status = status;
    this.dataIngresso = dataIngresso;
  }
}
export default PaisEntity;
