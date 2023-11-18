import "reflect-metadata";
import cors from "cors";
import http from 'http';
import "express-async-errors";
import express, { Request, Response, NextFunction } from "express";
import "dotenv/config";
import routes from "./routes";
import AppError from "@shared/Errors/AppError";
import NotificationSubject from '../../../modules/notificacao/NotificationSubject';
import Observer from '../../../modules/notificacao/interfaces/Observer';

import "@shared/container";
import "@shared/infra/prisma";


import swaggerUI from 'swagger-ui-express';
import swaggerDocument from '@shared/infra/http/routes/swagger.json'
import socketServer from "./socketServer";

const notificationSubject = new NotificationSubject();

class NotificationObserver implements Observer {
  public update(message: string): void {
    console.log('Nova notificação recebida: ' + message);
   
  }
}

const notificationObserver = new NotificationObserver();
notificationSubject.addObserver(notificationObserver);

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());

app.use("/api", routes);

socketServer();

app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
  }

  console.log(err);

  return res.status(500).json({
    status: "error",
    message: "internal server error",
  });
});


//swagger
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

const porta: number | string = process.env.PORT || 3333;
server.listen(Number(porta), () => console.log(`Servidor HTTP está ouvindo na porta ${porta}`));
