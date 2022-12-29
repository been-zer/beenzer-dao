import Vuex from 'vuex';

export default new Vuex.Store({
  state: {
    dark: true,
    sound: true,
    flag: location.flag
  },
  getters: {

  },
  mutations: {
  },
  actions: {
    lightButton () {
      this.state.dark = !this.state.dark;
    },
    soundButton () {
      this.state.sound = !this.state.sound;
    },
    async setFlag (flag) {
      console.log('eeeeeoooo', flag)
      this.state.flag = flag;
    }
  }
})