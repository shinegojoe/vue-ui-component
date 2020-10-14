<template>
  <div ref="dropdownWrapper" class="multi-dropdown-wrapper" :style="styleInit()">
    
    <div v-show="isLeftIcon" class="left-icon">
      <slot></slot>
    </div>
 
    <div class="menu-btn" @click="menuClick" v-bind:style="menuColor()">
      <div class="menu-title">{{titleFilter(title)}}</div>
      <div 
        class="icon-wrapper" 
        :style="{left: width - 30 + 'px'}"
        v-bind:class="{ 'icon-open': isOpen}">
        <IconWrapper id="keyboard-arrow-down" w="24" h="24" color="#565352"></IconWrapper>
      </div>
    </div>

    <div 
      ref="dropdown" 
      :style="{width: width + 'px'}"
      class="item-list-wrapper" 
      v-bind:class="{ 'menu-open': isOpen, 'scroll': this.maxHeight !== 0 }">
      <div v-for="(item, index) in dataList" :key="index+'_'" >
          <div class="rowz"  @click="itemClick($event, item)" :style="{width: width + 'px'}">
            <div class="item-text">{{item.title}}</div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import { CloseOutsideManager } from '@/models/closeOutsideManager.js'

export default {
  name: 'BXBDropdownMenu',

  props: {
    data: {
      type: Array,
      default: []
      // the object of data array has to contains the title property
    },

    maxLength: {
      type: Number,
      default: 10
      // the maxmin title number

    },

    width: {
      type: Number,
      default: 300
    },

    title: {
      type: String,
      default: ''
    },

    isBorder: {
      type: Boolean,
      default: true
    },

    fontSize: {
      type: Number,
      default: 12
    },

    fontColor: {
      type: String,
      default: '#00a487'
    },

    isLeftIcon: {
      type: Boolean,
      default: false
    },

    height: {
      type: Number,
      default: 26
    },

    maxHeight: {
      type: Number,
      default: 0
      // turn to scroll mode if maxHeight is not zero
    }

  },

  data: function () {
    return {
      closeOutsideManager: undefined,
      // title: 'open',
      isOpen: false,
      selectedList: undefined,
      // maxLength: 40
    }
  },

  // watch: {
  //   testData: function () {
  //     console.log('www')
  //     this.selectedListInit()
  //   }
  // },

  methods: {
    styleInit: function () {
      let pl = 0
      if(this.isLeftIcon) {
        pl = 8
      }

      return {
        '--title-size': this.fontSize + 'px',
        '--title-color': this.fontColor,
        '--padding-left': pl + 'px',
        '--height': this.height + 'px',
        '--max-height': this.maxHeight + 'px'
      }
    },

    menuColor: function () {
      const styleObj = {
        'background-color': '',
        'width': this.width + 'px',
      }
      if (this.isOpen) {
        styleObj['background-color'] = 'rgba(147, 255, 224, 0.2)'
        // styleObj['background-color'] = 'white'

      } else {
        styleObj['background-color'] = 'white'
      }
      if(!this.isBorder) {
        styleObj['border'] = 'none'
      }
      return styleObj
    },

    titleFilter: function (title) {
      if(title.length > this.maxLength) {
        const newTitle = title.slice(0, this.maxLength)
        return newTitle
      }

      return title
    },

    menuClick: function (e) {
      // this.checkBottomSpace()
      this.isOpen = !this.isOpen
      this.closeOutsideManager.closeAll(this)
      e.stopPropagation()
    },

    itemClick: function (e, item) {
      // console.log('item', item)
      this.$emit('selectUpdate', item)
      // e.stopPropagation()
    },

    closeOutside: function () {
      if (this.isOpen) {
        this.isOpen = false
      }
    },

    checkBottomSpace: function () {
      console.log('cb')
      // console.log('screen height', window.screen.height)
      // console.log('screen availHeight', window.screen.availHeight)
      // console.log('window.innerHeight', window.innerHeight)

      const dropdown = this.$refs.dropdown
      const menuHeight = parseInt(this.$refs.dropdownWrapper.offsetHeight)

      const dh = dropdown.offsetHeight
      // console.log('dh', dh)
      // dropdown.style.marginTop = '-235px'
      // console.log(dropdown.style)
      // console.log('y', dropdown.getBoundingClientRect())
      // console.log('screen', window.screen.availHeight)
      const availHeight = parseInt(window.innerHeight)
      const rect = dropdown.getBoundingClientRect()
      const bottom = parseInt(rect.bottom)
      const dropHeight = parseInt(rect.height)
      // console.log(availHeight, typeof(availHeight))
      // console.log(bottom, typeof(bottom))
      const mh = dropHeight + menuHeight
      if(availHeight - bottom < 0) {
        dropdown.style.marginTop =  `${mh * -1 }px`
      }
    }
  },

  computed: {
    dataList: {
      get: function () {
        // this.selectedListInit()
        // this.updateTitle()
        return this.data
      }
    }
  },

  created: function () {
    this.closeOutsideManager = new CloseOutsideManager()
    this.closeOutsideManager.registe(this)
    window.addEventListener('click', this.closeOutside)
  },

  mounted: function () {
    this.checkBottomSpace()
  },

  beforeDestroy () {
    window.removeEventListener('click', this.closeOutside)
    this.closeOutsideManager.remove(this)
  }
}
</script>

