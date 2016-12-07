<template lang="html">
  <div class="ui form" id="userRegisterForm">
    <div class="field">
      <label>手机号</label>
      <input type="tel" name="mobile" placeholder="手机号" v-model="userRegisterInfo.mobile">
    </div>
    <div class="field">
      <label>验证码</label>
      <div class="ui action input">
        <input type="tel" name="verifyCode" placeholder="验证码" v-model="userRegisterInfo.verify_code">
        <button class="ui teal submit right labeled icon button " data-submitter='verifyMode'>
          <i class="send icon"></i>
          发送验证码
        </button>
      </div>
    </div>
    <div class="field">
      <label>密码</label>
      <input type="password" name="password" v-model="userRegisterInfo.passWord" >
    </div>
    <div class="ui submit olive button" data-submitter='registerMode'>注册</div>
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
        mobile: '18930706272',
        passWord: 'password',
        verify_code: '3576',
        register_from: 'web'
      },
      errors:undefined
    }
  },
  computed: {
    ...mapState(['czbApiDomain'])
  },
  methods: {
    sendVerifyCode () {
      let userVerifyInfoObj = JSON.parse(JSON.stringify({ mobile: this.userRegisterInfo.mobile }))
      console.log(userVerifyInfoObj)
      this.$http.post(this.czbApiDomain+'/czb/user/sendMsg', userVerifyInfoObj )
      .then((res) => {
          if (res.status == 200 && res.body.isSuccess == true ) {
            console.log('testSendVerifyCode')
            // this.$store.dispatch('register')
            // this.$router.push('/user/' + res.body.result.id)
          } else {
            //if user login info has error, print the error message on the form
            // console.log('test')
            this.errors = res.body.errorMsg
          }
      }, (err) => {
        // console.log(err)
        // this.$localStorage.remove('access_token')
        // this.$localStorage.remove('user_info')
        // this.$store.dispatch('logOut')
        // return 'ops....'
      })
    },
    sendRegisterInfo () {
      let userRegisterInfoObj = JSON.parse(JSON.stringify(this.userRegisterInfo))
      this.$http.post(this.czbApiDomain+'/czb-server/czb/user/userRegist', this.userRegisterInfo)
      .then((res) => {
          if (res.status == 200 && res.body.isSuccess == true ) {
            this.$store.dispatch('register')
            // this.$router.push('/user/' + res.body.result.id)
          } else {
            //if user login info has error, print the error message on the form
            console.log('test')
            this.errors = res.body.errorMsg
          }
      }, (err) => {
        // console.log(err)
        // this.$localStorage.remove('access_token')
        // this.$localStorage.remove('user_info')
        // this.$store.dispatch('logOut')
        // return 'ops....'
      })
    },
    ...mapActions(['register'])
  },
  mounted () {

    let vm = this
    let formTrigger = $('#userRegisterForm .submit')
    let formValidateMode = undefined
    //check verifyCode field
    formTrigger.on('click',function(){
      formValidateMode = $(this).attr('data-submitter')
    })
    //check all fields
    $('#userRegisterForm').form({
      fields: {
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
      },
      onSuccess: function(event, fields){
        if (formValidateMode == 'verifyMode') {
          vm.sendVerifyCode()
        } else {
          vm.sendRegisterInfo()
        }
      }
    })
  }
}
</script>

<style lang="css" scoped>

</style>
