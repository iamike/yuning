<template lang="html">
  <div class="ui grid">
    <div class="sixteen wide column">
      <div class="ui piled segment raised  ">
        <a class="ui red ribbon label"><i class="settings icon"></i> 修改密码</a>
        <div class="ui two column centered grid stackable">
          <div class="column">
            <div class="ui form" id="userModifyPasswordForm">
              <div class="field">
                  <label>将发送验证码至绑定手机:{{mobileBlurNumber}}</label>
                </div>
                <div class="field">
                  <label>新密码</label>
                  <div class="ui left icon input">
                    <i class="warning sign icon"></i>
                    <input type="password" name="passWord" v-model="changeRequest.passWord">
                  </div>
                </div>
              <div class="field">
                <label>验证码</label>
                <div class="ui action input">
                  <input type="tel" name="verifyCode" placeholder="验证码" maxlength="4" v-model="changeRequest.verify_code" >
                  <button class="ui submit right labeled icon button " data-mode='verifyMode' v-bind:class="[ global.verifyRequestRemain < global.verifyCodeInterval ? 'disabled':'']">
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
                  <div class="ui submit red button">
                    <i class="save  icon"></i> 确定修改
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'user-modify-password',
  computed: {
    mobileBlurNumber () {
      return this.$store.state.userRegLog.USER_SIGN_IN_INFO.mobile.substring(0,3)+'****'+this.$store.state.userRegLog.USER_SIGN_IN_INFO.mobile.substring(7,11)
    },
    ...mapGetters(['global','USER_MODIFY_PASSWORD_ERRORS'])
  },
  data () {
    return {
      changeRequest: {
        mobile:this.$store.state.userRegLog.USER_SIGN_IN_INFO.mobile,
        passWord:'',
        verify_code:'',
      }
    }
  },
  mounted () {
    const vm = this
    const global = vm.$store.state.global
    const $formTrigger = $('#userModifyPasswordForm .submit')
    const $form = $('#userModifyPasswordForm')
    const verifyRules = {
      passWord: {
        identifier: 'passWord',
        rules: [
          {
            type: 'empty',
            prompt: '请输入您的新密码'
          }
        ]
      }
    }
    const submitRules = {
      passWord: {
        identifier: 'passWord',
        rules: [
          {
            type: 'empty',
            prompt: '请输入您的新密码'
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
      $form.form({
        fields: rules,
        onSuccess: function(event){
          validateAction && validateAction()
        }
      })
    }
    const verifyAction = () => {
      vm.$store.dispatch('GET_VERIFY_CODE', { mobile: this.$store.state.userRegLog.USER_SIGN_IN_INFO.mobile }).then((res)=>{
        // console.log('success send verify code to',res)
        vm.$store.dispatch('RE_VERIFY_TIME_COUNT')

      }).catch((err)=>{
        // console.log('failure send verify code',err)
      })
    }
    const submitAction = () => {
      vm.$store.dispatch('USER_MODIFY_PASSWORD_ACTION', vm.changeRequest )
      // .then((res)=>{
      //   // console.log('success submit form values',res)
      //
      // }).catch((err)=>{
      //   // console.log('failure submit form values',err)
      // })
    }
    // form submit events
    $formTrigger.on('click',function(){
      //re-initialize the form plugin, so make it only response for the currently action's error message
      $form.form('destory')
      if ($(this).attr('data-mode') == 'verifyMode') {
        // console.log('verifyMode')
        formAction(verifyRules, verifyAction)
      } else {
        // console.log('submitMode')
        formAction(submitRules, submitAction)
      }
    })
  },
  destroyed () {
    $('#userModifyPasswordForm').form('destroy')

  }
}
</script>

<style lang="css">

</style>
