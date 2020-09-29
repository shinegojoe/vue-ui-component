import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BXBCheckboxGropSub from './components/ckeckbox/BXBCheckboxGropSub.vue'
import BXBCheckboxGrop from './components/ckeckbox/BXBCheckboxGrop.vue'
import BXBCheckbox from './components/ckeckbox/BXBCheckbox.vue'
import BXBSlider from './components/BXBSlider.vue'
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


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
