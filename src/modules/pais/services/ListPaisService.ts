import { injectable, inject } from "tsyringe";
import IPaisRepository from "../repositories/IPaisRepository";

@injectable()
class ListPaisService {
  constructor(
    @inject("PaisRepository")
    private paisRepository: IPaisRepository
  ) {}

  public async execute() {
    return await this.paisRepository.listAll();
  }
}

export default ListPaisService;
