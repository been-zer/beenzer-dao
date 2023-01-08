import { socket } from './';
import { useStore } from '../store';

const store = useStore();

export const getTokenHoldersSocket = (): void => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // socket.on('getTokenHoldersRes', (holders: any) => {
  //   console.log('holders:', holders);
  //   store.dispatch('setTokenHolders', holders);
  // });
  socket.emit('getTokenHolders');
};