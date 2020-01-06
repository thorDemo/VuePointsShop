<template>
  <div class="main-wrap shouye-contain">
    <!-- banner -->
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide>
        <div class="banner-item">
          <img src="../../assets/images/banner/banner2.png" alt="">
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="banner-item">
          <img src="../../assets/images/banner/banner2.png" alt="">
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="banner-item">
          <img src="../../assets/images/banner/banner2.png" alt="">
        </div>
      </swiper-slide>
      <!-- Optional controls -->
      <!-- <div class="swiper-pagination" slot="pagination"></div> -->
      <!-- <div class="swiper-scrollbar index-banner-circle" slot="scrollbar"></div> -->
    </swiper>
    <!-- 滚动公告 -->
    <Notice></Notice>
    <!-- 推荐分类栏 -->
    <div class="recommend-wrap">
      <el-row>
        <el-tabs type="border-card">
          <el-tab-pane label="推荐">
            <div class="products-item">
              <div class="product-item-text">
                <p>商品详情商品详情商品详情商品详情商品详</p>
                <span>72000积分</span>
              </div>
              <div class="product-item-img">
                <img src="../../assets/images/products/bsbb.png" alt="">
              </div>
            </div>
            <div class="products-item-even">
              <div class="product-item-text">
                <p>商品详情商品详情商品详情商品详情商品详</p>
                <span>72000积分</span>
              </div>
              <div class="product-item-img">
                <img src="../../assets/images/products/kh.png" alt="">
              </div>
            </div>
            <div class="products-item">
              <div class="product-item-text">
                <p>商品详情商品详情商品详情商品详情商品详</p>
                <span>72000积分</span>
              </div>
              <div class="product-item-img">
                <img src="../../assets/images/products/lsbb.png" alt="">
              </div>
            </div>
            <div class="products-item-even">
              <div class="product-item-text">
                <p>商品详情商品详情商品详情商品详情商品详</p>
                <span>72000积分</span>
              </div>
              <div class="product-item-img">
                <img src="../../assets/images/products/sb.png" alt="">
              </div>
            </div>
            <div class="products-item">
              <div class="product-item-text">
                <p>商品详情商品详情商品详情商品详情商品详</p>
                <span>72000积分</span>
              </div>
              <div class="product-item-img">
                <img src="../../assets/images/products/xs.png" alt="">
              </div>
            </div>
            <div class="products-item-even">
              <div class="product-item-text">
                <p>商品详情商品详情商品详情商品详情商品详</p>
                <span>72000积分</span>
              </div>
              <div class="product-item-img">
                <img src="../../assets/images/products/xsfs.png" alt="">
              </div>
            </div>
            <div class="products-item">
              <div class="product-item-text">
                <p>商品详情商品详情商品详情商品详情商品详</p>
                <span>72000积分</span>
              </div>
              <div class="product-item-img">
                <img src="../../assets/images/products/yx.png" alt="">
              </div>
            </div>
            <div class="products-item-even">
              <div class="product-item-text">
                <p>商品详情商品详情商品详情商品详情商品详</p>
                <span>72000积分</span>
              </div>
              <div class="product-item-img">
                <img src="../../assets/images/products/hw.png" alt="">
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="数码">数码</el-tab-pane>
          <el-tab-pane label="奖金">奖金</el-tab-pane>
          <el-tab-pane label="生活精品">生活精品</el-tab-pane>
          <el-tab-pane label="奢华品">奢华品</el-tab-pane>
        </el-tabs>
      </el-row>
    </div>
  </div>
</template>
<script>
// 引用组件
import Notice from '@/components/page/notice'
import {swiper, swiperSlide} from 'vue-awesome-swiper'

export default {
  name: 'App',
  components: {
    swiper,
    swiperSlide,
    Notice
  },
  data () {
    return {
      swiperOption: {
        scrollbar: {
          el: '.swiper-scrollbar'
        },
        slidesPerView: 1,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        loop: true
      }
    }
  }
}
</script>
<style>
.swiper-container{
  height: 100%;
  margin-bottom: -4px;
}
.el-tabs__nav-wrap{
  width: 100%
}
/* .el-tabs__item{
  padding: 0 5.26%;
} */
.el-tabs--border-card{
  border: 0;
  /* margin-bottom: 50px; */
}
.el-tabs--border-card>.el-tabs__header .el-tabs__item{
  border: 0
}
.el-tabs--border-card>.el-tabs__header{
  padding: 10px 15px 0;
  background: #151515
}
.el-tabs--border-card>.el-tabs__header .el-tabs__item:not(.is-disabled):hover{
  color: #ffffff;
}
.el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active{
  height: 39px;
  color: #ffffff;
  background: #292C35;
}
.el-tabs--border-card>.el-tabs__header .el-tabs__item{
  color: #666666;
}
.el-tabs__nav-wrap.is-scrollable{
  padding: 0 20px;
  box-sizing: border-box;
}
.el-tabs--border-card{
  box-shadow: 0 0 0 0 rgb(0, 0, 0, 0)
}
.el-tabs--border-card>.el-tabs__content {
  margin-top: -2px;
  background: #292C35;
}
.el-tabs--border-card>.el-tabs__content{
  padding: 15px 15px 0 15px;
}

</style>
