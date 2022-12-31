<template>
  <!-- Right Panel -->

  <div class="m-auto p-2 mt-0">
    <div class="flex flex-wrap p-4 text-gray-600 rounded-xl text-center shadow-xl shadow-yellow-400" :class="this.$store.state.dark ? 'bg-gray-800' : 'bg-white'">
      <div>
        <transaction-area />
      </div>
      <div>
        <holders-area />
      </div>
      <div>
        <charts-area />
      </div> 
    </div>
  </div>


</template>

<script>
import TransactionArea from './TransactionsArea.vue';
import HoldersArea from './HoldersArea.vue';
import ChartsArea from './ChartsArea.vue';


export default {
  components: {
    TransactionArea,
    HoldersArea,
    ChartsArea,
  },
  props: [

  ],
  methods: {

  },
}
</script>
