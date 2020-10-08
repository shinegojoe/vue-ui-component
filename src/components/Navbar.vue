<template>
  <div id="navbar-container">
    <div class="nav-wrapper">
      <button class="open-btn" @click="sidebarSwitch">open</button>
      <slot></slot>
    </div>

    <div class="sidebar-wrapper" :class="sidebarTransition()">
      <div class="logo-wrapper">
        <IconWrapper id="bxb-logo" w="100" h="60" color="white"></IconWrapper>
      </div>
      <div class="item-wrapper" v-for="(item, index) in testData" :key="index">
        <div class="item-name-wrapper" @click="itemClick($event, item)">
          <IconWrapper id="setting" w="20" h="20" color="white"></IconWrapper>
          <!-- <div class="item-name">{{ item.name }}</div> -->
          <BXBTextField class="item-name" :size="18">{{item.name}}</BXBTextField>
        </div>
        <div :class="subPageTransition(item)">
          <div class="sub-item" v-for="(subPage, subIndex) in item.subPages" :key="subIndex">
            <div @click="subItemClick($event, subPage)" class="">{{ subPage.title }}</div>
            <!-- <BXBTextField class="sub-title" :size="12">{{subPage.title}}</BXBTextField> -->

          </div>
        </div>
        <!-- <div v-for="(sub, subIndex) in item.subPages" :key="subIndex">
         <div v-show="item.isOpen">{{sub.title}}</div>
       </div> -->
      </div>
    </div>
    <div v-show="isSidebarOpen" class="bg-coverxx"></div>
  </div>
</template>

<script>
export default {
  name: "BXBNavbar",

  data: function() {
    return {
      isSidebarOpen: true,
      testData: [
        {
          path: "/",
          name: "Home",
          isOpen: false,
          subPages: []
        },
        {
          path: "about",
          name: "Item2",
          isOpen: false,
          subPages: [
            {
              title: "sub1"
            },
            {
              title: "sub2"
            },
            {
              title: "sub3"
            },
            {
              title: "sub4"
            },
            {
              title: "sub5"
            }
          ]
        },
        {
          path: "test",
          name: "Item4",
          isOpen: false,
          subPages: [
            {
              title: "sub1"
            },
            {
              title: "sub2"
            }
          ]
        },
        {
          path: "tabPage",
          name: "Tab",
          isOpen: false,
          subPages: []
        },
        {
          path: "multiSelect",
          name: "MultiSelect",
          isOpen: false,
          subPages: []
        },
        {
          path: "rangeSlider",
          name: "RangeSlider",
          isOpen: false,
          subPages: []
        },
        {
          path: "i18n",
          name: "I18n",
          isOpen: false,
          subPages: []
        }
      ]
    };
  },

  methods: {
    sidebarSwitch: function(e) {
      this.isSidebarOpen = !this.isSidebarOpen;
      e.stopPropagation();
    },

    closeSub: function() {
      for (const item of this.testData) {
        item.isOpen = false;
      }
    },

    sidebarTransition: function() {
      if (this.isSidebarOpen) {
        return "xx";
      } else {
        return "yy";
      }
    },

    subPageTransition: function(item) {
      if (item.isOpen) {
        return "subIn";
      } else {
        return "subOut";
      }
    },

    itemClick(e, item) {
      console.log("item", item);
      item.isOpen = !item.isOpen;
      e.stopPropagation();
    },

    subItemClick(e, item){
      console.log('sub', item)
      e.stopPropagation();
    },

    closeOutside: function() {
      this.isSidebarOpen = false;
      this.closeSub();
    }
  },

  created: function() {
    window.addEventListener("click", this.closeOutside);
  },

  beforeDestroy() {
    window.removeEventListener("click", this.closeOutside);
  }
};
</script>

<style lang="sass" scoped>
@keyframes fadeIn
  from
    // height: 0
    width: 0px
    opacity: 0
    z-index: 1
  to
    // height: auto
    width: 200px
    opacity: 1
    z-index: 2
@keyframes fadeOut
  from
    // height: 0
    width: 200px
    opacity: 1
    // z-index: 0

  to
    // height: auto
    width: 0
    opacity: 0
    // z-index: 2

@keyframes subIn
  from
    height: 0
    opacity: 0
    transform: scaleY(0)
    position: relative
  to
    height: auto
    opacity: 1
    transform: scaleY(1)
    z-index: -1
    position: relative

@keyframes subOut
  from
    height: auto
    opacity: 1
    position: relative
    // transform: scaleY(1)
  to
    height: 0
    opacity: 0
    z-index: -1
    position: relative

@keyframes cover
  from
    width: 0px
    height: 0px
  to
    // height: calc( 100vh - 100px )
    height: 100vh
    width: 100vw

#navbar-container
  position: relative
  .nav-wrapper
    position: relative
    height: 80px
    background-color: white
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px
    z-index: 1
  .open-btn
    position: absolute
    top: 50%
    left: 20px
    transform: translateY(-50%)



  .sidebar-wrapper
    position: absolute
    // height: calc( 100vh - 100px )
    height: 100vh
    width: 0px
    top: 0
    left: 0
    background-color: #363636
    display: flex
    flex-direction: column
    .logo-wrapper
      height: 80px
      display: flex
      justify-content: center
      align-items: center

    .item-wrapper
      position: relative
      color: white
      min-height: 60px
      width: 100%
      // border: 1px solid
      display: flex
      flex-direction: column

      // align-items: center
      justify-content: center

      .item-name-wrapper
        position: relative
        padding: 10px
        box-sizing: border-box
        width: 100%
        display: flex
        align-items: center
        // font-size: 20px
        min-height: 30px
        &:hover
          background-color: rgba(255,255,255,0.8)
        .item-name
          margin-left: 20px
      .sub-item
        position: relative
        // background-color: red
        z-index: 100
        height: 30px
        display: flex
        align-items: center
        padding-left: 50px
        &:hover
          background-color: rgba(255,255,255,0.8)
  .xx
    animation: 0.1s fadeIn forwards
  .yy
    // opacity: 0
    animation: 0.1s fadeOut forwards
  .subIn
    animation: 0.3s subIn forwards
    // background-color: green
    opacity: 1
  .subOut
    animation: 0.3s subOut forwards
    // background-color: green
    opacity: 1

  .bg-coverxx
    position: absolute
    // top: 50%
    // left: 50%
    top: 0
    left: 0
    // transform: translate(-50%, -50%)
    width: 0px
    height: 0px
    opacity: 0.2
    background-color: rgba(0, 0, 0, 0.5)
    // z-index: 10
    animation-name: cover
    animation-duration: 0.05s
    animation-fill-mode: forwards
</style>
