import CreatePaisService from "@modules/pais/services/CreatePaisService";
import { container } from "tsyringe";
import { Request, Response } from "express";
import DeletePaisService from "@modules/pais/services/DeletePaisService";
import FindOnePaisService from "@modules/pais/services/FindOnePaisService";
import ListPaisService from "@modules/pais/services/ListPaisService";
import UpdatePaisService from "@modules/pais/services/UpdatePaisService";
import SolicitacaoContext from "@modules/SolicitacaoParticipacao/SolicitacaoContext";
import PaisEntity from "@modules/pais/entities/Pais.entity";
import { Decimal } from "@prisma/client/runtime/library";
import PaisRepository from "../../prisma/repositories/PaisRepository";


export default class PaisController {
  public async create(req: Request, res: Response): Promise<Response> {
    const createPais = container.resolve(CreatePaisService);

    const {
      id,
      nome,
      gentilico,
      extensaoTerritorial,
      capital,
      continente,
      governo,
      idioma,
      populacao,
      moeda,
      emailDeContato,
      emailDepartamento,
      status,
      dataIngresso,
    } = req.body;

    const formmatedDate = new Date(dataIngresso).toISOString();

    const createdPais = await createPais.execute({
      id,
      nome,
      gentilico,
      extensaoTerritorial,
      capital,
      continente,
      governo,
      idioma,
      populacao,
      moeda,
      emailDeContato,
      emailDepartamento,
      status,
      dataIngresso: new Date(dataIngresso),
    });

    return res.json(createdPais).status(201).send();
  }
  //delete pelo id
  public async delete(req: Request, res: Response): Promise<Response> {
    const deletePais = container.resolve(DeletePaisService);

    const { id } = req.params;

    const deletedPais = await deletePais.execute(id);

    return res.json(deletedPais).status(202).send();
  }

  public async getOne(req: Request, res: Response): Promise<Response> {
    const getOnePais = container.resolve(FindOnePaisService);

    const { id } = req.params;

    const gotOnePais = await getOnePais.execute(id);
    return res.json(gotOnePais).status(200).send();
  }

  public async getAll(req: Request, res: Response): Promise<Response> {
    const getAllPais = container.resolve(ListPaisService);

    const gotAllPais = await getAllPais.execute();

    return res.json(gotAllPais).status(200).send();
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const updatePais = container.resolve(UpdatePaisService);

    const {
      id,
      nome,
      gentilico,
      extensaoTerritorial,
      capital,
      continente,
      governo,
      idioma,
      populacao,
      moeda,
      emailDeContato,
      emailDepartamento,
      status,
      dataIngresso,
    } = req.body;

    const formmatedDate = new Date(dataIngresso).toISOString();

    const createdPais = await updatePais.execute({
      id,
      nome,
      gentilico,
      extensaoTerritorial,
      capital,
      continente,
      governo,
      idioma,
      populacao,
      moeda,
      emailDeContato,
      emailDepartamento,
      status,
      dataIngresso: new Date(dataIngresso),
    });

    return res.json(createdPais).status(201).send();
  }


 public async updateStatus(req: Request, res: Response): Promise<Response> {
    const updateStatusPais = container.resolve(UpdatePaisService);
  
    const { id } = req.params;
    const { status } = req.body; // Supondo que você está enviando o novo status no corpo da requisição
  
    try {
      const updatedPais = await updateStatusPais.execute({ id, status, ...req.body });
  
      return res.status(200).json(updatedPais);
    } catch (error) {
      console.error("Erro ao atualizar o status do país:", error);
      return res.status(500).json({ message: "Erro interno do servidor." });
    }
  }


  //----------------------------------------------------------------
  public async updatedStatus(req: Request, res: Response): Promise<Response> {
    const { id, acao } = req.body; // Supondo que o frontend envie o ID e a ação
  
    const solicitacaoContext = new SolicitacaoContext();
  
    try {
      // Chame a estratégia para processar a ação
      const resultadoAcao = solicitacaoContext.executar({ id, status: acao });
  
      if (resultadoAcao === "Ação processada com sucesso.") {
        // Se a ação foi processada com sucesso pela estratégia,
        // faça uma busca no banco de dados para obter os valores completos
        const paisRepository = container.resolve(PaisRepository);
        const pais = await paisRepository.findById(id);
  
        if (!pais) {
          return res.status(404).json({ message: "País não encontrado." });
        }
  
        // Atualize apenas o status
        pais.status = acao;
  
        // Atualize a entidade no banco de dados
        await paisRepository.update(pais);
  
        return res.status(200).json({ message: "Ação processada com sucesso e status atualizado no banco." });
      } else {
        // Caso a estratégia retorne algo diferente de "Ação processada com sucesso."
        // Você pode manipular esse caso de acordo com sua lógica de negócios
        return res.status(200).json({ message: resultadoAcao });
      }
    } catch (error) {
      console.error("Erro ao processar a ação:", error);
      return res.status(500).json({ message: "Erro interno do servidor." });
    }
  }
  
}





