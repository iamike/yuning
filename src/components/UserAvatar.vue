<template lang="html">
  <div class="ui fluid image">
    <img class="ui bordered image" v-if="USER_SIGN_IN_INFO.avatar==''" src="../assets/images/brand.png" alt="" />
    <img class="ui bordered image" v-else :src="USER_SIGN_IN_INFO.avatar" >
    <a class="ui bottom right attached label teal" @click="updateAvatar"><i class="upload icon"></i> 上传新头像</a>
    <simple-modal id="userUpdateAvatarModal">
        <div class="header" slot="header">
          更新头像
        </div>
        <div class="content" slot="content">
          <img class="avatar" v-bind:src="src"/>

        </div>
        <div class="actions" slot="actions"></div>
    </simple-modal>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import SimpleModal from './SimpleModal'

export default {
  name: 'user-avatar',
  computed:{
    ...mapGetters(['USER_SIGN_IN_INFO'])
  },
  data () {
    return {

    }
  },
  components:{
    SimpleModal,
  },
  methods:{
    updateAvatar () {
      $('#userUpdateAvatarModal').modal('show')
    }
  },
  destroyed () {
    $('#userUpdateAvatarModal').modal('destroy')

  }

}
</script>

<style lang="css">
</style>
