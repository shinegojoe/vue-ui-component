<template>
  <div v-show="isOpen" id="bxb-dialog-wrapper">
    <!-- <div class="bg-cover"></div> -->
    <div class="dialog-wrapper" :style="{ '--width': width + 'px'}">
      <div class="dialog-title">{{title}}</div>
      <slot></slot>
      <div class="btn-wrapper">
        <BXBButton @click="cancelClick" class="cancel-btn" type="secondary">cancel</BXBButton>
        <BXBButton @click="okClick" type="primary">ok</BXBButton>
      </div>
    </div>
    <div class="bg-cover"></div>
  </div>
</template>

<script>
export default {
  name: 'BXBDialog',

  props: {
    title: {
      type: String,
      default: ''
    },
    width: {
      type: Number,
      default: 400
    },
    value: {

    }
  },

  methods: {
    cancelClick: function () {
      console.log(this.value)
      this.isOpen = !this.isOpen
      // this.value = !this.value
      // this.$emit('value', this.value)
    },

    okClick: function () {
      this.$emit('okClick')
    }
  },

  computed: {
    isOpen: {
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
@keyframes cover
  from
    width: 0px
    height: 0px
  to
    // height: calc( 100vh - 65px )
    height: 100%
    width: 100%
#bxb-dialog-wrapper
  --width: 100px
  // position: relative
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: 100%
  .dialog-wrapper
    padding: 16px 16px
    box-sizing: border-box
    z-index: 11
    width: var(--width)
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    border-radius: 10px
    background-color: white
    .dialog-title
      text-transform: capitalize
      font-family: Helvetica
      font-size: 20px
      font-weight: normal
      font-stretch: normal
      font-style: normal
      line-height: normal
      letter-spacing: normal
      color: #00827e
      margin-bottom: 24px


    .btn-wrapper
      margin-top: 24px
      display: flex
      justify-content: flex-end
      .cancel-btn
        margin-right: 8px

  
  .bg-cover
    position: absolute
    top: 50%
    left: 50%
    // top: 0
    // left: 0
    transform: translate(-50%, -50%)
    width: 0px
    height: 0px
    opacity: 0.2
    // background-color: red
    background-color: rgba(0, 0, 0, 0.5)

    z-index: 10
    animation-name: cover
    animation-duration: 0.3s
    animation-fill-mode: forwards


  
</style>

