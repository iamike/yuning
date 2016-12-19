<template lang="html">
  <simple-modal>
    <div class="header" slot="header">
      用户登录
    </div>
    <div class="ui segment padded basic" slot="content">
      <div class="ui two column middle aligned very relaxed stackable grid">
        <div class="column">
          <user-login-form></user-login-form>
        </div>
        <div class="center aligned column">
          <div class="ui big green labeled icon button" @click="toggleRegisterModal">
            <i class="signup icon"></i>
            新用户注册
          </div>
          <user-register-modal id="userRegisterModal"></user-register-modal>
        </div>
      </div>
    </div>
  </simple-modal>
</template>

<script>
import SimpleModal from './SimpleModal'
import UserLoginForm from './UserLoginForm'
import UserRegisterModal from './UserRegisterModal'

export default {
  name: 'user-login-modal',
  components: {
    UserLoginForm,
    SimpleModal,
    UserRegisterModal,
  },
  methods: {

    toggleRegisterModal () {
      
      let vm = this
      vm.$store.dispatch('TOGGLE_SIMPLE_POPUP',{selector:'#userLoginModal',allowMultiple:true,detachable:true})
      vm.$store.dispatch('TOGGLE_SIMPLE_POPUP',{selector:'#userRegisterModal',allowMultiple:true,detachable:true})

    }
  },
  created () {
    // console.log(this.USER_SIGN_IN_INFO==undefined)
  },


}
</script>

<style lang="css">
</style>
