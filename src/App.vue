<template>

  <div id="app">

      <following-menu></following-menu>

      <primary-nav></primary-nav>

      <homepage></homepage>



      <div class="ui inverted vertical footer segment">
        <div class="ui container">
          <div class="ui stackable inverted divided equal height stackable grid">
            <div class="three wide column">
              <h4 class="ui inverted header">关于我们</h4>
              <div class="ui inverted link list">
                <a href="#" class="item">网站地图</a>
                <a href="#" class="item">联系我们</a>

              </div>
            </div>
            <div class="three wide column">
              <h4 class="ui inverted header">我们的服务</h4>
              <div class="ui inverted link list">
                <a href="#" class="item">Banana Pre-Order</a>
                <a href="#" class="item">DNA FAQ</a>
                <a href="#" class="item">How To Access</a>
                <a href="#" class="item">Favorite X-Men</a>
              </div>
            </div>
            <div class="seven wide column">
              <h4 class="ui inverted header"></h4>
              <h3 >{{ $route.name }}</h3>
              <div class="divider ui"></div>
              <router-view class="view"></router-view>
              <p>成长保 ©2011-2016 育宁文化发展（上海）有限公司沪ICP备13005274号-3</p>
            </div>
          </div>
        </div>
      </div>
      <sticky-footer></sticky-footer>
  </div>
</template>
<script>
import FollowingMenu from './components/FollowingMenu'
import PrimaryNav from './components/PrimaryNav'
import StickyFooter from './components/StickyFooter'
import Homepage from './components/Homepage'

export default {
  name: 'app',
  components: {
    FollowingMenu,
    PrimaryNav,
    StickyFooter,
    Homepage
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
#app {
  padding-bottom: 145px;
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
