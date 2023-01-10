<script lang="ts">
import { ref, watchEffect } from 'vue';
import { shortWallet, markWallet } from '../../utils';
import { useStore } from '../../services/store';

export default {
  methods: {
    shortWallet,
    markWallet
  },
  setup () {
    const store = useStore();
    
    const nf = Intl.NumberFormat();    
    return {
      store,
      nf
    }
  }
}
</script>
<template>
    <div class="p-0 sm:p-2 text-center">
      <div class="mt-6 uppercase text-lg tracking-widest text-gray-400 font-semibold">
        RANKING
      </div>
      <div class="uppercase text-3xl tracking-widest font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
        HOLDERS
      </div>
      
  </div>


</template>
