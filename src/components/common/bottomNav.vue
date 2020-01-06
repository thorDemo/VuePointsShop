<template>
  <div class="bottom-tab">
    <div class="tab-item" @click="switchTo('/shouYe/')">
      <img class="NavSigh" :src="'/shouYe/' === $route.path ? tabBarImgArr[0].selected : tabBarImgArr[0].normal" alt="首页">
      <p :class="{on: '/shouYe/' === $route.path}">首页</p>
    </div>
    <div class="tab-item" @click="switchTo('/youHui/')">
      <img class="NavSigh" :src="'/youHui/' === $route.path ? tabBarImgArr[1].selected : tabBarImgArr[1].normal" alt="推荐">
      <p :class="{on: '/youHui/' === $route.path}">优惠</p>
    </div>
    <div class="tab-item">
      <img class="NavSigh" :src="'/' === $route.path ? tabBarImgArr[2].selected : tabBarImgArr[2].normal" alt="搜索">
      <p :class="{on: '/' === $route.path}">官网</p>
    </div>
    <div class="tab-item" @click="switchTo('/vip/')">
      <img class="NavSigh" :src="'/vip/' === $route.path ? tabBarImgArr[3].selected : tabBarImgArr[3].normal" alt="聊天">
      <p :class="{on: '/vip/' === $route.path}">VIP</p>
    </div>
    <div class="tab-item" @click="switchTo('/Member')">
      <img class="NavSigh" :src="'/Member' === $route.path ? tabBarImgArr[4].selected : tabBarImgArr[4].normal" alt="我的">
      <p :class="{on: '/Member' === $route.path}">我的</p>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tabBarImgArr: [
        {normal: require('../../assets/images/navLogo/sy_x.png'), selected: require('../../assets/images/navLogo/sy.png')},
        {normal: require('../../assets/images/navLogo/yh_x.png'), selected: require('../../assets/images/navLogo/yh.png')},
        {normal: require('../../assets/images/navLogo/gw_x.png'), selected: require('../../assets/images/navLogo/gw.png')},
        {normal: require('../../assets/images/navLogo/zs_x.png'), selected: require('../../assets/images/navLogo/zs.png')},
        {normal: require('../../assets/images/navLogo/wd_x.png'), selected: require('../../assets/images/navLogo/wd.png')}
      ]
    }
  },
  methods: {
    switchTo (path) {
      this.$router.replace(path)
    }
  }
}
</script>
<style>

</style>
