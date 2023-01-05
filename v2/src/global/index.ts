import { defineStore } from 'pinia';
import { socket } from '../services/sockets';

export const useGlobal = defineStore('global', {
  state: () => ({
    socket,
  }),
  actions: {
    emitConnection: (pubkey: string) => {
      socket.emit('newConnection', pubkey);
    }
  }
});