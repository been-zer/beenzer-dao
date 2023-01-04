import { io, Socket } from 'socket.io-client';
import { useStore } from '../store';
import { ref } from 'vue';

export const isNewUser = ref(true);


export default function socketConnection() {
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
    isNewUser.value = isNew;
    store.dispatch('isNewUser', isNew)
    if ( isNew ) {
      console.log('NEW USER!');
    }
  });

  socket.on('newUserCreated', (created: boolean) => {
    console.log('created:', created);
    store.dispatch('isNewUser', created);
    
  });

  socket.on('userInfo', (userInfo: any) => {
    console.log(userInfo);
    store.dispatch('userInfo', userInfo)
  });

  return socket;
}


