<template>
  <div>
    <div class="Notice-textBox">
      <div class="Notice-sign"></div>
      <transition name="slide">
        <p class="Notice-text" :key="text.id">{{text.val}}</p>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'scroll',
  data () {
    return {
      textArr: [
        '第一条公告第一条公告第一条公告第一条公告第一条公告',
        '第二条公告第二条公告',
        '第三条公告第三条公告第三条公告'
      ],
      number: 0
    }
  },
  computed: {
    text () {
      return {
        id: this.number,
        val: this.textArr[this.number]
      }
    }
  },
  mounted () {
    this.startMove()
  },
  methods: {
    startMove () {
      // eslint-disable-next-line
      let timer = setTimeout(() => {
        if (this.number === 2) {
          this.number = 0
        } else {
          this.number += 1
        }
        this.startMove()
      }, 6000) // 滚动不需要停顿则将2000改成动画持续时间
    }
  }
}
</script>

<style scoped>
</style>
