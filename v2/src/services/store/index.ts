/* eslint-disable @typescript-eslint/no-explicit-any */
import { createStore, Store } from 'vuex';
import { user } from './user';
// import { socket } from '../sockets';
// import createSocketStore from '../../plugins/createSocketStore';

// const socketPlugin = createSocketStore(socket);

export const store: Store<any> = createStore({
  state: {
    welcome: true,
    pubkey: '',
    username: false,
    singup: false,
    dark: true,
    sound: true,
    private: true,
  },
  actions: {
    dispatchPubkey (store, pubkey: string) {
      this.state.pubkey = pubkey;
    },
    dispatchUsername (store, available: boolean) {
      this.state.username = available;
    },
    switchWelcome (store, to: boolean) {
      this.state.welcome = to;
    },
    switchSignup (store, to: boolean) {
      this.state.singup = to;
      console.log('singup',this.state.singup)
    },
    switchSingup () {
      this.state.singup = !this.state.singup;
    },
    switchDark () {
      this.state.dark = !this.state.dark;
    },
    switchSound () {
      this.state.sound = !this.state.sound;
    },
  },
  modules: {
    user
  },
  plugins: [
    // socketPlugin
  ],
})

export function useStore() {
  return store as Store<any>;
}
