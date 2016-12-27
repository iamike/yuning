<template lang="html" >
  <div class="ui fixed menu">
    <div class="ui container">
      <router-link :to="{ name: 'home' }" ><img class="ui logo" src="../assets/images/logo.png" alt="" /></router-link>
      <div class="ui large container menu right floated">
        <a class="toc item "><i class="sidebar icon"></i></a>
        <router-link class="item" :to="{ name: 'home' }" >首页</router-link>
        <a class="ui item courseCenter" href="#" @click.prevent >我要看 <i class="angle down icon"></i></a>
        <a id="needAskPopup" class="item dropdown ui" >我要问 <i class="angle down icon"></i>
          <need-ask-popup></need-ask-popup>
        </a>
        <a class="ui item " href="#" @click.prevent >我要测 <i class="angle down icon"></i></a>
        <a class="ui item showAppQR" href="#" @click.prevent>APP<i class="angle down icon"></i></a>
        <!-- <div class="ui search">
          <div class="ui left icon input">
            <input class="prompt" type="text" placeholder="搜索">
            <i class="search icon"></i>
          </div>
          <div class="results"></div>
        </div> -->
        <div class="right item" id="userLogin" >
          <button class="ui tiny olive button" v-if="!userSignInInfo" @click="openLoginModal">
            <i class="icon user"></i>
            登录 | 注册
          </button>
          <user-menu v-if="userSignInInfo" v-bind:userSignInInfo="userSignInInfo"></user-menu>
        </div>
        <course-popup></course-popup>
        <app-download-popup></app-download-popup>
      </div>
    </div>
  </div>
</template>

<script>
import CoursePopup from './CoursePopup'
import AppDownloadPopup from './AppDownloadPopup'
import UserMenu from './UserMenu'
import NeedAskPopup from './NeedAskPopup'

export default {
  name: 'primary-nav',
  props: ['userSignInInfo'],
  components: {
    CoursePopup,
    AppDownloadPopup,
    UserMenu,
    NeedAskPopup,
  },
  mounted () {
    $('.item.dropdown').dropdown()
  },
  methods: {
    openLoginModal () {
      this.$store.dispatch('TOGGLE_SIMPLE_POPUP',{selector:'#userLoginModal'})
    }
  },
}
</script>
<style lang="scss">
.ui.menu .ui.dropdown .menu>.item {
  padding: 1.5em!important;
}
.ui.search {
  .ui.icon.input {
    margin-top: 20px;
    margin-left: 20px;
  }
}

</style>
<style lang="scss" scoped >
.overlay {
  float: right;
  margin: 0em 3em 1em 0em;
}
.overlay .menu {
  position: relative;
  left: 0;
  transition: right 0.5s ease;
}
.overlay.fixed .menu {
  left: 0px;
}
.ui.fixed.menu {
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#feffff+80,ededed+100 */
// background: #feffff; /* Old browsers */
// background: -moz-linear-gradient(top,  #feffff 80%, #ededed 100%); /* FF3.6-15 */
// background: -webkit-linear-gradient(top,  #feffff 80%,#ededed 100%); /* Chrome10-25,Safari5.1-6 */
// background: linear-gradient(to bottom,  #feffff 80%,#ededed 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
// filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#feffff', endColorstr='#ededed',GradientType=0 ); /* IE6-9 */
  box-shadow: none;
  .ui.menu .item:before {
    background: none;
  }
}

.logo{
  padding: 0em 2em 0em 0em;
  height: 80px;

  @media only screen and (max-width: 700px) {
    // float: right;
    transform: scale(0.5);
    padding: 0px;
    margin: 0px;
    display: none;
  }
}
.user-info {

}
.large.menu .active.item {
  color:#57a437!important;
}
.large.menu, .compact.menu {
  border: none;
  box-shadow: none;
  background-color: transparent;
}
.large.menu {
  .item {
    color:#7b7b7b;
  }
  .active.item {
    border-color:#9dca4c;
  }
  .toc.item {
    display: none;
  }

  @media only screen and (max-width: 700px) {
    .ui.search,.item {display: none;}
    #userLogin {display: none;}
    .toc.item {
      // float: left;
      display: block;
    }
  }
}
</style>
