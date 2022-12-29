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
        {{ flag }}
      </div>
    </div>
    <div class="mt-8">
      Made with 💚 by Beenzer Team © All rights reserved. <br>Built in <a href="https://solana.com/" target="_blank" class="underline">Solana</a> in 2022. Good luck all!
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
