<template lang="html">
  <div class="ui two column centered grid profile-list stackable">
      <div class="column" v-if="CHILD_GET_ALL==undefined" >
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

    <user-baby-card-item v-for="child in CHILD_GET_ALL" v-bind:baby-info="child" ></user-baby-card-item>

    <div class="row">
      <div class="column right floated">
        <div class="ui action">
          <div class="ui orange button right floated" @click="TOGGLE_SIMPLE_POPUP('#addChildModal')">
            <i class="add icon"></i> 添加新宝宝
          </div>
        </div>
      </div>
    </div>

    <simpleModal id="addChildModal">
      <div class="header" slot="header">
        添加宝贝信息
      </div>
      <div class="content" slot="content">

        
      </div>
    </simpleModal>

    <simpleModal id="modifyChildModal">
      <div class="header" slot="header">
        修改宝贝信息
      </div>
    </simpleModal>

    <basic-modal id="removeChildModal">
      <div class="header ui icon" slot="header">
        <i class="archive icon"></i>
        删除宝贝资料？
      </div>
      <div class="ui equal width center aligned grid" slot="content">
        <div class="row">
          <div class="column">
              此操作将删除该孩子的信息，请谨慎操作！
          </div>
        </div>
      </div>
        <div class="actions ui equal width center aligned grid" slot="action">
          <div class="ui cancel red inverted button">
            <i class="remove icon"></i>
            取消
          </div>
          <div class="ui ok green inverted button">
            <i class="checkmark icon"></i>
            确定
          </div>
        </div>
    </basic-modal>
  </div>
</template>

<script>
import UserBabyCardItem from './UserBabyCardItem'
import Modal from './Modal'
import BasicModal from './BasicModal'
import SimpleModal from './SimpleModal'

import { mapGetters, mapActions} from 'vuex'

export default {
  name: 'user-baby-card-list',
  components: {
    UserBabyCardItem,
    BasicModal,
    SimpleModal,
  },

  methods:{
    ...mapActions(['TOGGLE_SIMPLE_POPUP'])
  },
  computed: {
    ...mapGetters(['CHILD_GET_ALL'])
  },
  created () {
    // console.log('created baby list view')
    this.$store.dispatch('CHILD_GET_ALL', this.$store.state.userRegLog.USER_SIGN_IN_INFO.id)
  },
}
</script>

<style lang="css">
</style>
