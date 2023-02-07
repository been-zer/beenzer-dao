<script lang="ts">
import { ref } from 'vue';
import { useStore } from '../../services/store';

export default {
  components: {

  },
  data() {
    return {
      date: "2023/1/1",
      date2: "2023/3/1",
      commitHover: false,
      commiting: false,
    }
  },
  setup () {

    const store = useStore();
    const tokenSel = ref('BEEN');
    const info = ref(false);

    function infoBtn () {
      info.value = !info.value;
    }


    function tokenSelector (token:string) {
      tokenSel.value = token;
    }
    
    return {
      store,
      tokenSel,
      tokenSelector,
      info,
      infoBtn,
    }
  }
}
</script>
<template>
  <div class="px-4 text-center mt-10">
    <div class="px-4 text-center mt-2">
      <a :href="'https://solscan.io/token/DoA5HLxcNGuqGb4wAfTXJZzAzt1juhgpYCxZpuvzgUTy'" target="_blank" >
        <p class="uppercase text-3xl tracking-widest font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-yellow-400">
          TOKENOMICS
        </p>
      </a>
      <p class="uppercase text-xl tracking-widest text-gray-400 font-semibold">
        CONTRACTS
      </p>
    </div>
    <div class="grid grid-cols-2 mb-2">
      <button class="mt-8 mb-4 pb-2 uppercase tracking-widest font-semibold"
      :class="tokenSel==='BEEN' ? 'border-b-2 border-green-500 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-yellow-400 text-2xl' : 'border-none text-xl'"
      :onclick="() => tokenSelector('BEEN')">
        $BEEN
      </button>
      <button class="mt-8 mb-4 pb-2 uppercase tracking-widest font-semibold"
      :class="tokenSel==='BEENZ' ? 'border-b-2 border-green-500 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-yellow-400 text-2xl' : 'border-none text-xl'"
      :onclick="() => tokenSelector('BEENZ')">
        $BEENZ
      </button>
    </div>
    <div v-if="tokenSel==='BEEN'">
      <div class="mb-6">
        <h1 class="text-gray-400 p-1 font-semibold">
          TOKEN ADDRESS
        </h1>
        <a class="text-sm hover:text-green-500 hover:font-semibold" target="_blank"
        href="https://solscan.io/token/DoA5HLxcNGuqGb4wAfTXJZzAzt1juhgpYCxZpuvzgUTy">
          DoA5HLxcNGuqGb4wAfTXJZzAzt1juhgpYCxZpuvzgUTy
        </a>
      </div>
      <div class="border border-white/50 rounded-xl text-left pl-2 py-4 mb-[10px]">
        <div class="grid grid-cols-2 p-2">
          <div class="uppercase font-semibold">
            Token Type
          </div>
          <div class="ml-4">
            🪙 &nbsp; Currency
          </div>
        </div>
        <div class="grid grid-cols-2 p-2">
          <div class="uppercase font-semibold">
            Maximum Supply
          </div>
          <div class="ml-4">
            ♾️ &nbsp; Unlimited
          </div>
        </div>
        <div class="grid grid-cols-2 p-2">
          <div class="uppercase font-semibold">
            Decimals
          </div>
          <div class="ml-4">
            ➗ &nbsp; 2
          </div>
        </div>
        <div class="grid grid-cols-2 p-2">
          <div class="uppercase font-semibold">
            Mint
          </div>
          <div class="ml-4">
            ✅ &nbsp; TRUE
          </div>
        </div>
        <div class="grid grid-cols-2 p-2">
          <div class="uppercase font-semibold">
            Burn
          </div>
          <div class="ml-4">
            ✅ &nbsp; TRUE
          </div>
        </div>
        <div class="grid grid-cols-2 p-2">
          <div class="uppercase font-semibold">
            Stake
          </div>
          <div class="ml-4">
            ✅ &nbsp; TRUE
          </div>
        </div>
        <div class="grid grid-cols-2 p-2">
          <div class="uppercase font-semibold">
            Tradeable
          </div>
          <div class="ml-4">
            ❌ &nbsp; FALSE
          </div>
        </div>
        <div class="grid grid-cols-2 p-2">
          <div class="uppercase font-semibold">
            Price
          </div>
          <div class="ml-4">
            🏦 &nbsp; Fixed to $1
          </div>
        </div>
        <div class="grid grid-cols-2 p-2">
          <div class="uppercase font-semibold">
            App Utility
          </div>
          <div class="ml-4">
            ⛏️ &nbsp; Mint BEENZER
          </div>
        </div>
        <div class="grid grid-cols-2 p-2">
          <div class="uppercase font-semibold">
            Financial Utility
          </div>
          <div class="ml-4">
            📜 &nbsp; Earn BEENZ
          </div>
        </div>
        <div class="grid grid-cols-2 p-2">
          <div class="uppercase font-semibold">
            Governance Utility
          </div>
          <div class="ml-4">
            🗳️ &nbsp; Voting Rights
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="tokenSel==='BEENZ'">
      <div class="mb-6">
        <h1 class="text-gray-400 p-1 font-semibold">
          TOKEN ADDRESS
        </h1>
        <a class="text-sm hover:text-green-500 hover:font-semibold" target="_blank"
        href="https://solscan.io/token/C883VsqqQoj39QpUzd54ncJes2Q8SubD24WWuDmsVa3n">
          C883VsqqQoj39QpUzd54ncJes2Q8SubD24WWuDmsVa3n
        </a>
      </div>
      <div class="border border-white/50 rounded-xl text-left pl-2 py-4 mb-[10px]">
        <div class="grid grid-cols-2 p-2">
          <div class="uppercase font-semibold">
            Token Type
          </div>
          <div class="ml-4">
            📜 &nbsp; Stock
          </div>
        </div>
        <div class="grid grid-cols-2 p-2">
          <div class="uppercase font-semibold">
            Maximum Supply
          </div>
          <div class="ml-4">
            <span class="text-yellow-600 font-bold ml-1">
              ₿ 
            </span>
            &nbsp; &nbsp; 21,000,000
          </div>
        </div>
        <div class="grid grid-cols-2 p-2">
          <div class="uppercase font-semibold">
            Decimals
          </div>
          <div class="ml-4">
            ➗ &nbsp; 2
          </div>
        </div>
        <div class="grid grid-cols-2 p-2">
          <div class="uppercase font-semibold">
            Mint
          </div>
          <div class="ml-4">
            ❌ &nbsp; FALSE
          </div>
        </div>
        <div class="grid grid-cols-2 p-2">
          <div class="uppercase font-semibold">
            Burn
          </div>
          <div class="ml-4">
            ❌ &nbsp; FALSE
          </div>
        </div>
        <div class="grid grid-cols-2 p-2">
          <div class="uppercase font-semibold">
            Stake
          </div>
          <div class="ml-4">
            ❌ &nbsp; FALSE
          </div>
        </div>
        <div class="grid grid-cols-2 p-2">
          <div class="uppercase font-semibold">
            Tradeable
          </div>
          <div class="ml-4">
            ✅ &nbsp; TRUE
          </div>
        </div>
        <div class="grid grid-cols-2 p-2">
          <div class="uppercase font-semibold">
            Price
          </div>
          <div class="ml-4">
            📈 &nbsp; Market Price
          </div>
        </div>
        <div class="grid grid-cols-2 p-2">
          <div class="uppercase font-semibold">
            App Utility
          </div>
          <div class="ml-4">
            💱 &nbsp; Money Transfer
          </div>
        </div>
        <div class="grid grid-cols-2 p-2">
          <div class="uppercase font-semibold">
            Financial Utility
          </div>
          <div class="ml-4">
            <span class="text-purple-500 font-bold">
              ☉ 
            </span>
            &nbsp; &nbsp;SOL Dividend
          </div>
        </div>
        <div class="grid grid-cols-2 p-2">
          <div class="uppercase font-semibold">
            Governance Utility
          </div>
          <div class="ml-4">
            💪 &nbsp; Voting Power
          </div>
        </div>
      </div>
    </div>
  </div> 
</template>