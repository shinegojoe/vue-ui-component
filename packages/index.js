
import BXBCheckboxGrop from './ckeckbox/BXBCheckboxGrop'
import BXBCheckboxGropSub from './ckeckbox/BXBCheckboxGropSub'
import BXBCheckbox from './ckeckbox/BXBCheckbox'
import BXBSlider from './BXBSlider'
import VueRouter from 'vue-router'

const components = [
  BXBCheckboxGrop,
  BXBCheckboxGropSub,
  BXBCheckbox,
  BXBSlider
]

const install  = function (Vue) {
  components.forEach((item)=>{
    console.log('name', item.name, 'item', item)
    Vue.component(item.name, item)
  })
}

export default { install }