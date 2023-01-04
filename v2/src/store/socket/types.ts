import { Socket } from 'socket.io-client';

export interface SocketInterface {
  socket: Socket;
}

export interface SocketState {
  socket?: SocketInterface;
  error: boolean;
}