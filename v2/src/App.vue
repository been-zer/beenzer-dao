<script lang="ts">
import store from './store';
import NavbarWallet from './components/NavbarWallet.vue';
import FooterBar from './components/FooterBar.vue';

export default {
  data() {
    return {
      store,
    }
  },
  components: {
    NavbarWallet,
    FooterBar
  },
}
</script>

<template>
<div :class="store.state.dark ? 
  'bg-gray-900 shadow-gray-700 border-gray-200 text-gray-200' : 
  'bg-gray-100 shadow-gray-300 border-gray-900 text-gray-800'">
  <navbar-wallet/>
  <router-view/>
  <footer-bar/>
</div>
</template>

<style lang="scss">
#app {
  text-align: center;
}

html {
  overflow-x: hidden;
}

::-webkit-scrollbar {
  width: 5px;
  height: 5px;
  background-color: rgba(34, 34, 34, 0.692);
}

::-webkit-scrollbar-track {
  background-color: rgba(179, 179, 179, 0.692);
  border-radius: 0.75rem;
  margin: 0.4rem;
  border-left: 1px solid rgba(211, 211, 211, 0);
}

::-webkit-scrollbar-thumb {
  border-radius: 20px;
  background:  linear-gradient(30deg, #1bd3247c, #21b913be);
  box-shadow: inset 0 0 6px #30d31b,
}
</style>


