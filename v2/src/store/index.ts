import { createStore } from 'vuex';

export default createStore({
  state: {
    wallet: '',
    user: '',
    flag: '🏴‍☠️',
    currency: 'SOL',
    dark: true,
    sound: true,
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    setWallet (pubkey) {
      console.log('setWallet', pubkey);
      this.state.wallet = String(pubkey);
    },
    setUser (user) {
      this.state.user = String(user);
    },
    setFlag (flag) {
      this.state.flag = String(flag);
    },
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
  }
})
