<script lang="ts">
// import PolarChart from './charts/polarChart';
import { shortWallet, markWallet } from '../utils';
import { useStore } from '../services/store';

export default {
  methods: {
    shortWallet,
    markWallet
  },
  setup () {
    const store = useStore();
    const nf = Intl.NumberFormat();  
    
    const pieData = { 
      series: [400, 200, 120, 80, 70, 50, 45, 30, 20, 17, 12, 10, 8],
      chartOptions: {
        chart: {
          type: 'donut',
          foreColor: '#9CA3AF',
        },
        plotOptions: {
          pie: {
          donut: {
            labels: {
              show: true,
              total: {
                show: true,
                color: '#16a34a',
                label: 'Supply',
                formatter: () => '999000',
              }
            }
          }
        },
        },
        stroke:{
          colors:['#9CA3AF']
        },
        theme: {
          monochrome: {
            enabled: true,
            color: '#16a34a',
            shadeTo: store.state.dark ? 'dark' : 'light',
            shadeIntensity: 1
          }
        },
        legend: false,
        labels: ['#1', '#2', '#3', '#4', '#5', '#6', '#7', '#8', '#9', '#10', '#11', '#12', '#13', '#14' ],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }],
      },
    };

    const pieData2 = { 
      series: [300, 55, 13, 43, 22],
      chartOptions: {
        chart: {
          type: 'donut',
        },
        labels: ['🏴‍☠️', '🇪🇸', '🇨🇭', '🇺🇸', '🇷🇺'],
        legend: false,
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 280
            },
            legend: {
              position: 'bottom'
            }
          }
        }],
        theme: {
          monochrome: {
            enabled: true,
            color: '#16a34a',
            shadeTo: 'light',
            shadeIntensity: 1
          }
        },
      },
    };

    return {
      store,
      nf,
      pieData,
      pieData2,
    }
    
    
  }
}
</script>
<template>
<div class="p-2 text-center">
  <div class="mt-6 uppercase text-lg tracking-widest text-gray-400 font-semibold">
    TOKEN
  </div>
  <div class="uppercase text-3xl tracking-widest font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
    DISTRIBUTION
  </div>
  <div class="uppercase text-xs mt-6 px-2 sm:mx-8 tracking-widest text-gray-400 font-semibold">
    DISTRIBUTION BY WALLET
    <apexchart class="mt-4 flex justify-center" type="donut" height="300" width="300" :options="pieData.chartOptions" :series="pieData.series"></apexchart>
  </div>
  <div class="uppercase text-xs mt-6 -mb-2 px-2 sm:mx-8 tracking-widest text-gray-400 font-semibold">
    DISTRIBUTION BY COUNTRY
    <apexchart class="mt-4 flex justify-center" type="polarArea" height="300" width="300" :options="pieData2.chartOptions" :series="pieData2.series"></apexchart>
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