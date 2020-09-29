<template>
  <div>
    <input 
      class="range-slider-2" 
      v-model="speed" type="range" min="1" max="100">
  </div>
</template>

<script>
export default {
  name: 'BXBSlider',

  props: {
    value: {
      // type: Number,
      default: 1
    }
  },

  computed: {
    speed: {
      set(val) {
        console.log('set', val)
        this.$emit('input', val)
      },

      get() {
        return this.value
      }
    }
  },

  methods: {
    speedChangeUpdate: function () {

    }
  }
  
}
</script>

<style scoped lang="sass">
.range-slider-2
  margin-top: 10px
  -webkit-appearance: none
  width: 100%
  height: 15px
  background: #d3d3d3
  outline: none
  opacity: 1
  -webkit-transition: .2s
  transition: opacity .2s
  border-radius: 6px
  &:hover
    opacity: 0.8
  &::-webkit-slider-thumb
    -webkit-appearance: none
    appearance: none
    width: 25px
    height: 25px
    background: #00a487
    border-radius: 50%
    cursor: pointer
</style>