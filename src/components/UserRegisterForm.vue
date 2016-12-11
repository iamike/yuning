<template lang="html">
  <div class="ui form" id="userRegisterForm">

    <slot></slot>
    <div class="field">
      <label>密码</label>
      <input type="password" name="password" v-model="userRegisterInfo.passWord" >
    </div>
    <div class="ui submit olive button" >注册</div>
    <!-- errors from frontend -->
    <div class="ui error message">
      <ul>
        <li></li>
      </ul>
    </div>
    <!-- errors from backend -->
    <div v-if="errors"  class="ui visible error message">
      <ul class="list">
        <li>{{ errors }}</li>
      </ul>
    </div>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'user-register-form',
  data () {
    return {
      userRegisterInfo: {
        mobile: '',
        passWord: '',
        verify_code: '',
        register_from: 'web'
      },
      errors: undefined,
      verifyRemain: 60
    }
  },
  methods: {

  //   sendRegisterInfo () {
  //     let userRegisterInfoObj = JSON.parse(JSON.stringify(this.userRegisterInfo))
  //     this.$http.post('http://192.168.16.178:8099/czb-server/czb/user/userRegist', this.userRegisterInfo )
  //     .then((res) => {
  //         if (res.status == 200 && res.body.isSuccess == true ) {
  //           this.$store.dispatch('register')
  //           // this.$router.push('/user/' + res.body.result.id)
  //         } else {
  //           //if user login info has error, print the error message on the form
  //           // console.log('test')
  //           this.errors = res.body.errorMsg
  //         }
  //     }, (err) => {
  //       // console.log(err)
  //       // this.$localStorage.remove('access_token')
  //       // this.$localStorage.remove('user_info')
  //       // this.$store.dispatch('logOut')
  //       // return 'ops....'
  //     })
  //   },
  //   // ...mapActions(['register','SEND_VERIFY_CODE'])
  },
  mounted () {

    let vm = this
    let formTrigger = $('#userRegisterForm .submit')
    let verifyCodeMode = {
      mobile: {
        identifier: 'mobile',
        rules: [
          {
            type: 'empty',
            prompt: '请输入手机号码'
          }
        ]
      }
    }
    let verifyAllMode = {
      mobile: {
        identifier: 'mobile',
        rules: [
          {
            type: 'empty',
            prompt: '请输入手机号码'
          }
        ]
      },
      password: {
        identifier: 'password',
        rules: [
          {
            type: 'empty',
            prompt: '请输入密码'
          }
        ]
      },
      verifyCode: {
        identifier: 'verifyCode',
        rules: [
          {
            type: 'empty',
            prompt: '请输入验证码'
          }
        ]
      }
    }
    let submitAction = function(fieldsObject, successAction, additionalAction) {

      $('#userRegisterForm').form({
        fields: fieldsObject,
        onSuccess: function(event){
          successAction()
          additionalAction && additionalAction()
        }
      })
    }
    let timer = function(){
      let timerInstance = setInterval(function(){

        if (vm.verifyRemain < 1){
          clearInterval(timerInstance)
          vm.verifyRemain = 60
          return
        }
        vm.verifyRemain -= 1

      },1000)
    }

    formTrigger.on('click',function(){
      $('#userRegisterForm').form('destory')

      if ($(this).attr('data-mode') == 'verifyMode' && vm.verifyRemain > 59 ) {
        // console.log('verifyMode')
        // submitAction(verifyCodeMode, vm.sendVerifyCode, timer )
        vm.$store.dispatch('SEND_VERIFY_CODE', { mobile: '18930706272' }).then((res)=>{
          console.log('success',res)
        })

      } else {
        // console.log('submitMode')
        submitAction(verifyAllMode, vm.sendRegisterInfo)
      }
    })

  }
}
</script>

<style lang="css" scoped>

</style>
