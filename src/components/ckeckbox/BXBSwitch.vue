<template>
  <div id="switch-container">
    <div class="box-container" >
      <div class="box-wrapper"
        v-bind:class="{'checked': model}"
      :before="beforeContent" :after="afterContent">
        <!-- <input @change="update" v-model="model" type="checkbox" :id="id" /> -->
        <input type="checkbox" v-model="model" :checked="model" :id="id"/>
        <!-- <label v-bind:class="{'checked': res}" :for="id"></label> -->
        <label :for="id"></label>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BXBSwitch',
  data: function () {
    return {
      beforeContent: '',
      afterContent: ''
    }
  },

  props: {
    value: {

    },
    id: {
      
    }
  },

  methods: {
    checkContent: function (res) {
      if (res) {
        this.beforeContent = 'on'
        this.afterContent = ''
      } else {
        this.beforeContent = ''
        this.afterContent = 'off'
      }
    },
  },

  watch: {
    value: function (val) {
      this.checkContent(val)
    }
  },

  computed: {
    model: {
      set(val) {
        console.log('set', val)
        this.checkContent(val)
        this.$emit('input', val)
      },
      get() {
        return this.value
      }
    }
  },

  mounted: function () {
    this.checkContent(this.value)
  }
  
}
</script>

<style lang="sass" scoped>
#switch-container
  .box-container
    display: flex
    flex-direction: row
    // width: 100px
    // background-color: red
  .text-name
    margin-left: 10px
    // background-color: red


  .box-wrapper
    width: 47px
    height: 21px
    background-color: #bdbdbd
    // background-color: red
    // margin: 20px auto
    position: relative
    border-radius: 50px
    // box-sizing: border-box
    // box-shadow: inset 0px 1px 1px rgba(0,0,0,0.5), 0px 1px 0px rgba(255,255,255,0.2)
  
    &:after
      content: attr(after)
      color: white
      position: absolute
      top: 50%
      right: 4px
      transform: translate3d(-50%, -50%, 0)
      z-index: 0
      font-size: 12px
      -webkit-transform : scale(0.66) translateY(-66%)

      // font: 12px/26px Arial, sans-serif
      // font-weight: bold
      font-family: Helvetica
      text-shadow: 1px 1px 0px rgba(255,255,255,.15)
      text-transform: uppercase
  
    &:before
      content: attr(before)
      color: white
      position: absolute
      left: 6px
      top: 50%
      z-index: 0
      font-family: Helvetica
      font-size: 12px
      -webkit-transform : scale(0.66) translateY(-66%)
      text-transform: uppercase


      // font-weight: normal
      // font-stretch: normal
      // font-style: normal
      // line-height: normal
      // letter-spacing: normal
      // text-transform: uppercase

    
    label
      display: block
      width: 19px
      height: 19px
      cursor: pointer
      position: absolute
      top: 1px
      left: 1px
      z-index: 1
      background: white
      // background: linear-gradient(top, #fcfff4 0%, #dfe5d7 40%, #b3bead 100%)
      border-radius: 50px
      transition: all 0.4s ease
      // box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.3)
    // .checked
      // background-color: white
      // border: 1px solid black
    
    input[type=checkbox]
      visibility: hidden
      &:checked + label
        left: 27px
  .checked
    background-color: #13cb96
  
</style>