import { createStore } from 'vuex';

export default createStore({
  state: {
    welcome: true,
    singup: true,
    wallet: '',
    user: '',
    flag: '🏴‍☠️',
    currency: 'SOL',
    SOL: 0,
    USD: 0,
    BEEN: 0,
    dark: true,
    sound: true,
  },
  actions: {
    connectWallet ({state}, pubkey: string) {
      if ( pubkey ) {
        state.wallet = pubkey;
        state.welcome = false;
      }
    },
    disconnectWallet () {
      this.state.wallet = '';
      this.state.welcome = true;
    },
    setUser ({state}, user: string) {
      state.user = String(user);
    },
    setFlag ({state}, flag: string) {
      state.flag = String(flag);
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
