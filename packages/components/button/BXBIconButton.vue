<template>
  <div @click="btnClick" class="svg-wrapper">
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
      default: 'black'
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
    &:hover
      opacity: 0.8
</style>
