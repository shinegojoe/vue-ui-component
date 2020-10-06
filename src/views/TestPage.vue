
<template>
  <div id="login-container">
    <div class="content-wrapper">
     
      <div class="login-wrapper">
        <div class="logo-wrapper">
          <div class="logo">
           <IconWrapper id="logo" w=58 h="58"></IconWrapper>
          </div>
          
          <BXBTextField class="logo-title" :size="20" color="#00615d">HDS-722</BXBTextField>          
        </div>
        <BXBInputField
          class="account-input"
          :width="300"
          v-model="account" 
          :isHeadOn="true"
          placeholder="account">
        </BXBInputField>

        <BXBInputField 
          class="pwd-input"
          :width="300"
          v-model="pwd" 
          :isHeadOn="true"
          placeholder="password">
        </BXBInputField>

        <div class="btn-wrapper">
          <BaseButton
            :width="320"
            :height="48"
            :fontSize="24"
            bgColor="#00a487"
            borderRadius="38px"
          >login</BaseButton>
        </div>
        <div class="lang-wrapper">
          <BXBDropdownMenu 
            :isLeftIcon="true"
            :isBorder="false"
            :maxLength="10"
            title="English" 
            :data="[{'title': 'English'}, {'title': 'TW'}]" 
            :width="144" 
            :fontSize="16"
            fontColor="#848484"
            v-on:selectUpdate="selectUpdate">
            <IconWrapper id="language" w="28" h="28" color="#848484"></IconWrapper>
          </BXBDropdownMenu>
          <BXBTextField class="" color="#848484" :size="16">v1.2.3</BXBTextField>


        </div>

      </div>
      <div class="footer-wrapper">
        <IconWrapper id="bxb-logo" w="70" h="26" color="white"></IconWrapper>
        <BXBTextField class="copy-right" :size="14">Copyright ©2020 BXB All rights reserved.</BXBTextField>



      </div>

    </div>
   
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        account: '',
        pwd: ''
      }
    },

    methods: {
      selectUpdate: function(item) {
        
      }
    }
  }
</script>

<style lang="sass" scoped>
#login-container
  background-color: #222222
  height: 100vh
  .content-wrapper
    display: flex
    flex-direction: column
    align-items: center
    .login-wrapper
      margin-top: 184px
      width: 432px
      height: 666px
      border-radius: 15px
      box-shadow: 0.5px 0.5px 5px 0 #e6ecef
      background-color: white
      display: flex
      flex-direction: column
      align-items: center
      .logo-wrapper
        margin-top: 48px
        .logo
          width: 112px
          height: 112px
          box-shadow: 1px 1px 8px 0 #c2ffee
          background-color: #00a487
          border-radius: 50%
          display: flex
          align-items: center
          justify-content: center
        .logo-title
          margin-top: 24px
          display: flex
          justify-content: center
    .account-input
      margin-top: 73px
    .pwd-input
      margin-top: 48px
    .btn-wrapper
      margin-top: 96px
    .lang-wrapper
      margin-top: 53px
      width: 320px
      display: flex
      justify-content: space-between
      align-items: center
    .footer-wrapper
      margin-top: 24px
      margin-left: 80px
      display: flex
      width: 432px
      align-items: center
      .copy-right
        margin-left: 15px
      
      


</style>
