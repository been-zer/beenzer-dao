<script>
import { useStore } from '../../../services/store';
export default {
  setup() {
    const store = useStore();
    return { store };
  }
}
</script>
<template>
  <div id="menu" class="z-22 sm:flex uppercase justify-center align-center rounded-3xl font-semibold px-4 py-3 mx-2 text-sm shadow-xl 2xl:mx-12" 
  :class="store.state.dark ? 'bg-white/10 shadow-gray-800 text-gray-200' : 'bg-white shadow-gray-200 text-gray-600'">
    <div class="m-4 sm:m-0 hover:scale-110">
      <router-link class="px-4 hover:animate-bounce" to="/">
        MINTING
      </router-link>
    </div>
    <div class="m-4 sm:m-0 hover:scale-110">
      <router-link class="px-4 hover:animate-bounce" to="/governance">
        GOVERNANCE
      </router-link>
    </div>
    <div class="m-4 sm:m-0 hover:scale-110">
      <router-link class="px-4 hover:animate-bounce" to="/staking">
        STAKING
      </router-link>
    </div>
    <div class="m-4 sm:m-0 hover:scale-110">
      <router-link class="px-4 hover:animate-bounce" to="/marketplace">
        MARKETPLACE
      </router-link>
    </div>
    <div class="m-4 sm:m-0 hover:scale-110">
      <router-link class="px-4 hover:animate-bounce" to="/stats">
        STATS
      </router-link>
    </div>
  </div>
</template>
<style scoped lang="scss">
#menu a.router-link-exact-active {
  background: -webkit-linear-gradient(90deg, rgb(66, 194, 54), rgb(190, 206, 42));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}
</style>

