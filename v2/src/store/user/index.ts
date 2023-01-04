import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { UserState } from './types';
import { RootState } from '../root';

export const state: UserState = {
    user: undefined,
    error: false
};

const namespaced = true;

export const user: Module<any, any> = {// <UserState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
};