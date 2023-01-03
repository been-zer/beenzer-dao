import { ActionTree } from 'vuex';
import { UserState, User } from './types';
import { RootState } from '../root';
import {
  newConnection,
} from '../../services/sockets';

export const actions: ActionTree<UserState, RootState> = {
  connectWallet (state, pubkey: string) {
    console.log(pubkey)
    newConnection(pubkey)
  }
};
