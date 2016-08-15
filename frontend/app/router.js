import CartPage from './pages/CartPage'
import TimelinePage from './pages/TimelinePage.vue'

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
var router = new VueRouter({
  history: true
})

router.map({
  '/': {
    component: TimelinePage
  },
  '/cart': {
    component: CartPage
  },
  '/timeline': {
    component: TimelinePage
  },
  '/timeline/:id': {
    component: TimelinePage
  }
})

export default router
