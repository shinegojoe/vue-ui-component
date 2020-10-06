<template>
  <div>
    <button @click="btnClick" class="btn-base" :style="styleInit()"
      :class="[{
        'is-disabled': disabled
      }]">
      <slot></slot>
    </button>
   
  </div>
</template>

<script>
export default {
  name: 'BaseButton',

  props: {
    type: {
      type: String,
      default: 'primary'
    },

    disabled: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number,
      default: 200
    },

    height: {
      type: Number,
      default: 30
    },

    borderRadius: {
      type: String,
      default: '3px'
    },

    fontSize: {
      type: Number,
      default: 12
    },

    bgColor: {
      type: String,
      default: 'black'
    }
  },

  methods: {
    btnClick: function (e) {
      this.$emit('click', e)
    },

    styleInit: function() {
      const styleObj = {
        '--width': this.width + 'px',
        '--height': this.height + 'px',
        '--border-radius': this.borderRadius,
        '--font-size': this.fontSize + 'px',
        '--bg-color': this.bgColor
      }
      return styleObj
    }
  }
  
}
</script>

<style lang="sass" scoped>
.btn-base
  --width: 100px
  --height: 0
  --border-radius: 0
  --font-size: 0
  --bg-color: red
  position: relative
  border: none
  // min-width: 111px
  width: var(--width)
  height: var(--height)
  padding: 0 22px
  border-radius: var(--border-radius)
  text-transform: capitalize
  color: white
  background-color: var(--bg-color)
  // transition: background-color 0.5s ease-in-out
  // transition: opacity 0.5s ease-in-out
  transition-property: background-color
  transition-duration: 0.3s
  transition-timing-function: ease
  cursor: pointer

  font-size: var(--font-size)
  font-family: Helvetica
  font-weight: normal
  font-stretch: normal
  font-style: normal
  line-height: normal
  letter-spacing: normal
  
  &:after
    content: ""
    position: absolute
    width: 0
    height: 0
    top: 50%
    left: 50%
    transform-style: flat
    transform: translate3d(-50%,-50%,0)
    background: rgba(white,.1)
    // border-radius: 26px
    transition: width .1s ease, height .1s ease
  
  &:focus
    outline: 0
  &:hover
    // background-color: rgba(236, 236, 236) !important
    opacity: 0.8
    // background-color: #4b69ae

  &:active
    // background-color: rgba(255, 255, 255, 0.9)
    // opacity: 0.8
    &:after
      width: var(--width)
      height: var(--height)


.is-disabled
  pointer-events: none
  cursor: not-allowed







</style>