<template lang="html" >
  <div class="">
    <router-link class="item" :to="{ name: 'home' }">首页</router-link>
    <router-link class="item" :to="{ name: 'foo' }">测试页1</router-link>
    <router-link class="item" :to="{ name: 'bar', params: { id: 123 }}">测试页2</router-link>
  </div>
</template>

<script>
export default {
  name: 'primaryNav'
}
</script>

<style>


</style>
