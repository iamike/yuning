<template lang="html">
  <div class="ui equal width centered grid stackable">
    <div class="column eleven wide">
      <div class="ui segment basic">
        <div class="ui teal segment">
          <h2 class="ui header teal">卡片冲值</h2>
          <span class="ui teal ribbon label"><i class="icon credit card alternative"></i></span>
          <div class="ui divider"></div>
          <div class="ui form" id="activateCard">
            <div class="field">
              <label>请输入卡号</label>
              <input type="text" name="card_no" v-model="card_no" placeholder="请输入卡号">
            </div>
            <div class="field">
              <label>请输入激活码</label>
              <input type="text" name="card_pwd" v-model="card_pwd" placeholder="请输入激活码">
            </div>
            <button class="ui button teal" type="submit" @click="activateCard">激活卡片</button>
            <!-- errors from frontend -->
            <div class="ui error message" v-show="frontErr == false">
              <ul>
                <li></li>
              </ul>
            </div>
            <!-- errors from backend -->
            <div v-if="ACCOUNT_CARD_ACTIVE_ERRORS && frontErr == true" class="ui visible message back-end" v-bind:class="ACCOUNT_CARD_ACTIVE_ERRORS.isSuccess==true?'success':'error'">
              <ul class="list">
                <li>{{ ACCOUNT_CARD_ACTIVE_ERRORS.errorMsg }}</li>
              </ul>
            </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'account-charge',
  data () {
    return {
      frontErr: false,
      card_no: '',
      card_pwd: '',
    }
  },
  computed: {
    ...mapGetters(['ACCOUNT_CARD_ACTIVE_ERRORS'])
  },
  methods: {
    activateCard(){
      let vm = this
      $('#activateCard')
      .form({
        fields:{
          card_no: {
            identifier: 'card_no',
            rules:[
              {
                type: 'minLength[12]',
                prompt: '请正确输入卡号'
              }
            ]
          },
          card_pwd: {
            identifier: 'card_pwd',
            rules:[
              {
                type: 'empty',
                prompt: '请正确输入激活码'
              }
            ]
          }
        },
        onSuccess () {
          vm.frontErr = true
          vm.$store.dispatch('ACCOUNT_CARD_ACTIVE_ACTION',{
            user_id: vm.$store.state.userRegLog.USER_SIGN_IN_INFO.id,
            card_no: vm.card_no,
            card_pwd:vm.card_pwd,
          }).then((res)=>{
            // console.log('success',res)
          }).catch((err)=>{
            // console.log('failure',err)
          })

        },
        onFailure () {
          vm.frontErr = false
        }
      }).form('submit')
    }
  }
}
</script>

<style lang="css">
</style>
