<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import { install, SortHelper } from '../../lib/'
// import lib from '../../lib/vue-ui-component-hds.umd'

export default {
  created: function () {
    console.log('qq', install)
    // console.log('h', SortHelper)
    console.log('hh', new SortHelper())
    // console.log('qq', lib)
    // const h = new lib.SortHelper()
    // console.log('h', h)
  }
}
</script>
