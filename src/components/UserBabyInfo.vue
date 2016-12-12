<template lang="html">
  <div class="ui grid">
    <div class="sixteen wide column">
      <div class="ui piled segment raised ">
        <a class="ui orange ribbon label"><i class="settings icon"></i> 我的宝宝</a>
        <user-baby-card-list></user-baby-card-list>
      </div>
    </div>
  </div>
</template>

<script>
import UserBabyCardList from './UserBabyCardList'
export default {
    name: 'user-baby-info',
    components: {
      UserBabyCardList
    }
}
</script>

<style lang="css" scoped>
.profile-list {
  padding-top: 20px;
}
</style>
