import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Layout from '@/layout'
import homeRouter from './modules/home'

const constantRoutes  = [
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  { 
    path: '/',
    redirect: 'home',
    component: Layout 
  },
  homeRouter,
  { path: '*',
    redirect: '/404',
    hidden: true
  }
]

function routerFactory() {
  return new VueRouter({
    routes: constantRoutes
  })
}

export default routerFactory()