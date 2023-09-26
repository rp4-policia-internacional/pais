import CreatePaisService from "@modules/pais/services/CreatePaisService";
import { container } from "tsyringe";
import { Request, Response } from "express";
import DeletePaisService from "@modules/pais/services/DeletePaisService";
import FindOnePaisService from "@modules/pais/services/FindOnePaisService";
import ListPaisService from "@modules/pais/services/ListPaisService";
import UpdatePaisService from "@modules/pais/services/UpdatePaisService";

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
}
