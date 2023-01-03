import { MutationTree } from 'vuex';
import { UserState, User } from './types';

export const mutations: MutationTree<UserState> = {
    profileLoaded(state, payload: User) {
        state.error = false;
        state.user = payload;
    },
    profileError(state) {
        state.error = true;
        state.user = undefined;
    }
};