<template lang="html">
  <div class="ui modal small user-register coupled">
    <i class="close icon"></i>
    <div class="header">
      用户注册
    </div>
    <div class="ui segment padded basic">
      <div class="ui one column middle aligned very relaxed stackable grid">
        <div class="column">
          <user-register-form>
              <verify-mobile
              v-bind:verifyRequestInterval="this.$store.state.global.verifyCodeInterval"
              v-bind:verifyRequestRemain="this.$store.state.global.verifyRequestRemain"
              ></verify-mobile>
          </user-register-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserRegisterForm from './UserRegisterForm'
import VerifyMobile from './VerifyMobile'

export default {
  name: 'user-register-modal',

  components: {
    UserRegisterForm,
    VerifyMobile
  }
}
</script>

<style lang="css">
</style>
