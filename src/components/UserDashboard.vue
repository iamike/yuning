<template lang="html">
  <div class="ui container">
    <router-view name="userNav"></router-view>
    <div class="ui grid">
      <div class="row">
        <div class="four wide column">
          <router-view name="userSidebar"></router-view>
        </div>
        <div class="twelve wide column">
          <router-view name="userMain"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'user-dashboard',
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
