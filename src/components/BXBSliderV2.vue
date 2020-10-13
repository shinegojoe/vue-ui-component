<template>
  <div class="slider-wrapper" :style="styleInit()">
    <input class="slider"
      @input="change" 
      type="range" min="0" max="100" step="1" 
      :value="model">
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      isDown: false,
    }
  },

  name: 'BXBSlider',

  props: {
    value: {
      // type: Number,
      default: 1
    },

    width: {
      type: Number,
      default: 220
    },

    height: {
      type: Number,
      default: 16
    },

    thumbSize: {
      type: Number,
      default: 16
    }
  },
  
  methods: {
    styleInit() {
      const styleObj = {
        '--xx': this.model + '%',
        '--width': this.width + 'px',
        '--height': this.height + 'px',
        '--thumb-size': this.thumbSize + 'px'
      }
      return styleObj
    },

    change: function (e) {
      // console.log('val', e.target.value)
      this.model = e.target.value
    }
  },

  computed: {
    model: {
      set(val) {
        this.$emit('input', val)
      },
      get() {
        return this.value
      }
    }
  }

  
}
</script>

<style scoped lang="sass">
.slider-wrapper
  --xx: 20%
  --right-color: #bdbdbd
  --left-color: #00a487
  --width: 0
  --height: 0

  .slider
    -webkit-appearance: none
    // overflow: hidden
    width: var(--width)
    height: var(--height)
    outline: none
    border-radius: 10px
    background: linear-gradient(90deg, var(--left-color) 0%, var(--left-color) var(--xx), var(--right-color) var(--xx), var(--right-color) 100%)
    &:hover
      opacity: 0.8
    &::-webkit-slider-thumb
      -webkit-appearance: none
      // border: 1px solid #000000
      height: var(--thumb-size)
      width: var(--thumb-size)
      border-radius: 50%
      background: #00a487
      cursor: pointer
      &:hover
        width: calc( var(--thumb-size) * 1.4)
        height: calc( var(--thumb-size) * 1.4)      





</style>