<template>
  <div class="pagination-container">
    <button @click="lastClick"
      class="lastBtn" :disabled="isLastDisabled"></button>
    <div
      v-bind:class="{ 'notItem': isNotItem(item), 'activate': checkActivate(item)}"

      class="item" @click="btnClick(item)" v-for="(item, index) in shortData" :key="index">
      {{item}}
    </div>
    <button
      @click="nextClick"
      class="nextBtn"
      :disabled="isNextDisabled">
    </button>
  </div>
</template>

<script>
import { ButtonFactory } from '@/models/buttonFactory.js'
export default {
  name: 'BXBPagination',
  // props: ['endIndex', 'maxLength'],
  props: {
    endIndex: {
      type: Number,
      default: 20
    },

    maxLength: {
      type: Number,
      default: 10
    }
  },

  data: function () {
    return {
      buttons: [],
      // maxLength: 11,
      currentIndex: 1,
      isNextDisabled: false,
      isLastDisabled: true,
      shortData: undefined,
      buttonFactory: undefined
    }
  },

  methods: {
    isNotItem: function (item) {
      return item === '...'
    },

    checkActivate (item) {
      return this.currentIndex === item
    },

    init: function () {
      for (let i = 1; i <= this.endIndex; i++) {
        this.buttons.push(i)
      }
      this.dataLength = this.buttons.length
      // this.buttons.push('...')
      if (this.buttons.length >= this.maxLength) {
        // this.buttons = this.getShortButtons(this.buttons.length)
        this.shortData = this.getShortButtons(this.buttons.length)
      } else {
        this.shortData = this.buttons
      }
    },

    getShortButtons: function (dataLength) {
      const buttonList = []
      for (let i = 1; i <= this.maxLength - 1; i++) {
        buttonList.push(i)
      }
      // buttonList.splice(this.maxLength - 1, 0, '...')
      buttonList.push('...')
      buttonList.push(dataLength)
      return buttonList
    },

    checkLeftBoundary: function () {
      if (this.currentIndex === 1) {
        this.isLastDisabled = true
      } else {
        this.isLastDisabled = false
      }
    },

    checkRightBoundary: function () {
      if (this.currentIndex === this.dataLength) {
        this.isNextDisabled = true
      } else {
        this.isNextDisabled = false
      }
    },

    btnClick: function (index) {
      // console.log('index', index)
      if (index === '...') {
        return
      }
      this.currentIndex = index
      this.checkLeftBoundary()
      this.checkRightBoundary()
      // this.shortDataUpdate()
      if (this.dataLength >= this.maxLength) {
        this.shortData = this.buttonFactory.getButton(this.currentIndex)
      }
      // this.shortData = this.buttonFactory.getButton(index)
      // if (this.buttons.length >= this.maxLength) {
      //   this.buttons = this.getShortButtons()
      // }
      this.$emit('pageChange', this.currentIndex)
    },

    nextClick: function () {
      this.currentIndex += 1
      this.checkLeftBoundary()
      this.checkRightBoundary()
      if (this.dataLength >= this.maxLength) {
        this.shortData = this.buttonFactory.getButton(this.currentIndex)
      }
      this.$emit('pageChange', this.currentIndex)
    },

    lastClick: function () {
      this.currentIndex -= 1
      this.checkLeftBoundary()
      this.checkRightBoundary()
      if (this.dataLength >= this.maxLength) {
        this.shortData = this.buttonFactory.getButton(this.currentIndex)
      }
      this.$emit('pageChange', this.currentIndex)
    }
  },

  mounted: function () {
    this.buttonFactory = new ButtonFactory(this.endIndex, this.maxLength)
    this.init()
  },


}
</script>

<style lang="sass" scoped>
.pagination-container
  display: flex
  .item
    box-sizing: border-box
    display: flex
    justify-content: center
    align-items: center
    margin: 0 4px
    // height: 20px
    // padding: 5px
    cursor: pointer
    width: 24px
    height: 24px
    border-radius: 4px
    border: solid 1px #00615d
    background-color: white
    color: #00615d
    font-size: 12px
  .notItem
    // background-color: red
    border: none
    background-color: transparent
    // background-color: gray
    cursor: default
  .activate
    background-color: rgba(147, 255, 224, 0.2)
  button
    // height: 24px
    border-radius: 4px
    border: solid 1px #00615d
    background-color: white
    color: #00615d
    outline: none
    cursor: pointer
    &:disabled
      border: solid 1px gray
      color: gray
  .lastBtn
    width: 24px
    height: 24px
    margin-right: 8px
    &::after
      width: 24px
      height: 24px
      // padding: 5px
      font-size: 12px
      content: '<'
  .nextBtn
    width: 24px
    height: 24px
    margin-left: 8px
    &::after
      width: 24px
      height: 24px
      // padding: 5px
      font-size: 12px
      content: '>'

</style>