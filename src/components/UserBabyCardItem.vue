<template lang="html">
  <div class="column" >
    <div class="ui fluid card">
      <div class="content">
        <img class="right floated mini ui image" src="../assets/images/brand.png">
        <div class="header">
          {{babyInfo.baby_name}}
        </div>
        <div class="meta">
          <span v-if="babyInfo.baby_gender==1">小王子</span>
          <span v-else>小公主</span>
        </div>
        <div class="description">
          <i class="birthday icon"></i> {{babyInfo.baby_birth}}
        </div>
      </div>
      <div class="extra content ">
        <div class="ui two buttons">
          <div class="ui basic orange button" @click="modifyItem">修改</div>
          <div class="ui basic olive button" @click="removeItem">删除</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'user-baby-card-item',
  props: ['babyInfo'],
  methods:{
    removeItem () {
      let vm = this
      this.$store.dispatch('TOGGLE_BASIC_POPUP', {
        selector:'#removeChildModal',
        onApproveAction: function () {
          vm.$store.dispatch('CHILD_REMOVE_ACTION', {id:vm.babyInfo.id}).then((res)=>{
            // console.log('remove success')
              vm.$store.dispatch('CHILD_GET_ALL', vm.$store.state.userRegLog.USER_SIGN_IN_INFO.id)
            }).catch((err)=>{
              // console.log('remove failure')
            })
        }
      })
    },
    modifyItem () {
      let vm = this
      vm.$store.state.baby.CHILD_DETAIL = vm.babyInfo
      //TODO fix the datepicker problem...
      vm.$store.state.baby.baby_birth.time = vm.babyInfo.baby_birth
      this.$store.dispatch('TOGGLE_SIMPLE_POPUP', {selector:'#modifyChildModal'} )
    },
  },
  destroyed () {


  },
}
</script>

<style lang="css">
</style>
