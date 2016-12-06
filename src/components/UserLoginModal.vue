<template lang="html">
  <div class="ui modal user">
  <i class="close icon"></i>
  <div class="header">
    用户登录
  </div>
  <div class="ui segment basic">
    <div class="ui two column middle aligned very relaxed stackable grid">
    <div class="column">
      <user-login-form></user-login-form>
    </div>
    <div class="center aligned column">
      <div class="ui big green labeled icon button">
        <i class="signup icon"></i>
        Sign Up
      </div>
    </div>
  </div>
  </div>
</div>
</template>

<script>
import UserLoginForm from './UserLoginForm'

export default {
  name: 'user-login-modal',
  components: {
    UserLoginForm
  }
}
</script>

<style lang="css">
</style>
