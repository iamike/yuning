<template>
  <div id="app">
      <primary-nav v-bind:userSignInInfo="USER_SIGN_IN_INFO"></primary-nav>
      <router-view class="mainContent"></router-view>
      <sticky-footer></sticky-footer>

  </div>
</template>
<script>
import PrimaryNav from './components/PrimaryNav'
import AppFooter from './components/Footer'

import StickyFooter from './components/StickyFooter'
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  components: {
    PrimaryNav,
    StickyFooter,

  },
  created () {
      this.$store.dispatch('USER_CHECK_IN')
  },
  computed: mapGetters(['USER_SIGN_IN_INFO']),
  mounted: function() {
    //TODO: responsive needed,
    //problem: semantic need performance issue for set the sidebar inside the #app div.
    $('.ui.sidebar').sidebar('attach events', '.toc.item')

  }
}
</script>


<style lang="scss" scoped>
  #homepage.mainContent {
    padding-top: 0px;
  }
  .mainContent {
    padding-top: 108px;
    min-height: 95vh;

  }
</style>
<style >

@-webkit-keyframes scroll-down-anim {
	0%{ bottom: 2px; }
	50%{ bottom: 7px; }
	100%{ bottom: 2px; }
}
@-moz-keyframes scroll-down-anim {
	0%{ bottom: 2px; }
	50%{ bottom: 7px; }
	100%{ bottom: 2px; }
}
@-o-keyframes scroll-down-anim {
	0%{ bottom: 2px; }
	50%{ bottom: 7px; }
	100%{ bottom: 2px; }
}
@keyframes scroll-down-anim {
	0%{ bottom: 2px; }
	50%{ bottom: 7px; }
	100%{ bottom: 2px; }
}

@keyframes masthead {
 0% {
    background-position: 0% 0%;
 }
 100% {
    background-position: 0% -475px;
 }

}

@-moz-keyframes masthead {
 0% {
   background-position: 0% 0%;
 }
 100% {
   background-position: 0% -475px;
 }
}

@-webkit-keyframes masthead {
 0% {
   background-position: 0% 0%;
 }
 100% {
   background-position: 0% -475px;
 }
}

@-ms-keyframes masthead {
 0% {
   background-position: 0% 0%;
 }
 100% {
  background-position: 0% -475px;
 }
}

@-o-keyframes masthead {
 0% {
   background-position: 0% 0%;
 }
 100% {
   background-position: 0% -475px;
 }

}
</style>
