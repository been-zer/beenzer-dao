import { io, Socket } from 'socket.io-client';
import { User } from '../../types';
import { onIsNewUser } from './user.socket';

export function socketConnection(): Socket {
  const socket: Socket = io(process.env.VUE_APP_SOCKET_ENDPOINT as string, {
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
  socket.on('newUserCreated', (created: boolean) => {
    console.log('created:', created);
    
  });
  socket.on('userInfo', (userInfo: Array<User>) => {
    console.log(userInfo);
  });
  
  return socket;
}

export const socket: Socket = socketConnection();
