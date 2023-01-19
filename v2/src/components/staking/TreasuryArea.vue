<script lang="ts">
// import PolarChart from './charts/polarChart';
import { shortWallet, markWallet } from '../../utils';
import CountDown from '../modules/CountDown.vue';
import { useStore } from '../../services/store';

export default {
  components: {
    CountDown
  },
  methods: {
    shortWallet,
    markWallet
  },
  data () {
    return {
      date: '2023/02/01'
    }
  },
  setup () {
    const store = useStore();
    const nf = Intl.NumberFormat();  
    
   

    const lineData = { 
      series: [{
        name: 'BEENZ/USD',
        color: 'green',
        data: [
          { x:new Date('2023/04/01'), y:100 }, 
          { x:new Date('2023/04/02'), y:111 },
          { x:new Date('2023/04/03'), y:123 },
          { x:new Date('2023/04/04'), y:122 }, 
          { x:new Date('2023/04/05'), y:128 },
          { x:new Date('2023/04/06'), y:132 },
          { x:new Date('2023/04/07'), y:134 }, 
          { x:new Date('2023/04/08'), y:144 },
          { x:new Date('2023/04/09'), y:152 },
          { x:new Date('2023/04/10'), y:159 }, 
          { x:new Date('2023/04/11'), y:163 },
          { x:new Date('2023/04/12'), y:177 },
          { x:new Date('2023/04/13'), y:175 }, 
          { x:new Date('2023/04/14'), y:172 },
          { x:new Date('2023/04/15'), y:188 },
        ]
      }],
      chartOptions: {
        tooltip: {
          theme: store.state.dark ? 'dark' : 'light',
        },
        chart: {
          foreColor: '#9CA3AF',
        },
        xaxis: {
          type: 'datetime'
        },
        yaxis: [
          {
            labels: {
              formatter: function(val:number) {
                return val.toFixed(0);
              }
            }
          }
        ],
        dataLabels: {
          enabled: false,
        },
        legend: { 
          position: 'top' 
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.9,
            opacityTo: 0.7,
            shade: store.state.dark ? 'dark' : 'light',
            type: "horizontal"
          }
        },
        markers: {
          size: 3,
        },
        grid: {
          borderColor: '#cccccc',
          width: 1,
        },
        title: {
          text: '.',
          align: 'right',
        },
        stroke: {
          width: 2,
        },
      },
    };

    return {
      store,
      nf,
      lineData,
    }
    
    
  }
}
</script>
<template>
<div class="p-2 text-center">
  <div class="mt-6 uppercase text-lg tracking-widest text-gray-400 font-semibold">
    BEENZ
  </div>
  <div class="uppercase text-3xl tracking-widest font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
    TREASURY
  </div>
  
    <div class="py-4 text-center uppercase text-sm tracking-widest font-semibold justify-center">
      <div class="pl-2 pt-2">
        <p class="uppercase text-xl tracking-widest text-gray-400 font-semibold">
          NEXT SOL DIVIDEND
        </p>
        <p class="uppercase text-3xl tracking-widestfont-semibold">
          FEB  1  2023 
        </p>
        <CountDown :target_date="date" class="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-400" />
      </div>    
    </div>
    CountDown
    <CountDown :target_date="date" class="text-2xl uppercase p-4 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-400" />
  
  <div class="uppercase text-xs mt-8 px-2 sm:mx-8 tracking-widest text-gray-400 font-semibold">
    MARKET PRICE
  </div>
  <div class="uppercase text-left text-xs mt-8 -mb-2 px-2 sm:mx-8 tracking-widest text-gray-400 font-semibold">
    BEENZ/USD
    <div class="uppercase text-xs -mt-9 px-2 tracking-widest text-gray-400 font-semibold">
      <apexchart class="mt-4 -mb-8 -ml-8 flex justify-center text-gray-400" 
      type="area" height="280" width="380" theme="light"
      :options="lineData.chartOptions" 
      :series="lineData.series"/>
    </div>
  </div>
</div>
</template>
<style scoped>
#chart {
  border: none !important;
  border: 2px solid black !important;
  background: transparent !important;
}
</style>