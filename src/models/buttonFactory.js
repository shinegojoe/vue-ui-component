
class ButtonFactory {
  constructor (dataLength, maxLength) {
    this.dataLength = dataLength
    this.maxLength = maxLength
    this.totalData = this.init()
  }

  init () {
    const totalData = []
    for (let i = 1; i <= this.dataLength; i++) {
      totalData.push(i)
    }
    return totalData
  }

  updateButton (index) {
    const leftBound = index - 3
    const rightBound = index + 3
    if (index <= 5) {
      const buttons = this.totalData.filter((item, index, arr) => {
        return item < this.maxLength
      })
      buttons[buttons.length] = '...'
      buttons.push(this.dataLength)

      return buttons
    } else if (this.dataLength - index <= 5) {
      const buttons = this.totalData.filter((item, index, arr) => {
        return item > this.dataLength - this.maxLength
      })
      buttons[0] = '...'
      buttons.unshift(1)
      return buttons
    } else {
      // const buttons = this.totalData.filter((item, index, arr) => {
      //   return item > this.dataLength - this.maxLength
      // })
      // return buttons
      const buttons = this.totalData.filter((item, index, arr) => {
        return item >= leftBound & item <= rightBound
      })
      buttons.unshift('...')
      buttons.unshift(1)
      if (this.maxLength % 2 !== 0) {
        buttons.push('...')
        buttons.push(this.dataLength - 1)
        buttons.push(this.dataLength)
      } else {
        buttons.push('...')
        buttons.push(this.dataLength)
      }

      return buttons
    }
  }

  getButton (index) {
    if (this.dataLength > this.maxLength) {
      return this.updateButton(index)
    }
  }
}

export { ButtonFactory }
