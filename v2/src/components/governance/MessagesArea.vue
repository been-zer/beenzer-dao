<script lang="ts">
import { ref, Ref } from 'vue';
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
    const msg = ref('');
    interface Message { 
      pubkey:string,
      username:string,
      msg:string,
      date:string 
    }
    const messages: Ref<Array<Message>> = ref([]);
    function onEnter() {
      // const date = new Date();
      messages.value.push({ 
        pubkey: shortWallet(store.state.pubkey, 4),
        username: 'beenzer',
        msg: msg.value, 
        date: '2013',
      });
    }
    return {
      store,
      nf,
      msg,
      messages,
      onEnter
    }
  } 
} 
</script>
<template>
<div class="p-2 w-[800px] relative rounded-tl-xl rounded-bl-xl shadow-inner"
:class="store.state.dark ? 'bg-white/10 shadow-white/20' : 'bg-black/10 shadow-black/20'">
  <div class="p-2 absolute bottom-2 left-1/2 transform -translate-x-1/2 text-gray-400">
    <input type="text" class="w-full text-center text-sm p-1 px-24 rounded-xl border border-green-500"
    id="msg" key="msg"
    :class="store.state.dark ? 'bg-black/20' : 'bg-white/20'"
    v-on:keyup.enter="onEnter()"
    v-model="msg"
    placeholder="✍🏽 Be polite and press enter"/>
  </div>
  <div v-for="x of messages" :key="x.msg"
  class="flex"
  :class="store.state.pubkey===x.pubkey ? 'flex-start' : 'flex-end'">
    <div>
      {{ x.username }}
    </div>
    <div>
      {{ x.msg }}
    </div>
    <div>
      {{ x.date }}
    </div>
  </div>

</div>
</template>