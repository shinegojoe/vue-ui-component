<template>
  <div class="tabs">
    <div class="item-wrapper">
      <!-- <div class="item">tab1</div>
      <div class="item active">tab2</div>
      <div class="item">tab3</div> -->
      <div @click="itemClick(item)" 
        class="item" :class="{'active': item === value}" 
        v-for="(item, index) in tabList" :key="index">
        {{item}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BXBTab",

  props: {
    value: {

    },
    tabList: {
      type: Array,
      defalut: []
    },

  },

  data: function () {
    return {

    }
  },

  methods: {
    itemClick: function (item) {
      this.$emit('input', item)
    }
  }
}
</script>

<style lang="sass" scoped>
.tabs
  background-color: green
  color: red
  display: flex
  width: 100%
  margin-top: 40px
  border: 1px solid
  border-width: 0px 0 2px 0
  position: relative
  .item-wrapper
    height: 40px
    position: absolute
    /* bottom: -1px; */
    top: -40px
    left: 0
    background-color: aquamarine
    display: flex
    .item
      width: 100px
      display: flex
      justify-content: center
      align-items: center
      border-bottom: 1px solid
      height: 40px
    .active
      border-bottom: 2px solid green

</style>

