<template lang="html">
  <div class="ui grid">
    <div class="sixteen wide column">
      <div class="ui piled segment raised ">
          <a class="ui teal ribbon label"><i class="settings icon"></i> 个人资料</a>
          <img :src="userInfo.avatar" class="ui small circular bordered image right floated">
          <h4 class="ui header"><i class="user icon"></i> {{ userInfo.nickname }} <input type="text" name="name" v-model="userInfo.nickname"></h4>
          <div class="ui divider"></div>
          <p>
            <i class="icon map"></i> {{ userInfo.region }}
          </p>
          <div class="ui divider"></div>
          <p>
            <i class="icon mail"></i> <a :href="'mailto:' + userInfo.email" >{{ userInfo.email }}</a>
          </p>
          <div class="ui divider"></div>
          <p>
            <i class="icon mobile"></i> {{ userInfo.mobile }}
          </p>
          <div class="ui divider"></div>
          <p>
          <template v-if="userInfo.gender == 1"><i class="icon man"></i> 爸爸</template>
          <template v-else><i class="icon"></i> 妈妈</template>
        </p>
        <div class="ui action">
          <div class="ui button" @click="modifyUserInfo(userInfo)">
            修改信息
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'user-info',
  data () {
    return {
      userInfo: this.$store.state.userRegLog.userInfo
    }
  },
  methods: {
    modifyUserInfo (userInfo) {
      this.$store.dispatch('MODIFY_USER_INFO_START', userInfo)
    }
  }
}
</script>

<style lang="scss">
.ui.card {
  float: right;
}
</style>
