import "reflect-metadata";
import "express-async-errors";
import "dotenv/config";

import "@shared/container";
import "@shared/infra/prisma";

import "@modules/notificacao/infra/http/websocket";
import { serverHttp } from "./http";

const porta: number | string = process.env.PORT || 3333;
serverHttp.listen(Number(porta), () => console.log(`Server is running on ${porta}`));
