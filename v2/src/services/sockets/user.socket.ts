import { Socket } from 'socket.io-client';

export const onServerConnection = (socket: Socket) => {
  socket.on('serverConnection', (message: string) => { 
    console.log(message) 
  });
};

export const onIsNewUser = (socket: Socket) => {
  socket.on('isNewUser', (isNew: boolean) => {
    console.log(isNew);
    if ( isNew ) {
      console.log('NEW USER!');
    }
  });
};

export const emitNewConnection = (socket: Socket, pubkey: string) => {
  console.log(socket)
  console.log(pubkey);
  socket.emit('newConnection', pubkey);
};

