import { ActionTree } from 'vuex';
import { SocketState } from './types';
import { RootState } from '../root';
import {
  emitNewConnection,
} from '../../services/sockets/user.socket';

export const actions: ActionTree<SocketState, RootState> = {
  socketNewConnection (state, pubkey: string) {
    const socket = state.rootState.socket
    emitNewConnection(socket, pubkey);
  }
};
