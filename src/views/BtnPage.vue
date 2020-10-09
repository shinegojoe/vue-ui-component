
<template>
  <div id="btn-page-container">
    <div class="content-wrapper">
      <div class="bxb-btn-wrapper">
        <BXBTextField textType="capitalize" color="#979797" :size="30">button style</BXBTextField>
        <div class="btn-wrapper">
          <BXBButton type="primary">primary</BXBButton>
          <BXBButton type="secondary">second</BXBButton>
          <BXBButton type="third">third</BXBButton>
          <BXBButton type="third" :disabled="true">disabled</BXBButton>

          <BXBButton type="gray-light">gray-light</BXBButton>
          <BXBButton type="gray-dark">gray-dark</BXBButton>
          <BXBButton type="warning">wraning</BXBButton>
          <BXBButton type="warning">qq</BXBButton>
          <BXBButton type="warning">long long button</BXBButton>
        </div>
        <div class="note-wrapper">
          <BXBTextField textType="capitalize" color="#979797" :size="16">
            height: 32px, 文字置中, 文字過長會自動撐開左右各留8px
          </BXBTextField>
        </div>
      </div>

      <div class="btn-with-icon-wrapper">
        <BXBTextField textType="capitalize" color="#979797" :size="30">button with icon</BXBTextField>
        <div class="btn-wrapper">
          <BXBButton type="gray-light" :isAddIcon="true">
            Chose File
            <IconWrapper slot="icon" id="upload" w="18" h="18" color="white"></IconWrapper>
          </BXBButton>

          <BXBButton type="third" :isAddIcon="true">
            1.0.0
            <IconWrapper slot="icon" id="download" w="18" h="18" color="white"></IconWrapper>
          </BXBButton>
        </div>

         <div class="note-wrapper">
          <BXBTextField textType="capitalize" color="#979797" :size="16">
            height: 32px, 左右間距6px, 中間間隙自動撐開, icon與左邊文字8px
          </BXBTextField>
        </div>
      </div>

      <div class="icon-btn-wrapper">
        <BXBTextField textType="capitalize" color="#979797" :size="30">icon btn</BXBTextField>

        <div class="btn-wrapper">
          <BXBIconButton id="add_file" w="26" h="26"></BXBIconButton>
          <BXBIconButton type="secondary" id="icon_folder" w="26" h="26" color="#00615d"></BXBIconButton>
          <BXBIconButton type="third" id="icon_file" w="26" h="26"></BXBIconButton>
          <BXBIconButton type="no-bg" id="sync" w="26" h="26" color="#00615d"></BXBIconButton>
          <BXBIconButton :disabled="true" type="no-bg" id="power" w="26" h="26" color="#d8d8d8"></BXBIconButton>
        </div>
        <div class="note-wrapper">
          <BXBTextField textType="capitalize" color="#979797" :size="16">
            height: 32px, width: 32px
          </BXBTextField>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="sass" scoped>
#btn-page-container
  background-color: #f2f2f2
  // height: 100vh
  height: calc(100vh - 80px)
  .note-wrapper
    margin-top: 12px
  .content-wrapper
    // background-color: red
    display: flex
    flex-direction: column
    // justify-content: center
    align-items: center
    .bxb-btn-wrapper
      margin-top: 60px
      // background-color: red
      display: flex
      flex-direction: column
      align-items: center
      .btn-wrapper
        margin-top: 20px
        display: flex

    .btn-with-icon-wrapper
      margin-top: 40px
      display: flex
      flex-direction: column
      align-items: center
      .btn-wrapper
        margin-top: 20px
        display: flex

    .icon-btn-wrapper
      margin-top: 40px
      display: flex
      flex-direction: column
      align-items: center
      
      // background-color: red
      // display: flex
      // justify-content: center
      // width: 100%
      .btn-wrapper
        margin-top: 20px
        display: flex
        // background-color: red
        width: 200px 
        justify-content: space-between


</style>