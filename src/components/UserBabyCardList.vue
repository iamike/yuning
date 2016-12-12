<template lang="html">
  <div class="ui three column grid profile-list stackable">
    <user-baby-card-item v-for="child in allChilds" v-bind:baby-info="child" ></user-baby-card-item>
    <div class="row">
      <div class="column right floated">
        <div class="ui action">
          <div class="ui orange button right floated">
            <i class="add icon"></i> 添加新宝宝
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserBabyCardItem from './UserBabyCardItem'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'user-baby-card-list',
  components: {
    UserBabyCardItem
  },
  computed: {
    ...mapGetters(['allChilds'])
  },
  created () {
    // console.log('created baby list view')
    this.$store.dispatch('getAllChilds', this.$store.state.userRegLog.USER_SIGN_IN_INFO.id)
  }
}
</script>

<style lang="css">
</style>
