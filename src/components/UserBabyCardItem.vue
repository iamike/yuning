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
          <i class="birthday icon"></i>  {{babyInfo.baby_birth}}
        </div>
      </div>
      <div class="extra content ">
        <div class="ui two buttons">
          <div class="ui basic olive button">修改</div>
          <div class="ui basic orange button" @click="TOGGLE_BASIC_POPUP">删除</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'user-baby-card-item',
  props: ['babyInfo'],
  methods:{
    ...mapActions(['TOGGLE_BASIC_POPUP'])
  },

}
</script>

<style lang="css">
</style>
