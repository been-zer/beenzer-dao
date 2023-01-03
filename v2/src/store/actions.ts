import { State } from './state';
import { ActionTree } from 'vuex';
import { newConnection } from '../services/sockets';

const actions: ActionTree<State, State> = {
    connectWallet ({state}, pubkey: string) {
        if ( pubkey ) {
          state.wallet = pubkey;
          state.welcome = false;
        }
        if ( state.wallet ) {
          newConnection(state.wallet);
        }
      },
      disconnectWallet () {
        this.state.wallet = '';
        this.state.welcome = true;
      },
      newUser () {
        this.state.singup = true;
      },
      signUp ({state}, username) {
        state.user = username;
        state.singup = false;
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

export default actions;