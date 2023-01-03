import { ActionTree } from 'vuex';
import { UserState, User } from './types';
import { RootState } from '../root';
import axios from 'axios';

export const actions: ActionTree<UserState, RootState> = {
    fetchData({ commit }): void {
        axios({
            url: 'https://....'
        }).then((response) => {
            const payload: User = response && response.data;
            commit('profileLoaded', payload);
        }, (error) => {
            console.log(error);
            commit('profileError');
        });
    }
};