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
        username: store.state.username,
        msg: msg.value, 
        date: '2013',
      });
      msg.value = '';
      messages.value.push({ 
        pubkey: 'beenzer',
        username: 'Beenzer bot',
        msg: 'Sorry my dear! We are still working on the chat functionality. It will be reayd very soon! Thanks for your patience.', 
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
<div class="p-2 w-[800px] relative rounded-tl-xl rounded-bl-xl shadow-inner overflow-y-scroll"
:class="store.state.dark ? 'bg-white/10 shadow-white/20' : 'bg-black/10 shadow-black/20'">
  <div class="p-2 fixed bottom-12 left-1/2 ml-10">
    <input type="text" class="text-center text-sm p-1 px-2 w-[300px] rounded-xl border border-green-500"
    id="msg" key="msg"
    :class="store.state.dark ? 'bg-black/20' : 'bg-white/20'"
    v-on:keyup.enter="onEnter()"
    v-model="msg"
    placeholder="✍🏽 Be polite and press Enter"/>
  </div>
  <div v-for="x of messages" :key="x.msg"
  class="flex"
  :class="store.state.pubkey===x.pubkey ? 'flex-start' : 'flex-end'">
  <div class="bg-black/20 p-2 px-8 my-2 rounded-xl rounded-bl-none min-w-[200px]">
    <div class="text-white">
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

</div>
</template>