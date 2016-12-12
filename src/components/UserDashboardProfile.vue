<template lang="html">
  <div class="row">
    <div class="four wide column">
      <user-sidebar></user-sidebar>
    </div>
    <div class="twelve wide column">
      <router-view name="userMain"></router-view>
    </div>
  </div>
</template>

<script>
import UserSidebar from './UserSidebar'

export default {
  name: 'user-dashboard',
  components: {
    UserSidebar
  },

}
</script>

<style lang="scss">
.tabular.menu {
  margin-bottom: 3rem;
}
.segment.piled.raised {
  padding-top: 40px;

  .ui.form {
    padding-top: 30px;
  }
}
</style>
