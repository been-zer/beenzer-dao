import { ActionTree } from 'vuex';
import axios from 'axios';
import { UserState, User } from './types';
import { RootState } from '../types';

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