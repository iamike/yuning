<template lang="html">
<div class="ui text container">
  <div class="ui middle aligned one column centered grid">
    <div class="ui segment basic padded very">
      <h1 class="ui header">优质师资保障品质</h1>
      <p>
        成长保是专业的在线儿童成长顾问平台，具有数百位儿童咨询师和儿童游戏咨询师，一直专注儿童成长。
      </p>
    </div>
  </div>
  <div class="ui middle aligned six column centered grid" id="teacherPicDemo">
    <div class="row">
      <div class="column">
        <img class="ui image circular" src="../assets/images/teacher/1451877247605556164.jpg">
        <img class="ui image circular" src="../assets/images/teacher/1441616743197847732.jpg">
      </div>
      <div class="column">
        <img class="ui image circular" src="../assets/images/teacher/1451874991238942279.jpg">
        <img class="ui image circular" src="../assets/images/teacher/1444980853702296467.jpg">
        <img class="ui image circular" src="../assets/images/teacher/1434527076153012793.jpg">
      </div>
      <div class="column">
        <img class="ui image circular" src="../assets/images/teacher/1434527253147131380.jpg">
        <img class="ui image circular" src="../assets/images/teacher/1434527358728820025.jpg">
        <img class="ui image circular" src="../assets/images/teacher/1434698941671885934.jpg">
      </div>
      <div class="column">
        <img class="ui image circular" src="../assets/images/teacher/1434699639804185319.jpg">
        <img class="ui image circular" src="../assets/images/teacher/1451875395258650311.png">
      </div>
    </div>
  </div>

</div>


</template>

<script>


export default {
  name: 'mast-head2',
  data () {
    return {
      animated: false,
      animation: function(){
        var vm = this

        if (vm.animated===false) {
          vm.animated = true
          let $animateElements = $('#teacherPicDemo img.circular')

          if (!$animateElements.hasClass('visible')){

            $('.phonePlaceholder').fadeIn()

            $animateElements.transition({
              animation : 'scale',
              reverse   : 'auto', // default setting
              interval  : 200,
              onComplete : function(){

              }
            })
          }

        }


      }
    }
  }
}
</script>

<style lang="scss" scoped >
#teacherPicDemo img.circular {
  visibility: hidden;

}
img.phonePlaceholder {
  position: absolute;
  bottom:0px;
  left:0px;
  transform: rotate(-9deg) translateX(81px) translateY(60px);
}
.ui.text.container {
  // position: relative;
  // background: url(../assets/images/bg/bg.png);
  // background-size: cover;
  // background-repeat: no-repeat;

}
/*.swiper-container {
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
}

.swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    height: 300px;
}*/

</style>
