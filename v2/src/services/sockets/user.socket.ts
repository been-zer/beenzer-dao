import { Socket } from 'socket.io-client';
import { socket } from './';
import { useStore } from '../store';

const store = useStore();

export const onServerConnection = (socket: Socket) => {
  socket.on('serverConnection', (message: string) => { 
    console.log(message) 
  });
};

export const onIsNewUser = () => {
  socket.on('isNewUser', (isNew: boolean) => {
    console.log(isNew);
    if ( isNew ) {
      console.log('NEW USER!');
    }
    socket.off('isNewUser');
    store.dispatch('switchSignup', isNew);
  });
};

export const emitConnection = (pubkey: string) => {
  console.log(pubkey);
  socket.emit('newConnection', pubkey);
  socket.off('newConnection');
};

export const emitDisconnection = (pubkey: string) => {
  console.log(pubkey);
  socket.emit('newDisconnection', pubkey);
  socket.off('newDisonnection');
};

export const emitNewUser = (pubkey: string, username: string) => {


};