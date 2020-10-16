
<template>
  <div>
    <div class="--checkbox-wrapper">
      <input type="checkbox" v-model="model" :checked="value" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BXBCheckbox',

  props: {
    value: {
      type: Boolean,
      default: false
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
  }

  
}
</script>

<style lang="sass" scoped>

.--checkbox-wrapper
  display: flex
  align-items: center
  input[type=checkbox]
    -webkit-appearance: none
    -moz-appearance: none
    height: 16px
    width: 16px
    outline: none
    display: inline-block
    position: relative
    margin: 0
    cursor: pointer
    border: 1px solid #979797
    background: white
    transition: background .3s, border-color .3s, box-shadow .2s

    &::after
      content: ''
      width: 8px
      height: 4px
      position: absolute
      top: 4px
      left: 3px
      border: 1px solid white
      border-top: none
      border-right: none
      background: transparent
      opacity: 0
      transform: rotate(-45deg)
      box-sizing: border-box

    
    &:checked 
      background-color: #00615d
      &::after
        opacity: 1

</style>