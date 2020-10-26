<template>

  <div :class="`--${styleType}-wrapper`">
    <input v-model="model" :name="name" type="radio" :id="id" :value="id">
  </div>
</template>

<script>
export default {
  name: 'BXBRadio',

  props: {
    value: {

    },

    id: {

    },

    name: {

    },

    styleType: {
      type: String,
      default: 'radio'
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
.--radio-wrapper
  display: flex
  align-items: center
  @supports(-webkit-appearance: none) or (-moz-appearance: none)
    input[type='radio']
      --active: #575757
      --active-inner: #fff
      // --focus: 2px rgba(39, 94, 254, .3)
      --border: #BBC1E1
      --border-hover: #575757
      --background: #fff
      --disabled: #F6F8FF
      --disabled-inner: #E1E6F9
      -webkit-appearance: none
      -moz-appearance: none
      height: 14px
      outline: none
      display: inline-block
      vertical-align: top
      position: relative
      margin: 0
      cursor: pointer
      border: 1px solid #575757
      // background: var(--b, var(--background));
      background: white
      transition: background .3s, border-color .3s, box-shadow .2s
      &:after
        content: ''
        display: block
        left: -4px
        top: -4px
        position: absolute
        transition: transform var(--d-t, .3s) var(--d-t-e, ease), opacity var(--d-o, .2s)
      &:checked
        --b: var(--active)
        --bc: var(--active)
        --d-o: .3s
        --d-t: .6s
        --d-t-e: cubic-bezier(.2, .85, .32, 1.2)
      &:disabled
        --b: var(--disabled)
        cursor: not-allowed
        opacity: .9
        &:checked
          --b: var(--disabled-inner)
          --bc: var(--border)
        & + label
          cursor: not-allowed
      &:hover
        &:not(:checked)
          &:not(:disabled)
            --bc: var(--border-hover)
      &:focus
        box-shadow: 0 0 0 var(--focus)
      
      &:not(.switch)
        width: 14px
        &:after
          opacity: var(--o, 0)
        &:checked
          --o: 1
      & + label
        font-size: 14px
        line-height: 21px
        display: inline-block
        vertical-align: top
        cursor: pointer
        margin-left: 4px
    input[type='radio']
      border-radius: 50%
      &:after
        width: 20px
        height: 20px
        border-radius: 50%
        // background: var(--active-inner);
        background: #00615d
        opacity: 0
        transform: scale(var(--s, .7))
      
      &:checked
        --s: .5

.--checkbox-wrapper
  display: flex
  align-items: center
  input[type='radio']
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