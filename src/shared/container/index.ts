import IPaisRepository from "@modules/pais/repositories/IPaisRepository";
import { container } from "tsyringe";
import PaisRepository from "@modules/pais/infra/prisma/repositories/PaisRepository";

container.registerSingleton<IPaisRepository>("PaisRepository", PaisRepository);
