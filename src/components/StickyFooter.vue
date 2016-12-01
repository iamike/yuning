<template lang="html">
  <div class="ui fixed bottom sticky fluid container" id="stickyFooter">
    <div class="ui segment basic inverted message">
      <i class="close icon"></i>
      <div class="ui container three column grid mobile only ">
        <div class="row">
          <h2 class="ui header inverted">关注我们的公众号, 体验300小时课程</h2>
          <div class="ui buttons">
            <a href="#" class="ui inverted olive button">公众号</a>
            <a href="#" class="ui inverted  button">iOS</a>
            <a href="#" class="ui inverted olive button">Android</a>
          </div>
        </div>

      </div>
      <div class="ui container two column divided grid tablet computer only ">
        <div class="row">
          <div class="column">
            <img class="ui image top aligned tiny spaced left floated" src="../assets/images/qrcode/wechat_mp.jpg" alt="" />
            <h2 class="ui header inverted ">现在就关注我们的公众号
              <div class="sub header"><i class="wechat icon left floated"></i>免费体验300小时课程</div>
            </h2>
          </div>
          <div class="column">
            <h4>App 下载</h4>
            <button class="ui icon inverted button"><i class="apple icon"></i> iOS</button>
            <button class="ui icon inverted olive button"><i class="android icon"></i> Android</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sticky-footer",
  mounted: function(){

    $('.message .close').on('click', function() {
        $(this).closest('.message').transition('fade')
      })
  }
}
</script>

<style lang="scss" scoped>
#stickyFooter {
  @media only screen and (max-width: 767px) {
    margin-left: 0em!important;
    margin-right: 0em!important;
    .ui.container.two.column {
      margin-left: 0em!important;
      margin-right: 0em!important;
    }
    .row {
      margin: 0px;
      padding: 0px;
    }

    h2.header {
      margin-bottom: 15px;
    }
  }
  .grid {
    padding: 0px;
    margin: 0px;
  }
  &>.ui.segment.basic.inverted {
    background-color: rgba(102, 180, 137, 0.75);
  }
  .header {
    font-size: 1rem;
  }
  // h2.header {
  //   margin-top: 15px;
  // }
  // .qrcode { width:100px; height: 100px;}
  // .wrapper {
  //   position: relative;
  //   z-index: 1;
  // }
  // .ctx,.bg {
  //   position: absolute;
  //   left:0px;
  //   top:0px;
  // }
  // .bg {
  //   background: #ff0000;
  //   width: 100%;
  //   height: 100%;
  //   opacity: 0.75;
  // }
}
</style>
