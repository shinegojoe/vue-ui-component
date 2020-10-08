<template>
  <div id="input-component-container">
    <div class="content-wrapper">
      <div class="input-field-wrapper">
        <BXBTextField class="mt-20" textType="capitalize" color="#979797" :size="30">
            input field
        </BXBTextField>
        <BXBInputField
          class="mt-20"
          :width="300"
          v-model="account" 
          :isHeadOn="true"
          placeholder="account">
        </BXBInputField>

         <BXBInputField
          class="mt-20"
          :width="300"
          v-model="account" 
          :isHeadOn="true"
          type="password"
          placeholder="password">
        </BXBInputField>

        <div class="field-2">
          <BXBTextField textType="capitalize" color="#979797" :size="16">
            account
          </BXBTextField>
          <BXBInputField
            :width="200"
            v-model="account" 
            :isHeadOn="false"
            placeholder="account">
          </BXBInputField>
        </div>

        <div class="field-2">
          <BXBTextField textType="capitalize" color="#979797" :size="16">
            password
          </BXBTextField>
          <BXBInputField
            :width="200"
            v-model="account" 
            :isHeadOn="false"
            placeholder="password">
          </BXBInputField>
        </div>

        <div class="slider-wrapper">
          <BXBTextField textType="capitalize" color="#979797" :size="30">
            range slider
          </BXBTextField>
          <div class="slider-content">
            <BXBSlider v-model="sliderVal" :thumbSize="16" :height="8"></BXBSlider>
            <BXBTextField textType="capitalize" color="#979797" :size="16">
              {{sliderVal}}
            </BXBTextField>
          </div>
           <div class="slider-content">
            <BXBSlider v-model="sliderVal2" :thumbSize="16" :height="8"></BXBSlider>
            <BXBTextField textType="capitalize" color="#979797" :size="16">
              {{sliderVal2}}
            </BXBTextField>
          </div>
           <div class="slider-content">
            <BXBSlider v-model="sliderVal3" :thumbSize="16" :height="8"></BXBSlider>
            <BXBTextField textType="capitalize" color="#979797" :size="16">
              {{sliderVal3}}
            </BXBTextField>
          </div>
        </div>

        <div class="switch-wrapper">
          <BXBTextField textType="capitalize" color="#979797" :size="30">
            switch
          </BXBTextField>
          <div class="switch-content">
            <BXBSwitch v-model="switchVal" id="s1"></BXBSwitch>
            <BXBSwitch v-model="switchVal2" id="s2"></BXBSwitch>
            <!-- <BXBCheckbox v-model="cbVal"></BXBCheckbox>
            <BXBCheckbox v-model="cbVal2"></BXBCheckbox> -->
          </div>
        </div>

        <div class="single-check-wrapper">
          <BXBTextField textType="capitalize" color="#979797" :size="30">
            single check
          </BXBTextField>

          <div class="radio-wrapper">
              <div class="radio-item">
      
                <BXBRadio name="x1xx" v-model="radioSelected" id="qq1"></BXBRadio>
                <BXBTextField class="radio-text" textType="capitalize" color="#979797" :size="12">qq1</BXBTextField>
              </div>

              <div class="radio-item">
                
                <BXBRadio name="x1xx" v-model="radioSelected" id="qq2"></BXBRadio>
                <BXBTextField class="radio-text" textType="capitalize" color="#979797" :size="12">qq2</BXBTextField>
              </div>

               <div class="radio-item">
                 
                <BXBRadio name="x1xx" v-model="radioSelected" id="qq3"></BXBRadio>
                <BXBTextField class="radio-text" textType="capitalize" color="#979797" :size="12">qq3</BXBTextField>
              </div>
            </div>

            <BXBTextField textType="capitalize" color="#979797" :size="12">
              {{radioSelected}}
            </BXBTextField>
           
        </div>

        <div class="multi-check-wrapper">
          <BXBTextField textType="capitalize" color="#979797" :size="30">
            multi check  
          </BXBTextField>
          <div>
            <BXBCheckboxGrop :isSelectAll="false" v-model="selectedList" :dataLength="testData.length">
              <div slot="box-grop" class="chcekbox-wrapper">
                <div class="row-wrapper" v-for="(item, index) in testData" :key="index">
                  <BXBCheckboxGropSub class="item0" :label="item.title"></BXBCheckboxGropSub>
                  <BXBTextField textType="capitalize" color="#979797" :size="12">
                    {{item.title}}
                  </BXBTextField>
                </div>
              </div>
            </BXBCheckboxGrop>
          </div>
           <BXBTextField textType="capitalize" color="#979797" :size="12">
            {{selectedList}}  
          </BXBTextField>
        </div>



      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      account: '',
      sliderVal: 0,
      sliderVal2: 33,
      sliderVal3: 66,
      switchVal: true,
      switchVal2: false,
      cbVal: true,
      cbVal2: false,
      radioSelected: 'qq1',
      testData: [
        {title: '*1', status: true},
        {title: '*2', status: false},
        {title: '*3', status: false},
        {title: '*4', status: true},
        {title: '*5', status: false},
      ],
      selectedList: ['*1', '*4']

    }
  }
  
}
</script>

<style lang="sass" scoped>
#input-component-container
  background-color: #f2f2f2
  height: 100vh
  .mt-20
    margin-top: 20px
  .content-wrapper
    display: flex
    flex-direction: column
    align-items: center
    

    .input-field-wrapper
      width: 800px
      margin-top: 40px
      padding: 20px
      background-color: white
      display: flex
      flex-direction: column
      align-items: center
      .field-2
        margin-top: 30px
        width: 340px
        display: flex
        align-items: center
        justify-content: space-between
      .slider-wrapper
        padding: 0 40px
        box-sizing: border-box
        width: 400px
        margin-top: 50px
        display: flex
        flex-direction: column
        align-items: center
        // justify-content: center
        .slider-content
          margin-top: 20px
          width: 280px
          display: flex
          justify-content: space-between
      .switch-wrapper
        // background-color: red
        margin-top: 30px
        display: flex
        align-items: center
        flex-direction: column
        justify-content: center
        .switch-content
          margin-top: 20px
          display: flex
          width: 140px
          justify-content: space-between

      .single-check-wrapper
        // background-color: red
        margin-top: 30px
        width: 400px
        display: flex
        flex-direction: column
        align-items: center
        .radio-wrapper
          // width: 400px
          // background-color: green
          display: flex
          // margin-top: 20px
          .radio-item
            display: flex
            margin: 20px 12px 12px 12px
            .radio-text
              // background-color: red
              margin-left: 6px

          // display: flex
          // justify-content: space-between
      .multi-check-wrapper
        margin-top: 30px
        // background-color: red
        display: flex
        flex-direction: column
        align-items: center
        .chcekbox-wrapper
          margin-top: 10px
          margin-bottom: 10px
          display: flex
          // background-color: red
          .row-wrapper
            display: flex
            align-items: center
            margin: 0 6px

      

</style>