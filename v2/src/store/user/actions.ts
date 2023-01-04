import { ActionTree } from 'vuex';
import { UserState, User } from './types';
import { RootState } from '../root';
import {
  emitNewConnection,
} from '../../services/sockets/user.socket';
import { Socket } from 'socket.io-client';

export const actions: ActionTree<UserState, RootState> = {
  socketConnection (state, socket: Socket) {
    state.dispatch('addSocket', socket);
    // emitNewConnection(state., pubkey);
    socket.emit('hello', 'hello')
  },
  socketNewConnection (state, pubkey: string) {
    const socket = state.rootState.socket
    emitNewConnection(socket, pubkey);
  }
};
