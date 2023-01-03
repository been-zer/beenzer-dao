<script>

export default {
  data() {
    return {
      dark: true
    }
  }
}
</script>

<template>
  <div id="menu" class="flex uppercase justify-center align-center rounded-3xl font-semibold px-4 py-3 mx-2 text-sm shadow-xl 2xl:mx-12" 
  :class="dark ? 'bg-white/10 shadow-gray-700 text-gray-200' : 'bg-white text-gray-600'">
    <router-link class="px-4" to="/mint">
      MINT
    </router-link>
    <router-link class="px-4" to="/governance">
      GOVERNANCE
    </router-link>
    <router-link class="px-4" to="/socials">
      SOCIALS
    </router-link>
    <router-link class="px-4" to="/app">
      APP
    </router-link>
  </div>
</template>

<style scoped lang="scss">
#menu a.router-link-exact-active {
  background: -webkit-linear-gradient(90deg, rgb(66, 194, 54), rgb(190, 206, 42));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>

