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
  // background-color: green
  color: #999999
  font-size: 14px
  text-transform: capitalize
  display: flex
  width: 100%
  margin-top: 40px
  border: 1px solid #efefef
  border-width: 0px 0 2px 0
  position: relative
  .item-wrapper
    height: 40px
    position: absolute
    /* bottom: -1px; */
    top: -40px
    left: 0
    // background-color: aquamarine
    display: flex
    .item
      width: 100px
      display: flex
      justify-content: center
      align-items: center
      border-bottom: 1px solid #efefef
      height: 39px
      cursor: pointer
      &:hover
        opacity: 0.8
    .active
      border-bottom: 2px solid #00a487
      color: #00615d
      

</style>

