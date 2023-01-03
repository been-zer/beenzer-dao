import { createStore, createLogger } from 'vuex';
import { wallet } from './wallet';
import { user } from './user';
  
export const store = createStore({
  state: {
    welcome: true,
    singup: false,      
    dark: true,
    sound: true,
    private: true,
  },
  modules: {
    wallet,
    user
  },
  plugins: [createLogger()]
})

export function useStore() {
  return store;
}

