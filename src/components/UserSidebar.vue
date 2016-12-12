<template lang="html">
  <div class="ui vertical pointing menu">
    <router-link :to="{name:'info'}" class="item">资料修改</router-link>
    <router-link :to="{name:'modifyPassword'}" class="item">修改密码</router-link>
    <router-link :to="{name:'babyInfo'}" class="item">宝宝档案<div class="ui label">2</div></router-link>
</div>
</template>

<script>
export default {
  name: 'user-sidebar'
}
</script>

<style lang="css">
</style>
