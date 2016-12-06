<template>
  <div id="app">
      <primary-nav></primary-nav>
      <router-view class="mainContent"></router-view>
      <sticky-footer></sticky-footer>
  </div>
</template>
<script>
import PrimaryNav from './components/PrimaryNav'
import AppFooter from './components/Footer'
import StickyFooter from './components/StickyFooter'

export default {
  name: 'app',
  components: {
    PrimaryNav,
    StickyFooter
  },
  ready () {

  },
  mounted () {


  }

}
</script>


<style lang="scss" scoped>
  #homepage.mainContent {
    padding-top: 0px;
  }
  .mainContent {
    padding-top: 108px;
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
