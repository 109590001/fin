import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home.vue')
  },
  {
    path: '/page1',
    name: 'page1',
    component: () => import('../views/page1.vue')
  },
  {
    path: '/page2',
    name: 'page2',
    component: () => import('../views/page2.vue')
  },
  {
    path: '/page3',
    name: 'page3',
    component: () => import('../views/page3.vue')
  },
  {
    path: '/page4',
    name: 'page4',
    component: () => import('../views/page4.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
