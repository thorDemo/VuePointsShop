import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)


function loadView(view){
    return () => import(`@/components${view}.vue`)
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: loadView('/page/shouYe')
    },
    {
      path: '/shouYe/',
      name: 'shouYe',
      component: loadView('/page/shouYe')
    },
    {
      path: '/vip/',
      name: 'vip',
      components: loadView('/page/vip'),
      meta: {index: 2, title: '<p>VIP权益</p>'}
    },
    {
      path: '/youHui/',
      name: 'youHui',
      components: loadView('/page/youHui'),
      meta: {index: 2, title: '<p>优惠专区</p>'}
    },
    {
      path: '/bottomNav/',
      name: 'bottomNav',
      component: loadView('/common/bottomNav')
    },
    {
      path: '/topNav/',
      name: 'topNav',
      component: loadView('/common/topNav')
    },
  ]
})
