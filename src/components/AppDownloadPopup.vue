<template lang="html">
  <div id="appqrPopup" class="ui flowing popup bottom center transition hidden">
    <div class="ui four column relaxed divided grid">
      <div class="column">
        <h4 class="ui header">Android</h4>
        <img class="ui image top aligned small spaced left floated" src="../assets/images/qrcode/wechat_mp.jpg" alt="" />
      </div>
      <div class="column">
        <h4 class="ui header">iOS</h4>
        <img class="ui image top aligned small spaced left floated" src="../assets/images/qrcode/wechat_mp.jpg" alt="" />
      </div>
      <div class="column">
        <h4 class="ui header">微信公众号</h4>
          <img class="ui image top aligned small spaced left floated" src="../assets/images/qrcode/wechat_mp.jpg" alt="" />
      </div>
      <div class="column">
        <h4 class="ui header">微博</h4>
          <img class="ui image top aligned small spaced left floated" src="../assets/images/qrcode/wechat_mp.jpg" alt="" />
      </div>
     </div>
  </div>
</template>

<script>
export default {
  name: 'app-download-popup',
  mounted () {
    $('.item.showAppQR')
      .popup({
        inline     : true,
        popup: '#appqrPopup',
        // hoverable  : true,
        position   : 'bottom center',
        on: 'click',
        delay: {
          show: 300,
          hide: 800
        }
      })
  }
}
</script>

<style lang="css">
</style>
