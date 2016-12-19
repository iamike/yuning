<template lang="html">
  <div class="row">
    <div class="four wide column">
      <account-sidebar></account-sidebar>
    </div>
    <div class="twelve wide column">
      <router-view name="userMain"></router-view>
    </div>
  </div>
</template>

<script>
import AccountSidebar from './AccountSidebar'

export default {
  components: {
    AccountSidebar,
  }
}
</script>

<style lang="css">
</style>
