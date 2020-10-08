
class SortHelper {
  constructor () {
    // SortHelper.name = 'qqSortHelper'
    this._sortStateMap = {
      title: false,
      status: false
    }
  }

  get sortStateMap() {
    return this._sortStateMap
  }

  resetOther(name) {
    for (const [key, value] of Object.entries(this._sortStateMap)) {
      // console.log(`${key}: ${value}`);
      if(key !== name) {
        this._sortStateMap[key] = false
      }
    }
  }

  sortByString(data, name) {
    this.resetOther(name)
    this._sortStateMap[name] = !this._sortStateMap[name]
    const state = this._sortStateMap[name]
    console.log(state)
    if(state) {
      data.sort((a, b)=>{
        return b[name].localeCompare(a[name])
      })
    } else {
      data.sort((a, b)=>{
        return a[name].localeCompare(b[name])
      })
    }
  }

  sortByNumber(data, name) {
    this.resetOther(name)
    this._sortStateMap[name] = !this._sortStateMap[name]
    const state = this._sortStateMap[name]
    if(state) {
      data.sort((a, b)=>{
        return a[name] -b[name]
      })
    } else {
      data.sort((a, b)=>{
        return b[name] - a[name]
      })
    }
  }
  
  sortByBool(data, name) {
    this.resetOther(name)
    this._sortStateMap[name] = !this._sortStateMap[name]
    const state = this._sortStateMap[name]
    if(state) {
      data.sort((a, b)=>{
        return a[name] -b[name]
      })
    } else {
      data.sort((a, b)=>{
        return b[name] - a[name]
      })
    }
  }
  
  checkIconState(name) {
    const state = this._sortStateMap[name]
    if(state) {
       return {'transform': 'rotate(180deg)'}
    } else {
      return {'transform': 'rotate(0deg)'}
    }
  }
}



export { SortHelper }