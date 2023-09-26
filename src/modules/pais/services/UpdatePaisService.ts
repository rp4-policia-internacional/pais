import { inject, injectable } from "tsyringe";
import AppError from "@shared/Errors/AppError";
import PaisEntity from "../entities/Pais.entity";
import IPaisRepository from "../repositories/IPaisRepository";

@injectable()
class UpdatePaisService {
  constructor(
    @inject("PaisRepository")
    private paisRepository: IPaisRepository
  ) {}

  public async execute(data: PaisEntity): Promise<PaisEntity> {
    const findPais = await this.paisRepository.findById(data.id);

    if (!findPais) {
      throw new AppError("País não encontrado!!", 404);
    }

    const updatePais = await this.paisRepository.update(data);
    return updatePais;
  }
}

export default UpdatePaisService;
