<template>
  <div :class="this.$store.state.dark ? 'bg-gray-900' : 'bg-gray-100'">
    <div class="h-screen w-screen m-0 -mb-12" :class="this.$store.state.dark ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-700'">
      <NavbarWallet :users="users" :balance="balance" :time="time" />
      <div class="flex flex-wrap top-24 left-0 right-0 justify-center align-center text-center" :class="this.$store.state.dark ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-700'">
        <MintPanel @commit="(amount) => mintToken(amount)" v-on="newTicket" :balance="balance" :potSOL="potSOL" :tickets="tickets" :countdown="countdown" :yourNumbers="yourNumbers" :yourProbability="yourProbability" :yourROI="yourROI" />
        <HistoryPanel :history="history" :totalCountries="totalCountries" :totalPlayers="totalPlayers" :maxPot="maxPot" :avgPot="avgPot" :chartData="chartData" :chartLabels="chartLabels" :wallet="user_wallet" />
        <GovernPanel />
        <VotingPanel :history="history" :totalCountries="totalCountries" :totalPlayers="totalPlayers" :maxPot="maxPot" :avgPot="avgPot" :chartData="chartData" :chartLabels="chartLabels" :wallet="user_wallet" />
        <FooterBar class="mt-12" :flag="location.flag" :time="time" :users="users"/>
      </div>
    </div>
    <div class="hidden">
      <WelcomeModal :connected="connected" :flag="location.flag" :time="time" :users="users"/>
      <SingupModal />
    </div>
  </div>
</template>

<script>
import WelcomeModal from "./components/WelcomeModal.vue";
import SingupModal from "./components/SignModal.vue";
import FooterBar from './components/FooterBar.vue';
import NavbarWallet from './components/NavbarWallet.vue';
import MintPanel from './components/MintPanel.vue';
import GovernPanel from './components/GovernPanel.vue';
import VotingPanel from './components/VotingPanel.vue';
import HistoryPanel from './components/HistoryPanel.vue';
import { useWallet } from 'solana-wallets-vue';
import { Connection, PublicKey, SystemProgram, Transaction, LAMPORTS_PER_SOL } from '@solana/web3.js';
import commit_sound from './assets/sounds/3.wav';
import commited_sound from './assets/sounds/2.wav';
import wrong_sound from './assets/sounds/wrong.mp3';
import pot_sound from './assets/sounds/pot.mp3';
import { 
  getDate,
  getTime,
  countDown,
} from './utils';
import { ref, watchEffect } from 'vue';
import io from 'socket.io-client';
import store from './store';

export default {
  name: 'App',
  components: {
    NavbarWallet,
    MintPanel,
    HistoryPanel,
    GovernPanel,
    VotingPanel,
    FooterBar,
    WelcomeModal,
    SingupModal
  },
  data() {

    const socket = io(process.env.VUE_APP_SOCKET_ENDPOINT, { transports: ['websocket'], });
    const users = ref();
    socket.on('userNumber', (data) => {
      users.value = String(data).split(' ')[1];
      return data;
    });

    const date = ref('')
    date.value = getDate();
    const time = ref('');
    time.value = getTime();
    const countdown = ref('');
    countdown.value = countDown();
    
    // 00:00:00 UTC big sound!
    const pot_audio = new Audio(pot_sound);
    setInterval( () => {
      time.value = getTime();
      countdown.value = countDown();
      if ( time.value === '00:00:00' ) {
        date.value = getDate();
        if ( store.state.sound )
          pot_audio.play();
      }
    }, 1000);

    // User location
    async function userLocation () {
      const ip = ref('');
      const flag = ref('');
      const country = ref('');
      const city = ref('');
      fetch('https://api.ipregistry.co/?key=0nxj6f90k9nup0j3')
      .then(function (response) {
        return response.json();
      })
      .then(function (payload) {
        ip.value = payload.ip
        flag.value = payload.location.country.flag.emoji;
        store.dispatch('setFlag', 'hi');
        country.value =  payload.location.country.code;
        city.value =  payload.location.city;
      });
      return { ip, flag, country, city };
    }
    const location = ref('');
    watchEffect(async () => {
      location.value = await userLocation()
    });

    // User wallet
    const connection = new Connection(process.env.VUE_APP_SOLANA_RPC_URL);
    const wallet = ref(useWallet());
    // const anchorWallet = useAnchorWallet();
    const connected = ref(true);
    const balance = ref();
    const user_wallet = ref('');
    watchEffect(async () => {
      try {
        user_wallet.value = wallet.value.publicKey;
        connected.value = false;
      } catch { 
        console.log('Wallet connection error')
      }
      console.log('hksddds', wallet.value.publicKey.toBase58())
      const bal = await connection.getBalance(user_wallet.value)/1000000000;
      balance.value = Math.floor(bal*100)/100;
      setInterval( async () => {
        balance.value = Math.floor(await connection.getBalance(user_wallet.value)/1000000000*100)/100;
      }, 10000);
    });

    // Commit Number
    async function mintToken (amount) {

      const audio1 = new Audio(commit_sound);
      const audio2 = new Audio(commited_sound);
      const audio3 = new Audio(wrong_sound)

      if (! wallet.value) {
        audio3.play();
        return alert('Connect your wallet first!')
      }

      if ( store.state.sound )
        audio1.play();
           
      const { sendTransaction } = useWallet();
      const masterPubKey = new PublicKey(process.env.VUE_APP_MASTER_WALLET);
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: user_wallet.value,
          toPubkey: new PublicKey(masterPubKey),
          lamports: amount*LAMPORTS_PER_SOL,
        })
      )

      const signature = await sendTransaction(transaction, connection);
      console.log('Transaction confirmed! Signature:', signature);

      if ( store.state.sound )
        audio2.play();

    }

    return {
      user_wallet,
      socket,
      users,
      balance,
      date,
      time,
      countdown,
      location,
      mintToken,
      connected
    }
  }
}
</script>

<style>

html {
  overflow-x: hidden;
}

::-webkit-scrollbar {
  width: 5px;
  height: 5px;
  background-color: rgba(179, 179, 179, 0.692);
}

::-webkit-scrollbar-track {
  background-color: rgba(179, 179, 179, 0.692);
  border-radius: 0.75rem;
  margin: 0.4rem;
  border-left: 1px solid rgba(211, 211, 211, 0);
}

::-webkit-scrollbar-thumb {
  border-radius: 20px;
  background:  linear-gradient(30deg, #1bd3247c, #21b913be);
  box-shadow: inset 0 0 6px #30d31b,
}
</style>


