<template>
  <div id="tab-page-container">
    <div class="content-wrapper">

      <BXBTab v-model="xx" :tabList="tabList" activeLine="red"></BXBTab>
      <BXBTextField color="black">{{xx}}</BXBTextField>

      <div class="pagination-wrapper">
        <BXBPagination
        :endIndex="2"
        :maxLength="10"
        v-on:pageChange="pageChange"></BXBPagination>
      </div>
      <div>{{pageIndex}}</div>

    </div>
  </div>
</template>

<script>
import HC from '@/views/HighOrderTest.vue'

export default {
  components: {
    HC
  },

  data: function() {
    return {
      tabList: [ 'tab1', 'tab2', 'tab3'],
      xx: 'tab1',
      pageIndex: 1
    }
  },

  methods: {
    pageChange: function(index) {
      this.pageIndex = index
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
    display: flex
    flex-direction: column
    align-items: center
    .pagination-wrapper
      // background-color: red


</style>