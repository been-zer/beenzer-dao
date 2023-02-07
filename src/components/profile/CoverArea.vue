<script lang="ts">
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
<div>
  <div class="relative">
    <img :src="'https://www.forbes.com/advisor/wp-content/uploads/2021/04/NFT.jpeg.jpg'" 
    class="rounded-t-xl object-cover h-56 w-[600px] border-b"
    :class="store.state.dark ? 'border-gray-600' : 'border-gray-400'"/>
    <img :src="'https://arweave.net/-fCQADIdrB1TvHOvQET4E5dHSGjxFG7R2113LUNtn7E'" 
    class="absolute left-1/2 transform -translate-x-1/2 -mt-20 object-cover h-36 w-36 rounded-full border"
    :class="store.state.dark ? 'border-gray-600' : 'border-gray-400'"/>
  </div>
  <div class="flex justify-between">
    <div>
      hello
    </div>
    <div>
      hello
    </div>
    <div>
      hello
    </div>
    <div>
      hello
    </div>
  </div>
</div>
</template>
