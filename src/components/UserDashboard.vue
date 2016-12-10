<template lang="html">
  <div class="ui container">
    <router-view name="userNav"></router-view>
    <div class="ui grid">
      <router-view name="userSection"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'user-dashboard',
  beforeRouteEnter (route, from, next) {
    let userInfo = window.localStorage.USER_SIGN_IN_INFO
    if (userInfo) {
      next(vm => {
        // console.log(vm)
      })
    } else {
      next('/')
    }
  }
}
</script>

<style lang="css">
</style>
