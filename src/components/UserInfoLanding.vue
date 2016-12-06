<template lang="html">
  <div class="ui container">
    <p>
      user info landing {{ $route.params.id }}
    </p>
    <router-view name="userNav"></router-view>
    <router-view name="userSidebar"></router-view>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'user-info-landing',
  beforeRouteEnter (route, from, next) {
    let userInfo = window.localStorage.user_info
    if (userInfo) {
      next(vm => {
        console.log(vm)
      })
    } else {
      next('/')
    }
  }
}
</script>

<style lang="css">
</style>
