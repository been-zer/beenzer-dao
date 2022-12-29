<template>
  <div>
    <CountDown :time=time :transform="transformSlotProps" v-slot="{ days, hours, minutes, seconds }">
      {{ days }}d {{ hours }}h {{ minutes }}m {{ seconds }}s
    </CountDown>
  </div>
</template>

<script>
  import CountDown from '@chenfengyuan/vue-countdown';

  export default ({
    components: {
      CountDown
    },
    props: [
      'target_date'
    ],
    data() { 
      const _date = this.target_date.split('/');
      const expires = new Date(Date.UTC(_date[0], _date[1], _date[2]));
      const now = new Date().getTime();
      const time = expires.getTime()-now; 

      return {
        time 
      } 
    } 
  })
</script>
