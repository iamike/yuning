<template lang="html">
  <div class="ui grid">
    <div class="sixteen wide column">
      <div class="ui piled segment raised ">
          <a class="ui teal ribbon label"><i class="settings icon"></i> 个人资料</a>
          <div class="ui form">
            <img :src="USER_SIGN_IN_INFO.avatar" class="ui small circular bordered image right floated">
            <h4 class="ui header"><i class="user icon"></i> {{ USER_SIGN_IN_INFO.nickname }}
              <input type="text" name="name" v-model="userInfo.nickname" v-bind:value="userInfo.nickname"></h4>
            <div class="ui divider"></div>
            <p>
              <i class="icon map"></i> {{ USER_SIGN_IN_INFO.region }}
            </p>
            <div class="ui divider"></div>
            <p>
              <i class="icon mail"></i> <a :href="'mailto:' + USER_SIGN_IN_INFO.email" >{{ USER_SIGN_IN_INFO.email }}</a>
            </p>
            <div class="ui divider"></div>
            <p>
              <i class="icon mobile"></i> {{ USER_SIGN_IN_INFO.mobile }}
            </p>
            <div class="ui divider"></div>
            <p>
            <template v-if="USER_SIGN_IN_INFO.gender == 1"><i class="icon man"></i> 爸爸</template>
            <template v-else><i class="icon"></i> 妈妈</template>
          </p>
          <div class="ui action">
            <div class="ui button" @click="modifyUserInfo()">
              修改信息
            </div>
          </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'user-info',
  data () {
    return {
      userInfo: {
        
        nickname: this.$store.state.userRegLog.USER_SIGN_IN_INFO.nickname,

      }
    }
  },
  computed: mapGetters([
    'USER_SIGN_IN_INFO'
  ]),
  methods: {
    modifyUserInfo () {
      this.$store.dispatch('MODIFY_USER_INFO_START', )
    }
  }
}
</script>

<style lang="scss">
.ui.card {
  float: right;
}
</style>
