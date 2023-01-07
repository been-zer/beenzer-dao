import { io, Socket } from 'socket.io-client';
import { User } from '../../types';
import { useStore } from '../store';

export function socketConnection(): Socket {

  const store = useStore();

  const socket: Socket = io(process.env.VUE_APP_SOCKET_ENDPOINT as string, {
    transports: ["websocket"],
    autoConnect: true,
  });

  socket.on('serverConnection', (message: string) => { 
    console.log(message) 
  });

  socket.on('isNewUser', (isNew: boolean) => {
    store.dispatch('switchSignup', isNew);
  });
  
  socket.on('userInfo', (userInfo: Array<User>) => {
    store.dispatch('dispatchUsername', userInfo[0]._username_);
  });
  
  return socket;
}

export const socket: Socket = socketConnection();

