<template>
  <div>
    <button @click="btnClick" class="btn-base" 
      :class="[`btn-${type}`, {
        'is-disabled': disabled
      }]">
      <slot></slot>
    </button>
   
  </div>
</template>

<script>
export default {
  name: 'BXBButton',

  props: {
    type: {
      type: String,
      default: 'primary'
    },

    disabled: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    btnClick: function (e) {
      this.$emit('click', e)
    }
  }
  
}
</script>

<style lang="sass" scoped>
.btn-base
  position: relative
  border: none
  min-width: 111px
  height: 36px
  padding: 0 22px
  // border-radius: 26px
  text-transform: uppercase
  color: white
  background-color: #2f52a2
  // transition: background-color 0.5s ease-in-out
  // transition: opacity 0.5s ease-in-out
  transition-property: background-color
  transition-duration: 0.3s
  transition-timing-function: ease
  cursor: pointer

  font-size: 12px
  font-weight: bold
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
      width: 111px
      height: 36px

.btn-primary
  background-color: #00615d

.btn-secondary
  background-color: white
  color: #00615d
  border: 2px solid #00615d
  border-radius: 3px

.is-disabled
  pointer-events: none
  cursor: not-allowed







</style>