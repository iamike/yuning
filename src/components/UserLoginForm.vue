<template lang="html">
  <div class="ui form" id="userLoginForm">
    <div class="field">
      <label>用户名</label>
      <div class="ui left icon input">
        <input type="text" name='username' placeholder="用户名" v-model="userAuthInfo.username">
        <i class="user icon"></i>
      </div>
    </div>
    <div class="field">
      <label>密码</label>
      <div class="ui left icon input">
        <input type="password" name='password' v-model="userAuthInfo.password">
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
    <div v-if="errors!=''" v-show="userAuthInfo.username != '' && userAuthInfo.username != ''" class="ui visible error message">
      <ul class="list">
        <li>{{ errors }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueLocalStorage from 'vue-localstorage'

Vue.use(VueResource)
Vue.use(VueLocalStorage)

import { mapState } from 'vuex'
import { mapActions } from 'vuex'

export default {
  name: 'user-login-form',
  methods: {
    userAtLogin () {
      let userAuthInfoObj = JSON.parse(JSON.stringify(this.userAuthInfo))
      this.$http.post('http://192.168.16.178:8099/czb-server/czb/user/login', userAuthInfoObj)
      .then((res) => {
          if (res.status == 200 && res.body.isSuccess == true ) {
            this.$localStorage.set('access_token', res.body.result.access_token)
            this.$localStorage.set('user_info',res.body.result)
            this.$store.dispatch('logIn')
            this.$router.push('/user/' + res.body.result.id)
          } else {
            //if user login info has error, print the error message on the form
            // console.log('test')
            this.errors = res.body.errorMsg
          }
      }, (err) => {
        // console.log(err)
        this.$localStorage.remove('access_token')
        this.$localStorage.remove('user_info')
        this.$store.dispatch('logOut')
        return 'ops....'
      })
    },
    ...mapActions(['toggleUserPopup','logIn','logOut'])
  },
  mounted () {

    let vm = this
    let successCallback = function(vm) {
      // console.log(event, fields, vm)
      return vm
    }
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
          vm.userAtLogin()
        }
      })
  },
  data () {
    return {
      userAuthInfo: {
        username: '15871781105',
        password: '19880623',
        type: 1,
        from: 'web'
      },
      errors: ""
    }
  }
}
</script>

<style lang="css">
</style>
