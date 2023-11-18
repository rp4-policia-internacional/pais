import { Server, Socket } from 'socket.io';
import NotificationSubject from '../../../modules/notificacao/NotificationSubject';

const notificationSubject = new NotificationSubject();

export default function socketServer(): void {
  const io: Server = require('socket.io')();

  io.on('connection', (socket: Socket) => {
    console.log('Um país se conectou');

    socket.on('disconnect', () => {
      console.log('Um país se desconectou');
    });

    socket.on('criminalCaptured', (message: string) => {
      console.log('Criminoso capturado: ' + message);
      notificationSubject.notify('Criminoso capturado: ' + message);
    });
  });

  const portaSocket: number | string = process.env.PORT_SOCKET || 4000;
  io.listen(Number(portaSocket));
  console.log(`Servidor Socket.IO está ouvindo na porta ${portaSocket}`);
}
