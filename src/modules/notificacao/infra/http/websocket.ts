import { io } from '@shared/infra/http/http';

    
io.on('connection', (socket) => {
  console.log(`Novo cliente conectado: ${socket.id}`);

  // Emitir uma mensagem para o cliente recém-conectado
  socket.emit('welcome', `Bem-vindokkkk, ${socket.id}!`);



  // Evento quando o cliente se desconectar
  socket.on('disconnect', () => {
    console.log(`Cliente desconectado: ${socket.id}`);
  });
});

