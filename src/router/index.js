import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// routes
const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '*',
    redirect: '/home'
  }
]

// instantiation
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
