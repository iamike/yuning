<template lang="html">
  <div class="">
    <swiper :options="swiperOption">
      <swiper-slide><img src="../assets/images/banner/multiIntelligence/hero.png" alt="" class="image ui fluid"></swiper-slide>
      <swiper-slide><img src="../assets/images/banner/multiIntelligence/hero.png" alt="" class="image ui fluid"></swiper-slide>
      <swiper-slide><img src="../assets/images/banner/multiIntelligence/hero.png" alt="" class="image ui fluid"></swiper-slide>
      <swiper-slide><img src="../assets/images/banner/multiIntelligence/hero.png" alt="" class="image ui fluid"></swiper-slide>
      <swiper-slide><img src="../assets/images/banner/multiIntelligence/hero.png" alt="" class="image ui fluid"></swiper-slide>
      <swiper-slide><img src="../assets/images/banner/multiIntelligence/hero.png" alt="" class="image ui fluid"></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="ui container">
      <div class="ui labeled icon four item menu">
        <a class="item">
          <i class="shop icon"></i>
          购买课程
        </a>
        <a class="item">
          <i class="world icon"></i>
          多元智能测试
        </a>
        <a class="item">
          <i class="star icon"></i>
          课程预约
        </a>
        <router-link class="item" :to="{name:'multiIntelligenceRoom'}">
          <i class="desktop icon"></i>
          进入教室
        </router-link>
      </div>
    </div>
    <h4 class="ui horizontal divider header">
      <i class="tag icon"></i>
      多元智能测试介绍
    </h4>
    <div class="ui container">
      <div class="ui padded segment">
        <div class="ui three column grid">
          <div class="column">
            <div class="ui segment">
              <img>
            </div>
          </div>
          <div class="column">
            <div class="ui segment">
              <img>
            </div>
          </div>
          <div class="column">
            <div class="ui segment">
              <img>
            </div>
          </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide, swiperPlugins } from 'vue-awesome-swiper'

export default {
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationClickable: true
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style lang="scss" scoped>

.swiper-slide {
  img {
    max-height: 422px;
  }
}
</style>
