import paisRoutes from "@modules/pais/infra/http/routes/Pais.routes";
import { Router } from "express";
const routes = Router();

routes.use("/pais", paisRoutes);

export default routes;
