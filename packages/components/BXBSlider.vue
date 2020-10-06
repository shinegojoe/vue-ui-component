<template>
  <div>
    <input 
      ref="testqqq"
      class="range-slider-2"
      :style="{ width: width+'px', height: height+'px', '--thumb-size': thumbSize +'px' }"
      v-model="speed" type="range" min="0" max="100">
  </div>
</template>

<script>
export default {
  name: 'BXBSlider',

  props: {
    value: {
      // type: Number,
      default: 1
    },

    width: {
      type: Number,
      default: 200
    },

    height: {
      type: Number,
      default: 10
    },

    thumbSize: {
      type: Number,
      default: 10
    }
  },


  computed: {
    speed: {
      set(val) {
        // console.log('set', val)
        this.$emit('input', val)
      },

      get() {
        return this.value
      }
    }
  }
  
}
</script>

<style>
/* :root {
  --color: coral;
} */
</style>

<style scoped lang="sass">

.range-slider-2
  --color: green
  --thumb-size: 10px
  // margin-top: 6px
  display: flex
  align-items: center
  -webkit-appearance: none
  // width: 300px
  // height: 15px
  // background: #d3d3d3
  background-color: #bdbdbd
  // background: var(--color)
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
    width: var(--thumb-size)
    height: var(--thumb-size)
    background: #00a487
    // background: var(--color)
    border-radius: 50%
    cursor: pointer
</style>