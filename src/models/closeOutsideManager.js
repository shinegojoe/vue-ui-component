
class CloseOutsideManager {
  constructor () {
    if (CloseOutsideManager._instance === undefined) {
      this.init()
      CloseOutsideManager._instance = this
    }
    return CloseOutsideManager._instance
  }

  init () {
    this.menuList = new Map()
  }

  registe (menu) {
    console.log('registe', menu)
    this.menuList.set(menu._uid, menu)
  }

  closeAll (current) {
    for (const item of this.menuList.values()) {
      if (current !== item) {
        console.log('item', item)
        item.closeOutside()
      }
    }
  }

  remove (menu) {
    this.menuList.delete(menu._uid)
  }
}

export { CloseOutsideManager }
