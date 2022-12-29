<template>
  <label class="switch">
    <input type="checkbox"
    @click="store.dispatch('setCurrency')" >
    <div class="slider round"></div>
  </label>
</template>

<script lang="ts">
import store from '../../store';

export default {
  el: 'CurrencySwitcher',
  data() {
    return {
      store,
      checkbox: true
    }
  },
}
</script>

<style scoped="true">
.switch {
  position: relative;
  display: inline-block;
  width: 36px;
  height: 22px;
  margin-left: 5px;
  margin-right: 5px;
}

.switch input {
  display: none;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(168, 168, 168, 0.753);
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 22px;
  width: 22px;
  left: 0;
  align-items: middle;
  background-color: rgb(240, 240, 240);
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #5e5e5e8c;
}

input:focus + .slider {
  box-shadow: 0 0 1px #101010;
}

input:checked + .slider:before {
  -webkit-transform: translateX(14px);
  -ms-transform: translateX(14px);
  transform: translateX(14px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>