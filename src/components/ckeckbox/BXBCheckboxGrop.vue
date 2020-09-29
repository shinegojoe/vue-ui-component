

<template>
  <div>
    <div class="divider"></div>
    <slot name="select-all"></slot>
    <div class="divider"></div>

    <slot name="box-grop"></slot>
  </div>
</template>

<script>

export default {
  name: 'BXBCheckboxGrop',

  props: {
    value: {
      type: Array,
      defalut: []
    },
    dataLength: {
      type: Number,
      default: 1
    }
   
  },

  methods: {
    checkSelectAll: function (val) {
      console.log('check-selecte-all', val)
      if(val.length !== 0) {
        this.$emit('qq', false)
      }
      if(val.length === this.dataLength) {
        this.$emit('qq', true)
      }
      // this.$emit('qq')
    }
  },

  provide() {
    return {
      checkboxGrop: this
    }
  }

}
</script>

<style lang="sass" scoped>
.divider
  width: 100%
  // height: 1px
  border: solid 1px #95bab9
  box-sizing: border-box
</style>
