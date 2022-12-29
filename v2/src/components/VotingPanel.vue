<template>
  <!-- Right Panel -->

  <div class="m-auto w-full max-w-md p-2 mt-0">
    <div class="h-[840px] p-4 text-gray-600 rounded-xl text-center shadow-xl shadow-yellow-400" :class="this.$store.state.dark ? 'bg-gray-800' : 'bg-white'">

      <div class="uppercase text-sm tracking-widest text-gray-400 font-semibold mt-8">Voting</div>
      <div class="uppercase text-3xl tracking-widest text-gray-400 font-semibold">Stats</div>
      
      <div class="text-center uppercase text-sm tracking-widest font-semibold justify-center">
        <div class="flex justify-center mr-3 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600" >
          <div class="uppercase text-xl font-semibold m-4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Voted</div>
          <div class="font-bold text-4xl mt-2" :class="this.$store.state.dark ? 'text-gray-200' : 'text-gray-800'"> 
            {{ 2 }}
          </div>
          <div class="uppercase text-xl font-semibold m-4">Motions</div>
        </div>
      </div>


      <div class="flex flex-wrap" >
        <div class="w-full h-full">
          <div class="grid grid-cols-12 justify-center align-center align-middle uppercase text-xs mb-4 mt-4 tracking-widest text-gray-400 font-semibold">
            <div class="col-span-3">
              Closed
            </div>
            <div class="col-span-3">
              Proposal
            </div>
            <div class="col-span-2">
              Votes
            </div>
            <div class="col-span-4">
              Most voted
            </div>
          </div>
          <lo class="min-h-[333px] flex flex-col flex-grow overflow-y-auto bg-gray-100 p-2 rounded-xl shadow-inner" :class="this.$store.state.dark ? 'bg-gray-700 shadow-gray-600' : 'bg-text-gray-200'">
            <div class="my-2" v-for="x of motions" :key="x.closed" >
              <div class="hover:font-semibold grid grid-cols-12 justify-center align-center align-middle"  :class="this.$store.state.dark ? 'text-gray-200' : 'bg-text-gray-800'">
                <div class="text-xs text.left col-span-3"  :class="markWallet(wallet, x._owner) ? 'text-green-400 font-bold' : 'text-grey-600'">
                  {{ x.closed }}
                </div>
                <div class="text-xs text-left col-span-3"  >
                  {{ x.proposal }}
                </div>
                <div class="text-xs text-left col-span-2 font-semibold flex text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-600">
                  <div class="text-xs mb-3 pl-1 pr-1"> 📍 </div>{{ x.votes }}
                </div>
                <div class="text-xs text-left col-span-1 text-yellow-500" >
                  {{ Math.floor(x['a%']) }}%
                </div>
                <div class="text-xs text-left col-span-3" >
                  {{ x.a }}
                </div>
                
              </div>
            </div>
          </lo>
        </div>
          <!-- <div class="w-1/2"> -->
            <!-- <Bar class="m-h-24 h-24" /> -->
            <!-- <div class="uppercase text-xs mt-3 tracking-widest text-gray-400 font-semibold">
              Cumulative SOLPOT -->
              <!-- <LineChart class="m-h-52 h-52" :chartData="chartData" :chartLabels="chartLabels" /> -->
            <!-- </div>
          </div> -->
          <!-- <div class="uppercase text-xs mt-2 tracking-widest text-gray-400 font-semibold">
            POT country distribution
            <PolarChart class="m-h-24 h-24"/>
          </div> -->


      <div class="grid grid-cols-4 grid-flow-row gap-4 align-center justify-center text-center mt-8">

        <div class="p-2 text-center">
          <p class="uppercase text-[10px] tracking-widest text-gray-400 font-semibold">Total</p>
          <p class="uppercase text-xs tracking-widest text-gray-400 font-semibold">Countries</p>
          <div class="flex justify-center" >
            <p class="font-bold text-lg mt-2"
              :class="this.$store.state.dark ? 'text-gray-300' : 'text-gray-600'"
            >{{ 12 }}</p>
          </div>
        </div>

        <div class="p-2 text-center">
          <p class="uppercase text-[10px] tracking-widest text-gray-400 font-semibold">Total</p>
          <p class="uppercase text-xs tracking-widest text-gray-400 font-semibold">Players</p>
          <div class="flex justify-center" >
            <p class="font-bold text-lg mt-2"
              :class="this.$store.state.dark ? 'text-gray-300' : 'text-gray-600'"
            >{{ 34 }}</p>
          </div>
        </div>

        <div class="p-2 text-center">
          <p class="uppercase text-[10px] tracking-widest text-gray-400 font-semibold">Average</p>
          <p class="uppercase text-xs tracking-widest text-gray-400 font-semibold">SOLPOT</p>
          <div class="flex justify-center" >
            <p class="font-bold text-lg mt-2" :class="this.$store.state.dark ? 'text-gray-300' : 'text-gray-600'" > 
              <span class="text-sm text-gray-400">
                ◎ </span>
              {{ avgPot }}</p>
          </div>
        </div>

        <div class="p-2 text-center mr-2">
          <p class="uppercase text-[10px] tracking-widest text-gray-400 font-semibold">Greatest</p>
          <p class="uppercase text-xs tracking-widest text-gray-400 font-semibold">SOLPOT</p>
          <div class="flex justify-center" >
            <p class="font-bold text-lg mt-2"
              :class="this.$store.state.dark ? 'text-gray-300' : 'text-gray-600'"
            > <span class="text-sm text-gray-400">
              ◎ </span>
              {{ maxPot }}</p>
          </div>
        </div>

      </div>
  
    </div>
  </div>
</div>

</template>

<script>
// import LineChart from './charts/lineChart.ts';
import { shortWallet, markWallet } from '../utils';

export default {
  props: [
    'history',
    'totalCountries',
    'totalPlayers',
    'maxPot',
    'avgPot',
    'chartData',
    'chartLabels',
    'wallet'
  ],
  methods: {
    shortWallet,
    markWallet
  },
  components: {
    // LineChart,
  },
  setup () {
    const nf = Intl.NumberFormat();    
    return { 
      nf
    }
  },
  data () {
    const motions = [
      {
        closed: '2023-02-01',
        votes: 103,
        proposal: 'Should we open an Instagram account?',
        a: 'Yes! Potential users can be found there!',
        b: 'No, thanks to the people who are interested in.',
        c: 'No, thanks to the people who are interested in',
        d: 'Yes',
        'a%': 23.44,
        'b%': 13.15,
        'c%': 33.72,
        'd%': 7.33
      },
      {
        closed: '2023-01-01',
        votes: 22,
        proposal: 'Should we open an Instagram account?',
        a: 'Yes! Potential users can be found there!',
        b: 'No, thanks to the people who are interested in.',
        c: 'No, thanks to the people who are interested in',
        d: 'Yes',
        'a%': 23.44,
        'b%': 13.15,
        'c%': 33.72,
        'd%': 7.33
      },
    ];

    return {
      motions
    }

  }
}
</script>
