<template lang="html">
  <div class="ui vertical pointing menu">
    <router-link :to="{name:'info'}" class="item">资料修改</router-link>
    <router-link :to="{name:'modifyPassword'}" class="item">修改密码</router-link>
    <router-link :to="{name:'babyInfo'}" class="item">宝宝档案<div class="ui label">{{CHILD_LIST_COUNT}}</div></router-link>
</div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'user-sidebar',
  computed:{
    ...mapGetters(['CHILD_LIST_COUNT'])
  },
  created () {
    this.$store.dispatch('CHILD_GET_ALL', this.$store.state.userRegLog.USER_SIGN_IN_INFO.id)
  }
}
</script>

<style lang="css">
</style>
