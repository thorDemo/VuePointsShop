<template>
  <div class="yh-wrap main-wrap">
    <div @click="switchTo('/Youhui/ChouJiang/')">
      <img src="../../assets/images/yh/yh-banner.png" alt="">
    </div>
    <div><img src="../../assets/images/yh/yh2-banner.png" alt=""></div>
    <div><img src="../../assets/images/yh/yh3-banner.png" alt=""></div>
    <div><img src="../../assets/images/yh/yh-banner.png" alt=""></div>
  </div>
</template>
<script>
export default {
  name: 'App',
  components: {

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
