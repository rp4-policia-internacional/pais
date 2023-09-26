import { injectable, inject } from "tsyringe";
import IPaisRepository from "../repositories/IPaisRepository";

@injectable()
class FindOnePaisService {
  constructor(
    @inject("PaisRepository")
    private paisRepository: IPaisRepository
  ) {}

  public async execute(id: string) {
    const findPais = await this.paisRepository.findById(id);
    return findPais;
  }
}

export default FindOnePaisService;
