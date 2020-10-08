<template>
  <div @click="btnClick" class="svg-wrapper" :class="[
    `btn-${type}`, 
    {'is-disabled': disabled}
  ]">
    <svg :width="w"
        :height="h"
        :fill="color">
      <!-- <use :xlink:href="xhref" -->
      <use :xlink:href="`/sprite.svg#${id}`"/>
    </svg>
  </div>
</template>

<script>
export default {
  name: "BXBIconButton",

  props: {

    type: {
      type: String,
      default: 'primary'
    },

    disabled: {
      type: Boolean,
      default: false
    },

    id: {
      type: String
    },
    w: {
      type: String,
      default: '24'
    },
    h: {
      type: String,
      default: '24'
    },
    color: {
      type: String,
      default: 'white'
    }
  },

  methods: {
    btnClick: function (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style scoped lang="sass">
.svg-wrapper
  // background-color: red
  display: flex
  align-items: center
  justify-content: center
  position: relative
  border: none
  width: 32px
  height: 32px
  text-transform: uppercase
  color: white
  transition-property: background-color
  transition-duration: 0.3s
  transition-timing-function: ease
  cursor: pointer
  border-radius: 3px
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
      width: 100%
      height: 32px
  // &:hover
  //   opacity: 0.8
.btn-primary
  background-color: #00615d

.btn-secondary
  background-color: white
  color: #00615d
  border: 2px solid #00615d
  box-sizing: border-box

.btn-third
  background-color: #00a487

.no-bg
  background-color: none

.is-disabled
  pointer-events: none
  cursor: not-allowed

  
    
</style>
