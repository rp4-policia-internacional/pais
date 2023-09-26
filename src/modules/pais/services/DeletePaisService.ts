import { inject, injectable } from "tsyringe";
import IPaisRepository from "../repositories/IPaisRepository";
import AppError from "@shared/Errors/AppError";

@injectable()
class DeletePaisService {
  constructor(
    @inject("PaisRepository")
    private paisRepository: IPaisRepository
  ) {}
  public async execute(id: string): Promise<void> {
    const findPais = await this.paisRepository.findById(id);

    if (!findPais) {
      throw new AppError("País não encontrado!!", 404);
    }

    await this.paisRepository.delete(id);

    return;
  }
}

export default DeletePaisService;
