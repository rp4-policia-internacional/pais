import ICreatePaisDTO from "@modules/pais/dtos/ICreatePais.dto";
import PaisEntity from "@modules/pais/entities/Pais.entity";
import IPaisRepository from "@modules/pais/repositories/IPaisRepository";
import { prisma } from "@shared/infra/prisma";

export default class PaisRepository implements IPaisRepository {
  public async create(data: ICreatePaisDTO): Promise<PaisEntity> {
    const pais = await prisma.pais.create({ data });

    return pais as unknown as PaisEntity;
  }

  public async delete(id: string): Promise<void> {
    await prisma.pais.delete({ where: { id } });
  }
  public async findById(id: string): Promise<PaisEntity> {
    const pais = await prisma.pais.findUnique({ where: { id } });

    return pais as unknown as PaisEntity;
  }
  public async update(data: PaisEntity): Promise<PaisEntity> {
    const pais = await prisma.pais.update({ where: { id: data.id }, data });

    return pais as unknown as PaisEntity;
  }
  public async listAll(): Promise<PaisEntity[]> {
    return await prisma.pais.findMany();
  }
}
