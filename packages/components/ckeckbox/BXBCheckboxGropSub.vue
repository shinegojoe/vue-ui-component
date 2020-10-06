

<template>
  <div>
    <div class="--checkbox-wrapper">
      <input type="checkbox" v-model="model" :checked="isActivate" :value="label" />
    </div>
    <!-- {{model}} -->
  </div>
</template>

<script>

export default {
  name: 'BXBCheckboxGropSub',

  props: {
    label: {
      type: String
    },

    value: {
      type: Boolean,
      defalut: false
    }
   
  },
  inject: {
    checkboxGrop: {
      default: ''
    }
  },

  computed: {
    model: {
      get() {
        // console.log('get')
        return this.checkboxGrop.value
      },
      set(value) {
        // console.log('set', value)
        this.checkboxGrop.checkSelectAll(value)
        this.checkboxGrop.$emit('input', value)
      }
    }
  },

  methods: {
    isActivate: function () {
      // console.log('isA', this.model)
      return this.model.includes(this.label)
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
    // vertical-align: top
    position: relative
    margin: 0
    cursor: pointer
    border: 1px solid #979797
    border-radius: 2px
    background: white
    transition: background .3s, border-color .3s, box-shadow .2s
    &::after
      content: ''
      width: 8px
      height: 4px
      position: absolute
      top: 3px
      left: 2px
      border: 1px solid white
      border-top: none
      border-right: none
      background: transparent
      opacity: 0
      transform: rotate(-45deg)
    
    &:checked 
      background-color: #00615d
      &::after
        opacity: 1

</style>

