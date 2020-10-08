
import BXBCheckboxGrop from './ckeckbox/BXBCheckboxGrop'
import BXBCheckboxGropSub from './ckeckbox/BXBCheckboxGropSub'
import BXBCheckbox from './ckeckbox/BXBCheckbox'
import BXBSlider from './BXBSlider'
// import VueRouter from 'vue-router'
import BXBInputField from './BXBInputField.vue'
import BXBDropdownMenu from './BXBDropdownMenu.vue'
import IconWrapper from './IconWrapper.vue'
import BaseButton from './button/BaseButton.vue'
import BXBButton from './button/BXBButton.vue'
import BXBIconButton from './button/BXBIconButton.vue'

import BXBTextField from './BXBTextField.vue'
import BXBLoader from './BXBLoader.vue'
import BXBDialog from './BXBDialog.vue'
import BXBSnackbar from './BXBSnackbar.vue'
import { SortHelper } from '../models/sortHelper.js'

const components = [
  BXBCheckboxGrop,
  BXBCheckboxGropSub,
  BXBCheckbox,
  BXBSlider,
  BXBInputField,
  BXBDropdownMenu,
  IconWrapper,
  
  BaseButton,
  BXBButton,
  BXBIconButton,

  BXBTextField,
  BXBDialog,
  BXBLoader,
  BXBSnackbar,
]

const install  = function (Vue) {
  components.forEach((item)=>{
    console.log('name', item.name, 'item', item)
    Vue.component(item.name, item)
  })
}

// export default { install, SortHelper }
export { install, SortHelper }