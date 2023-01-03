import { io } from "socket.io-client";
import { useStore } from '../../store'
const $store = useStore();

export const SOCKET = io(process.env.VUE_APP_SOCKET_ENDPOINT as string, { transports: ["websocket"] });

export const newConnection = (pubkey: string) => {
  SOCKET.emit('newConnection', pubkey);
  SOCKET.on('serverConnection', (message: string) => { console.log(message) });
};

export const isNewUser = () => {
  SOCKET.on('isNewUser', (isNew: boolean) => {
    if ( isNew ) {
      $store.dispatch('newUser');
    }
  });
};





