<template lang="html">
  <div class="">
    <router-link class="item" :to="{ name: 'home' }" >首页</router-link>
    <a class="ui item courseCenter" href="#" @click.prevent >我要看 <i class="angle down icon"></i></a>
    <a id="needAskPopup" class="item dropdown ui" >我要问 <i class="angle down icon"></i>
      <need-ask-popup></need-ask-popup>
    </a>
    <a class="ui item " href="#" @click.prevent >我要测 <i class="angle down icon"></i></a>
    <a class="ui item showAppQR" href="#" @click.prevent>APP<i class="angle down icon"></i></a>
    <div class="right item" id="userLogin" >
      <button class="ui tiny olive button" v-if="!userSignInInfo" @click="openLoginModal">
        <i class="icon user"></i>
        登录 | 注册
      </button>
      <user-menu v-if="userSignInInfo" v-bind:userSignInInfo="userSignInInfo"></user-menu>
    </div>
  </div>
</template>

<script>
import UserMenu from './UserMenu'
import NeedAskPopup from './NeedAskPopup'

export default {
  name: 'menu-items',
  props: ['userSignInInfo'],
  components: {
    UserMenu,
    NeedAskPopup,
  },
  methods: {
    openLoginModal () {
      this.$store.dispatch('TOGGLE_SIMPLE_POPUP',{selector:'#userLoginModal'})
    }
  },
}
</script>
<style lang="less">

</style>
<style scoped lang="css">

</style>
