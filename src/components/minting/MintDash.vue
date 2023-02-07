<script>
import TransactionArea from './TransactionsArea.vue';
import HoldersArea from './HoldersArea.vue';
import ChartsArea from './ChartsArea.vue';
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
  <div class="p-2 mt-0 m-auto w-full sm:w-auto">
    <div class="flex flex-wrap justify-center p-4 text-gray-600 rounded-xl text-center shadow-lg" 
    :class="[store.state.dark ? 'bg-gray-800' : 'bg-white',
    `shadow-${store.state.userColor}`]">
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
