import "reflect-metadata";
import cors from "cors";
import http from 'http';
import { Server } from "socket.io";
import "express-async-errors";
import express, { Request, Response, NextFunction } from "express";
import "dotenv/config";
import routes from "./routes";
import AppError from "@shared/Errors/AppError";
import NotificationSubject from '../../../modules/notificacao/infra/http/controllers/NotificationSubject';
import Observer from '../../../modules/notificacao/infra/http/interfaces/Observer';

import "@shared/container";
import "@shared/infra/prisma";


import swaggerUI from 'swagger-ui-express';
import swaggerDocument from '@shared/infra/http/routes/swagger.json'

const app = express();
const serverHttp = http.createServer(app);
const io = new Server(serverHttp);


app.use(cors());
app.use(express.json());

app.use("/api", routes);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
  }

  console.log(err);
  res.status(500).json({
    status: "error",
    message: "internal server error",
  });
});

const notificationSubject = new NotificationSubject();

class NotificationObserver implements Observer {
  public update(message: string): void {
    console.log('Nova notificação recebida: ' + message);
    // Emitir a notificação para os clientes conectados
    io.emit('notification', message);
  }
}

const notificationObserver = new NotificationObserver();
notificationSubject.addObserver(notificationObserver);



export { serverHttp, io };
