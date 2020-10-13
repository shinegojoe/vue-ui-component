
<template>
  <div id="dropdown-page-container">
    <div class="content-wrapper">
      <BXBTextField textType="capitalize" color="#979797" :size="30">dropdown style</BXBTextField>

      <div class="dropdown-wrapper">
        <div class="item-wrapper">
          <BXBTextField textType="capitalize" color="#979797" :size="20">normal</BXBTextField>
          <BXBTextField textType="capitalize" color="#979797" :size="16">
            左邊間距16px<br>
            icon靠右, 中間自動撐開
          </BXBTextField>
          <BXBInputField :value="width" @input="(e)=>{
            width = parseInt(e.target.value)
            }" placeholder="自定義寬">
          </BXBInputField>

          <BXBInputField :value="rowHeight" @input="(e)=>{
            rowHeight = parseInt(e.target.value)
            }" placeholder="自定義列高">
          </BXBInputField>

          <BXBDropdownMenu
            class="d-item" 
            :maxLength="6"
            :title="dropTitle" 
            :data="testData" 
            :width="width" 
            :height="rowHeight"
            v-on:selectUpdate="selectUpdate">
          </BXBDropdownMenu>
        </div>

        <div class="item-wrapper">
          <BXBTextField textType="capitalize" color="#979797" :size="20">scroll</BXBTextField>
          <BXBTextField textType="capitalize" color="#979797" :size="16">自定義最大高度</BXBTextField>
           <BXBInputField value="width" @input="(e)=>{
            maxHeight = parseInt(e.target.value)
            }" placeholder="不要太誇張就好">
          </BXBInputField>
          {{maxHeight}}
          <BXBDropdownMenu
            class="d-item" 
            :maxLength="6"
            :title="dropTitle" 
            :data="testData2" 
            :width="140" 
            :maxHeight="maxHeight"
            v-on:selectUpdate="selectUpdate">
          </BXBDropdownMenu>
        </div>

        <div class="item-wrapper">
          <BXBTextField textType="capitalize" color="#979797" :size="20">icon</BXBTextField>
          <BXBTextField textType="capitalize" color="#979797" :size="16">
            文字與左邊icon間距22px<br>
            icon靠右, 中間自動撐開
          </BXBTextField>
         
          <BXBDropdownMenu 
            class="d-item"
            :width="140" 
            :fontSize="16"
            fontColor="#848484"
            :maxLength="6"
            :title="dropTitle" 
            :data="testData" 
            :isBorder="false"
            :isLeftIcon="true"
            v-on:selectUpdate="selectUpdate">
            <IconWrapper id="setting" w="24" h="24" color="#848484"></IconWrapper>
          </BXBDropdownMenu>
        </div>

         <div class="item-wrapper">
          <BXBTextField textType="capitalize" color="#979797" :size="20">icon scroll</BXBTextField>
          <BXBDropdownMenu 
            class="d-item"
            :width="120" 
            :fontSize="16"
            fontColor="#848484"
            :maxLength="6"
            :title="dropTitle" 
            :data="testData2" 
            :isBorder="false"
            :isLeftIcon="true"
            :maxHeight="360"
            v-on:selectUpdate="selectUpdate">
            <IconWrapper id="setting" w="24" h="24" color="#848484"></IconWrapper>
          </BXBDropdownMenu>
        </div>

      </div>


      <div class="dropdown-wrapper mt-200">
        <div class="item-wrapper">
          
          <BXBTextField textType="capitalize" color="#979797" :size="20">multi select</BXBTextField>
          <BXBTextField textType="capitalize" color="#979797" :size="20">{{multiSelectedList}}</BXBTextField>
          <BXBTextField textType="capitalize" color="#979797" :size="16">
            左右間距16px, 文字跟左邊16px, boxSize 12px<br>
            title 長度超過最大值(自定義)補....
          </BXBTextField>
          <!-- {{multiSelectTitle}} -->

          <BXBDropdownMultiSelect 
            @inputXX="multiSelectUpdate"
            v-model="multiSelectedList"
            :title="multiSelectTitle"
            :width="160"
            :maxLength="12"
            :boxSize="12"
            :checkW="5"
            :checkTop="2"
            :data="testData3">
          </BXBDropdownMultiSelect>
        </div>

        <div class="item-wrapper">
          <BXBTextField textType="capitalize" color="#979797" :size="20">scroll</BXBTextField>
          <BXBDropdownMultiSelect 
            @inputXX="multiSelectUpdate"
            v-model="multiSelectedList"
            :title="multiSelectTitle"
            :width="160"
            :maxLength="12"
            :boxSize="12"
            :checkW="5"
            :checkTop="2"
            :maxHeight="200"
            :data="testData2">
          </BXBDropdownMultiSelect>
        </div>

        <div class="item-wrapper">
          <BXBTextField textType="capitalize" color="#979797" :size="20">icon</BXBTextField>
         
        </div>

         <!-- <div class="item-wrapper">
          <BXBTextField textType="capitalize" color="#979797" :size="20">icon scroll</BXBTextField>
          
        </div> -->

      </div>


      <div class="dropdown-wrapper mt-200">
        <div class="item-wrapper">
          <BXBTextField textType="capitalize" color="#979797" :size="20">空間不夠往上</BXBTextField>
          <BXBDropdownMenu
            class="d-item" 
            :maxLength="6"
            :title="dropTitle" 
            :data="testData" 
            :width="100" 
            v-on:selectUpdate="selectUpdate">
          </BXBDropdownMenu>
        </div>

        <div class="item-wrapper">
          <BXBTextField textType="capitalize" color="#979797" :size="20">scroll</BXBTextField>
          <BXBDropdownMenu
            class="d-item" 
            :maxLength="6"
            :title="dropTitle" 
            :data="testData2" 
            :width="100" 
            :maxHeight="360"
            v-on:selectUpdate="selectUpdate">
          </BXBDropdownMenu>
        </div>

        <div class="item-wrapper">
          <BXBTextField textType="capitalize" color="#979797" :size="20">icon</BXBTextField>
          <BXBDropdownMenu 
            class="d-item"
            :width="120" 
            :fontSize="16"
            fontColor="#848484"
            :maxLength="6"
            :title="dropTitle" 
            :data="testData" 
            :isBorder="false"
            :isLeftIcon="true"
            v-on:selectUpdate="selectUpdate">
            <IconWrapper id="setting" w="24" h="24" color="#848484"></IconWrapper>
          </BXBDropdownMenu>
        </div>

         <div class="item-wrapper">
          <BXBTextField textType="capitalize" color="#979797" :size="20">icon scroll</BXBTextField>
          <BXBDropdownMenu 
            class="d-item"
            :width="120" 
            :fontSize="16"
            fontColor="#848484"
            :maxLength="6"
            :title="dropTitle" 
            :data="testData2" 
            :isBorder="false"
            :isLeftIcon="true"
            :maxHeight="360"
            v-on:selectUpdate="selectUpdate">
            <IconWrapper id="setting" w="24" h="24" color="#848484"></IconWrapper>
          </BXBDropdownMenu>
        </div>

      </div>

      
       
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      multiSelectedList: ['item2'],
      multiSelectTitle: [],
      testData: [
        { title: 'item1' }, { title: 'item2' }, { title: 'item3' },
        { title: 'item4' }, { title: 'item5' }, { title: 'item6' },
      ],
      testData2: [],
      testData3: [],
      dropTitle: 'item1',
      width: 80,
      maxHeight: 80,
      rowHeight: 26
    }
  },

  methods: {
    cp: function () {
      const data = this.multiSelectedList.map((item, index)=>{
        return item
      })
      
      return data
    },
    

    multiSelectUpdate: function (items) {
      console.log('multiSelectUpdate', items)
      // let title = ''
      // for(const item of items) {
      //   title += item
      // }
      this.multiSelectTitle = this.cp()

    },

    selectUpdate: function (item) {
      console.log('upup', item)
    }
  },

  created: function () {
    const dataList = []
    for(let i=0; i<30; i++) {
      const item = { title: `item${i+1}`}
      dataList.push(item)
    }
    this.testData2 = dataList

     const dataList3 = []
    for(let i=0; i<5; i++) {
      const item = { title: `item${i+1}`, isChecked: false}
      dataList3.push(item)
    }
    dataList3[0].isChecked = true
    dataList3[2].isChecked = true

    this.testData3 = dataList3
  },

  mounted: function () {
    this.multiSelectTitle = this.cp()
  }

}
</script>

<style lang="sass" scoped>
#dropdown-page-container
  background-color: #f2f2f2
  height: calc(100vh - 80px)
  box-sizing: border-box
  padding: 100px 200px
  .content-wrapper
    background-color: white
    height: 100%
    display: flex
    flex-direction: column
    align-items: center
    box-sizing: border-box
    padding: 20px
   
    .dropdown-wrapper
      margin-top: 30px
      width: 100%
      display: flex
      justify-content: space-around
    .mt-200
      margin-top: 100px
    .mt-400
      margin-top: 400px

    .item-wrapper
      .d-item
        margin-top: 16px

    
</style>