import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Layout from '@/layout'

const constantRoutes  = [
  { path: '/layout', component: Layout },
]

function routerFactory() {
  return new VueRouter({
    routes: constantRoutes
  })
}

export default routerFactory()