<template>

  <div id="app">

      <following-menu></following-menu>
      <div class="ui fixed menu">
        <div class="ui container">
          <div class="ui large container secondary pointing menu">
            <img class="logo" src="./assets/images/logo.png" alt="" />
            <a class="toc item">
              <i class="sidebar icon"></i>
            </a>
            <router-link class="active item" :to="{ name: 'home' }">首页</router-link>
            <router-link class="item" :to="{ name: 'foo' }">测试页1</router-link>
            <router-link class="item" :to="{ name: 'bar', params: { id: 123 }}">测试页2</router-link>
            <!-- <div class="right item hidden">
              <a class="ui button">Log in</a>
              <a class="ui button">Sign Up</a>
            </div> -->
          </div>
        </div>
      </div>
      <mast-head></mast-head>

      <div class="ui vertical stripe segment">
        <div class="ui middle aligned stackable grid container">
          <div class="row">
            <div class="six wide left floated column">
              <img src="./assets/images/dummy-1.png" class="ui large rounded image">
            </div>
            <div class="eight wide column">
              <div class="ui piled very padded segment">
                <img class="ui fluid image" src="./assets/images/video.jpg" alt="" />
                <h3 class="ui header center aligned">我们的愿景</h3>
                <p class="ui center aligned">打造高质量亲子陪伴充分感受到孩子每一步的成长，共同享受成长乐趣。</p>

                <div class="row">
                  <div class="center aligned column">
                    <a class="ui green button">Check Them Out</a>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>


      <div class="ui vertical stripe quote segment">
        <div class="ui equal width stackable internally celled grid">
          <div class="left aligned row">
            <div class="center aligned column">
              <h3>"What a Company"</h3>
              <p>That is what they all say about us</p>
              <div class="overlay">
                <div class="ui labeled icon vertical menu">
                  <a class="item"><i class="twitter icon"></i> Tweet</a>
                  <a class="item"><i class="facebook icon"></i> Share</a>
                  <a class="item"><i class="mail icon"></i> E-mail</a>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="ui yellow message">
                <i class="star icon"></i>
                To make the entire content of an item link, check out the link variation below
              </div>
              <div class="ui items">
                <div class="item">
                  <a class="ui tiny image">
                    <img src="./assets/images/avatar/large/stevie.jpg">
                  </a>
                  <div class="content">
                    <a class="header">Stevie Feliciano</a>
                    <div class="description">
                      <p>Stevie Feliciano is a <a>library scientist</a> living in New York City. She likes to spend her time reading, running, and writing.</p>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <a class="ui tiny image">
                    <img src="./assets/images/avatar/large/veronika.jpg">
                  </a>
                  <div class="content">
                    <a class="header">Veronika Ossi</a>
                    <div class="description">
                      <p>Veronika Ossi is a set designer living in New York who <a>enjoys</a> kittens, music, and partying.</p>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <a class="ui tiny image">
                    <img src="./assets/images/avatar/large/jenny.jpg">
                  </a>
                  <div class="content">
                    <a class="header">Jenny Hess</a>
                    <div class="description">
                      <p>Jenny is a student studying Media Management at <a>the New School</a>.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div class="ui container">
        <div class="ui internally celled grid">
          <div class="row">
            <div class="three wide column">
              <img src="./assets/images/paragraph.png">
            </div>
            <div class="ten wide column">
              <img class="ui fluid image" style="margin:-1em;" src="./assets/images/t7-jyh-1648.png">
            </div>
            <div class="three wide column">
              <img src="./assets/images/paragraph.png">
            </div>
          </div>
          <div class="row">
            <div class="three wide column">
              <img src="./assets/images/paragraph.png">
            </div>
            <div class="ten wide column">
              <div class="ui vertical email stripe segment">
                <div class="ui center aligned page grid">
                  <div class="column">
                    <h3 class="ui header">
                      想不想免费获取300小时课程？
                    </h3>
                    <form class="ui form">
                      <div class="field">
                        <div class="ui huge input">
                          <input type="text" placeholder="E-mail" data-validate="email" name="EMAIL">
                        </div>
                        <button class="ui huge olive submit button" type="submit">
                          免费获取
                        </button>
                      </div>
                    </form>
                    <div class="ui horizontal divider">
                      Or
                    </div>
                    <form class="ui form">
                      <div class="field">
                        <label>Empty</label>
                        <input name="empty" type="text">
                      </div>
                      <div class="field">
                        <label>Dropdown</label>
                        <select class="ui dropdown" name="dropdown">
                          <option value="">Select</option>
                          <option value="male">Choice 1</option>
                          <option value="female">Choice 2</option>
                        </select>
                      </div>
                      <div class="inline field">
                        <div class="ui checkbox">
                          <input type="checkbox" name="checkbox">
                          <label>Checkbox</label>
                        </div>
                      </div>
                      <div class="ui submit button">Submit</div>
                      <div class="ui error message"></div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div class="three wide column">
              <img src="./assets/images/paragraph.png">
            </div>
          </div>
        </div>
      </div>
      <div class="ui vertical stripe segment">
        <div class="ui text container">
          <h3 class="ui header">Breaking The Grid, Grabs Your Attention</h3>
          <p>Instead of focusing on content creation and hard work, we have learned how to master the art of doing nothing by providing massive amounts of whitespace and generic content that can seem massive, monolithic and worth your attention.</p>
          <a class="ui large button">Read More</a>
          <h4 class="ui horizontal header divider">
            <a href="#">Case Studies</a>
          </h4>
          <h3 class="ui header">Did We Tell You About Our Bananas?</h3>
          <p>Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but its really true. It took years of gene splicing and combinatory DNA research, but our bananas can really dance.</p>
          <a class="ui large button">I'm Still Quite Interested</a>
        </div>
      </div>


      <div class="ui inverted vertical footer segment">
        <div class="ui container">
          <div class="ui stackable inverted divided equal height stackable grid">
            <div class="three wide column">
              <h4 class="ui inverted header">About</h4>
              <div class="ui inverted link list">
                <a href="#" class="item">Sitemap</a>
                <a href="#" class="item">Contact Us</a>
                <a href="#" class="item">Religious Ceremonies</a>
                <a href="#" class="item">Gazebo Plans</a>
              </div>
            </div>
            <div class="three wide column">
              <h4 class="ui inverted header">Services</h4>
              <div class="ui inverted link list">
                <a href="#" class="item">Banana Pre-Order</a>
                <a href="#" class="item">DNA FAQ</a>
                <a href="#" class="item">How To Access</a>
                <a href="#" class="item">Favorite X-Men</a>
              </div>
            </div>
            <div class="seven wide column">
              <h4 class="ui inverted header">Footer Header</h4>
              <h3 >{{ $route.name }}</h3>
              <div class="divider ui"></div>
              <router-view class="view"></router-view>
              <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
import FollowingMenu from './components/FollowingMenu'
import MastHead from './components/MastHead'

import '../static/semantic/dist/semantic'
import "../static/semantic/dist/semantic.css"

export default {
  name: 'app',
  components: {
    FollowingMenu,
    MastHead
  },
  ready () {

  },
  mounted () {

    $('.overlay').visibility({
      type: 'fixed',
      offset: 80
    });


  }

}
</script>

<style lang="less">
/* Global */



</style>
<style lang="scss" scoped>
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

.introduction {
  position: absolute;
  top:250px;
  left:50%;
  text-align: center;
  margin-left: -210px;
  z-index: 2;
}

.ui.secondary.pointing.menu {
  border-bottom: none;
  .active.item {
    border-color:#9dca4c;
  }
  .toc.item {
    display: none;
  }
}
.logo{padding: 1em 2em;}



@media only screen and (max-width: 700px) {

  .logo {
    position: absolute;
    transform: scale(0.5);
    right:0px;
    top:0px;
    padding: 0px;
    margin: 0px;
  }
  .ui.secondary.pointing.menu {
    display: block;
    .item, .menu {
      display: none;
    }
    .toc.item {
      display: block;
    }
  }

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
