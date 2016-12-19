<template lang="html">
  <simple-modal>
    <div class="header" slot="header">
      用户更新手机
    </div>
    <div class="content" slot="content">
      <div class="ui steps attached">
        <div class="step" v-bind:class="[step==0?'':'disabled']">
          <i class="mobile icon"></i>
          <div class="content">
            <div class="title">核实旧手机</div>
            <div class="description">{{mobileBlurNumber}}</div>
          </div>
        </div>
        <div class="step" v-bind:class="[step==1?'':'disabled']">
          <i class="mobile icon"></i>
          <div class="content">
            <div class="title">核实新手机</div>
            <div class="description">输入您的新手机号</div>
          </div>
        </div>
        <div class="step" v-bind:class="[step==2?'':'disabled']">
          <i class="info icon"></i>
          <div class="content">
            <div class="title">完成</div>
          </div>
        </div>
      </div>
      <div class="ui attached segment center aligned" v-show="step==0">
        <button v-show="global.verifyRequestRemain == global.verifyCodeInterval" class="ui button teal" type="submit" @click="sendVrifyCode" v-bind:class="[ global.verifyRequestRemain < global.verifyCodeInterval ? 'disabled':'']">
           <i class="icon send"></i> 发送验证码至旧手机
        </button>
        <div class="ui divider">
        </div>
        <div class="ui form">
          <div class="ui success visible message" v-show="global.verifyRequestRemain < global.verifyCodeInterval">
            <i class="close icon"></i>
            <div class="header">
              验证码已经发送成功.
            </div>
            <p>如果您没有收到， 请在{{global.verifyRequestRemain}}秒后重试...</p>
          </div>
          <div class="field" >
            <label>核实旧手机验证码</label>
            <div class="ui action input small">
              <input type="text" name="last-name" v-model="oldPhoneVerifyCode" placeholder="四位阿拉伯数字">
              <button class="ui button teal" type="submit" @click="checkOldPhoneVrifyCode" >核实旧手机验证码 <i class="icon arrow right"></i></button>
            </div>
          </div>
          <!-- errors from backend -->
          <div v-if="VERIFY_ERRORS" class="ui visible message" v-bind:class="VERIFY_ERRORS.isSuccess==true?'success':'error'">
            <ul class="list">
              <li>{{ VERIFY_ERRORS.errorMsg }}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="ui attached segment" v-show="step==1">
        <div class="ui form">
          <div class="field" >
            <label>请输入您的新手机号码</label>
            <div class="ui action left icon input small">
              <i class="icon mobile"></i>
              <input type="text" name="last-name" v-model="newPhoneNumber" placeholder="">
              <button class="ui button teal" type="submit" @click="sendVerifyCodeToNewPhone" ><i class="icon send"></i> 发送新手机验证码</button>
            </div>
          </div>
          <div class="ui success visible message" v-show="global.verifyRequestRemain < global.verifyCodeInterval">
            <i class="close icon"></i>
            <div class="header">
              验证码已经发送成功.
            </div>
            <p>如果您没有收到， 请在{{global.verifyRequestRemain}}秒后重试...</p>
          </div>
          <div class="field" >
            <label>核实新手机验证码</label>
            <div class="ui action input small">
              <input type="text" name="last-name" v-model="newPhoneVerifyCode" placeholder="四位阿拉伯数字">
              <button class="ui button teal" type="submit" @click="modifyMobile" >核实新手机验证码 <i class="icon arrow right"></i></button>
            </div>
          </div>
          <!-- errors from backend -->
          <div v-if="USER_MODIFY_PHONE_ERRORS" class="ui visible message" v-bind:class="USER_MODIFY_PHONE_ERRORS.isSuccess==true?'success':'error'">
            <ul class="list">
              <li>{{ USER_MODIFY_PHONE_ERRORS.errorMsg }}</li>
            </ul>
          </div>
        </div>

      </div>
      <div class="ui attached segment center aligned" v-show="step==2">
        <h2 class="ui center aligned icon header">
          <i class="circular checkmark icon teal"></i>
            恭喜！修改手机成功！
        </h2>
      </div>
    </div>
  </simple-modal>
</template>

<script>
import {mapGetters} from 'vuex'
import SimpleModal from './SimpleModal'

export default {
  name: 'user-mobile',
  components: {
    SimpleModal,
  },
  computed:{
    mobileBlurNumber () {
      return this.userOldMobile.substring(0,3)+'****'+this.userOldMobile.substring(7,11)
    },
    ...mapGetters(['global','VERIFY_ERRORS','USER_MODIFY_PHONE_ERRORS'])
  },
  props:['userOldMobile','userId'],
  methods:{
    sendVerifyCodeToNewPhone () {
      let vm = this
      vm.$store.dispatch('GET_VERIFY_CODE',{ mobile:this.newPhoneNumber }).then((res)=>{
        // console.log(res)
        vm.$store.dispatch('RE_VERIFY_TIME_COUNT')
      })
    },
    modifyMobile () {

      let vm = this
      vm.$store.dispatch('USER_MODIFY_PHONE_ACTION',{
        user_id: this.userId,
        mobile:this.newPhoneNumber,
        verify_code:this.newPhoneVerifyCode
      }).then((res)=>{
        setTimeout(()=>{
          vm.step = 2

          vm.$store.state.userMobileModify.USER_MODIFY_PHONE_ERRORS = undefined

          //TODO it shall be refresh the page, and get the lastest user profile from server
          vm.$store.state.userRegLog.USER_SIGN_IN_INFO.mobile = vm.newPhoneNumber

          // modify the local storage
          let localStorageData = JSON.parse(localStorage.getItem('USER_SIGN_IN_INFO'))
          localStorageData.mobile = vm.newPhoneNumber

          // console.log(localStorageData)

          localStorage.setItem('USER_SIGN_IN_INFO', JSON.stringify(localStorageData))


        },1000)
      }).catch((err)=>{
      })
    },
    checkOldPhoneVrifyCode () {
      let vm = this
      vm.$store.dispatch('CHECK_VERIFY_CODE',{ mobile:this.oldPhoneNumber, verify_code:this.oldPhoneVerifyCode }).then((res)=>{
        vm.step = 1
      }).catch((err)=>{
      })
    },
    sendVrifyCode () {
      let vm = this
      vm.$store.dispatch('GET_VERIFY_CODE',{ mobile:this.oldPhoneNumber }).then((res)=>{
        // console.log(res)
        vm.step = 0.5
        vm.$store.dispatch('RE_VERIFY_TIME_COUNT')
      })
      // console.log(this.oldPhoneNumber,API_PATH_USER_GET_VERIFY_CODE)
    }
  },
  data () {
    return {
      step:1,
      oldPhoneNumber: this.userOldMobile,
      user_id: this.userId,
      oldPhoneVerifyCode: '',
      newPhoneNumber: '',
      newPhoneVerifyCode: '',
    }
  }
}
</script>

<style lang="css">
</style>
