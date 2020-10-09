<template>
  <div>
    <BXBTab v-model="xx" :tabList="tabList"></BXBTab>
    {{xx}}
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      tabList: [ 'tab1', 'tab2', 'tab3'],
      xx: 'tab1'
    }
  }

}
</script>