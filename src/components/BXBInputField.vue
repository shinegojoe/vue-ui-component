<template>
  <div>
    <div v-show="isHeadOn" class="head-title">{{placeholder}}</div>
      <input 
        v-on="$listeners"
        :style="{width: width + 'px'}"
        :type="type" 
        :placeholder="placeholder"
        :disabled="disabled"
        :class="{'is-disabled': disabled}"
        class="input-field-wrapper"
      >
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
  
}
</script>

<style scoped lang="sass">
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
  box-sizing: border-box

.input-field-wrapper
  margin-top: 6px
  border: none
  border-bottom: 1px solid #848484
  outline: none
  transition: border-bottom-color 0.2s ease-in
  color: #414141
  width: 100px
  font-family: Helvetica
  font-size: 16px
  font-weight: normal
  font-stretch: normal
  font-style: normal
  line-height: normal
  letter-spacing: normal
  color: #dbdbdb

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