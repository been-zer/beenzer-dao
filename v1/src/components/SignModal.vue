<template>
  <teleport to="body">
    <div ref="modal-backdrop" class="hidden fixed z-10 inset-0 overflow-y-auto bg-opacity-50" :class="!this.dark ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-700'">
      <div class="z-20 flex items-center justify-center min-h-screen text-center" >
        <div class="z-90 min-h-[900px] m-2 sm:w-1/3 rounded-lg text-center overflow-hidden shadow-xl p-8 flex flex-col justify-center" :class="this.dark ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-700'" >
          

          <p class="mt-2 px-8 uppercase text-2xl tracking-widest font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-yellow-400">
            SIGN UP TO BEENZER  
          </p>
          <input class="mt-10 text-2xl tracking-widest text-gray-400 font-semibold"/>
            FROM HERE YOU CAN:
 
          <p class="mt-10 text-2xl tracking-widest text-gray-400 font-semibold">
            1️⃣ MINT $BEEN ⛏️
          </p>
          <p class="mt-10 text-2xl tracking-widest text-gray-400 font-semibold">
            2️⃣ BURN $BEEN 🔥
          </p>
          <p class="mt-10 text-2xl tracking-widest text-gray-400 font-semibold">
            3️⃣ GOVERNANCE ⚖️
          </p>
          
          <div class="mt-10 text-2xl tracking-widest text-gray-400 font-semibold">
            ⚠️ We keep track of your location {{ location }}
            <p class="mt-10 text-2xl tracking-widest text-gray-400 font-semibold">
              You can turn anonymous if you want
            </p>
          </div>
        </div>

        
      </div>
    </div>
  </teleport>
</template>

<script>
// import LoginWithTwitter from "../services/twitter-auth";

// const tw = new LoginWithTwitter({
//   consumerKey: '0Y42EKLLt3IwyYALd8gsR01xP',
//   consumerSecret: 'fJkC4jOcTjT2OhJiNzQiiCiEM2rONOch9liXIyMZ7KRrVJ5MYF',
//   callbackUrl: 'https://localhost:8080'
// })
// import { watchEffect, ref } from 'vue';
//import { TwitterApi } from 'twitter-api-v2';

// Instantiate with desired auth type (here's Bearer v2 auth)
//const twitterClient = new TwitterApi({ appKey: '0Y42EKLLt3IwyYALd8gsR01xP', appSecret: 'fJkC4jOcTjT2OhJiNzQiiCiEM2rONOch9liXIyMZ7KRrVJ5MYF' });

//const readOnlyClient = twitterClient.readOnly;

// Play with the built in methods
// import fireworks from '../assets/fireworks.gif'
// import { WalletMultiButton } from 'solana-wallets-vue'


export default {
  components: {
    // WalletMultiButton
  },
  props: {
    
  },
  setup () {

    // const tw_user = ref();
    // watchEffect(async () => {
    //   const user = await twitterClient.appLogin();

    //   console.log(user);
      
    // });

    // return {
    //   tw_user
    // }
  },
  data() {
    return {
      dark: true
    }
  }
  
}
</script>
