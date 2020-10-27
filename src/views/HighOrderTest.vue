<template>
  <div>
    <BXBButton ref="xx">xxx</BXBButton>
  </div>
</template>

<script>
import BXBButton from '@/components/button/BXBButton.vue'

export default {
  components: {
    BXBButton
  },

  mounted: function () {
    // console.log(this.$refs.xx)
    const xx = document.getElementsByClassName('btn-base')
    console.log('xx', xx)
    var node = document.createElement("LI")
    var textnode = document.createTextNode("Water")
    node.appendChild(textnode)
    xx[0].appendChild(node)
  }
}
</script>