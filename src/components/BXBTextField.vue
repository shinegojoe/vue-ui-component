<template>
  <div id="text-field-container">
    <div class="text-style" :style="styleInit()">
      <slot></slot>

    </div>
  </div>
</template>

<script>
export default {
  name: 'BXBTextField',

  props: {
    family: {
      type: String,
      default: 'Helvetica'
    },

    size: {
      type: Number,
      default: 12
    },

    color: {
      type: String,
      default: 'white'
    },

    weight: {
      type: String,
      default: 'normal'
    }
  },

  methods: {
    styleInit: function() {
      const styleObj = {
        'font-size': this.size + 'px',
        'color': this.color,
        'font-weight': this.weight
      }
      return styleObj
    }
  }
}
</script>

<style lang="sass" scoped>
.text-style
  font-family: Helvetica
  font-size: 24px
  font-weight: normal
  font-stretch: normal
  font-style: normal
  line-height: normal
  letter-spacing: normal
  color: black
</style>