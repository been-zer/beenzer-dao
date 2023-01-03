import { io, Socket } from "socket.io-client";

// please note that the types are reversed
const SOCKET: Socket = io(process.env.VUE_APP_SOCKET_ENDPOINT as string, { transports: ["websocket"] });

SOCKET.on('serverConnection', (message: string) => { 
  console.log(message) 
});
// export const SOCKET = io(process.env.VUE_APP_SOCKET_ENDPOINT as string, {transport: socket};

SOCKET.on('isNewUser', (isNew: boolean) => {
  console.log(isNew);
  if ( isNew ) {
    console.log('NEW USER!');
  }
});

export const newConnection = (pubkey: string) => {
  SOCKET.emit('newConnection', pubkey);
};

export default SOCKET;
