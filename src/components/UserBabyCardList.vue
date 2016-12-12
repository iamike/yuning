<template lang="html">
  <div class="ui two column centered grid profile-list stackable">
      <div class="column">
        <div class="ui icon message">
          <i class="notched circle loading icon"></i>
          <div class="content">
            <div class="header">
              没有查询到您的孩子信息
            </div>
            <p>请按添加新宝宝按钮.</p>
          </div>
        </div>
      </div>


    <user-baby-card-item v-for="child in allChilds" v-bind:baby-info="child" ></user-baby-card-item>
    <basic-modal>

    </basic-modal>
    <simple-modal>

    </simple-modal>
    <div class="row">
      <div class="column right floated">
        <div class="ui action">
          <div class="ui orange button right floated" @click="addChild">
            <i class="add icon"></i> 添加新宝宝
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import UserBabyCardItem from './UserBabyCardItem'
import BasicModal from './BasicModal'
import SimpleModal from './SimpleModal'

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'user-baby-card-list',
  components: {
    UserBabyCardItem,
    BasicModal,
    SimpleModal,
  },
  methods:{
    ...mapActions(['addChild'])
  },
  computed: {
    ...mapGetters(['allChilds'])
  },
  created () {
    // console.log('created baby list view')
    this.$store.dispatch('getAllChilds', this.$store.state.userRegLog.USER_SIGN_IN_INFO.id)
  },
  mounted () {
    $('.remove-child-modal').modal('show')
  }
}
</script>

<style lang="css">
</style>
