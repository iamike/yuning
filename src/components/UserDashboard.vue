<template lang="html">
  <div class="ui container">
    <user-nav></user-nav>
    <div class="ui grid">
      <div class="row">
        <div class="four wide column">
          <user-sidebar></user-sidebar>
        </div>
        <div class="twelve wide column">
          <user-info></user-info>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserNav from './UserNav'
import UserInfo from './UserInfo'
import UserSidebar from './UserSidebar'

export default {
  name: 'user-dashboard',
  components: {
    UserNav,
    UserInfo,
    UserSidebar
  },
  beforeRouteEnter (route, from, next) {
    let userInfo = window.localStorage.user_info
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
