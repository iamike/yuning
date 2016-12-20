<template lang="html">
  <simple-modal>
    <div class="header" slot="header">
      忘记密码
    </div>
    <div class="content" slot="content">

      <div class="ui steps attached">
        <div class="step" v-bind:class="[USER_MODIFY_PASSWORD_STEP==0?'':'disabled']">
          <i class="mobile icon"></i>
          <div class="content">
            <div class="title">输入手机号</div>
            <div class="description">您注册时的手机</div>
          </div>
        </div>
        <div class="step" v-bind:class="[USER_MODIFY_PASSWORD_STEP==1?'':'disabled']">
          <i class="spy icon"></i>
          <div class="content">
            <div class="title">核实验证码</div>
            <div class="description">输入您手机上的验证码</div>
          </div>
        </div>
        <div class="step" v-bind:class="[USER_MODIFY_PASSWORD_STEP==2?'':'disabled']">
          <i class="privacy icon"></i>
          <div class="content">
            <div class="title">输入新密码</div>
            <div class="description">设置您的新密码</div>
          </div>
        </div>
        <div class="step" v-bind:class="[USER_MODIFY_PASSWORD_STEP==3?'':'disabled']">
          <i class="hand peace icon"></i>
          <div class="content">
            <div class="title">完成</div>
          </div>
        </div>
      </div>
      <div class="ui attached segment" v-show="USER_MODIFY_PASSWORD_STEP==0 || USER_MODIFY_PASSWORD_STEP==1">
        <div class="ui form" id="UserForgetPasswordStep1" >
          <div class="field">
            <div class="input action ui" v-bind:class="[ global.verifyRequestRemain < global.verifyCodeInterval ? 'disabled':'']">
              <input class="" type="text" name="phone" value="" v-model="phoneNumber">
              <button class="ui teal button left labeled icon submit" type="submit" @click="getVerifyCode" >
                <i class="icon send"></i>
                发送验证码
              </button>
            </div>
          </div>
          <!-- errors from frontend -->
          <div class="ui error message" >
            <ul>
              <li></li>
            </ul>
          </div>
          <div class="ui success visible message" v-show="global.verifyRequestRemain < global.verifyCodeInterval">
            <i class="close icon"></i>
            <div class="header">
              验证码已经发送成功.
            </div>
            <p>如果您没有收到， 请在{{global.verifyRequestRemain}}秒后重试...</p>
          </div>
        </div>
      </div>
      <div class="ui attached segment" v-show="USER_MODIFY_PASSWORD_STEP==1">
        <div class="ui form" id="UserForgetPasswordStep2">
          <div class="field">
            <div class="input action ui" >
              <input class="" type="text" name="verifyCode" value="" v-model="verifyCode">
              <button class="ui teal button left labeled icon submit" type="submit" @click="checkVerifyCode" >
                <i class="icon checkmark"></i>
                提交验证码
              </button>
            </div>
          </div>
          <!-- errors from frontend -->
          <div class="ui error message" >
            <ul>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="ui attached segment" v-show="USER_MODIFY_PASSWORD_STEP==2">
        <div class="ui form" id="UserForgetPasswordStep3">
          <div class="field">
            <div class="input action ui" >
              <input class="" type="password" name="newPassword" value="" v-model="newPassword">
              <button class="ui teal button left labeled icon submit" type="submit" @click="changePasswordRequest" >
                <i class="icon asterisk"></i>
                更换新密码
              </button>
            </div>
          </div>
          <!-- errors from frontend -->
          <div class="ui error message" >
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
      <div class="ui attached segment" v-show="USER_MODIFY_PASSWORD_STEP==3">
        <p></p>
      </div>

    </div>
  </simple-modal>
</template>

<script>
import SimpleModal from './SimpleModal'
import {mapGetters} from 'vuex'

export default {
  name: "user-forget-password",
  data () {
    return {
      step: 0,
      phoneNumber:'',
      newPassword:'',
      verifyCode:'',
    }
  },
  props:['passwordRecoveryStep'],
  computed: {
    ...mapGetters(['VERIFY_ERRORS','global','USER_MODIFY_PASSWORD_ERRORS','USER_MODIFY_PASSWORD_STEP'])
  },
  methods:{
    getVerifyCode () {

      let vm = this
          $('#UserForgetPasswordStep1').form({
            fields: {
              phone: {
                identifier: 'phone',
                rules: [{
                  type: 'empty',
                  prompt : '请输入您的手机号'
                },{
                  type: 'exactLength[11]',
                  prompt: '请输入11位手机号码',
                }

                ]
              }
            },
            onSuccess: function () {
              // vm.$store.state.userPasswordModify.USER_MODIFY_PASSWORD_STEP = 1
              // console.log(vm.$store.state.userPasswordModify.USER_MODIFY_PASSWORD_STEP)
              vm.$store.dispatch('GET_VERIFY_CODE',{mobile:vm.phoneNumber}).then((res)=>{
                // console.log(res)
                vm.$store.dispatch('RE_VERIFY_TIME_COUNT')

                vm.$store.state.userPasswordModify.USER_MODIFY_PASSWORD_STEP = 1
              })


            }
          }).form('submit')
    },
    checkVerifyCode () {
      let vm = this
          $('#UserForgetPasswordStep2').form({
            fields: {
              verifyCode: {
                identifier: 'verifyCode',
                rules: [{
                  type: 'exactLength[4]',
                  prompt: '请输入4位验证码',
                }

                ]
              }
            },
            onSuccess: function () {
              //fake pass TODO: server side verify
                vm.$store.state.userPasswordModify.USER_MODIFY_PASSWORD_STEP = 2
            }
          }).form('submit')
    },
    changePasswordRequest () {
      let vm = this
      $('#UserForgetPasswordStep2').form({
        fields: {
          newPassword: {
            identifier: 'newPassword',
            rules: [{
              type: 'empty',
              prompt: '请输入新密码',
            }]
          }
        },
        onSuccess: function () {
          let changeRequest = {
              mobile:vm.phoneNumber,
              passWord:vm.newPassword,
              verify_code:vm.verifyCode,
          }
          // console.log(changeRequest)
          vm.$store.dispatch('USER_MODIFY_PASSWORD_ACTION', changeRequest ).then((res)=>{
            // console.log(res)
            vm.$store.state.userPasswordModify.USER_MODIFY_PASSWORD_STEP = 3
          }).catch((err)=>{
            // console.log(err)
            vm.$store.state.userPasswordModify.USER_MODIFY_PASSWORD_STEP = 2
          })
        }
      }).form('submit')
    },

  },
  components: {
    SimpleModal,
  },
  mounted () {


  }
}
</script>

<style lang="css">
</style>
