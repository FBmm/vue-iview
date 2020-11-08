import Layout from '@/layout'

const iviewExamplesRouter = {
  path: '/',
  component: Layout,
  children: [
    {
      path: '/iview-examples',
      redirect: '/iview-examples/basic-table',
      name: 'iview-examples',
      component: () => import('@/views/iview-examples/index'),
      meta: { title: 'iview-examples', icon: 'iview-examples' },
      children: [
        {
          path: '/iview-examples/basic-table',
          name: 'basic-table',
          component: () => import('@/views/iview-examples/table/basic-table'),
          meta: { title: 'basic-table', icon: 'basic-table' }
        }
      ]
    }
  ]
}

export default iviewExamplesRouter