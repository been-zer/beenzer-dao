
<script>
// import { ref } from 'vue';
// import click_sound from '../../assets/sounds/beep.mp3';
import CountDown from '../modules/CountDown';
import motions from '../../../config/motions.json';
import { useStore } from '../../services/store';

export default {
  components: {
    CountDown,
  },
  methods: {
    commitNumber () {
      this.$emit('commit', this.commitNumber)
    },
    checkBox ( checkbox ) {
      this.checkbox = checkbox;
    }
  },
  data() {
    return {
      motions,
      date: "2023/2/2",
      checkbox: true,
      commitHover: false,
      commiting: false,
    }
  },
  setup () {
    const store = useStore();
    const nf = Intl.NumberFormat();

    const radialData = {         
      series: [76],
      chartOptions: {
        chart: {
          type: 'radialBar',
          foreColor: '#7F7F7F',
          size: '16px',
          offsetY: -20,
          sparkline: {
            enabled: true
          }
        },
        plotOptions: {
          radialBar: {
            startAngle: -90,
            endAngle: 90,
            track: {
              background: "#7F7F7F",
              strokeWidth: '97%',
              margin: 5, // margin is in pixels
              dropShadow: {
                enabled: true,
                top: 2,
                left: 0,
                color: '#16a34a',
                opacity: 1,
                blur: 2
              }
            },
            dataLabels: {
              name: {
                show: false
              },
              value: {
                offsetY: -2,
                fontSize: '22px'
              }
            }
          }
        },
        grid: {
          padding: {
            top: -10
          }
        },
        fill: {
          type: 'gradient',
          colors: ['#16a34a'],
          gradient: {
            shade: 'dark',
            type: 'horizontal',
            shadeIntensity: 0.5,
            gradientToColors: ['red', '#16a34a'],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
          }
        }
      },
    }
    
    return { 
      store,
      nf,
      radialData
    }
  }
}
</script>
<template>
  <div class="p-2 max-w-md ">
    <div class="px-4 text-center mt-2">
      <p class="mt-8 uppercase text-3xl tracking-widest font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-yellow-400">
        ⚖️ GOVERNANCE ⚖️
      </p>
      <p class="uppercase text-lg tracking-widest text-gray-400 font-semibold">
        USE YOUR $BEEN TO VOTE
      </p>
    </div>
    <div class="mt-4 px-8">
      <div class="uppercase text-xl tracking-widest font-semibold text-center p-2 mb-4">
        {{ motions[0].prop }}
      </div>
      <div class="my-2 flex w-full rounded-xl cursor-pointer border hover:bg-green-500 hover:text-white"
        :class="store.state.dark ? 'bg-gray-800 border-gray-600' : 'bg-gray-200 border-gray-400'">
        <div class="rounded-l-xl p-4 align-text-middle font-semibold w-12"
        :class="store.state.dark ? 'bg-black/20 border-r border-gray-600' : 'bg-white/20 border-r border-gray-400'">
          A
        </div>
        <div class="text-center w-full rounded-r-xl p-2 my-2 font-bold -ml-12">
          {{motions[0].a}}
        </div>  
      </div>
      <div class="my-2 flex w-full rounded-xl cursor-pointer border hover:bg-green-500 hover:text-white"
        :class="store.state.dark ? 'bg-gray-800 border-gray-600' : 'bg-gray-200 border-gray-400'">
        <div class="rounded-l-xl p-4 align-text-middle font-semibold w-12"
        :class="store.state.dark ? 'bg-black/20 border-r border-gray-600' : 'bg-white/20 border-r border-gray-400'">
          B
        </div>
        <div class="text-center w-full rounded-r-xl p-2 my-2 font-bold -ml-12">
          {{motions[0].b}}
        </div>  
      </div>
      <div class="my-2 flex w-full rounded-xl cursor-pointer border hover:bg-green-500 hover:text-white"
        :class="store.state.dark ? 'bg-gray-800 border-gray-600' : 'bg-gray-200 border-gray-400'">
        <div class="rounded-l-xl p-4 align-text-middle font-semibold w-12"
        :class="store.state.dark ? 'bg-black/20 border-r border-gray-600' : 'bg-white/20 border-r border-gray-400'">
          C
        </div>
        <div class="text-center w-full rounded-r-xl p-2 my-2 font-bold -ml-12">
          {{motions[0].c}}
        </div>  
      </div>
      <div class="my-2 flex w-full rounded-xl cursor-pointer border hover:bg-green-500 hover:text-white"
        :class="store.state.dark ? 'bg-gray-800 border-gray-600' : 'bg-gray-200 border-gray-400'">
        <div class="rounded-l-xl p-4 align-text-middle font-semibold w-12"
        :class="store.state.dark ? 'bg-black/20 border-r border-gray-600' : 'bg-white/20 border-r border-gray-400'">
          D
        </div>
        <div class="text-center w-full rounded-r-xl p-2 my-2 font-bold -ml-12">
          {{motions[0].d}}
        </div>  
      </div>
      <p class="mt-4 uppercase text-xs tracking-widest text-gray-400">
        YOUR VOTE WILL BE REGISTERED IN THE BLOCKCHAIN
      </p>
    </div>
    <div class="mt-8 text-center uppercase text-sm tracking-widest font-semibold justify-center">
      <div class="uppercase text-s tracking-widest text-gray-400 font-semibold text-center ">
        CURRENT MOTION ENDS IN
      </div>
      <CountDown :target_date="motions[0].ends" class="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-400" />
      <apexchart class="mt-6 flex justify-center" 
      type="radialBar" height="150" width="150" 
      :options="radialData.chartOptions" 
      :series="radialData.series" />
      <p class="uppercase text-sm tracking-widest text-gray-400 font-semibold">
        PARTICIPATION
      </p>
    </div>
</div>

</template>
