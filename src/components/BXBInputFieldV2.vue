<template>
  <div>
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
      <div class="line" :style="{width: width + 'px'}"></div>
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

.line
  border-bottom: 1px solid #414141
  width: 100px
  margin-left: 2px

.head-title
  font-family: Helvetica
  font-size: 12px
  font-weight: normal
  font-stretch: normal
  font-style: normal
  line-height: normal
  letter-spacing: normal
  color: #292f34
  
  text-transform: capitalize
  margin-left: 3px

.head-active
  color: #00615d


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
  font-size: 16px
  font-weight: normal
  font-stretch: normal
  font-style: normal
  line-height: normal
  letter-spacing: normal
  // color: #dbdbdb
  color: #292f34

  // cursor: pointer
  // -webkit-box-sizing: border-box
  // -moz-box-sizing: border-box
  // box-sizing: border-box

  &:focus
    // background-color: red
    border-bottom-color: #00615d
    border-bottom-width: 1px
  &::placeholder
    // font-size: 30px
    text-transform: capitalize
    color: #dbdbdb
.is-disabled
  cursor: not-allowed



</style>