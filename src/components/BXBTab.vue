<template>
  <div class="tabs" :style="styleInit()">
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

    bgColor: {
      type: String,
      default: 'white'
    },

    activeText: {
      type: String,
      default: 'green'
    },

    activeLine: {
      type: String,
      default: 'green'
    }
  },

  data: function () {
    return {

    }
  },

  methods: {
    itemClick: function (item) {
      this.$emit('input', item)
    },
    
    styleInit: function () {
      const styleObj = {
        '--bg-color': this.bgColor,
        '--active-text': this.activeText,
        '--active-line': this.activeLine
      }
      console.log('xxx', this.activeText)
      return styleObj

     
    }
  }

  
}
</script>

<style lang="sass" scoped>
.tabs
  --bg-color: red
  --active-text: black
  --active-line: black
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
  box-sizing: border-box

  .item-wrapper
    height: 40px
    position: absolute
    /* bottom: -1px; */
    top: -37px
    left: 0
    // background-color: aquamarine
    display: flex
    box-sizing: border-box
    background-color: var(--bg-color)
    .item
      box-sizing: border-box
      width: 100px
      display: flex
      justify-content: center
      align-items: center
      border-bottom: 2px solid #efefef
      height: 39px
      cursor: pointer
      &:hover
        opacity: 0.8
    .active
      box-sizing: border-box
      border-bottom: 2px solid var(--active-line)
      color: var(--active-text)
      

</style>

