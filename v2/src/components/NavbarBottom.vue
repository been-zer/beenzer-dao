<template>
  <div class="fixed left-1/2 bottom-12 sm:pl-24 sm:pr-24 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3"  >

    <nav class="mr-20 uppercase">
      <router-link class="p-4" to="/mint">MINT</router-link>
      <router-link class="p-4" to="/governance">GOVERNANCE</router-link>
      <router-link class="p-4" to="/socials">SOCIALS</router-link>
      <router-link class="p-4" to="/app">APP</router-link>
    </nav>

      </div>
</template>

<style lang="scss">
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
