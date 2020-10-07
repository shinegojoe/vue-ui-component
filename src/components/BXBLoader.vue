<template>
  <div v-show="isLoading" class="loading-wrapper">
    <div class="lds-ripple"><div></div><div></div></div>
    <div class="loading-text">loading ...</div>
  </div>
</template>

<script>
export default {
  name: 'BXBLoader',

  props: {
    value: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    isLoading: {
      set: function (val) {
        this.$emit('input', val)
      },
      get: function () {
        return this.value
      }
    }
  }
  
}
</script>

<style lang="sass" scoped>
$primary: #00615d
$secondary: #00a487

.loading-wrapper
  position: absolute
  width: 300px
  height: 200px
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  // background-color: rgba(255, 255, 255, 0.9)
  background-color: rgb(255, 255, 255)
  border-radius: 5px
  box-shadow: 0.5px 0.5px 5px 0 $secondary

  display: flex
  justify-content: center
  align-items: center

  .lds-hourglass
    display: inline-block
    position: relative
    width: 80px
    height: 80px
    
  .lds-hourglass:after
    content: ""
    display: block
    border-radius: 50%
    width: 0
    height: 0
    margin: 8px
    box-sizing: border-box
    border: 32px solid $secondary
    border-color: $secondary transparent $secondary transparent
    animation: lds-hourglass 1.2s infinite

  @keyframes lds-hourglass
    0%
      transform: rotate(0)
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19)
    50%
      transform: rotate(900deg)
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1)
    100%
      transform: rotate(1800deg)


  .lds-ripple
    display: inline-block
    position: relative
    width: 80px
    height: 80px

  .lds-ripple div
    position: absolute
    border: 4px solid $secondary
    opacity: 1
    border-radius: 50%
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite

  .lds-ripple div:nth-child(2)
    animation-delay: -0.5s

  @keyframes lds-ripple
    0%
      top: 36px
      left: 36px
      width: 0
      height: 0
      opacity: 1
    100%
      top: 0px
      left: 0px
      width: 72px
      height: 72px
      opacity: 0

  .loading-text
    color: $secondary
    animation: loading-text-anim 1.2s infinite
    // opacity: 1
  @keyframes loading-text-anim
    from
      opacity: 0
    to
      opacity: 1


</style>