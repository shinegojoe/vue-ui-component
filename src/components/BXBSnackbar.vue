<template>
  <div class="snackbar-wrapper" v-show="value">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BXBSnackbar',

  props: {
    value: {
      
    },

    duration: {
      type: Number,
      default: 2000
    }
  },

  data: function () {
    return {
      isRunning: false
    }
  },

  watch: {
    value: async function () {
      // console.log('vvvv')
      if(this.isRunning) {
        return
      }
      this.isRunning = true
      const p = await this.wait()
      this.$emit('input', false)
      this.isRunning = false
    }
  },

  methods: {

    wait: function () {
      const p = new Promise((resolve, reject)=>{
        setTimeout(()=>{
          resolve()
        }, this.duration)
      })
      return p
    }
  },
}
</script>

<style lang="sass" scoped>
.snackbar-wrapper
  position: fixed
  right: 32px
  bottom: 32px
  width: 400px
  height: 56px
  border-radius: 3px
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5)
  background-color: #00a487
  display: flex
  align-items: center
  justify-content: center

  font-family: Helvetica
  font-size: 20px
  font-weight: normal
  font-stretch: normal
  font-style: normal
  line-height: normal
  letter-spacing: normal
  color: white
  z-index: 99

</style>

