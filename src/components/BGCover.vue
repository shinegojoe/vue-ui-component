<template>
  <div v-show="value" class="bg-cover"></div>
</template>

<script>
export default {
  name: 'BGCover',
  props: {
    value: {

    }
  },

  // computed: {
  //   model: {
  //     set(val) {

  //     },
  //     get() {
  //       return this.value
  //     }
  //   }
  // }
}
</script>

<style lang="sass" scoped>
@keyframes cover
  from
    width: 0px
    height: 0px
  to
    height: 100%
    width: 100%

.bg-cover
    position: absolute
    top: 50%
    left: 50%
    // top: 0
    // left: 0
    transform: translate(-50%, -50%)
    width: 0px
    height: 0px
    opacity: 0.2
    background-color: rgba(0, 0, 0, 0.5)
    z-index: 10
    animation-name: cover
    animation-duration: 0.3s
    animation-fill-mode: forwards
</style>