<template>
  <div id="app">
    <topNav></topNav>
    <router-view/>
    <bottomNav></bottomNav>
  </div>
</template>

<script>
import bottomNav from '@/components/common/bottomNav'
import topNav from '@/components/common/topNav'

export default {
  name: 'App',
  components: {
    bottomNav,
    topNav
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #151515;
  height: 100vh;
}
</style>
