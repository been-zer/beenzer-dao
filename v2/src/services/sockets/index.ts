import { io } from "socket.io-client";

export const SOCKET = io('https://b6b2-212-31-49-235.eu.ngrok.io', { transports: ["websocket"] });

export const socketConnection = (pubkey: string) => {
  console.log('new connection', pubkey);
  SOCKET.emit('newConnection', pubkey);
  SOCKET.on('serverConnection', (message) => { console.log(message) });
}