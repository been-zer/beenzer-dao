/* eslint-disable @typescript-eslint/no-explicit-any */
import { createStore, Store } from 'vuex';
import { user } from './user';
import { Socket } from 'socket.io-client';
import { socketConnection } from '../sockets';

export const store: Store<any> = createStore({
  state: {
    socket: Socket<DefaultEventsMap, DefaultEventsMap>,
    welcome: true,
    singup: false,      
    dark: true,
    sound: true,
    private: true,
  },
  actions: {
    socketConnect (store) {
      this.state.socket = socketConnection();
    },
    switchWelcome (store, to: boolean) {
      this.state.welcome = to;
    },
    switchSingup () {
      this.state.singup = !this.state.singup;
    },
    switchDark () {
      console.log('hello');
      this.state.dark = !this.state.dark;
    },
    switchSound () {
      console.log('hello');
      this.state.sound = !this.state.sound;
    },
  },
  modules: {
    user
  },
})

export function useStore() {
  return store as Store<any>;
}

