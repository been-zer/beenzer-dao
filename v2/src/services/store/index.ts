/* eslint-disable @typescript-eslint/no-explicit-any */
import { createStore, Store } from 'vuex';
import { user } from './user';

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

