<template lang="html" >
  <div class="ui fixed menu">
    <div class="ui container">
      <img class="ui logo left floated" src="../assets/images/logo.png" alt="" />
      <div class="ui large container menu right floated">
        <a class="toc item "><i class="sidebar icon"></i></a>
        <router-link class="green item" :to="{ name: 'home' }" style="color:#9dca4c;"><i class="icon home"></i> 首页</router-link>
        <a class="ui item courseCenter" href="#" @click.prevent style="color:#64c1b0;"><i class="icon heart"></i> 选课中心 <i class="dropdown icon"></i></a>
        <router-link class="item blue" :to="{ name: 'bookstore' }" style="color:#3887b5;"><i class="icon book"></i> 图书</router-link>
        <a class="ui item showAppQR" href="#" @click.prevent><i class="icon tablet"></i> APP <i class="dropdown icon"></i></a>

        <div class="right item" id="userLogin" >
          <button class="ui tiny olive button" v-on:click="TOGGLE_USER_LOGIN_POPUP" v-show="!userSignInInfo">
            <i class="icon user"></i>
            登录 | 注册
          </button>
          <user-menu v-if="userSignInInfo" v-bind:userSignInInfo="userSignInInfo"></user-menu>
        </div>
        <user-login-modal></user-login-modal>
        <course-popup></course-popup>
        <app-download-popup></app-download-popup>

      </div>
    </div>
  </div>
</template>

<script>
import CoursePopup from './CoursePopup'
import AppDownloadPopup from './AppDownloadPopup'
import UserLoginModal from './UserLoginModal'


import UserMenu from './UserMenu'
import { mapActions } from 'vuex'

export default {
  name: 'primary-nav',
  props: ['userSignInInfo'],
  components: {
    UserLoginModal,
    CoursePopup,
    AppDownloadPopup,
    UserMenu
  },
  methods: {
    ...mapActions(['TOGGLE_USER_LOGIN_POPUP'])
  },
}
</script>

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
background: #feffff; /* Old browsers */
background: -moz-linear-gradient(top,  #feffff 80%, #ededed 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(top,  #feffff 80%,#ededed 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to bottom,  #feffff 80%,#ededed 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#feffff', endColorstr='#ededed',GradientType=0 ); /* IE6-9 */

}

.logo{
  padding: 1em 2em;

  @media only screen and (max-width: 700px) {
    // float: right;
    transform: scale(0.5);
    padding: 0px;
    margin: 0px;
  }
}
.user-info {

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

    .item {display: none;}
    #userLogin {display: none;}
    .toc.item {
      // float: left;
      display: block;
    }
  }
}
</style>
