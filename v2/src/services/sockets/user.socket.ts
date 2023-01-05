/* eslint-disable @typescript-eslint/no-explicit-any */
import { socket } from './';
import { useStore } from '../store';

const store = useStore();

export const onServerConnection = () => {
  socket.on('serverConnection', (message: string) => { 
    console.log(message) 
  });
};

export const onIsNewUser = () => {
  socket.on('isNewUser', (isNew: boolean) => {
    store.dispatch('switchSignup', isNew);
    socket.off('isNewUser');
  });
};

export const emitConnection = (pubkey: string) => {
  socket.emit('newConnection', pubkey);
  socket.off('newConnection');
};

export const emitDisconnection = (pubkey: string) => {
  socket.emit('newDisconnection', pubkey);
  socket.off('newDisonnection');
};

export const searchUsersSocket = (username: string) => {
  socket.emit('searchUsers', username);
  socket.on('searchUsersRes', (res: any) => {
    try {
      if (res.length === 0) {
        store.dispatch('dispatchUsername', true);
      } else {
        store.dispatch('dispatchUsername', false);
      }
    } catch (e) {
      store.dispatch('dispatchUsername', false);
      console.log(e);
    }
  })
};