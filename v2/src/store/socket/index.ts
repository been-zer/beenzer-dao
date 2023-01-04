import { Module } from 'vuex';
import { actions } from './actions';
import { RootState } from '../root';
import { SocketState } from './types';

export const state: SocketState = {
  socket: undefined,
  error: false
};

const namespaced = true;

export const socket: Module<any, any> = {// <SocketState, RootState> = {
    namespaced,
    state,
    actions,
};