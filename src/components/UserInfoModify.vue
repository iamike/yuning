<template lang="html">
  <div class="ui grid">
    <div class="sixteen wide column">
      <div v-if="USER_SIGN_IN_INFO!=undefined" class="ui  segment  piled raised ">
          <a class="ui teal ribbon label"><i class="settings icon"></i> 个人资料</a>
          <div class="ui grid stackable">
            <div class="six wide column">
              <div class="ui fluid image">
                <img class="ui bordered image" v-if="USER_SIGN_IN_INFO.avatar==''" src="../assets/images/brand.png" alt="" />
                <img class="ui bordered image" v-else :src="USER_SIGN_IN_INFO.avatar" >
                <a class="ui bottom right attached label teal"><i class="upload icon"></i> 上传新头像</a>
              </div>
            </div>
            <div class="ten wide column">
              <div class="ui form">
                <div class="ui horizontal divider">基本信息</div>

                  <div class="fields">
                    <div class="eight wide field">
                      <label><i class="user icon"></i> 用户名</label>
                      <input type="text" name="name" v-model="USER_SIGN_IN_INFO.nickname" v-bind:value="USER_SIGN_IN_INFO.nickname">
                      <div v-show="!USER_SIGN_IN_INFO.nickname" class="ui pointing label">
                        您的用户id，中文，数字，字符...
                      </div>
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
                  <div class="ui horizontal divider">联系信息</div>
                  <div class="fields">
                    <div class="eight wide field">
                      <label><i class="icon mobile"></i> 手机</label>
                      <div class="ui action input">
                        <input class="disabled" disabled type="text" name="name" v-bind:value="USER_SIGN_IN_INFO.mobile">
                        <button class="ui right icon button">
                          <i class="edit icon"></i>
                        </button>
                      </div>
                    </div>
                    <div class="eight wide field">
                      <label><i class="icon mail"></i> Email</label>
                      <input type="text" name="name" v-model="USER_SIGN_IN_INFO.email" v-bind:value="USER_SIGN_IN_INFO.email">
                      <div v-show="!USER_SIGN_IN_INFO.email" class="ui pointing label">
                        请正确填写您的email，订阅我们的最新活动消息
                      </div>
                    </div>
                  </div>
                  <div class="fields">
                    <div class="sixteen wide field">
                      <label><i class="icon map"></i> 地址</label><input type="text" name="name" v-bind:value="USER_SIGN_IN_INFO.region">
                      <div v-show="!USER_SIGN_IN_INFO.region" class="ui pointing label">
                        请正确填写您的地址, 以便我们寄送奖品
                      </div>
                    </div>
                  </div>
                <div class="ui action">
                  <div class="ui teal button">
                    <i class="save submit icon"></i> 修改信息
                  </div>
                </div>
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
      userModifyInfo: {
        nickname: this.$store.state.userRegLog.USER_SIGN_IN_INFO.nickname,
        avatar: this.$store.state.userRegLog.USER_SIGN_IN_INFO.avatar,
      }
    }
  },
  computed: mapGetters([
    'USER_SIGN_IN_INFO'
  ]),
}
</script>

<style lang="scss">
  .ui.fluid.image {
    padding-top: 40px;
  }
</style>
