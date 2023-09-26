import { Router } from "express";
import PaisController from "../controllers/PaisController";
//conjunto de rotas relacionada as operações da vitima



const paisRoutes = Router();

const controller = new PaisController();
 paisRoutes.post("/", controller.create);

 paisRoutes.delete("/:id", controller.delete);
 paisRoutes.get("/:id", controller.getOne);
 paisRoutes.get("/", controller.getAll);
 paisRoutes.put("/", controller.update);


 export default  paisRoutes;
