<template lang="html">
  <div class="row">
    <div class="four wide column">
      <router-view name="userSidebar"></router-view>
    </div>
    <div class="twelve wide column">
      <router-view name="userMain"></router-view>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
