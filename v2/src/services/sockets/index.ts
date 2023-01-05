import { io, Socket } from 'socket.io-client';
import { store, useStore } from '../store';
import { emitNewConnection } from './user.socket';
import { User } from '../../types';

export function socketConnection() {
  const store = useStore();
  const socket: Socket = io(process.env.VUE_APP_SOCKET_ENDPOINT as string, {
    transports: ["websocket"],
    autoConnect: true,
  });
  socket.on('serverConnection', (message: string) => { 
    console.log(message) 
  });
  socket.on('isNewUser', (isNew: boolean) => {
    console.log(isNew);
    store.dispatch('')
    store.dispatch('isNewUser', isNew)
    if ( isNew ) {
      console.log('NEW USER!');
    }
  });
  socket.on('newUserCreated', (created: boolean) => {
    console.log('created:', created);
    store.dispatch('isNewUser', created);
    
  });
  socket.on('userInfo', (userInfo: Array<User>) => {
    console.log(userInfo);
    store.dispatch('userInfo', userInfo)
  });
  
  return socket;
}
