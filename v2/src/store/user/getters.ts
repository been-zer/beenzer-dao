import { GetterTree } from 'vuex';
import { UserState } from './types';
import { RootState } from '../types';

export const getters: GetterTree<UserState, RootState> = {
    fullName(state): string {
        const { user } = state;
        const pubkey = (user && user.pubkey) || '';
        const username = (user && user.username) || '';
        return `${pubkey} ${username}`;
    }
};