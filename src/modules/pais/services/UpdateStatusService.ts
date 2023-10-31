import { inject, injectable } from "tsyringe";
import AppError from "@shared/Errors/AppError";
import IPaisRepository from "../repositories/IPaisRepository";
import { Pais } from "@prisma/client";
import PaisEntity from "../entities/Pais.entity";


interface UpdateStatusDTO {
    id: string;
    status: string;
  }
  
 
  @injectable()
  class UpdatePaisService {
    constructor(
      @inject("PaisRepository")
      private paisRepository: IPaisRepository
    ) {}
  
    public async execute({ id, status }: UpdateStatusDTO): Promise<PaisEntity> {
      const pais = await this.paisRepository.findById(id);
  
      if (!pais) {
        throw new AppError("País não encontrado!!", 404);
      }
  
      pais.status = status;
  
      const updatedPais = await this.paisRepository.update(pais);
      return updatedPais;
    }
  }
  
  export default UpdatePaisService;