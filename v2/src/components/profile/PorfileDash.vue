<script>
import TransactionArea from '../minting/TransactionsArea.vue';
import HoldersArea from '../minting/HoldersArea.vue';
import ChartsArea from '../minting/ChartsArea.vue';
import { useStore } from '../../services/store';

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
  setup() {
    const store = useStore();

    return { store };
  }
}
</script>

<template>
  <div class="m-auto p-2 mt-0 sm:mr-28 sm:-ml-8">
    <div class="flex flex-wrap justify-center p-4 text-gray-600 rounded-xl text-center shadow-xl" 
    :class="store.state.dark ? 'bg-gray-800 shadow-white/20' : 'bg-white shadow-black/20'">
      <div>
        <transaction-area />
      </div>
      <div>
        <charts-area />
      </div> 
      <div>
        <holders-area />
      </div>
    </div>
  </div>
</template>
