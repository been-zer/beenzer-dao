import { io, Socket } from "socket.io-client";
import { Store } from 'vuex';

export const socket: Socket = io(process.env.VUE_APP_SOCKET_ENDPOINT as string, { transports: ["websocket"] });

export default function createWebSocketPlugin() {
  return (store: Store<unknown>) => {
    socket.on('serverConnection', (message: string) => { 
      console.log(message);
      store.dispatch('socketConnection', socket);
    });
    socket.on('isNewUser', (isNew: boolean) => { 
      console.log(isNew);
      store.dispatch('socket/isNewUser', isNew);
    });
    socket.on('userInfo', (userInfo: Array<any>) => { 
      console.log(userInfo);
      store.dispatch('socket/userInfo', userInfo);
    });
  };
}