<template lang="html">
  <div class="ui modal small user-register coupled" id="userRegisterModal">
    <i class="close icon"></i>
    <div class="header">
      用户注册
    </div>
    <div class="ui segment padded basic">
      <div class="ui one column middle aligned very relaxed stackable grid">
        <div class="column">
          <user-register-form></user-register-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserRegisterForm from './UserRegisterForm'

export default {
  name: 'user-register-modal',
  components: {
    UserRegisterForm
  }
}
</script>

<style lang="css">
</style>
