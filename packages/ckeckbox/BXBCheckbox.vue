
<template>
  <div>
    <div class="checkbox-wrapperXXX">
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

.checkbox-wrapperXXX
  input[type=checkbox]
    -webkit-appearance: none
    -moz-appearance: none
    height: 20px
    outline: none
    display: inline-block
    vertical-align: top
    position: relative
    margin: 0
    cursor: pointer
    border: 2px solid #979797
    background: white
    transition: background .3s, border-color .3s, box-shadow .2s
    width: 20px
    &::after
      content: ''
      width: 9px
      height: 5px
      position: absolute
      top: 2px
      left: 2px
      border: 2px solid white
      border-top: none
      border-right: none
      background: transparent
      opacity: 0
      transform: rotate(-45deg)
    
    &:checked 
      background-color: #2f52a2
      &::after
        opacity: 1

</style>