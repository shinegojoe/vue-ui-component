<template>
  <div id="tab-page-container">
    <div class="content-wrapper">
      <BXBTab v-model="xx" :tabList="tabList" activeLine="red"></BXBTab>
      <!-- <BXBTextField>{{xx}}</BXBTextField> -->
      {{xx}}
    </div>
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

<style lang="sass" scoped>
#tab-page-container
  background-color: #f2f2f2
  height: calc(100vh - 80px)
  box-sizing: border-box
  padding: 100px 200px
  .content-wrapper
    box-sizing: border-box
    padding: 1px 30px 30px 30px 
    background-color: white

</style>