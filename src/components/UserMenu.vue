<template lang="html">
  <div class="ui compact menu" >
    <div class="ui simple dropdown item">
      <img class="ui avatar image" v-bind:src="userSignInInfo.avatar">
      <span>{{userSignInInfo.nickname}}</span>
      <i class="dropdown icon"></i>
      <div class="menu">
        <router-link class="item" :to="{ name: 'userDashboard', params: { id: userSignInInfo.id }}" >用户中心</router-link>
        <div class="item" v-on:click="USER_SIGN_OUT">注销</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'user-menu',
  props: ['userSignInInfo'],
  methods: {
    ...mapActions(['USER_SIGN_OUT'])
  }
}
</script>

<style lang="css">
</style>
