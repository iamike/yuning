<template lang="html">
  <div class="ui compact menu" >
    <div class="ui simple dropdown item">
      <img class="ui avatar image" v-bind:src="userSignInInfo.avatar">
      <span>{{userSignInInfo.nickname}}</span>
      <i class="dropdown icon"></i>
      <div class="menu">
        <router-link class="item" :to="{ name: 'userDashboard', params: { id: userSignInInfo.id }}" >用户中心</router-link>
        <div class="item" v-on:click="userSignOut">注销</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'user-menu',
  props: ['userSignInInfo'],
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
