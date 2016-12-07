<template lang="html">
  <div class="ui modal user-login coupled">
  <i class="close icon"></i>
  <div class="header">
    用户登录
  </div>
  <div class="ui segment padded basic">
    <div class="ui two column middle aligned very relaxed stackable grid">
      <div class="column">
        <user-login-form></user-login-form>
      </div>
      <div class="center aligned column">
        <div class="ui big green labeled icon button" @click="toggleUserRegisterPopup">
          <i class="signup icon"></i>
          新用户注册
        </div>
        <user-register-modal></user-register-modal>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import UserLoginForm from './UserLoginForm'
import UserRegisterModal from './UserRegisterModal'
import { mapActions } from 'vuex'

export default {
  name: 'user-login-modal',
  components: {
    UserLoginForm,
    UserRegisterModal
  },
  methods: mapActions(['toggleUserRegisterPopup'])
}
</script>

<style lang="css">
</style>
