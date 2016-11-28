<template lang="html">
  <div class="ui vertical masthead center aligned segment">
    <div class="ui container">
      <div class="introduction">

        <img src="../assets/images/brand.png" style="max-width:120px; visibility:hidden; " alt="解决家长的N+1个困扰" class="ui fluid image centered brandleaf" />
        <h1 class="ui header">
          <div class="ui statistic">
              <div class="label" style="visibility:hidden;">
                成长保已经为
              </div>
              <div class="value" style="visibility:hidden;">
                40,509位父母
              </div>
            </div>
        </h1>
        <img src="../assets/images/slogan.png" style="max-width:380px;visibility:hidden;" alt="解决家长的N+1个困扰" class="ui fluid image centered slogan" />
        <div class="ui horizontal divider"></div>
        <div class="ui green animated fade button" tabindex="0" style="visibility:hidden;">
          <div class="visible content"> <i class="icon child"></i> 开 始 使 用</div>
          <div class="hidden content">
            ￥12.99/月
          </div>
        </div>

      </div>

    </div>
    <i class="chevron down icon inverted green"></i>
  </div>
</template>

<script>
// import MenuItem from './MenuItem'

export default {
  name: 'mast-head',
  components: {
    // MenuItem
  },
  mounted() {
    // fix menu when passed
    // $('.masthead').visibility({
    //   once: false,
    //   onBottomPassed: function() {
    //     $('.fixed.menu').transition('fade in')
    //   },
    //   onBottomPassedReverse: function() {
    //     $('.fixed.menu').transition('fade out')
    //   }
    // })
    $(document).ready(function(){
        //leaf
        $('.brandleaf')
        .transition({
          animation : 'fade up',
          duration  : 1000,
          onComplete : function(){
            $('.introduction .ui.statistic .label, .introduction .ui.statistic .value, .introduction .slogan, .introduction .green.button')
            // .transition('hide')
            .transition({
              animation : 'fade up',
              duration  : 1000,
              interval  : 1000,
              onComplete : function(){

                $('.brandleaf')
                .transition({
                  animation:'tada',
                  duration  : 1800,
                })
                .transition('set looping')


              }
            })
          }
        })
    })

  }
}
</script>

<style lang="scss" scoped>
.chevron.down.icon {
  position: absolute;
  bottom:0px;
  left:50%;
  margin-bottom: 3em;
  z-index: 998;
  font-size: 2rem;
  -webkit-animation: scroll-down-anim 1s infinite;
  -moz-animation: scroll-down-anim 1s infinite;
  -o-animation: scroll-down-anim 1s infinite;
  animation: scroll-down-anim 1s infinite;
}
.chevron.down.icon.green {
  position: absolute;
  bottom:2px;
  left:50%;
  margin-bottom: 3.2em;
  z-index: 999;
  font-size: 2rem;
  -webkit-animation: scroll-down-anim 1s infinite;
  -moz-animation: scroll-down-anim 1s infinite;
  -o-animation: scroll-down-anim 1s infinite;
  animation: scroll-down-anim 1s infinite;
}

.masthead .logo.item img {
  margin-right: 1em;
}
.masthead .ui.menu .ui.button {
  margin-left: 0.5em;
}


@media only screen and (max-width: 700px) {

  .masthead.segment {
    min-height: 350px;
  }
  .masthead h1.ui.header {

    font-size: 2em;
    margin-top: 0.5em;
    .ui.statistic > .label {
      font-size: 1.5rem!important;
    }
    .ui.statistic > .value {
      font-size: 2rem!important;
    }
  }
  .masthead h2 {
    margin-top: 0.5em;
    font-size: 1.5em;
  }

}

.masthead {
  padding: 0em;
  .introduction {

  }
  &.ui.vertical.segment {
    overflow: hidden;
    padding: 0em;
    .ui.container {
      height: 100vh;
      min-height: 600px;
      padding: 15rem 0em;
      position: relative;
      z-index: 2;

      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;

    }
  }
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  -o-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  transform-style: preserve-3d;

  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);

  -ms-transition: background-color 3s ease-in-out 2s;
  -moz-transition: background-color 3s ease-in-out 2s;
  -webkit-transition: background-color 3s ease-in-out 2s;
  transition: background-color 3s ease-in-out 2s;

  -webkit-perspective: 1000px;
  -moz-perspective: 1000px;
  -o-perspective: 1000px;
  -ms-perspective: 1000px;
  perspective: 1000px;

  &:before {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    content: '';
    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#ffffff+32,32bb79+100 */
    background: #ffffff; /* Old browsers */
    background: -moz-linear-gradient(top,  #ffffff 32%, #32bb79 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top,  #ffffff 32%,#32bb79 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom,  #ffffff 32%,#32bb79 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#32bb79',GradientType=0 ); /* IE6-9 */

    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#ffffff+32,32bb79+100 */
    background: #ffffff; /* Old browsers */
    background: -moz-radial-gradient(center, ellipse cover,  #ffffff 32%, #32bb79 100%); /* FF3.6-15 */
    background: -webkit-radial-gradient(center, ellipse cover,  #ffffff 32%,#32bb79 100%); /* Chrome10-25,Safari5.1-6 */
    background: radial-gradient(ellipse at center,  #ffffff 32%,#32bb79 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#32bb79',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */

  }

  &:after {
    position: absolute;
    z-index: 1;
    width: 135%;
    height: 135%;
    top: 0px;
    left: 0px;
    content: '';
    background: url(../assets/images/appUiBg.png);

    -moz-transform-origin: 50% 50%;
    -o-transform-origin: 50% 50%;
    -ms-transform-origin: 50% 50%;
    transform-origin: 50% 50%;

    -webkit-transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    -o-transform-style: preserve-3d;
    -ms-transform-style: preserve-3d;
    transform-style: preserve-3d;

    -webkit-animation-name: masthead;
    -moz-animation-name: masthead;
    -o-animation-name: masthead;
    animation-name: masthead;

    -ms-transition: opacity 3s ease-in-out, transform 5s ease-in-out;
    -webkit-transition: opacity 3s ease-in-out, transform 5s ease-in-out;
    -moz-transition: opacity 3s ease-in-out, transform 5s ease-in-out;
    transition: opacity 3s ease-in-out, transform 5s ease-in-out;

    opacity: 0.3;

    -webkit-animation-duration: 15s;
    -moz-animation-duration: 15s;
    -ms-animation-duration: 15s;
    -o-animation-duration: 15s;
    animation-duration: 15s;

    -webkit-animation-fill-mode: both;
    -moz-animation-fill-mode: both;
    -ms-animation-fill-mode: both;
    -o-animation-fill-mode: both;
    animation-fill-mode: both;

    animation-timing-function: linear;
    -webkit-animation-timing-function: linear;

    -webkit-animation-iteration-count: infinite;
    -moz-animation-iteration-count: infinite;
    -ms-animation-iteration-count: infinite;
    -o-animation-iteration-count: infinite;
    animation-iteration-count: infinite;

    -webkit-transform: rotateX(50deg) rotateZ(0deg) rotateY(0deg) translateY(0%) translateX(-14%) translateZ(370px);
    -moz-transform: rotateX(50deg) rotateZ(0deg) rotateY(0deg) translateY(0%) translateX(-14%) translateZ(370px);
    transform: rotateX(50deg) rotateZ(0deg) rotateY(0deg) translateY(0%) translateX(-14%) translateZ(370px);
  }
}

</style>
