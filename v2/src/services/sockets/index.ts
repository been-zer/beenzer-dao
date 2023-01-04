import { io, Socket } from 'socket.io-client';

export const socket: Socket = io(process.env.VUE_APP_SOCKET_ENDPOINT as string, {
  transports: ["websocket"],
  autoConnect: true,
});

socket.on('serverConnection', (message: string) => { 
  console.log(message) 
});

socket.on('isNewUser', (isNew: boolean) => {
  console.log(isNew);
  if ( isNew ) {
    console.log('NEW USER!');
  }
});

