

<template>
  <div id="select-container" :style="styleInit()">
    <div v-show="isSelectAll" class="select-all-wrapper">
      <div v-show="isUpLineOn" class="divider-up"></div>
      <slot name="select-all"></slot>
      <div v-show="isBottomLineOn" class="divider-bottom"></div>
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

    lineColor: {
      type: String,
      default: 'black'
    },

    isUpLineOn: {
      type: Boolean,
      default: false
    },


    isBottomLineOn: {
      type: Boolean,
      default: false
    }

    // dataList: {
    //   type: Array,
    //   defalut: []
    // },

   
  },

  methods: {
    styleInit: function() {
      return {
        '--line-color': this.lineColor
      }
    },

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
#select-container
  --line-color: black

.divider-up
  width: 100%
  // height: 1px
  border-bottom: solid 1px var(--line-color)
  box-sizing: border-box

.divider-bottom
  width: 100%
  // height: 1px
  border-bottom: solid 1px var(--line-color)
  box-sizing: border-box
</style>
