import { socket } from './';
import { useStore } from '../store';

const store = useStore();

export const getTokenHoldersSocket = (): void => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  socket.on('getTokenHoldersRes', (holders: Array<any>) => {
    store.dispatch('setTokenHolders', holders);
    console.log('holders:', holders);
  });
  socket.emit('getTokenHolders');
};