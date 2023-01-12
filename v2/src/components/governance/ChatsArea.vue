<script>
import { shortWallet, markWallet } from '../../utils';

export default {
  methods: {
    shortWallet,
    markWallet
  },
  setup () {
    const nf = Intl.NumberFormat();    
    return { 
      nf
    }
  }
}
</script>
<template>
  <div class="p-2 w-[200px] bg-gray-200 rounded-tr-xl rounded-br-xl">

  </div>

</template>