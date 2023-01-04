/* eslint-disable @typescript-eslint/no-explicit-any */
import { createStore, createLogger, Store } from 'vuex';
import createWebSocketPlugin from '../plugins/createWebSocket';
import { SocketState } from './socket/types';
import { socket } from './socket';
import { user } from './user';
import { actions } from './actions';
import { RootState } from './root';
import { io, Socket } from "socket.io-client";

export const store: Store<any> = createStore({
  state: {
    socket: Socket,
    welcome: true,
    singup: false,      
    dark: true,
    sound: true,
    private: true,
  },
  mutations: {

  },
  plugins: [
   
    // createLogger()
  ],
  modules: {
    // socket,
    user
  },
})

export function useStore() {
  return store as Store<any>;
}

