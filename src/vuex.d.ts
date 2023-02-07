import { Store } from 'vuex';

declare module '@vue/runtime-core' {
  // declare your own store states
  interface State {
    welcome: boolean,
    singup: boolean,
    wallet: string,
    user: string
    flag: string,
    currency: string,
    SOL: number,
    USD: number,
    BEEN: number,
    dark: boolean,
    sound: boolean,
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}