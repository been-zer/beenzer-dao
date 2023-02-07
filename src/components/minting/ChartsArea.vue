<script lang="ts">
// import PolarChart from './charts/polarChart';
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
    
    const donutData = { 
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
                formatter: () => '999916',
              }
            }
          }
        },
        },
        stroke:{
          colors:['#66000000'],
          width: 1
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
        // responsive: [{
        //   breakpoint: 480,
        //   options: {
        //     chart: {
        //       width: 200
        //     },
        //     legend: {
        //       position: 'bottom'
        //     }
        //   }
        // }],
      },
    };

    const radarData = { 
      series: [ 20, 100, 40, 30, 50, 80],
      chartOptions: {

        chart: {
          type: 'radar',
          foreColor: '#9CA3AF',
        },
        dataLabels: {
          enabled: true
        },
        plotOptions: {
          radar: {
            size: 140,
            polygons: {
              strokeColors: '#e9e9e9',
              fill: {
                colors: ['#f8f8f8', '#fff']
              }
            }
          }
        },
        labels: ['🏴‍☠️', '🇪🇸', '🇨🇭', '🇺🇸', '🇷🇺', '🇦🇷'],
        xaxis: {
          categories: ['🏴‍☠️', '🇪🇸', '🇨🇭', '🇺🇸', '🇷🇺', '🇦🇷'],
          labels: {
            show: true,
            
          }
        },
        legend: false,
        
        theme: {
          monochrome: {
            enabled: true,
            color: '#16a34a',
            shadeTo: store.state.dark ? 'dark' : 'light',
            shadeIntensity: 1
          }
        },
       
      },
    };

    return {
      store,
      nf,
      donutData,
      radarData,
    }
    
    
  }
}
</script>
<template>
<div class="p-2 text-center">
  <div class="mt-6 uppercase text-lg tracking-widest text-gray-400 font-semibold">
    BEEN
  </div>
  <div class="uppercase text-3xl tracking-widest font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
    DISTRIBUTION
  </div>
  <div class="uppercase text-xs mt-6 px-2 sm:mx-8 tracking-widest text-gray-400 font-semibold">
    DISTRIBUTION BY WALLET
    <apexchart class="mt-4 flex justify-center" 
    type="donut" height="300" width="300" 
    :options="donutData.chartOptions" 
    :series="donutData.series" />
  </div>
  <div class="uppercase text-xs mt-6 -mb-2 px-2 sm:mx-8 tracking-widest text-gray-400 font-semibold">
    DISTRIBUTION BY COUNTRY
    <apexchart class="mt-4 flex justify-center" 
    type="polarArea" height="300" width="300" 
    :options="radarData.chartOptions" 
    :series="radarData.series" />
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