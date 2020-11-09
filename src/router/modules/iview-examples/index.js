import Layout from '@/layout'

const iviewExamplesRouter = {
  path: '/',
  component: Layout,
  children: [
    {
      path: '/iview-examples',
      redirect: '/iview-examples/page-table',
      name: 'iview-examples',
      component: () => import('@/views/iview-examples/index'),
      meta: { title: 'iview-examples', icon: 'iview-examples' },
      children: [
        {
          path: '/iview-examples/basic-table',
          name: 'basic-table',
          component: () => import('@/views/iview-examples/table/basic-table'),
          meta: { title: 'basic-table', icon: 'basic-table' }
        },
        {
          path: '/iview-examples/page-table',
          name: 'page-table',
          component: () => import('@/views/iview-examples/table/page-table'),
          meta: { title: 'page-table', icon: 'page-table' }
        }
      ]
    }
  ]
}

export default iviewExamplesRouter