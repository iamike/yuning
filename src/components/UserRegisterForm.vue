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
        <button @click="sendVerifyCode()" class="ui teal right labeled icon button " data-mode='verifyMode' v-bind:class="[ global.verifyRequestRemain < global.verifyCodeInterval ? 'disabled':'']">
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
    <div class="ui olive button" @click="submitRegisterForm()">注册</div>
    <!-- errors from frontend -->
    <div class="ui error message" v-show="frontErr==true">
      <ul>
        <li></li>
      </ul>
    </div>
    <!-- errors from backend -->
    <div v-if="USER_REGISTER_ERRORS && frontErr==false" class="ui visible message back-end" v-bind:class="USER_REGISTER_ERRORS.isSuccess==true?'success':'error'">
      <ul class="list">
        <li>{{ USER_REGISTER_ERRORS.errorMsg }}</li>
      </ul>
    </div>
    <!-- errors from backend -->
    <div v-if="VERIFY_ERRORS" class="ui visible message" v-bind:class="VERIFY_ERRORS.result==true?'success':'error'">
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
      frontErr:true,
      userInfo: {
        mobile: '',
        passWord: '',
        verify_code: '',
        register_from: 'web',
      }
    }
  },
  methods: {
    sendVerifyCode () {
      let vm = this
      $('#userRegisterForm').form('destroy')
      const sendVerifyCode = {
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
      $('#userRegisterForm').form({
        fields: sendVerifyCode,
        onSuccess: function(event){
          vm.frontErr = false
          vm.$store.dispatch('GET_VERIFY_CODE', { mobile: vm.userInfo.mobile }).then((res)=>{
            vm.$store.dispatch('RE_VERIFY_TIME_COUNT')
          }).catch((err)=>{

          })
        },
        onFailure: function(event){
          vm.frontErr = true
        }
      }).form('submit')

    },
    submitRegisterForm () {
      let vm = this
      $('#userRegisterForm').form('destroy')
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
      $('#userRegisterForm').form({
        fields: registerRules,
        onSuccess: function(event){
          vm.frontErr = false
          vm.$store.dispatch('USER_REGISTER_ACTION', vm.userInfo ).then((res)=>{
            setTimeout(()=>{
              vm.$store.dispatch('TOGGLE_SIMPLE_POPUP',{selector:'#userRegisterModal'})
              setTimeout(()=>{
                vm.$store.dispatch('TOGGLE_SIMPLE_POPUP',{selector:'#userLoginModal'})
              },500)
            }, 1500)
          }).catch((err)=>{

          })
        },
        onFailure: function(event){
          vm.frontErr = true
        }
      }).form('submit')

    },
  },
  computed: {
     ...mapGetters(['global','USER_REGISTER_ERRORS','VERIFY_ERRORS'])
  },
  destroyed () {
    $('#userRegisterForm').form('destroy')
  }
}
</script>

<style lang="css" scoped>

</style>
