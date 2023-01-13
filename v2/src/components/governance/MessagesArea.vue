<script lang="ts">
import { ref, Ref } from 'vue';
import { shortWallet, markWallet, sleep, getDate, getTime } from '../../utils';
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
    async function onEnter() {
      if ( msg.value ) {
        messages.value.unshift({ 
          pubkey: store.state.pubkey,
          username: store.state.username,
          msg: msg.value, 
          date: getDate() + ' ' + getTime(),
        });
        msg.value = '';
        await sleep(1000)
        messages.value.unshift({ 
          pubkey: 'beenzer',
          username: 'Beenzer bot',
          msg: 'Sorry! Chat is not currently available.', 
          date: getDate() + ' ' + getTime(),
        });
      }
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
  <input class="text-center text-green-500 text-sm p-1 px-2 my-4 w-[300px] rounded-xl border border-green-500 mb-8"
  id="msg" key="msg" type="text" 
  :class="store.state.dark ? 'bg-black/20' : 'bg-white/20'"
  v-on:keyup.enter="onEnter()"
  v-model="msg"
  placeholder="✍🏽 Be polite and press Enter"/>
  <div v-for="x of messages" :key="x.msg">
    <div v-if="store.state.pubkey===x.pubkey" class="flex justify-start w-full -mb-4">
      <div class="text-center flex align-bottom justify-center">
        <img class="w-10 h-10 rounded-full mr-1 ml-2 m-auto mb-2" :src="require('../../assets/ico/profile.png')" alt="pfp" />
      </div>
      <div>
        <div class="bg-black/20 p-2 px-8 my-2 rounded-xl rounded-bl-none w-[280px]"
        :class="store.state.dark ? 'text-white/80' : 'text-black/80'">
          {{ x.msg }}
        </div>
        <div class="flex mb-4 ml-1 text-xs">
          <div class="text-left font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-yellow-400">
            @{{ x.username }}
          </div>
          <div class="ml-4 text-gray-500">
            {{ x.date }}
          </div>
        </div>
      </div>
    </div>
    <div v-else class="flex justify-end w-full -mb-4">
      <div>
        <div class="bg-black/20 p-2 px-8 my-2 rounded-xl rounded-br-none w-[280px]"
        :class="store.state.dark ? 'text-white/80' : 'text-black/80'">
          {{ x.msg }}
        </div>
        <div class="flex justify-end text-xs mb-4 pl-4">
            <div class="mr-4 text-gray-500">
              {{ x.date }}
            </div>
            <div class="text-right pr-2 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-yellow-400">
              @{{ x.username }}
            </div>
          </div>
        </div>
        <div class="text-center flex align-bottom justify-center">
          <img class="w-10 h-10 rounded-full ml-1 mr-2 m-auto mb-2" :src="require('../../assets/ico/profile.png')" alt="pfp" />
        </div>
    </div>
  </div>
</div>
</template>

