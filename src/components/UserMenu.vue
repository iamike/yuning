<template lang="html">
  <div class="ui compact menu" >
    <div class="ui simple dropdown item">
      <img class="ui avatar image" v-if="userSignInInfo.avatar==''" src="../assets/images/brand.png" alt="" />
      <img class="ui avatar image" v-else v-bind:src="userSignInInfo.avatar">
      <span v-if="userSignInInfo.nickname!=''">{{ truncateNickname }}</span>
      <span v-else>新用户</span>
      <i class="dropdown icon"></i>
      <div class="menu">
        <router-link class="item" :to="{ name: 'userDashboard', params: { id: userSignInInfo.id }}" >用户中心</router-link>
        <div class="item" v-on:click="userSignOut">注销</div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'user-menu',
  props: ['userSignInInfo'],
  computed: {
    truncateNickname: function() {
      if (this.userSignInInfo.nickname.length > 15 ) {
        return this.userSignInInfo.nickname.substring(0, 15) + '...'
      } else {
        return this.userSignInInfo.nickname
      }
    },
  },
  methods: {
    userSignOut () {
      this.$store.dispatch('USER_SIGN_OUT').then(()=>{
        // console.log('success sign out')
        this.$router.push('/')
      })
    },
  }
}
</script>

<style lang="css">
</style>
