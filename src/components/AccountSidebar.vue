<template lang="html">
  <div class="ui vertical pointing menu">
    <router-link :to="{name:'accountInfo'}" class="item">帐户金额</router-link>
    <router-link :to="{name:'charge'}" class="item">激活卡</router-link>
    <router-link :to="{name:'myCards'}" class="item">我的卡包<div class="ui red label">{{ACCOUNT_CARD_LIST_COUNT}}</div></router-link>
    <router-link :to="{name:'consultRecorder'}" class="item">轻咨询记录</router-link>
    <router-link :to="{name:'trainingRecorder'}" class="item">多元智能训练记录</router-link>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'account-sidebar',
  created () {
    this.$store.dispatch('ACCOUNT_GET_CARDS',{user_id:this.$store.state.userRegLog.USER_SIGN_IN_INFO.id})

  },
  computed: {
    ...mapGetters(['ACCOUNT_CARD_LIST_COUNT'])
  }

}
</script>

<style lang="css">
</style>
