<template>
  <div class="top-nav">
    <div class="top-nav-left">
      <img src="../../assets/images/topnav/cd.png" alt="菜单">
    </div>
    <div id="top-logo-change" v-html="topMessage">
        <span>这个是标题</span>
    </div>
    <div id="top-nav-right" class="top-nav-right">
      <img src="../../assets/images/topnav/ss.png" alt="搜索">
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tabBarImgArr: [
        {normal: require('../../assets/images/topnav/logo.png')},
        {normal: require('../../assets/images/topnav/ss.png')},
        {normal: require('../../assets/images/topnav/cd.png')}
      ],
      
    }
  }
}
</script>
<style>

</style>
