<template lang="html">
  <div class="ui secondary vertical pointing menu">
    <router-link :to="{name:'info'}" class="item">个人资料</router-link>
    <router-link :to="{name:'modifyPassword'}" class="item">修改密码</router-link>
    <a class="item">
      宝宝档案修改
    </a>
</div>
</template>

<script>
export default {
  name: 'user-sidebar'
}
</script>

<style lang="css">
</style>
