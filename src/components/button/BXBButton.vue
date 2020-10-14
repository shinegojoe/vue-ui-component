<template>
  <div>
    <button @click="btnClick" class="btn-base btn-margin" 
      :style="styleInit()"
      :class="[`--btn-${type}`, {
        'is-disabled': disabled
      }]">
      <div class="slot-wrapper" :class="{'is-add-icon': isAddIcon}">
        <slot></slot>
        <div class="btn-icon">
          <slot name="icon"></slot>
        </div>
      </div>
     
    </button>
   
  </div>
</template>

<script>
export default {
  name: 'BXBButton',

  props: {
    type: {
      type: String,
      default: 'primary'
    },

    disabled: {
      type: Boolean,
      default: false
    },

    margin: {
      type: String,
      default: '0 4px 0 4px'
    },

    isAddIcon: {
      type: Boolean,
      default: false
    },

    fontType: {
      type: String,
      default: 'uppercase'
    }

  },

  methods: {
    btnClick: function (e) {
      this.$emit('click', e)
    },

    styleInit: function () {
      return {
        '--margin': this.margin,
        '--font-type': this.fontType
      }
    }
  }
  
}
</script>

<style lang="sass" scoped>
.btn-base
  --margin: 0 0 0 0 
  --font-type: uppercase
  position: relative
  border: none
  min-width: 104px
  height: 32px
  // padding: 0 22px
  // border-radius: 26px
  // text-transform: uppercase
  color: white
  // background-color: #2f52a2
  // transition: background-color 0.5s ease-in-out
  // transition: opacity 0.5s ease-in-out
  transition-property: background-color
  transition-duration: 0.3s
  transition-timing-function: ease
  cursor: pointer
  border-radius: 3px

  font-size: 12px
  font-weight: bold
  font-stretch: normal
  font-style: normal
  line-height: normal
  letter-spacing: normal
  text-transform: var(--font-type)
  


  &:after
    content: ""
    position: absolute
    width: 0
    height: 0
    top: 50%
    left: 50%
    transform-style: flat
    transform: translate3d(-50%,-50%,0)
    background: rgba(white,.1)
    // border-radius: 26px
    transition: width .1s ease, height .1s ease

  
  &:focus
    outline: 0
  &:hover
    // background-color: rgba(236, 236, 236) !important
    opacity: 0.8
    // background-color: #4b69ae

  &:active
    // background-color: rgba(255, 255, 255, 0.9)
    // opacity: 0.8
    &:after
      width: 100%
      height: 36px

.--btn-primary
  background-color: #00615d

.--btn-secondary
  background-color: white
  color: #00615d
  border: 2px solid #00615d
  box-sizing: border-box


.--btn-third
  background-color: #00a487

.--btn-gray-light
  background-color: #ababab

.--btn-gray-dark
  background-color: #888888

.--btn-warning
  background-color: #C30D23



.btn-margin
  margin: var(--margin)


.is-disabled
  background-color: #E0E0E0
  color: #B0B0B0
  pointer-events: none
  cursor: not-allowed


.slot-wrapper
  display: flex
  align-items: center
  // justify-content: space-between
  padding: 0 8px
  box-sizing: border-box
  justify-content: center
  // position: relative
    
.is-add-icon
  justify-content: space-between
  box-sizing: border-box

  padding: 0 8px
  .btn-icon
    // background-color: red
    padding-left: 6px








</style>