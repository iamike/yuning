<template lang="html">
  <div class="ui large menu">
    <div class="ui container">
      <router-link class="item" :to="{ name: 'home' }">首页</router-link>
      <router-link class="item" :to="{ name: 'foo' }">测试页1</router-link>
      <router-link class="item" :to="{ name: 'bar', params: { id: 123 }}">测试页2</router-link>
      <div class="right item">
        <a class="ui inverted button">Log in</a>
        <a class="ui inverted button">Sign Up</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>
<style lang="less">

</style>
<style scoped lang="css">

</style>
