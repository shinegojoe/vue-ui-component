
import BXBCheckboxGrop from './ckeckbox/BXBCheckboxGrop'
import BXBCheckboxGropSub from './ckeckbox/BXBCheckboxGropSub'
import BXBCheckbox from './ckeckbox/BXBCheckbox'
import BXBSwitch from './ckeckbox/BXBSwitch.vue'
import BXBRadio from './ckeckbox/BXBRadio.vue'
// import BXBSlider from './BXBSlider'
import BXBSlider from './BXBSliderV2'
// import VueRouter from 'vue-router'
import BXBInputField from './BXBInputFieldV2.vue'
// import BXBDropdownMenu from './BXBDropdownMenu.vue'
import BXBDropdownMenu from './dropdown/BXBDropdownMenu.vue'
import BXBDropdownMultiSelect from './dropdown/BXBDropdownMultiSelect.vue'

import IconWrapper from './IconWrapper.vue'
import BaseButton from './button/BaseButton.vue'
import BXBButton from './button/BXBButton.vue'
import BXBIconButton from './button/BXBIconButton.vue'
import BXBSortButton from './button/BXBSortButton.vue'


import BXBTextField from './BXBTextField.vue'
import BXBLoader from './BXBLoader.vue'
import BXBDialog from './BXBDialog.vue'
import BXBSnackbar from './BXBSnackbar.vue'
import BGCover from './BGCover.vue'
import BXBTab from './BXBTab.vue'
import BXBPagination from './BXBPagination.vue'
import { SortHelper } from '../models/sortHelper.js'



const components = [
  BXBCheckboxGrop,
  BXBCheckboxGropSub,
  BXBCheckbox,
  BXBSlider,
  BXBInputField,
  BXBDropdownMenu,
  BXBDropdownMultiSelect,
  IconWrapper,
  
  BaseButton,
  BXBButton,
  BXBIconButton,
  BXBSortButton,
  BXBSwitch,
  BXBRadio,

  BXBTextField,
  BXBDialog,
  BXBLoader,
  BXBSnackbar,
  BGCover,
  BXBTab,
  BXBPagination
]

const install  = function (Vue) {
  components.forEach((item)=>{
    console.log('name', item.name, 'item', item)
    Vue.component(item.name, item)
  })
}

// export default { install, SortHelper }
export { install, SortHelper }