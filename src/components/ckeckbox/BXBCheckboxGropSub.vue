

<template>
  <div>
    <div class="--checkbox-wrapper" :style="styleInit()">
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
    },

    boxSize: {
      type: Number,
      default: 16
    },

    checkW: {
      type: Number,
      default: 8
    },

    checkH: {
      type: Number,
      default: 4
    },

    checkTop: {
      type: Number,
      default: 3
    },

    checkLeft: {
      type: Number,
      default: 2
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
        console.log('set', value)
        this.checkboxGrop.checkSelectAll(value)
        this.checkboxGrop.$emit('input', value)
      }
    }
  },

  methods: {
    isActivate: function () {
      // console.log('isA', this.model)
      return this.model.includes(this.label)
    },

    setModel(val) {
      this.model = val
    },

    styleInit() {
      const styleObj = {
        '--box-size': this.boxSize + 'px',
        '--check-w': this.checkW + 'px',
        '--check-h': this.checkH + 'px',
        '--check-top': this.checkTop + 'px',
        '--check-left': this.checkLeft + 'px'
      }

      return styleObj
    }
  }

}
</script>

<style lang="sass" scoped>

.--checkbox-wrapper
  --box-size: 12px
  --check-w: 0
  --check-h: 0
  --check-top: 0
  --check-left: 0

  display: flex
  align-items: center

  input[type=checkbox]
    -webkit-appearance: none
    -moz-appearance: none
    height: var(--box-size)
    width: var(--box-size)
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
      width: var(--check-w)
      height: var(--check-h)
      position: absolute
      top: var(--check-top)
      left: var(--check-left)
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

