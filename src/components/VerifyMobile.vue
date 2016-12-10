<template lang="html">
  <div class="field">
    <label>验证码</label>
    <div class="ui action input">
      <input type="tel" name="verifyCode" placeholder="验证码" v-model="userRegisterInfo.verify_code">
      <button class="ui teal submit right labeled icon button " data-mode='verifyMode' v-bind:class="[ verifyRemain < 60 ? 'disabled':'']">
        发送验证码
      </button>
    </div>
    <div class="ui success visible message" v-show="verifyRemain < 60">
      <i class="close icon"></i>
      <div class="header">
        验证码已经发送成功.
      </div>
      <p>如果您没有收到， 请在{{verifyRemain}}秒后重试...</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'verify-mobile',
  props: ['requestInterval'],
  data () {
    return {
      userRegisterInfo: {
        verify_code: '',
      },
      verifyRemain:60,
    }
  }
}
</script>

<style lang="css">
</style>
