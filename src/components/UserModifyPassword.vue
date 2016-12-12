<template lang="html">
  <div class="ui grid">
    <div class="sixteen wide column">
      <div class="ui piled segment raised ">
        <a class="ui red ribbon label"><i class="settings icon"></i> 修改密码</a>
        <div class="ui two column centered grid">
          <div class="column">
            <form class="ui form" id="userModifyPasswordForm">
                <div class="field">
                  <label>新密码</label>
                  <input type="password" name="newPassword" placeholder="">
                </div>
                <div class="field">
                  <label>验证码</label>
                  <div class="ui action input">
                    <input type="tel" name="verifyCode" placeholder="验证码" >
                    <button class="ui red submit right labeled icon button " data-mode='verifyMode' v-bind:class="[ global.verifyRequestRemain < global.verifyCodeInterval ? 'disabled':'']">
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
                <div class="ui action">
                  <div class="ui red button">
                    <i class="save submit icon"></i> 确定修改
                  </div>
                </div>
                <!-- errors from frontend -->
                <div class="ui error message">
                  <ul>
                    <li></li>
                  </ul>
                </div>
                <!-- errors from backend -->
                <div v-if="USER_MODIFY_PASSWORD_ERRORS"  class="ui visible message" v-bind:class="USER_MODIFY_PASSWORD_ERRORS.isSuccess==true?'success':'error'">
                  <ul class="list">
                    <li>{{ USER_MODIFY_PASSWORD_ERRORS.errorMsg }}</li>
                  </ul>
                </div>
            </form>
          </div>

        </div>

      </div>
    </div>


  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'user-modify-password',
  computed: {
    ...mapGetters(['global'])
  },
  mounted () {
    const vm = this
    const global = vm.$store.state.global
    const $formTrigger = $('#userModifyPasswordForm .submit')
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
      }
    }
    const formAction = function(rules, validateAction) {
      $('#userRegisterForm').form({
        fields: rules,
        onSuccess: function(event){
          validateAction && validateAction()
        }
      })
    }
    const verifyAction = () => {
      vm.$store.dispatch('GET_VERIFY_CODE', { mobile: vm.userInfo.mobile }).then((res)=>{
        // console.log('success send verify code to',res)
        vm.$store.dispatch('RE_VERIFY_TIME_COUNT')

      }).catch((err)=>{
        // console.log('failure send verify code',err)
      })
    }
    const registerAction = () => {
      vm.$store.dispatch('USER_REGISTER_ACTION', vm.userInfo ).then((res)=>{
        // console.log('success submit form values',res)
        setTimeout(()=>{

          vm.$store.dispatch('TOGGLE_USER_LOGIN_POPUP')

        }, 1500)

      }).catch((err)=>{
        // console.log('failure submit form values',err)
      })
    }
    // form submit events
    $formTrigger.on('click',function(){

      //re-initialize the form plugin, so make it only response for the currently action's error message
      $('#userRegisterForm').form('destory')
      if ($(this).attr('data-mode') == 'verifyMode') {
        // console.log('verifyMode')
        formAction(verifyRules, verifyAction)
      } else {
        // console.log('submitMode')
        formAction(registerRules, registerAction)
      }
    })
  }
}
</script>

<style lang="css">

</style>
