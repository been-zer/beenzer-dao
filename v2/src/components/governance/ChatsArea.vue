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

  </div>

</template>