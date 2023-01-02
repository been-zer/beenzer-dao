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
  actions: {
    setWallet ({state}, pubkey: string) {
      state.wallet = pubkey;
    },
    setUser ({state},user) {
      this.state.user = String(user);
    },
    setFlag (flag) {
      this.state.flag = String(flag);
    },
    setCurrency () {
      if ( this.state.currency === 'SOL') {
        this.state.currency = 'USD';
      } else if ( this.state.currency === 'USD' ) {
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
