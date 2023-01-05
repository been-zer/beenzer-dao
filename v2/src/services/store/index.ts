/* eslint-disable @typescript-eslint/no-explicit-any */
import { createStore, Store } from 'vuex';
import { user } from './user';
import { socket } from '../sockets';
import createSocketStore from '../../plugins/createSocketStore';

const socketPlugin = createSocketStore(socket);

export const store: Store<any> = createStore({
  state: {
    welcome: true,
    singup: false,
    dark: true,
    sound: true,
    private: true,
  },
  actions: {
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
  plugins: [
    socketPlugin
  ],
})

export function useStore() {
  return store as Store<any>;
}

