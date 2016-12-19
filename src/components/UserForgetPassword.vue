<template lang="html">
  <simple-modal>
    <div class="header" slot="header">
      忘记密码
    </div>
    <div class="content" slot="content">

      <div class="ui steps attached">
        <div class="step" v-bind:class="[step==0?'':'disabled']">
          <i class="mobile icon"></i>
          <div class="content">
            <div class="title">输入您的手机号</div>
            <div class="description">{{mobileBlurNumber}}</div>
          </div>
        </div>
        <div class="step" v-bind:class="[step==1?'':'disabled']">
          <i class="spy icon"></i>
          <div class="content">
            <div class="title">核实验证码</div>
            <div class="description">输入您的新手机号</div>
          </div>
        </div>
        <div class="step" v-bind:class="[step==2?'':'disabled']">
          <i class="hand peace icon"></i>
          <div class="content">
            <div class="title">输入新密码</div>
            <div class="description">输入您的新手机号</div>
          </div>
        </div>
        <div class="step" v-bind:class="[step==3?'':'disabled']">
          <i class="checkmark icon"></i>
          <div class="content">
            <div class="title">完成</div>
          </div>
        </div>
      </div>
      <div class="ui attached segment" v-show="step==0">
        <div class="ui form getVerifyCode">
          <div class="field">
            <div class="input action ui">
              <input class="" type="text" name="phone" value="">
              <button class="ui teal button left labeled icon submit" type="submit" >
                <i class="icon send"></i>
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
        </div>
      </div>
      <div class="ui attached segment" v-show="step==1">
        <p>1</p>
      </div>
      <div class="ui attached segment" v-show="step==2">
        <p>2</p>
      </div>
      <div class="ui attached segment" v-show="step==3">
        <p>3</p>
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
      step:0,
      phoneNumber:'',
      verifyCode:'',
    }
  },
  computed: {
    ...mapGetters(['VERIFY_ERRORS','global'])
  },
  methods:{
    getVerifyCode () {
      this.$store.dispatch('GET_VERIFY_CODE').then((res)=>{
        console.log(res)
      })
      $('.ui.form.getVerifyCode').form({
        fields: {
          name: {
            identifier: 'phone',
            rules: [
              {
                type: 'empty',
                prompt: '请输入您的手机号',
              }
            ]
          }
        },
        onSuccess: function() {
          console.log('test')
        },
        onFailure: function() {
          console.log('test2')
        }
      })
    },
    changePasswordRequest () {

    },

  },
  components: {
    SimpleModal,
  }
}
</script>

<style lang="css">
</style>
