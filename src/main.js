import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BXBCheckboxGropSub from './components/ckeckbox/BXBCheckboxGropSub.vue'
import BXBCheckboxGrop from './components/ckeckbox/BXBCheckboxGrop.vue'
import BXBCheckbox from './components/ckeckbox/BXBCheckbox.vue'
import BXBSwitch from './components/ckeckbox/BXBSwitch.vue'
import BXBRadio from './components/ckeckbox/BXBRadio.vue'
import BXBSlider from './components/BXBSliderV2.vue'
// import BXBDropdown from './components/dropdown/BXBDropdownMenu.vue'
import BXBDialog from './components/BXBDialog.vue'
import BXBButton from './components/button/BXBButton.vue'
import BXBIconButton from './components/button/BXBIconButton.vue'
import BXBSortButton from './components/button/BXBSortButton.vue'

import BXBSnackbar from './components/BXBSnackbar.vue'
import BXBInputField from './components/BXBInputFieldV2.vue'
import BXBDropdownMenu from './components/dropdown/BXBDropdownMenu.vue'
import BXBDropdownMultiSelect from './components/dropdown/BXBDropdownMultiSelect.vue'
import IconWrapper from './components/IconWrapper.vue'
import BaseButton from './components/button/BaseButton.vue'
import BXBTextField from './components/BXBTextField.vue'
import BXBLoader from './components/BXBLoader.vue'
import BXBNavbar from './components/Navbar.vue'
import BXBTab from './components/BXBTab.vue'
import BGCover from './components/BGCover.vue'

import _main from './sass/main.sass'
// import xx from '../packages/index.js'
// import xx from '../vue-ui-component-hds/lib'
import xx from '../node_modules/vue-ui-component-hds/lib/vcolorpicker.umd'
import qq from '../node_modules/vue-ui-component-hds/lib/vcolorpicker.css'
import VueRouter from 'vue-router'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.config.productionTip = false
// console.log('xx', xx)
// Vue.use(xx)
Vue.component('BXBCheckboxGropSub', BXBCheckboxGropSub)
Vue.component('BXBCheckboxGrop', BXBCheckboxGrop)
Vue.component(BXBCheckbox.name, BXBCheckbox)
Vue.component(BXBSlider.name, BXBSlider)
// Vue.component(BXBDropdown.name, BXBDropdown)
Vue.component(BXBDialog.name, BXBDialog)
Vue.component(BXBButton.name, BXBButton)
Vue.component(BXBIconButton.name, BXBIconButton)
Vue.component(BXBSortButton.name, BXBSortButton)

Vue.component(BXBSnackbar.name, BXBSnackbar)
Vue.component(BXBInputField.name, BXBInputField)
Vue.component(BXBDropdownMenu.name, BXBDropdownMenu)
Vue.component(BXBDropdownMultiSelect.name, BXBDropdownMultiSelect)
Vue.component(IconWrapper.name, IconWrapper)
Vue.component(BaseButton.name, BaseButton)
Vue.component(BXBTextField.name, BXBTextField)
Vue.component(BXBLoader.name, BXBLoader)
Vue.component(BXBSwitch.name, BXBSwitch)
Vue.component(BXBRadio.name, BXBRadio)
Vue.component(BXBNavbar.name, BXBNavbar)
Vue.component(BXBTab.name, BXBTab)
Vue.component(BGCover.name, BGCover)



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