<style lang="sass" scoped>
// @import '@/sass/_guidelines.sass'

.multi-dropdown-wrapper
  position: relative
  --title-size: 12px
  --title-color: #00a487
  --padding-left: 0px
  --height: 32px
  // display: flex
  // align-items: center
  // width: 200px
  // padding: 0 10px
  // background-color: red

  .menu-btn
    padding-left: var(--padding-left)
    // width: 330px
    height: var(--height)
    box-sizing: border-box
    display: flex
    align-items: center
    justify-content: space-between
    position: relative
    border-radius: 5px
    border: solid 1px #979797
    transition: 0.3s
    
    // background-color: rgba(147, 255, 224, 0.2)
    // background-color: rgba(147, 255, 224, 0.2)

    .menu-title
      font-size: var(--title-size)
      // font-size: 12px
      color: var(--title-color)
      margin-left: 16px

  

  .item-list-wrapper
    margin-top: 3px
    border-radius: 4px
    box-shadow: 1px 2px 2px 0 rgba(0, 0, 0, 0.5)
    // box-shadow: 1px -2px 2px 0 rgba(0, 0, 0, 0.5)
    // box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)

    background-color: white
    width: 330px
    // display: none
    visibility: hidden
    position: absolute
    z-index: 2

   

      
  .scroll
    // display: inline
    // visibility: hidden
    overflow-y: scroll
    height: var(--max-height)
    // width: 100%
    &::-webkit-scrollbar
      width: 6px
      height: 0px
      background-color: #efefef
    &::-webkit-scrollbar-thumb
      border-radius: 30px
      background-color: #dcdcdc
      // min-height: 70px


  .menu-open
    // display: inline
    visibility: visible

  .rowz
    width: 330px
    // height: var(--height)
    height: var(--height)

    display: flex
    align-items: center

    // justify-content: space-around
    // background-color: white
    // margin: 10px

    &:hover
      background-color: rgba(147, 255, 224, 0.2)
    // visibility: hidden
    .item-text
      margin-left: 16px
      padding-left: var(--padding-left)
      display: flex
      align-items: center
      font-size: var(--title-size)
      color: var(--title-color)
      justify-content: center
    .setted-text
      // @include text-style($color: $primary, $size: 12px, $weight: normal)
      position: absolute
      right: 16px
      text-transform: capitalize


    // .menu-open
    //   visibility: visible
  .left-icon
    position: absolute
    // left: 0
    // top: 1px
    top: 50%
    // left: 50%
    transform: translateY(-50%)
    z-index: 1
  .icon-wrapper
    // position: absolute
    // left: 300px
    // top: 5px
    // top: 50%
    
    // left: 6px
    display: flex
    align-items: center
    // justify-content: center
    justify-content: flex-end
    // margin-left: 130px
    //margin-bottom: 5px
    // margin-right: 3px
    transform: rotate(0deg)
    transition: 0.5s
    color: #979797
    // background-color: red
    // width: 100%

  .icon-open
    // transform: rotate(180deg) translate(0%, -50%)
    transform: rotate(180deg)

  


</style>
