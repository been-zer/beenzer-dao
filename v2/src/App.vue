<script lang="ts">
import NavbarWallet from './components/navbar/NavbarWallet.vue';
import FooterBar from './components/footer/FooterBar.vue';
import { useStore } from './services/store'

export default {
  setup() {
    const store = useStore();

    return {
      store
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

<style >
#app {
  text-align: center;
}

html {
  overflow-x: hidden;
}

::-webkit-scrollbar {
  width: 3px;
  height: 3px;
  background-color: transparent !important;
}

::-webkit-scrollbar-track {
  background-color: rgba(179, 179, 179, 0.692);
  border-radius: 1rem;
  margin: 0.4rem;
  margin-top: 0.4rem;
  border-left: 1px solid rgba(211, 211, 211, 0);
}

::-webkit-scrollbar-thumb {
  border-radius: 20px;
  background:  linear-gradient(30deg, #1bd3247c, #21b913be);
  box-shadow: inset 0 0 6px #30d31b,
}

.apexcharts-tooltip span {
  color: #fff !important;
}
</style>


