import Vue from 'vue'
import Router from 'vue-router'
import BottomNav from '@/components/common/bottomNav'
import TopNav from '@/components/common/topNav'
import shouye from '@/components/page/shouye'
import Vip from '@/components/page/Vip'
import Youhui from '@/components/page/Youhui'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/Mainnav', component: BottomNav},
    {path: '/Topnav', component: TopNav},
    {path: '/', component: shouye},
    {
      path: '/shouye',
      component: shouye,
      meta: {index: 2, title: '<img src="/static/topnav/logo.png " alt="logo">'}
    },
    {
      path: '/YouHui',
      component: Youhui,
      meta: {index: 2, title: '<p>优惠专区</p>'}
    },
    {
      path: '/Vip',
      component: Vip,
      meta: {index: 2, title: '<p>VIP权益</p>'}
    }
  ]
})
