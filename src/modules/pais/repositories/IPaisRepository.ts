import ICreatePaisDTO from "../dtos/ICreatePais.dto";
import PaisEntity from "../entities/Pais.entity";

export default interface IPaisRepository {
  create(data: ICreatePaisDTO): Promise<PaisEntity>;
  delete(id: string): Promise<void>;
  findById(id: string): Promise<PaisEntity>;
  update(data: PaisEntity): Promise<PaisEntity>;
  listAll(): Promise<PaisEntity[]>;
}
