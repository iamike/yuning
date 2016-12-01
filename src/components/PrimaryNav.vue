<template lang="html" >
  <div class="ui fixed menu">
    <div class="ui container">
      <img class="ui logo left floated" src="../assets/images/logo.png" alt="" />

      <div class="ui large container secondary pointing menu right floated">
        <a class="toc item ">
          <i class="sidebar icon"></i>
        </a>
        <router-link class="active green item" :to="{ name: 'home' }"><i class="icon home"></i> 首页</router-link>
        <router-link class="ui item courseCenter" :to="{ name: 'foo' }" style="color:#64c1b0;"><i class="icon heart"></i> 选课中心
          <i class="dropdown icon"></i>
        </router-link>

        <router-link class="item blue" :to="{ name: 'bar', params: { id: 123 }}" style="color:#3887b5;"><i class="icon book"></i> 图书</router-link>
        <router-link class="item" :to="{ name: 'bar', params: { id: 123 }}"><i class="icon tablet"></i> APP</router-link>

        <!-- <div class="right menu">
          <div class="item">
            <div class="ui transparent icon input">
              <input type="text" placeholder="Search...">
              <i class="search link icon"></i>
            </div>
          </div>
        </div> -->

        <div class="right item hidden" id="userLogin">
          <button class="ui tiny olive button">
            <i class="icon user"></i>
            登录
          </button>
        </div>
        <div class="ui fluid popup bottom left transition hidden">
         <div class="ui three column relaxed divided grid">
           <div class="column">
             <h4 class="ui header">名师课程</h4>
             <div class="ui link list">
               <a class="item">Knitwear</a>
               <a class="item">Outerwear</a>
               <a class="item">Pants</a>
               <a class="item">图书相关</a>
             </div>
           </div>
           <div class="column">
             <h4 class="ui header">心理专栏</h4>
             <div class="ui link list">
               <a class="item">心理咨询</a>
               <a class="item">心理课程</a>
             </div>

           </div>
           <div class="column">
             <h4 class="ui header">在线直播</h4>
             <div class="ui middle aligned selection list">
              <div class="item">
                <img class="ui avatar image" src="../assets/images/avatar/small/helen.jpg">
                <div class="content">
                  <div class="header">Helen</div>
                </div>
              </div>
              <div class="item">
                <img class="ui avatar image" src="../assets/images/avatar/small/christian.jpg">
                <div class="content">
                  <div class="header">Christian</div>
                </div>
              </div>
              <div class="item">
                <img class="ui avatar image" src="../assets/images/avatar/small/daniel.jpg">
                <div class="content">
                  <div class="header">Daniel</div>
                </div>
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
export default {
  name: 'primary-nav',
  mounted: function() {
    $('.item.courseCenter')
      .popup({
        inline     : true,
        // hoverable  : true,
        position   : 'bottom left',
        on: 'click',
        delay: {
          show: 300,
          hide: 800
        }
      })
  }
}
</script>

<style lang="scss" scoped >
#userLogin {
  margin-bottom: 15px;
}
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
/*.introduction {
  position: absolute;
  top:250px;
  left:50%;
  text-align: center;
  margin-left: -210px;
  z-index: 2;
}*/
.logo{
  padding: 1em 2em;
  @media only screen and (max-width: 700px) {

    // float: right;
    transform: scale(0.5);
    padding: 0px;
    margin: 0px;
  }
}

.ui.secondary {

  &.pointing.menu {
    border-bottom: none;

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

      .toc.item {
        // float: left;
        display: block;
      }
    }
  }
}






</style>
