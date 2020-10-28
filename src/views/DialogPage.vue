<template>
  <div id="dialog-page-container">
    <div class="content-wrapper">

      <div class="btn-wrapper">
        <BXBButton @click="snackbarClick">snackbar</BXBButton>
        <BXBButton @click="dialogClick" type="secondary">del</BXBButton>
        <BXBButton @click="loadingClick" type="third">loading</BXBButton>
        <BXBButton @click="bgCover" type="third">bg cover</BXBButton>
      </div>


    </div>

    <BXBSnackbar v-model="isSnackbarOpen">{{snackbarMsg}}</BXBSnackbar>
    <BXBDialog 
      v-on:okClick="okClick"
      title="delete?"
      v-model="isDialogOpen">
      <div>
        <BXBTextField textType="capitalize" color="#979797" :size="12">
          this is a slot
        </BXBTextField>
      </div>
    </BXBDialog>
    <BXBLoader v-model="isLoading"></BXBLoader>
    <BGCover v-model="isCoverOn"></BGCover>

  </div>
</template>

<script>
export default {
  data: function () {
    return {
      isLoading: false,
      isDialogOpen: false,
      isSnackbarOpen: false,
      snackbarMsg: 'this is snackbar',
      isCoverOn: false
    }
  },

  methods: {
    snackbarClick: function () {
      this.isSnackbarOpen = true
    },

    dialogClick: function () {
      this.isDialogOpen = true
    },

    okClick: function () {
      this.isDialogOpen = false
    },

    loadingClick: function () {
      this.isLoading = true
      setTimeout(()=>{
        this.isLoading = false
      }, 3000)
    },

    bgCover: function () {
      this.isCoverOn = true
      setTimeout(()=>{
        this.isCoverOn = false
      }, 3000)
    }
  }
}
</script>

<style lang="sass" scoped>
#dialog-page-container
  background-color: #f2f2f2
  height: calc(100vh - 80px)
  padding: 60px 0
  box-sizing: border-box
  .content-wrapper
    background-color: white
    width: 600px
    padding: 20px
    box-sizing: border-box
    margin: auto
  .btn-wrapper
    display: flex
    justify-content: space-around

</style>
