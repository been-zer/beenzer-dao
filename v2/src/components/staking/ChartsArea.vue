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
      donutData,
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
    DISTRIBUTION
  </div>
  <div class="uppercase text-xs mt-8 px-2 sm:mx-8 tracking-widest text-gray-400 font-semibold">
    DISTRIBUTION BY WALLET
    <apexchart class="mt-4 flex justify-center" 
    type="donut" height="300" width="300" 
    :options="donutData.chartOptions" 
    :series="donutData.series" />
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