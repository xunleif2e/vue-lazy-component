import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/large-page',
      name: 'LargePage',
      alias: '/',
      component: (resolve) => require(['../views/LargePage'], resolve)
    },
    {
      path: '/large-page-chunks',
      name: 'LargePageChunks',
      component: (resolve) => require(['../views/LargePageChunks'], resolve)
    },
    {
      path: '/large-page-not-lazy',
      name: 'LargePageNotLazy',
      component: (resolve) => require(['../views/LargePageNotLazy'], resolve)
    },
    {
      path: '/timeout',
      name: 'Timeout',
      component: (resolve) => require(['../views/Timeout'], resolve)
    },
    {
      path: '/custom-transition',
      name: 'CustomTransition',
      component: (resolve) => require(['../views/CustomTransition'], resolve)
    },
    {
      path: '/specific-viewport',
      name: 'SpecificViewport',
      component: (resolve) => require(['../views/SpecificViewport'], resolve)
    }
  ]
})

export default router
