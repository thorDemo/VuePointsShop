import Vue from 'vue'
import Router from 'vue-router'
import BottomNav from '@/components/common/bottomNav'
import TopNav from '@/components/common/topNav'
import shouye from '@/components/page/shouye'
import Vip from '@/components/page/Vip'
import Youhui from '@/components/page/Youhui'
import perry from '@/components/page/perry'

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
    },
    {
      path:'/perry',
      component: perry,     
      
    }
  ]
})
