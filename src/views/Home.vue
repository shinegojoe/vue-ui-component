<template>
  <div id="home-container">
    <div class="content-wrapper">
      <div class="home-title">
        component-test
      </div>
      <div class="check-grop-wrapper">
        <div class="component-title">multi-checkbox</div>
        <!-- <BXBCheckbox v-model="isSelectAll" v-on:qq="qq"></BXBCheckbox> -->

        <BXBCheckboxGrop 
        :isUplineOn="false"
        :isBottomLineOn="true" 
        :isSelectAll="true" 
        v-model="selectedList" 
        :dataLength="testData.length"
         v-on:selectAllUpdate="selectAllUpdate">
          
          <div slot="select-all" class="head-wrapper">
            <BXBCheckbox class="item0" v-model="isSelectAllModel"></BXBCheckbox>
            <!-- <BXBCheckbox class="item0" v-model="isSelectAllxx" @click="selectAllClick"></BXBCheckbox> -->

            <div class="head-item item1">
              <div>Mic Preset Id</div>
              <div @click="sortByString('title')" class="sort-icon" :style="checkIconState('title')"><i class="fas fa-arrow-down"></i></div>
            </div>
            <div class="head-item item2">Volume</div>
            <div class="head-item item3">
              <div>Status</div>
              <div @click="sortByBool('status')" class="sort-icon" :style="checkIconState('status')"><i class="fas fa-arrow-down"></i></div>

            </div>
            <div class="head-item item4">Action</div>
          </div>

          <div slot="box-grop" class="row-wrapper" v-for="(item, index) in testData" :key="index">
            <BXBCheckboxGropSub class="item0" :label="item.title"></BXBCheckboxGropSub>
            <div class="item1">{{item.title}}</div>
            <div class="item2">
              <i class="fas fa-volume-up"></i>
              <!-- {{item.volume}} -->
              <BXBSlider v-model="item.volume" :width="390" :height="6" :thumbSize="16"></BXBSlider>
            </div>
           
            <div class="item3">
              <div class="state-circle"></div>
              <div class="state-text">{{item.status}}</div>

            </div>
            <div class="item4">
              <i class="fas fa-power-off xx"></i>
            </div>

            
          </div>
        </BXBCheckboxGrop>
        {{selectedList}}
        {{isSelectAll}}
      </div>

      <!-- <div>
        <div class="component-title">single-checkbox</div>
        <BXBCheckbox v-model="singleBoxState"></BXBCheckbox>
        {{singleBoxState}}
      </div>

      <div class="slider-wrapper">
        <div class="component-title">slider</div>
        <BXBSlider v-model="slider"></BXBSlider>
        {{slider}}
      </div> -->
     
      <BXBDialog 
        v-on:okClick="okClick"
        v-show="isDialogOpen" 
        v-model="isDialogOpen" 
        title="title here">
        <!-- <div class="dialog-slot">this is a slot</div> -->
        <TestComponent ref="testComponent"></TestComponent>
      </BXBDialog>
      {{isDialogOpen}}
      <BXBButton @click="open" type="primary">open</BXBButton>
      <BXBButton @click="btnClick" type="primary">ok</BXBButton>
      <BXBButton :disabled="false" @click="loadingSwitch" type="secondary">loading</BXBButton>
      <BXBIconButton @click="iconBtnClick" id="save"></BXBIconButton>
      <BXBSnackbar v-model="isSnackbarOpen">msg</BXBSnackbar>
      <BXBInputField 
        :width="300"
        :value="inputText"
         @input="(e)=>{
          inputText = e.target.value
        }"
        :isHeadOn="true"
        placeholder="account">
      </BXBInputField>

      <BXBInputField 
        @keyup.enter="qqTest"
        :width="300"
        :value="inputText"
        @input="(e)=>{
          inputText = e.target.value
        }"
        :isHeadOn="true"
        type="password"
        placeholder="password">
      </BXBInputField>
      {{inputText}}

      <div class="drop-test">
        <BXBDropdownMenu 
          :maxLength="6"
          :title="dropTitle" 
          :data="testData" 
          :width="100" 
          v-on:selectUpdate="selectUpdate">
        </BXBDropdownMenu>

        <BXBDropdownMenu 
          :maxLength="6"
          :title="dropTitle" 
          :data="testData" 
          :width="100" 
          v-on:selectUpdate="selectUpdate">
        </BXBDropdownMenu>

        <BXBDropdownMultiSelect 
          :isSelectAll="false"
          :maxLength="6"
          :title="dropTitle" 
          :data="testData" 
          :width="100" 
          v-on:selectUpdate="selectUpdate">
        </BXBDropdownMultiSelect>
      </div>

      <div class='lang-menu-selector'>
        <BXBDropdownMenu 
          :isLeftIcon="true"
          :isBorder="false"
          :maxLength="10"
          title="English" 
          :data="[{'title': 'English'}, {'title': 'TW'}]" 
          :width="140" 
          :fontSize="16"
          fontColor="#848484"
          v-on:selectUpdate="selectUpdate">
          <IconWrapper id="setting" w="28" h="28" color="#848484"></IconWrapper>

        </BXBDropdownMenu>
      </div>

    </div>
    <BXBLoader v-model="isLoading"></BXBLoader>
  </div>
   
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { SortHelper } from '@/models/sortHelper.js'
import TestComponent from '@/views/TestComponent.vue'

