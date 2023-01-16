<script>
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
  <div class="p-2 w-[250px] rounded-tr-xl rounded-br-xl border"
  :class="store.state.dark ? 'bg-black/10 border-gray-800' : 'bg-white/10 border-gray-200'">
    <p class="my-2 uppercase tracking-widest font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-600">
      CHATS
    </p>
    <div class="h-[300px] px-2">
      <button class="my-2 p-2 w-full text-center border rounded-xl hover:border-green-500 bg-green-500"
      :class="store.state.dark ? 'border-gray-800 text-white' : ' border-gray-300 text-white'">
        General
      </button>
      <button class="my-2 p-2 w-full text-center border rounded-xl hover:border-green-500"
      :class="store.state.dark ? 'bg-black/20 border-gray-800 text-white' : 'bg-white/20 border-gray-300 text-black'">
        Announcements
      </button>
      <button class="my-2 p-2 w-full text-center border rounded-xl hover:border-green-500"
      :class="store.state.dark ? 'bg-black/20 border-gray-800 text-white' : 'bg-white/20 border-gray-300 text-black'">
        Telegram
      </button>
      <button class="my-2 p-2 w-full text-center border rounded-xl hover:border-green-500"
      :class="store.state.dark ? 'bg-black/20 border-gray-800 text-white' : 'bg-white/20 border-gray-300 text-black'">
        Discord
      </button>
      <button class="my-2 p-2 w-full text-center border rounded-xl hover:border-green-500"
      :class="store.state.dark ? 'bg-black/20 border-gray-800 text-white' : 'bg-white/20 border-gray-300 text-black'">
        FAQs
      </button>
    </div>
    <p class="my-4 uppercase tracking-widest font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-600">
      MOTIONS
    </p>
    <div class="h-[370px] mx-2 py-4 overflow-y-scroll shadow-inner rounded-xl"
    :class="store.state.dark ? 'shadow-white/50' : 'shadow-black/50'">
      <button class="my-2 p-2 w-[180px] text-center border rounded-xl hover:border-green-500"
      :class="store.state.dark ? 'bg-black/20 border-gray-800 text-white' : 'bg-white/20 border-gray-300 text-black'">
        MOTION #8
      </button>
      <button class="my-2 p-2 w-[180px] text-center border rounded-xl hover:border-green-500"
      :class="store.state.dark ? 'bg-black/20 border-gray-800 text-white' : 'bg-white/20 border-gray-300 text-black'">
        MOTION #7
      </button>
      <button class="my-2 p-2 w-[180px] text-center border rounded-xl hover:border-green-500"
      :class="store.state.dark ? 'bg-black/20 border-gray-800 text-white' : 'bg-white/20 border-gray-300 text-black'">
        MOTION #6
      </button>
      <button class="my-2 p-2 w-[180px] text-center border rounded-xl hover:border-green-500"
      :class="store.state.dark ? 'bg-black/20 border-gray-800 text-white' : 'bg-white/20 border-gray-300 text-black'">
        MOTION #5
      </button>
      <button class="my-2 p-2 w-[180px] text-center border rounded-xl hover:border-green-500"
      :class="store.state.dark ? 'bg-black/20 border-gray-800 text-white' : 'bg-white/20 border-gray-300 text-black'">
        MOTION #4
      </button>
      <button class="my-2 p-2 w-[180px] text-center border rounded-xl hover:border-green-500"
      :class="store.state.dark ? 'bg-black/20 border-gray-800 text-white' : 'bg-white/20 border-gray-300 text-black'">
        MOTION #3
      </button>
      <button class="my-2 p-2 w-[180px] text-center border rounded-xl hover:border-green-500"
      :class="store.state.dark ? 'bg-black/20 border-gray-800 text-white' : 'bg-white/20 border-gray-300 text-black'">
        MOTION #2
      </button>
      <button class="my-2 p-2 w-[180px] text-center border rounded-xl hover:border-green-500"
      :class="store.state.dark ? 'bg-black/20 border-gray-800 text-white' : 'bg-white/20 border-gray-300 text-black'">
        MOTION #1
      </button>
    </div>
  </div>

</template>