import { GetterTree } from 'vuex';
import { RootState, UserState } from '../../../types';

export const getters: GetterTree<UserState, RootState> = {
    fullName(state): string {
        const { user } = state;
        const pubkey = (user && user.__pubkey__) || '';
        const username = (user && user._username_) || '';
        return `${pubkey} ${username}`;
    }
};