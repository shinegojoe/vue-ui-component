<template>
  <div id="input-field-container" :style="styleInit()">
    <div v-show="isHeadOn" class="head-title" :class="{'head-active': isFocus}">{{placeholder}}</div>
      <input
        @mousedown="mouseDown"
        @blur="blur"
        ref="inputEle"
        v-model="model"
        :style="{width: width + 'px'}"
        :type="type" 
        :placeholder="placeholder"
        :disabled="disabled"
        :class="{'is-disabled': disabled}"
        class="input-field-wrapper"
      >
      <div class="line" :class="{'line-active': isFocus}" :style="{width: width + 'px'}"></div>
  </div>
</template>

<script>
export default {
  name: 'BXBInputField',

  props: {
    value: {

    },

    isHeadOn: {
      type: Boolean,
      default: false
    },

    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },

    disabled: {
      type: Boolean,
      default: false
    },

    width: {
      type: Number,
      default: 200
    },

    fontSize: {
      type: Number,
      default: 16
    },

    lineColor: {
      type: String,
      default: 'black'
    },

    activeColor: {
      type: String,
      default: 'black'
    },

    textColor: {
      type: String,
      default: 'black'
    }
  },

  data: function () {
    return {
      isFocus: false
    }
  },

  methods: {
    mouseDown: function () {
      this.isFocus = true
    },

    blur: function () {
      this.isFocus = false
      this.$emit('blur')
    },

    styleInit: function () {
      const styleObj = {
        '--font-size': this.fontSize + 'px',
        '--text-color': this.textColor,
        '--line-color': this.lineColor,
        '--active-color' : this.activeColor,
      }
      return styleObj
    }
  },


  computed: {
    model: {
      set(val) {
        this.$emit('input', val)
      },
      get() {
        return this.value
      }
    }
  },

  mounted: function () {
    this.inputEle = this.$refs.inputEle
    // console.log('inputEle', inputEle)
  }
  
}
</script>

<style scoped lang="sass">
#input-field-container
  --font-size: 12px
  --line-color: black
  --active-color: black
  --text-color: black
  

  .line
    border-bottom: 1px solid var(--line-color)
    width: 100px
    // margin-left: 2px
  .line-active
    border-bottom: 1px solid var(--active-color)


  .head-title
    font-family: Helvetica
    font-size: 12px
    font-weight: normal
    font-stretch: normal
    font-style: normal
    line-height: normal
    letter-spacing: normal
    color: var(--text-color)
    
    text-transform: capitalize
    // margin-left: 3px
    box-sizing: border-box
    height: 16px


  .head-active
    color: var(--active-color)
    font-size: 14px
    transition: 0.5s


  .input-field-wrapper
    box-sizing: border-box
    margin-top: 6px
    border: none
    // border-bottom: 1px solid #848484
    outline: none
    transition: border-bottom-color 0.2s ease-in
    // color: #414141
    width: 100px
    font-family: Helvetica
    font-size: var(--font-size)
    font-weight: normal
    font-stretch: normal
    font-style: normal
    line-height: normal
    letter-spacing: normal
    // color: #dbdbdb
    color: var(--text-color)

    // cursor: pointer
    // -webkit-box-sizing: border-box
    // -moz-box-sizing: border-box
    // box-sizing: border-box

    // &:focus
    //   // background-color: red
    //   border-bottom-color: #00615d
    //   border-bottom-width: 1px
    &::placeholder
      // font-size: 30px
      text-transform: capitalize
      color: #dbdbdb
  .is-disabled
    cursor: not-allowed



</style>