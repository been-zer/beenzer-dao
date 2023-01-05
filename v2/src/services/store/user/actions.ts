import { ActionTree } from 'vuex';
import { UserState, User } from '../../../types';
import { RootState } from '../../../types';
import { Socket } from 'socket.io-client';
import {
  emitNewConnection,
} from '../../sockets/user.socket';

export const actions: ActionTree<UserState, RootState> = {
  socketTestConnection (state, socket: Socket) {
    state.dispatch('addSocket', socket);
    // emitNewConnection(state., pubkey);
    socket.emit('hello', 'hello')
  }
};
