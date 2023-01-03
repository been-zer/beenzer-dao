import { Module } from 'vuex';
// import { getters } from './getters';
// import { actions } from './actions';
// import { mutations } from './mutations';
import { SettingsState } from './types';
import { RootState } from '../root';

export const state: SettingsState = {
    settings: undefined,
    error: false
};

const namespaced = true;

export const settings: Module<SettingsState, RootState> = {
    namespaced,
    state,
    // getters,
    // actions,
    // mutations
};