import { Module } from 'vuex';
// import { getters } from './getters';
// import { actions } from './actions';
// import { mutations } from './mutations';
import { WalletState } from './types';
import { RootState } from '../root';

export const state: WalletState = {
    wallet: undefined,
    error: false
};

const namespaced = true;

export const wallet: Module<WalletState, RootState> = {
    namespaced,
    state,
    // getters,
    // actions,
    // mutations
};