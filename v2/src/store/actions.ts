import { ActionTree } from 'vuex';
import { MainState, RootState } from './root';
import { Socket } from 'socket.io-client';
import {
  emitNewConnection,
} from '../services/sockets/user.socket';

export const actions: ActionTree<MainState, RootState> = {
  socketNewConnection (state, pubkey: string) {
    const socket = state.rootState.socket
    emitNewConnection(socket, pubkey);
  }
};
