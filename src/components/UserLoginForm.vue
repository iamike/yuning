<template lang="html">
  <div class="ui form" id="userLoginForm">
    <div class="field">
      <label>用户名</label>
      <div class="ui left icon input">
        <input type="text" name='username' placeholder="用户名" v-model="userInfo.username">
        <i class="user icon"></i>
      </div>
    </div>
    <div class="field">
      <label>密码</label>
      <div class="ui left icon input">
        <input type="password" name='password' v-model="userInfo.password">
        <i class="lock icon"></i>
      </div>
    </div>
    <div class="ui blue submit button">登录</div>
    <!-- errors from frontend -->
    <div class="ui error message">
      <ul>
        <li></li>
      </ul>
    </div>
    <!-- errors from backend -->
    <div v-if="USER_SIGN_IN_ERRORS" class="ui visible error message">
      <ul class="list">
        <li>{{ USER_SIGN_IN_ERRORS }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'user-login-form',
  data () {
    return {
      userInfo: {
        username: '',
        password: '',
        // username: '15871781105',
        // password: '19880623',
        type: 1,
        from: 'web',
      }
    }
  },
  computed: {
     ...mapGetters(['USER_SIGN_IN_ERRORS'])
  },
  mounted () {
    let vm = this
    $('#userLoginForm').form({
      fields: {
        username: {
          rules: [{
              type: 'empty',
            prompt: '用户名是必填字段'
            }]
          },
          password: {
            rules: [{
                type: 'empty',
              prompt: '密码是必填字段'
              }]
          }
        },
        onSuccess: function(){
          // login(loginData, success, failure)
          vm.$store.dispatch('USER_SIGN_IN_ACTION', vm.userInfo)
          .then((res) => {
            // success
            // console.log('success from components')
            vm.$router.push('/user/' + vm.$store.state.userRegLog.USER_SIGN_IN_INFO.id )
          })
          .catch((err) => {
            // failure
            // console.log('failure from components')
          })
        },
      })
  }
}
</script>

<style lang="css">

</style>
