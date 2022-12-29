<template>
  <label class="switch">
    <input type="checkbox" @click="toggleCheckbox">
    <div class="slider round"></div>
  </label>
</template>

<script>
export default {
  el: 'MintSwitcher',
  data() {
    return {
      checkbox: true
    }
  },
  methods: {
    toggleCheckbox() {
      this.checkbox = !this.checkbox
      this.$emit('checkbox', this.checkbox)
    }
  }

}
</script>

<style scope="true">
.switch {
  position: relative;
  display: inline-block;
  width: 48px;
  height: 23px;
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
  background-color: rgba(42, 177, 15, 0.753);
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 22px;
  width: 22px;
  margin-left: -24px;
  background-color: rgb(255, 255, 255);
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #e60d0d8c;
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