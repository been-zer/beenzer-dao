// import { State } from './state';
// import state from './state';
// import { InjectionKey } from 'vue'
// import { createStore, useStore as baseUseStore, Store } from 'vuex'


// export const key: InjectionKey<Store<State>> = Symbol()

// export const store = createStore<State>({
//   state: state()
// })

// createStore<Dispatch>({})

// // define your own `useStore` composition function
// export function useStore () {
//   return baseUseStore(key)
// }

// import { createStore } from 'vuex';

// import state, { State } from './state';
// import actions from './actions';
// import { Module } from 'vuex';

// const modules: Module<State, State> = {
//   namespace: true,
//   state,
//   actions
// }

// export default modules;


// export default createStore<State>({
//   modules: {
//     state,
//     actions
//   }
// })

// import Vue from 'vue';
// import Vuex, { StoreOptions } from 'vuex';
// import { RootState } from './root';


// Vue.use(Vuex);

// const storeStuct: StoreOptions<RootState> = {
  
  // };
  
  // export default new Vuex.Store<RootState>(store);

import { createStore, createLogger } from 'vuex';
import { wallet } from './wallet';
import { user } from './user';
  
export const store = createStore({
  state: {
    welcome: false,
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

