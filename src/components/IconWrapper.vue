<template>
  <div class="svg-wrapper">
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
  name: 'IconWrapper',

  props: {
    id: {
      type: String
    },
    w: {
      type: String,
      default: '12'
    },
    h: {
      type: String,
      default: '12'
    },
    color: {
      type: String,
      default: 'black'
    }
  },

  data: function () {
    return {
    }
  }
  // computed: {
  //   xhref () {
  //     return `@/assets/svg/sprite.svg#${this.id}`
  //   }
  // }
}
</script>

<style scoped lang="sass">
  .svg-wrapper
    display: flex
    align-items: center
    justify-content: center
</style>
