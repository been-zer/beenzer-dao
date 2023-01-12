<script>
import { shortWallet, markWallet } from '../../utils';

export default {
  props: [
    'history',
    'totalCountries',
    'totalPlayers',
    'maxPot',
    'avgPot',
    'chartData',
    'chartLabels',
    'wallet'
  ],
  methods: {
    shortWallet,
    markWallet
  },
  setup () {
    const nf = Intl.NumberFormat();    
    return { 
      nf
    }
  },
 
}
</script>
<template>
<div class="p-2 w-[800px] bg-gray-300 relative rounded-tl-xl rounded-bl-xl">
  <div class="p-2 absolute bottom-2 left-1/2 transform -translate-x-1/2">
    Be polite and press enter
    <input type="text" class="w-full rounded-xl " />
  </div>
</div>
</template>