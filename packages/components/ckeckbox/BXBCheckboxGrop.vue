

<template>
  <div>
    <div v-show="isSelectAll" class="select-all-wrapper">
      <div class="divider"></div>
      <slot name="select-all"></slot>
      <div class="divider"></div>
    </div>
   

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
    },
    isSelectAll: {
      type: Boolean,
      default: false
    },

    // dataList: {
    //   type: Array,
    //   defalut: []
    // },

   
  },

  methods: {
    checkSelectAll: function (val) {
      console.log('check-selecte-all', val)
      // if(val.length !== 0) {
      //   // this.selectedList = this.testData
      //   this.selectedList = this.testData.map((item, index)=>{
      //     return item.title
      //   })
      // } else {
      //   this.selectedList = []
      // }
      if(val.length !== 0) {
        this.$emit('selectAllUpdate', false)
      }
      if(val.length === this.dataLength) {
        this.$emit('selectAllUpdate', true)
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
