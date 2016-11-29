<template lang="html">
  <div id="homepage">
    <!-- Slider main container -->
    <div class="swiper-container">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
            <!-- Slides -->
            <div class="swiper-slide">
              <mast-head></mast-head>
            </div>
            <div class="swiper-slide">
              <mast-head2></mast-head2>
            </div>
            <div class="swiper-slide">
3
            </div>

        </div>
        <!-- If we need pagination -->
        <div class="swiper-pagination"></div>


        <!-- If we need scrollbar -->
        <div class="swiper-scrollbar"></div>
    </div>
  </div>

</template>

<script>
import swiper from 'swiper'
import MastHead from './MastHead'
import MastHead2 from './MastHead2'

export default {
  name: 'homepage',
  components: {
    MastHead,
    MastHead2
  },
  mounted: function () {
    // console.log('homepage', $, swiper)
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        direction: 'vertical',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        mousewheelControl: true,
        mousewheelReleaseOnEdges : true,
        nextButton: 'null',
        prevButton: 'null',
        onScroll: function(swiper){
          //发生些什么吧
          console.log('test')
        },
        onTransitionStart: function(swiper){
          console.log('test2')

        }
    });
  }

}
</script>

<style lang="less">
@import '../../node_modules/swiper/src/less/swiper';
</style>
<style lang="scss">
#homepage {
  width: 100vw;
  height: 100vh;

  .swiper-container {
    height: 100%;

    .swiper-slider {
      height: 100%;
    }
  }
  .swiper-container-vertical > .swiper-pagination-bullets {
    right: 50px;
  }
  .swiper-pagination-bullet {
    // background-color: #ffffff;
  }
  .swiper-pagination-bullet-active {
    background-color: #52906e;
  }

}
</style>
