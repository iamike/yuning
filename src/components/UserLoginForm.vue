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
    <div class="ui blue submit button" @click="submit()">登录</div>
    <!-- errors from frontend -->
    <div class="ui error message front-end" v-show="frontErr==true">
      <ul>
        <li></li>
      </ul>
    </div>
    <!-- errors from backend -->
    <div v-if="USER_SIGN_IN_ERRORS && frontErr==false" class="ui visible message back-end" v-bind:class="USER_SIGN_IN_ERRORS.isSuccess==true?'success':'error'">
      <ul class="list">
        <li>{{ USER_SIGN_IN_ERRORS.errorMsg }}</li>
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
      frontErr: true,
      userInfo: {
        // username: '',
        // password: '',
        username: '15871781105',
        password: '19880623',
        type: 1,
        from: 'web',
      }
    }
  },
  computed: {
     ...mapGetters(['USER_SIGN_IN_ERRORS'])
  },
  methods: {

    submit () {
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
          onFailure: function(){
            vm.frontErr = true
          },
          onSuccess: function(){
            vm.frontErr = false
            vm.$store.dispatch('USER_SIGN_IN_ACTION', vm.userInfo)
            .then((res) => {
              vm.$store.dispatch('TOGGLE_SIMPLE_POPUP',{selector:'#userLoginModal'})
              vm.$router.push('/user/' + vm.$store.state.userRegLog.USER_SIGN_IN_INFO.id)
            })
            .catch((err) => {
            })
          },
        }).form('submit')
    }
  },
  destoryed () {
    $('#userLoginForm').form('destroy')
  }
}
</script>

<style lang="css">

</style>
