import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TestPage from '../views/TestPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/test',
    name: 'Test',
    component: TestPage
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

  {
    path: '/btn-page',
    component: () => import('../views/BtnPage.vue')
  },

  {
    path: '/input-component-page',
    component: () => import('../views/InputComponentPage.vue')
  },

  {
    path: '/navbar-page',
    component: () => import('../views/NavPage.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
