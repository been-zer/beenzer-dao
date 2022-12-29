<template>
  <label class="switch">
    <input type="checkbox"
    @click="this.$store.dispatch('setFlag', '🏴‍☠️')" >
    <div class="slider round"></div>
  </label>
</template>

<script>
export default {
  el: 'LocationSwitcher',
  data() {
    return {
      checkbox: true
    }
  },
}
</script>

<style scoped="true">
.switch {
  position: relative;
  display: inline-block;
  width: 52px;
  height: 22px;
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
  align-items: middle;
  background-color: rgb(255, 255, 255);
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
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>