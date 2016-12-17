<template lang="html">
  <div class="ui form" id="userRegisterForm">
    <div class="field">
      <label>手机号</label>
      <input type="tel" name="mobile" placeholder="手机号" v-model="userInfo.mobile" >
    </div>
    <div class="field">
      <label>验证码</label>
      <div class="ui action input">
        <input type="tel" name="verifyCode" placeholder="验证码" v-model="userInfo.verify_code">
        <button class="ui teal submit right labeled icon button " data-mode='verifyMode' v-bind:class="[ global.verifyRequestRemain < global.verifyCodeInterval ? 'disabled':'']">
          <i class="send icon"></i>
          发送验证码
        </button>
      </div>
    </div>
    <div class="ui success visible message" v-show="global.verifyRequestRemain < global.verifyCodeInterval">
      <i class="close icon"></i>
      <div class="header">
        验证码已经发送成功.
      </div>
      <p>如果您没有收到， 请在{{global.verifyRequestRemain}}秒后重试...</p>
    </div>
    <div class="field">
      <label>密码</label>
      <input type="password" name="password" v-model="userInfo.passWord" >
    </div>
    <div class="ui submit olive button">注册</div>
    <!-- errors from frontend -->
    <div class="ui error message front-end">
      <ul>
        <li></li>
      </ul>
    </div>
    <!-- errors from backend -->
    <div v-if="USER_REGISTER_ERRORS" class="ui visible message back-end" v-bind:class="USER_REGISTER_ERRORS.isSuccess==true?'success':'error'">
      <ul class="list">
        <li>{{ USER_REGISTER_ERRORS.errorMsg }}</li>
      </ul>
    </div>
    <!-- errors from backend -->
    <div v-if="VERIFY_ERRORS" class="ui visible message back-end" v-bind:class="VERIFY_ERRORS.result==true?'success':'error'">
      <ul class="list">
        <li>{{ VERIFY_ERRORS.msg }}</li>
      </ul>
    </div>
</div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'user-register-form',
  data () {
    return {
      userInfo: {
        mobile: '',
        passWord: '',
        verify_code: '',
        register_from: 'web',
      }
    }
  },
  computed: {
     ...mapGetters(['global','USER_REGISTER_ERRORS','VERIFY_ERRORS'])
  },
  mounted () {
    const vm = this
    const $formTrigger = $('#userRegisterForm .submit')
    const verifyRules = {
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
    const registerRules = {
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
      },
    }
    const formAction = function(rules, validateAction) {
      $('#userRegisterForm').form({
        selector: {
          message: '.error.message.front-end'
        },
        fields: rules,
        onSuccess: function(event){
          validateAction && validateAction()
          $('.message.back-end').show()
        },
        onFailure: function(event){
          $('.message.back-end').hide()
        }
      })
    }
    const verifyAction = () => {
      vm.$store.dispatch('GET_VERIFY_CODE', { mobile: vm.userInfo.mobile }).then((res)=>{
        vm.$store.dispatch('RE_VERIFY_TIME_COUNT')
      }).catch((err)=>{

      })
    }
    const registerAction = () => {
      vm.$store.dispatch('USER_REGISTER_ACTION', vm.userInfo ).then((res)=>{
        setTimeout(()=>{
          vm.$store.dispatch('TOGGLE_USER_LOGIN_POPUP')
        }, 1500)
      }).catch((err)=>{

      })
    }
    // form submit events
    $formTrigger.on('click',function(){
      $('#userRegisterForm').form('destroy')
      if ($(this).attr('data-mode') == 'verifyMode') {
        formAction(verifyRules, verifyAction)
      } else {
        formAction(registerRules, registerAction)
      }
    })

  },
  destroyed () {
    $('#userRegisterForm').form('destroy')
  }
}
</script>

<style lang="css" scoped>

</style>
