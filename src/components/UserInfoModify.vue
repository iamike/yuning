<template lang="html">
  <div class="ui grid">
    <div class="sixteen wide column">
      <div v-if="USER_SIGN_IN_INFO!=undefined" class="ui  segment  piled raised ">
          <a class="ui teal ribbon label"><i class="settings icon"></i> 个人资料</a>
          <div class="six wide field">
                <img class="ui small centered image" v-if="USER_SIGN_IN_INFO.avatar==''" src="../assets/images/brand.png" alt="" />
                <img class="ui small centered image" v-else :src="USER_SIGN_IN_INFO.avatar" >
          </div>
          <div class="ui divider"></div>
          <div class="ui form">

              <div class="fields">
                <div class="eight wide field">
                  <label><i class="user icon"></i>  用户名</label>
                  <input type="text" name="name" v-model="USER_SIGN_IN_INFO.nickname" v-bind:value="USER_SIGN_IN_INFO.nickname">
                </div>
                <div class="eight wide field">
                  <label> 性别</label>
                  <div class="inline fields">
                    <div class="field">
                      <div class="ui radio checkbox">
                        <input class="hidden" type="radio" name="gender" id="father" value="1" v-bind:checked="USER_SIGN_IN_INFO.gender == 1">
                        <label for="father"><i class="icon man"></i> 爸爸 </label>
                      </div>
                    </div>
                    <div class="field">
                      <div class="ui radio checkbox">
                        <input class="hidden" type="radio" name="gender" id="mother" value="0" v-bind:checked="USER_SIGN_IN_INFO.gender == 0">
                        <label for="mother"><i class="icon woman"></i> 妈妈 </label>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div class="fields">
                <div class="eight wide field">
                  <label><i class="icon mobile"></i> 手机</label>
                  <input type="text" name="name" v-bind:value="USER_SIGN_IN_INFO.mobile">
                </div>
                <div class="eight wide field">
                  <label><i class="icon mail"></i> Email</label>
                  <input type="text" name="name" v-model="USER_SIGN_IN_INFO.email" v-bind:value="USER_SIGN_IN_INFO.email">
                </div>

              </div>

              <div class="fields">
                <div class="sixteen wide field">
                  <label><i class="icon map"></i> 地址</label><input type="text" name="name" v-bind:value="USER_SIGN_IN_INFO.region">
                </div>
              </div>


          <div class="ui action center aligned">
            <div class="ui teal button">
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
  // data () {
  //   return {
  //     USER_SIGN_IN_INFO: {
  //       nickname: this.$store.state.userRegLog.USER_SIGN_IN_INFO.nickname,
  //       avatar: this.$store.state.userRegLog.USER_SIGN_IN_INFO.avatar,
  //     }
  //   }
  // },
  computed: mapGetters([
    'USER_SIGN_IN_INFO'
  ]),

}
</script>

<style lang="scss">
.segment.piled.raised {
  padding-top: 40px;
  .ui.image {
    clip: rect(0px,60px,200px,0px);
  }

  .ui.form {
    padding-top: 30px;
  }
}
</style>