export default {
  name: 'Home',

  components: {
    TestComponent
  },

  watch: {
    inputText: function(val) {
      // console.log('val', val.target.value)
    }
  },

  data: function() {
    return {
      // testData: ['*1', '*2', '*3', '*4', '*5'],
      /* for multi select checkbox....................*/
      testData: [
        {title: '*1', status: true, volume: 0},
        {title: '*2', status: false, volume: 10},
        {title: '*3', status: false, volume: 20},
        {title: '*4', status: true, volume: 30},
        {title: '*5', status: true, volume: 40},
      ],
      selectedList: [],
      isSelectAll: false,
      sortHelper: undefined,
      /* for multi select checkbox.....................*/


      singleBoxState: true,
      slider: 10,
      
      isDialogOpen: false,
      isSnackbarOpen: false,
      inputText: '',
      dropTitle: 'xxxxxxxxxxxqqqqqqqq',
      isLoading: false
    }
  },

  methods: {
    qqTest: function(val) {
      console.log('qqTest', val)
    },

    loadingSwitch: function () {
      this.isLoading = !this.isLoading
    },

    selectAllUpdate: function (val) {
      console.log('selectAllUpdate')
      this.isSelectAllModel = val
      // this.isSelectAll = val
    },

    sortByString: function (name) {
      this.sortHelper.sortByString(this.testData, name)
    },

    sortByBool: function (name) {
      this.sortHelper.sortByBool(this.testData, name)
    },

    checkIconState: function (name) {
      return this.sortHelper.checkIconState(name)
    },

    btnClick: function () {
      console.log('btn click')
      // this.$refs.testComponent.run()
      this.isSnackbarOpen = true
    },

    iconBtnClick: function () {
      console.log('icon click')
    },

    open: function () {
      this.isDialogOpen = !this.isDialogOpen
    },

    okClick: function () {
      console.log('ok click')
      this.$refs.testComponent.run()
      this.isDialogOpen = false
    },

    selectUpdate: function (item) {
      console.log('selectUpdate', item)
      this.dropTitle = item.title
    }

  },

  created: function () {
    console.log('xx', SortHelper.name)
    this.sortHelper = new SortHelper()
  },

  // watch: {
  //   isSelectAllxx(val) {
  //     console.log('is', val)
  //     if(val) {
  //         // this.selectedList = this.testData
  //         this.selectedList = this.testData.map((item, index)=>{
  //           return item.title
  //         })
  //       } else {
  //         this.selectedList = []
  //       }
  //   }
  // },

  computed: {
    isSelectAllModel: {
      set(val) {
        console.log('set', val)
        if(val) {
          // this.selectedList = this.testData
          this.selectedList = this.testData.map((item, index)=>{
            return item.title
          })
        } else {
          this.selectedList = []
        }
        this.isSelectAll = val
      },

      get() {
        return this.isSelectAll
      }
    }
  }


}
</script>

<style lang="sass" scoped>
#home-container
  display: flex
  justify-content: center
  background-color: rgba(0, 0, 0, 0.1)
  height: 100vh

  .content-wrapper
    display: flex
    flex-direction: column
    align-items: center
    background-color: white
    width: 760px
    // padding: 16px
    .component-title
      font-size: 30px
    .home-title
      margin: 30px 0
      font-size: 60px
    .check-grop-wrapper
      width: 100%
      // background-color: red

      // padding: 16px
      // box-sizing: border-box
      // display: flex
      // flex-direction: column
      // align-items: center
      .head-wrapper
        display: flex
        align-items: center
        height: 40px
        // justify-content: space-between
        .head-item
          font-family: Helvetica
          font-size: 11px
          font-weight: normal
          font-stretch: normal
          font-style: normal
          line-height: normal
          letter-spacing: normal
          color: #848484
        .sort-icon
          margin-left: 4px
          transform: rotate(0deg)
          transition: 0.3s
        .item0
          margin-left: 16px
        .item1
          margin-left: 24px
          width: 100px
          display: flex

        .item2
          margin-left: 34px
          width: 420px
          // background-color: green
        .item3
          margin-left: 25px
          width: 40px
          display: flex
        .item4
          margin-left: 40px


      .row-wrapper
        // padding: 16px
        display: flex
        height: 48px
        border-bottom: 1px solid #efefef
        align-items: center
        
        .item0
          margin-left: 16px
        .item1
          margin-left: 24px
          width: 100px
          display: flex
          justify-content: center
          font-family: Helvetica
          font-size: 12px
          font-weight: normal
          font-stretch: normal
          font-style: normal
          line-height: normal
          letter-spacing: normal
          text-align: center
          color: #00a487
        .item2
          width: 420px
          display: flex
          align-items: center
          margin-left: 34px
          // background-color: red
        .item3
          margin-left: 25px
          width: 40px
          display: flex
          align-items: center
          .state-circle
            background-color: #00a487
            width: 10px
            height: 10px
            border-radius: 50% 
          .state-text
            margin-left: 4px
            font-family: Helvetica
            font-size: 12px
            font-weight: normal
            font-stretch: normal
            font-style: normal
            line-height: normal
            letter-spacing: normal
            color: #00a487

          // background-color: red
        .item4
          margin-left: 40px
          .xx
            color: #00a487
            width: 24px
            height: 24px
  .drop-test
    margin-top: 30px

  .lang-menu-selector
    margin: 30px
    // display: flex
    // color: black
.dialog-slot
  // margin: 16px 0
  display: flex
  justify-content: center
  border: 1px solid
  font-size: 40px
    
</style>
