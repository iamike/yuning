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
          <div class="ui basic orange button" @click="toggleModifyPopup('#modifyChildModal')">修改</div>
          <div class="ui basic olive button" @click="toggleRemovePopup('#removeChildModal')">删除</div>
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
    toggleRemovePopup(selector){
      let vm = this
      const modalPayload = {
        selector,
        onApproveAction: function () {
          vm.$store.dispatch('CHILD_REMOVE_ACTION', {id:vm.babyInfo.id}).then((res)=>{
            // console.log('remove success')
              vm.$store.dispatch('CHILD_GET_ALL', vm.$store.state.userRegLog.USER_SIGN_IN_INFO.id)
            }).catch((err)=>{
              // console.log('remove failure')
            })
        }
      }
      this.$store.dispatch('TOGGLE_BASIC_POPUP', modalPayload )
    },
    toggleModifyPopup(selector){
      let vm = this
      // console.log(vm.babyInfo)
      // transfer the props data into vuex state before the modal popup
      // console.log(vm.babyInfo)
      vm.$store.state.baby.CHILD_DETAIL = vm.babyInfo

      //TODO fix the datepicker problem...
      vm.$store.state.baby.baby_birth.time = vm.babyInfo.baby_birth
      // console.log('before change',vm.$store.state.baby.CHILD_DETAIL)

      const modalPayload = {
        selector,
        onShow: function () {
        },
        onApproveAction: function () {
          // vm.babyInfo.baby_birth = vm.$store.state.baby.baby_birth.time
          // // console.log('after change',vm.$store.state.baby.CHILD_DETAIL)
          //
          // vm.$store.dispatch('CHILD_MODIFY_ACTION', {id:vm.babyInfo.id}).then((res)=>{
          //   // console.log('remove success')
          //     vm.$store.dispatch('CHILD_GET_ALL', vm.$store.state.userRegLog.USER_SIGN_IN_INFO.id)
          //   }).catch((err)=>{
          //     // console.log('remove failure')
          //   })
        },
      }
      this.$store.dispatch('TOGGLE_SIMPLE_POPUP', modalPayload )
    },
  },
  destroyed () {


  },
}
</script>

<style lang="css">
</style>
