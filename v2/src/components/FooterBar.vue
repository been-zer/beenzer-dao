<template>
  <div class="p-4 text-center text-xs text-gray-400" > 
    <div class="flex justify-center items-center rounded-xl m-4">
      <!-- Server time -->
      <div class="text-center text-md tracking-widest font-semibold justify-center mr-8 text-gray-400">
        {{ time }}<span class="text-xs"> UTC</span>
      </div>
      <!-- Users connected -->
      <div class="text-center text-md tracking-widest font-semibold justify-center mr-8 text-gray-400">
        <span class="text-xs">
          CONNECTED: 
        </span>
        {{ users }}
      </div>
      <!-- Users flag -->
      <div class="text-center text-md tracking-widest font-semibold justify-center mr-8 text-gray-400">
        {{ this.$store.state.flag }}
      </div>
    </div>
    <div class="mt-8">
      Made with 💚 by Beenzer Team <br/>2022 © All rights reserved.
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'time',
    'users',
    'flag',
  ],
}
</script>
