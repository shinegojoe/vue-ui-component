

<template>
  <div>
   <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'BXBCheckboxGrop',

  props: {
    value: {
      type: Array,
      defalut: []
    }
   
  },

  provide() {
    return {
      checkboxGrop: this
    }
  }

}
</script>
