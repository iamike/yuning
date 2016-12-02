<template>
  <div id="app">
      <primary-nav></primary-nav>
      <router-view class="view"></router-view>
      <sticky-footer></sticky-footer>
      <footer></footer>
  </div>
</template>
<script>
import FollowingMenu from './components/FollowingMenu'
import PrimaryNav from './components/PrimaryNav'
import Homepage from './components/Homepage'
import StickyFooter from './components/StickyFooter'

export default {
  name: 'app',
  components: {
    PrimaryNav,
    Homepage,
    StickyFooter
  },
  ready () {

  },
  mounted () {
    //
    // $('.overlay').visibility({
    //   type: 'fixed',
    //   offset: 80
    // });


  }

}
</script>

<style lang="less">
/* Global */



</style>
<style lang="scss" scoped>


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
