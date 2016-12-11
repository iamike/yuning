<template lang="html">
  <div class="fields">
    <div class="field">
      <label>手机号</label>
      <input type="tel" name="mobile" placeholder="手机号" v-model="mobile">
    </div>
    <div class="field">
      <label>验证码</label>
      <div class="ui action input">
        <input type="tel" name="verifyCode" placeholder="验证码" >
        <button class="ui teal submit right labeled icon button " data-mode='verifyMode' v-bind:class="[ verifyRequestRemain < verifyRequestInterval ? 'disabled':'']">
          发送验证码
        </button>
      </div>
      <div class="ui success visible message" v-show="verifyRequestRemain < 60">
        <i class="close icon"></i>
        <div class="header">
          验证码已经发送成功.
        </div>
        <p>如果您没有收到， 请在{{verifyRemain}}秒后重试...</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'verify-mobile',
  props: ['verifyRequestInterval','verifyRequestRemain'],
  data: function () {
    return {
      mobile: ''
    }
  },
  mounted () {

  }
}
</script>

<style lang="css">
</style>
