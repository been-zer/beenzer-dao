import { createStore } from 'vuex';

export default createStore({
  state: {
    currency: 'SOL',
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    setCurrency () {
      if ( this.state.currency === 'SOL') {
        console.log('switch currency to USD');
        this.state.currency = 'USD';
      } else if ( this.state.currency === 'USD' ) {
        console.log('switch currency to SOL');
        this.state.currency = 'SOL';
      }
    }
  },
  modules: {
  }
})
