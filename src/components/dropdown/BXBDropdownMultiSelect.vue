<template>
  <div ref="dropdownWrapper" class="multi-dropdown-wrapper" :style="styleInit()">
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
      v-bind:class="{ 'menu-open': isOpen, 'scroll': this.maxHeight !== 0}">
       <BXBCheckboxGrop :isSelectAll="isSelectAll" v-model="model" :dataLength="data.length" v-on:qq="qq">
          <div @click="itemClick($event, item)" :style="{width: width + 'px'}" slot="box-grop" class="rowz" v-for="(item, index) in data" :key="index">
            <div class="check-wrapper">
              <BXBCheckboxGropSub 
                :boxSize="$attrs['boxSize']" 
                :check-w="$attrs['checkW']"
                :check-h="$attrs['checkH']"
                :check-top="$attrs['checkTop']"
                :check-left="$attrs['checkLeft']"

                :ref="item.title" 
                :label="item.title">
              </BXBCheckboxGropSub>
              <BXBTextField class="item-title" textType="capitalize" color="#00a487" :size="12">{{item.title}}</BXBTextField>

            </div>
           
            <!-- <div class="item-title">{{item.isChecked}}</div> -->
            <!-- <slot name="text-extension">{{item.title}}</slot> -->
            <div :style="extensionStyle(item.title)" v-show="isExtension">{{(extensionFilter(item.title))}}</div>
            
          </div>
        </BXBCheckboxGrop>
    </div>
  </div>
</template>

<script>
import { CloseOutsideManager } from '@/models/closeOutsideManager.js'

export default {
  name: 'BXBDropdownMultiSelect',

  props: {
    value: {

    },

    item: {
      // when the menu clicked, this item will be retuen
      
    },

    data: {
      type: Array,
      default: []
    },

    id: {

    },

    maxLength: {
      // the maxmin title number
      type: Number,
      default: 10
    },

    width: {
      type: Number,
      default: 200
    },

    height: {
      type: Number,
      default: 32
    },

    title: {
      type: [String, Array],
      default: ''
    },

    isSelectAll: {
      type: Boolean,
      default: false
    },

    maxHeight: {
      type: Number,
      default: 0
      // turn to scroll mode if maxHeight is not zero
    },

    isExtension: {
      // the extension text after item
      type: Boolean,
      default: false
    },

    extensionFilter: {
      // the filter function of extension text
      type: Function,
      default: ()=>{}
    },

    extensionStyle: {
      // the style of extension text
      type: Function,
      default: ()=>{}
    }
    // }

    // boxSize: {
      
    // }
  },

  data: function () {
    return {
      closeOutsideManager: undefined,
      // title: 'open',
      isOpen: false,
      // selectedList: ['item1'],
      // maxLength: 40
    }
  },

  // watch: {
  //   selectedList: function () {
  //     // console.log('www')
  //     this.$emit('input', this.selectedList)
  //     // this.selectedListInit()
  //   }
  // },

  methods: {
    

    qq: function () {
      console.log('qq click')
    },

    styleInit: function () {
      let pl = 0
      if(this.isLeftIcon) {
        pl = 22
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
      if (this.isOpen) {
        return {
          'background-color': 'rgba(147, 255, 224, 0.2)',
          'width': this.width + 'px'
        }
      } else {
        return {
          'background-color': 'white',
          'width': this.width + 'px'
        }
      }
    },

    titleFilter: function (title) {
      
      if(Array.isArray(title)) {
        console.log('isArray')
        if(title.length === 0) {
          return 
        }
        let newTitle = ''
        for(const item of title) {
          newTitle += item
          newTitle += ', '
          if(newTitle.length > this.maxLength) {
            newTitle = newTitle.slice(0, newTitle.length - 2)
            newTitle += '.....'
            break
          }
        }
        newTitle = newTitle.slice(0, newTitle.length - 2)
        // newTitle += '...'
        return newTitle

      } else {
        if(title.length > this.maxLength) {
          let newTitle = title.slice(0, this.maxLength)
          return newTitle
        }
        else {
          return title
        }
      }

      // return title
    },

    menuClick: function (e) {
      this.isOpen = !this.isOpen
      this.$emit('menuClick', this.item)
      this.closeOutsideManager.closeAll(this)
      e.stopPropagation()
    },

    itemClick: function (e, item) {
      console.log('item', item)
      // this.model = []
      const data = this.model
      console.log('data', data)
      const index = data.indexOf(item.title)
      console.log('index', index)
      if(index === -1) {
        data.push(item.title)
      } else {
        const newData = data.filter((dItem, index)=>{
          return dItem !== item.title 
        })
        this.model = newData
      }
      // this.$emit('inputXX', this.model)
      this.$emit('itemClick', item)

      e.stopPropagation()
    },

    closeOutside: function () {
      if (this.isOpen) {
        this.isOpen = false
      }
    },

    checkBottomSpace: function () {
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
    },

    model: {
      set: function(val) {
        this.$emit('input', val)
      },
      get: function () {
        return this.value
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
  // --max-height: 1
  position: relative

  .menu-btn
    width: 330px
    height: var(--height)
    border: 1px solid
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
      font-size: 12px
      color: #00a487
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
    height: var(--height)
    display: flex
    align-items: center
    justify-content: space-between
    padding: 0 16px
    box-sizing: border-box
    .check-wrapper
      display: flex
      align-items: center

    // justify-content: space-around
    // background-color: white
    // margin: 10px

    &:hover
      background-color: rgba(147, 255, 224, 0.2)
    // visibility: hidden
    .item-title
      margin-left: 16px
    .item-text
      margin-left: 16px
      display: flex
      align-items: center
      font-size: 12px
      color: #00a487
      justify-content: center
    .setted-text
      // @include text-style($color: $primary, $size: 12px, $weight: normal)
      position: absolute
      right: 16px
      text-transform: capitalize


    // .menu-open
    //   visibility: visible
  .icon-wrapper
    // position: absolute
    // left: 300px
    // top: 1px
    // left: 6px
    // width: 100%
    display: flex
    align-items: center
    // justify-content: flex-end

    // margin-left: 130px
    // margin-bottom: 5px
    transform: rotate(0deg)
    transition: 0.5s
    color: #979797
    // background-color: red
    // width: 100%

  .icon-open
    // transform: rotate(180deg) translate(0%, -50%)
    transform: rotate(180deg)


</style>
