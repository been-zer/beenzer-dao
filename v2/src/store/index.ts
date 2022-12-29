import { createStore } from 'vuex';

export default createStore({
  state: {
    dark: true,
    sound: true,
    currency: 'SOL',
    flag: '🏴‍☠️',
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
    },
    lightButton () {
      this.state.dark = !this.state.dark;
    },
    soundButton () {
      this.state.sound = !this.state.sound;
    },
    setFlag (flag) {
      console.log('eeeeeoooo', flag)
      this.state.flag = String(flag);
    }
  },
  modules: {
  }
})
