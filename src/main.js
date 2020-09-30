import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BXBCheckboxGropSub from './components/ckeckbox/BXBCheckboxGropSub.vue'
import BXBCheckboxGrop from './components/ckeckbox/BXBCheckboxGrop.vue'
import BXBCheckbox from './components/ckeckbox/BXBCheckbox.vue'
import BXBSlider from './components/BXBSlider.vue'
import BXBDropdown from './components/BXBDropdownMenu.vue'
import BXBDialog from './components/BXBDialog.vue'
import BXBButton from './components/BXBButton.vue'
import BXBIconButton from './components/BXBIconButton.vue'
import BXBSnackbar from './components/BXBSnackbar.vue'
import BXBInputField from './components/BXBInputField.vue'
import BXBDropdownMenu from './components/BXBDropdownMenu.vue'
import IconWrapper from './components/IconWrapper.vue'
import _main from './sass/main.sass'
// import xx from '../packages/index.js'
// import xx from '../vue-ui-component-hds/lib'
// import xx from '../node_modules/vue-ui-component-hds/lib/vcolorpicker.umd'
// import qq from '../node_modules/vue-ui-component-hds/lib/vcolorpicker.css'
import VueRouter from 'vue-router'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.config.productionTip = false
// console.log('xx', xx)
// Vue.use(xx)
Vue.component('BXBCheckboxGropSub', BXBCheckboxGropSub)
Vue.component('BXBCheckboxGrop', BXBCheckboxGrop)
Vue.component(BXBCheckbox.name, BXBCheckbox)
Vue.component(BXBSlider.name, BXBSlider)
Vue.component(BXBDropdown.name, BXBDropdown)
Vue.component(BXBDialog.name, BXBDialog)
Vue.component(BXBButton.name, BXBButton)
Vue.component(BXBIconButton.name, BXBIconButton)
Vue.component(BXBSnackbar.name, BXBSnackbar)
Vue.component(BXBInputField.name, BXBInputField)
Vue.component(BXBDropdownMenu.name, BXBDropdownMenu)
Vue.component(IconWrapper.name, IconWrapper)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
