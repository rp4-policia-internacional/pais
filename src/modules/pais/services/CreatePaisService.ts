
import { inject, injectable } from "tsyringe";
import IPaisRepository from "../repositories/IPaisRepository";
import ICreatePaisDTO from "../dtos/ICreatePais.dto";
import PaisEntity from "../entities/Pais.entity";


@injectable()
class CreatePaisService{

    constructor(
        @inject('PaisRepository')
        private paisRepository: IPaisRepository
    ){}
        public async execute(data: ICreatePaisDTO): Promise<PaisEntity>{
            const pais = await this.paisRepository.create(data);
            return pais;
        }
}
export default CreatePaisService;