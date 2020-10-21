<template>
  <div @click="click" id="sort-btn-container">
    <IconWrapper class="down" :class="{'up': value}" id="arrow-down" w="14" h="14" color="#575757"></IconWrapper>
  </div>
</template>

<script>
export default {
  name: 'BXBSortButton',

  props: {
    value: {

    }
  },

  methods: {
    click: function () {
      this.$emit('input', !this.value)
    }
  },

}
</script>

<style lang="sass" scoped>
#sort-btn-container
  display: flex
  justify-content: center
  align-items: center
  .down
    transform: rotate(0deg)
    transition: 0.3s
  .up
    transform: rotate(180deg)
    transition: 0.3s
</style>