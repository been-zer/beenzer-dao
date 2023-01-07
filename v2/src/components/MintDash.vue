<script>
import TransactionArea from './TransactionsArea.vue';
import HoldersArea from './HoldersArea.vue';
import ChartsArea from './ChartsArea.vue';
import { useStore } from '../services/store';

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
  <div class="m-auto p-2 mt-0">
    <div class="flex flex-wrap justify-center p-4 text-gray-600 rounded-xl text-center shadow-xl shadow-yellow-400" 
    :class="store.state.dark ? 'bg-gray-800' : 'bg-white'">
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
