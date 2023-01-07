/* eslint-disable @typescript-eslint/no-explicit-any */
import { createStore, Store } from 'vuex';
import { user } from './user';
// import { socket } from '../sockets';
// import createSocketStore from '../../plugins/createSocketStore';

// const socketPlugin = createSocketStore(socket);

export const store: Store<any> = createStore({
  state: {
    users: 0,
    welcome: true,
    pubkey: '',
    username: '',
    ip: '',
    flag: '',
    country: '',
    city: '',
    newuser: true,
    singup: false,
    usernameAv: false,
    dark: true,
    sound: true,
    private: false,
    holders: []
  },
  actions: {
    nUsers (store, users: number) {
      this.state.users = users;
    },
    dispatchPubkey (store, pubkey: string) {
      this.state.pubkey = pubkey;
    },
    dispatchUsername (store, username: string) {
      this.state.username = username;
    },
    setIp (store, ip: string) {
      this.state.ip = ip;
    },
    setFlag (store, flag: string) {
      this.state.flag = flag;
    },
    setCountry (store, country: string) {
      this.state.country = country;
    },
    setCity (store, city: string) {
      this.state.city = city;
    },
    switchWelcome (store, to: boolean) {
      this.state.welcome = to;
    },
    switchUsernameAv (store, to: boolean) {
      this.state.usernameAv = to;
    },
    switchSignup (store, to: boolean) {
      this.state.singup = to;
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
    switchPrivate () {
      this.state.private = !this.state.private;
    },
    setTokenHolders (store, holders: any) {
      this.state.holders = holders;
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

