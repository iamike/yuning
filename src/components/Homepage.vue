<template lang="html">
  <div id="homepage">
    <!-- Slider main container -->
    <div class="swiper-container" id="homeSlider">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
            <!-- Slides -->
            <div class="swiper-slide">
              <mast-head></mast-head>
            </div>
            <div class="swiper-slide">
              <mast-head3></mast-head3>
            </div>
            <div class="swiper-slide">
              <mast-head2></mast-head2>
            </div>

        </div>
        <!-- If we need pagination -->
        <div class="swiper-pagination"></div>

        <!-- If we need scrollbar -->
        <!-- <div class="swiper-scrollbar"></div> -->
    </div>
  </div>

</template>

<script>
import swiper from 'swiper'
import MastHead from './MastHead'
import MastHead2 from './MastHead2'
import MastHead3 from './MastHead3'

export default {
  name: 'homepage',
  components: {
    MastHead,
    MastHead2,
    MastHead3
  },
  data () {
    return {
      test:1
    }
  },
  mounted: function () {
    // console.log(this.$children[1].animation())
    $("#stickyFooter").addClass('fixed bottom sticky')
    let vm = this;

    let swiper = new Swiper('#homeSlider', {
        pagination: '.swiper-pagination',
        direction: 'vertical',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 0,
        mousewheelControl: true,
        mousewheelReleaseOnEdges : true,
        nextButton: 'null',
        prevButton: 'null',
        onScroll: function(swiper){

        },
        onTransitionStart: function(swiper){
          vm.$children[swiper.activeIndex].animation && vm.$children[swiper.activeIndex].animation()
        },
        onInit: function(swiper){
          vm.$children[swiper.activeIndex].animation && vm.$children[swiper.activeIndex].animation()
        }
    });
  },
  destroyed () {
    // console.log('test')
    $("#stickyFooter").removeClass('fixed bottom sticky')
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
  .swiper-container-vertical > .swiper-pagination-bullets {
    right: 1rem;
  }
  .swiper-pagination-bullet {
    // background-color: #ffffff;
  }
  .swiper-pagination-bullet-active {
    background-color: #52906e;
  }
  .swiper-container {
      width: 100%;
      height: 100%;
  }
  .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }
  .swiper-slide+.swiper-slide {
    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#71b795+0,ffffff+17,ffffff+83,71b795+100 */
    background: #71b795; /* Old browsers */
    background: -moz-linear-gradient(top,  #71b795 0%, #ffffff 20%, #ffffff 70%, #71b795 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top,  #71b795 0%,#ffffff 20%,#ffffff 70%,#71b795 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom,  #71b795 0%,#ffffff 20%,#ffffff 70%,#71b795 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#71b795', endColorstr='#71b795',GradientType=0 ); /* IE6-9 */
  }
  .swiper-slide+.swiper-slide+.swiper-slide{
    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#71b795+0,ffffff+17,ffffff+83,71a0b7+100 */
    background: #71b795; /* Old browsers */
    background: -moz-linear-gradient(top,  #71b795 0%, #ffffff 17%, #ffffff 70%, #71a0b7 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top,  #71b795 0%,#ffffff 17%,#ffffff 70%,#71a0b7 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom,  #71b795 0%,#ffffff 17%,#ffffff 70%,#71a0b7 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#71b795', endColorstr='#71a0b7',GradientType=0 ); /* IE6-9 */
  }

}
</style>
