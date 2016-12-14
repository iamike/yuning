<template lang="html">
  <div class="ui container">
    <user-nav></user-nav>
    <div class="ui grid">
      <router-view name="userSection"></router-view>
    </div>
  </div>
</template>

<script>
import UserNav from './UserNav'

export default {
  name: 'user-dashboard',
  components: {
    UserNav
  },
  beforeRouteEnter (route, from, next) {
    if (window.localStorage.USER_SIGN_IN_INFO) {
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
