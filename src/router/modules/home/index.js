import Layout from '@/layout'

const homeRouter = {
  path: '/',
  component: Layout,
  children: [
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/home/index'),
      meta: { title: 'home', icon: 'home' }
    }
  ]
}

export default homeRouter