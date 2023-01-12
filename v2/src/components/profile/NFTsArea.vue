<script lang="ts">
import { ref, Ref, watchEffect } from 'vue';
import { shortWallet, markWallet } from '../../utils';
import { useStore } from '../../services/store';
import { getWalletNFTs, NFT } from '../../services/nfts/getWalletNFTs';

export default {
  methods: {
    shortWallet,
    markWallet
  },
  setup () {
    const store = useStore();
    const nfts:Ref<NFT[]> = ref([]);
    watchEffect(async () => {
      nfts.value = await getWalletNFTs(process.env.VUE_APP_MASTER_WALLET as string);
    });
    const nf = Intl.NumberFormat();    
    return {
      store,
      nfts,
      nf
    }
  }
}
</script>
<template>
  <div class="max-w-[900px] sm:min-w-[900px] min-h-screen pb-12 text-center">
    <div class="mt-6 uppercase text-lg tracking-widest text-gray-400 font-semibold">
      YOUR
    </div>
    <div class="mb-8 uppercase text-3xl tracking-widest font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
      COLLECTION
    </div>
    <lo class="flex flex-wrap justify-center rounded-xl">
      <div v-for="x of nfts" :key="x.token" >
        <div class="m-1 mt-4 text-sm">{{x.name}}</div>
        <button class="rounded-xl m-2  h-48 w-48 border border-gray-500">
          <img class="object-cover h-48 w-48 rounded-xl hover:h-64 hover:scale-150 hover:shadow-lg" 
          :class="store.state.dark ? 'hover:shadow-white' : 'hover:shadow-black'"
          :src="x.asset_uri" />
        </button>
      </div>
    </lo>
  </div>
</template>
