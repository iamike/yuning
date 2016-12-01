<template lang="html">
<div class="ui container fluid">
  <div class="ui text container">
    <div class="ui middle aligned one column centered grid">
      <div class="ui segment basic padded very">
        <h1 class="ui header rotateText">儿童多元智能专业测评|1对1专业训练辅导|真人成长顾问随呼随到|量身打造训练计划
|游戏式训练方式|优质师资保障品质</h1>
        <p class="rotateText">
          智能测评系统，权威测评报告，儿童咨询专家1对1解读，助您客观、真实的了解孩子的强项和弱项。|颠覆传统早教的线下1对多教学模式，专家线上1对1训练指导，自由选择训练时间地点，随时约课。|数百位专业成长顾问365天随时在线，帮您解答孩子成长过程中的一切难题。|根据测评报告，量身定制训练计划，让孩子的突出能力和兴趣爱好，得到及时充分的培养，获得更好的早期发展。|让孩子在新奇有趣的游戏中完成训练，家长作为参与者，与孩子共同写作完成。父母陪伴是提升孩子智能的关键，同时也极大地提升了亲子陪伴质量。|成长保是专业的在线儿童成长顾问平台，具有数百位儿童咨询师和儿童游戏咨询师，一直专注儿童成长。
        </p>
      </div>
    </div>

  </div>
  <div class="IconsContainer"></div>

</div>

</template>

<style lang="scss" scoped>
.ui.segment.basic.padded.very {
  padding-bottom: 300px;
}
.ui.header.rotateText{
  color:#518e6d;
}
.IconsContainer {
  width:100%;
  height:460px;
  position:absolute;;
  bottom:0px;
  left:0px;

  @media only screen and (max-width: 700px) {

    bottom:-100px;
  }

}
</style>
<style lang="css" >


.Header-hero-guide {
  position:absolute;
  top:0;
  left:0
}

.Icon {
  position:absolute;
  width:150px;
  height:150px;
  margin:-75px 0 0 -75px;
  background-size:912px 912px;
  background-image:url(../assets/images/icons/header-logos.png);
  border-radius:50%;
  box-shadow:0 15px 35px rgba(0,0,0,.1),0 3px 10px rgba(0,0,0,.07);
  will-change:transform,opacity
}

@media (-webkit-min-device-pixel-ratio:1.3),(-webkit-min-device-pixel-ratio:1.25),(min-resolution:120dpi) {
  .Icon {
  background-image:url(../assets/images/icons/header-logos.png)
  }
}

.Icon span {
  position:absolute;
  left:50%;
  bottom:-40px;
  padding:5px 12px;
  background:#fff;
  box-shadow:0 3px 6px rgba(0,0,0,.05),0 8px 20px rgba(0,0,0,.05);
  border-radius:50px;
  white-space:nowrap;
  font-size:16px;
  font-weight:500;
  color:#566b78;
  pointer-events:none;
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;
  will-change:transform,opacity;
  -webkit-transform:translate(-50%,-10px);
  transform:translate(-50%,-10px);
  opacity:0;
  -webkit-transition-property:opacity,-webkit-transform;
  transition-property:opacity,-webkit-transform;
  transition-property:opacity,transform;
  transition-property:opacity,transform,-webkit-transform;
  -webkit-transition-duration:.25s;
  transition-duration:.25s;
  -webkit-transition-timing-function:ease-out;
  transition-timing-function:ease-out
}

.Icon:hover {
  z-index:9999
}

.Icon:hover span {
  opacity:.9;
  -webkit-transform:translate(-50%);
  transform:translate(-50%)
}

.Icon-img0 {
background-position:-153px -1px
}

.Icon-img1 {
background-position:-609px -1px
}

.Icon-img2 {
background-position:-1px -153px
}

.Icon-img3 {
background-position:-153px -153px
}

.Icon-img4 {
background-position:-305px -1px
}

.Icon-img5 {
background-position:-305px -153px
}

.Icon-img6 {
background-position:-1px -305px
}

.Icon-img7 {
background-position:-153px -305px
}

.Icon-img8 {
background-position:-305px -305px
}

.Icon-img9 {
background-position:-457px -1px
}

.Icon-img10 {
background-position:-457px -153px
}

.Icon-img11 {
background-position:-457px -305px
}

.Icon-img12 {
background-position:-1px -457px
}

.Icon-img13 {
background-position:-153px -457px
}

.Icon-img14 {
background-position:-305px -457px
}

.Icon-img15 {
background-position:-457px -457px
}

.Icon-img16 {
background-position:-1px -1px
}

.Icon-img17 {
background-position:-609px -153px
}

.Icon-img18 {
background-position:-609px -305px
}

.Icon-img19 {

background-position:-609px -457px
}

.Icon-img20 {
background-position:-1px -609px
}

.Icon-img21 {
background-position:-153px -609px
}

.Icon-img22 {
background-position:-305px -609px
}

.Icon-img23 {
background-position:-457px -609px
}
.Icon-img24 {
background-position:-609px -609px
}
.Icon-img25 {
background-position:-761px -1px
}
.Icon-img26 {
background-position:-761px -153px
}
.Icon-img27 {
background-position:-761px -305px
}
.Icon-img28 {
background-position:-761px -457px
}
.Icon-img29 {
background-position:-761px -609px
}
.Icon-img30 {
background-position:-1px -761px
}
.Icon-img31 {
background-position:-153px -761px
}
.Icon-img32 {
background-position:-305px -761px
}
.rotating {
  display: inline-block;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  -o-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transform: rotateX(0) rotateY(0) rotateZ(0);
  -moz-transform: rotateX(0) rotateY(0) rotateZ(0);
  -ms-transform: rotateX(0) rotateY(0) rotateZ(0);
  -o-transform: rotateX(0) rotateY(0) rotateZ(0);
  transform: rotateX(0) rotateY(0) rotateZ(0);
  -webkit-transition: 0.5s;
  -moz-transition: 0.5s;
  -ms-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
  -webkit-transform-origin-x: 50%;
}

.rotating.flip {
  position: relative;
}

.rotating .front, .rotating .back {
  left: 0;
  top: 0;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  -o-backface-visibility: hidden;
  backface-visibility: hidden;
}

.rotating .front {
  position: absolute;
  display: inline-block;
  -webkit-transform: translate3d(0,0,1px);
  -moz-transform: translate3d(0,0,1px);
  -ms-transform: translate3d(0,0,1px);
  -o-transform: translate3d(0,0,1px);
  transform: translate3d(0,0,1px);
}

.rotating.flip .front {
  z-index: 1;
}

.rotating .back {
  display: block;
  opacity: 0;
}

.rotating.spin {
  -webkit-transform: rotate(360deg) scale(0);
  -moz-transform: rotate(360deg) scale(0);
  -ms-transform: rotate(360deg) scale(0);
  -o-transform: rotate(360deg) scale(0);
  transform: rotate(360deg) scale(0);
}

.rotating.flip .back {
  z-index: 2;
  display: block;
  opacity: 1;

  -webkit-transform: rotateY(180deg) translate3d(0,0,0);
  -moz-transform: rotateY(180deg) translate3d(0,0,0);
  -ms-transform: rotateY(180deg) translate3d(0,0,0);
  -o-transform: rotateY(180deg) translate3d(0,0,0);
  transform: rotateY(180deg) translate3d(0,0,0);
}

.rotating.flip.up .back {
  -webkit-transform: rotateX(180deg) translate3d(0,0,0);
  -moz-transform: rotateX(180deg) translate3d(0,0,0);
  -ms-transform: rotateX(180deg) translate3d(0,0,0);
  -o-transform: rotateX(180deg) translate3d(0,0,0);
  transform: rotateX(180deg) translate3d(0,0,0);
}

.rotating.flip.cube .front {
  -webkit-transform: translate3d(0,0,100px) scale(0.9,0.9);
  -moz-transform: translate3d(0,0,100px) scale(0.85,0.85);
  -ms-transform: translate3d(0,0,100px) scale(0.85,0.85);
  -o-transform: translate3d(0,0,100px) scale(0.85,0.85);
  transform: translate3d(0,0,100px) scale(0.85,0.85);
}

.rotating.flip.cube .back {
  -webkit-transform: rotateY(180deg) translate3d(0,0,100px) scale(0.9,0.9);
  -moz-transform: rotateY(180deg) translate3d(0,0,100px) scale(0.85,0.85);
  -ms-transform: rotateY(180deg) translate3d(0,0,100px) scale(0.85,0.85);
  -o-transform: rotateY(180deg) translate3d(0,0,100px) scale(0.85,0.85);
  transform: rotateY(180deg) translate3d(0,0,100px) scale(0.85,0.85);
}

.rotating.flip.cube.up .back {
  -webkit-transform: rotateX(180deg) translate3d(0,0,100px) scale(0.9,0.9);
  -moz-transform: rotateX(180deg) translate3d(0,0,100px) scale(0.85,0.85);
  -ms-transform: rotateX(180deg) translate3d(0,0,100px) scale(0.85,0.85);
  -o-transform: rotateX(180deg) translate3d(0,0,100px) scale(0.85,0.85);
  transform: rotateX(180deg) translate3d(0,0,100px) scale(0.85,0.85);
}
</style>

<script>
import textrotator from 'jquery.simple-text-rotator'

export default {
  name: 'mast-head3',
  data () {
    return {
      animated: false,
      animation () {
        //logo-bubbles

        var vm = this

        if (vm.animated===false) {

          vm.animated = true

          setTimeout(function(){

            var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                                        window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

            var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;


                  function LogoBubbles(e) {
                      function o() {
                          t.vertShrink = h(1e3, 800, window.innerHeight), t.vertShrink = p(t.vertShrink, 0, 1)
                      }

                      function u() {
                          var e = t.container.getBoundingClientRect();
                          (e.bottom < 0 || e.top > window.innerHeight) && t.playing == 1 ? t.playing = !1 : e.bottom > 0 && e.top < window.innerHeight && t.playing == 0 && (t.playing = !0, requestAnimationFrame(t.tick))
                      }

                      function a(e) {
                          var n = e.x + e.noiseX + t.scrollX,
                              r = e.y + e.noiseY;
                          r = c(r, t.containerHeight / 2, t.vertShrink * t.maxShrink), n < -200 && (e.x += t.containerWidth);
                          var i = l(e.introProgress) / 20 + .95;
                          i *= e.scale, e.el.style.opacity = l(e.introProgress), e.el.style.transform = "translate(" + n + "px, " + r + "px) scale(" + i + ")"
                      }

                      function f(e) {
                          var t = 0,
                              n = 0,
                              r = null;
                          for (t = e.length - 1; t > 0; t -= 1) n = Math.floor(Math.random() * (t + 1)), r = e[t], e[t] = e[n], e[n] = r
                      }

                      function l(e) {
                          return e < .5 ? 2 * e * e : -1 + (4 - 2 * e) * e
                      }

                      function c(e, t, n) {
                          return e * (1 - n) + t * n
                      }

                      function h(e, t, n) {
                          return (n - e) / (t - e)
                      }

                      function p(e, t, n) {
                          return Math.max(Math.min(e, n), t)
                      }
                      var t = this;
                      for (i in e) t[i] = e[i];
                      t.container = document.querySelector(t.containerSelector),
                      t.noiseT = 0,
                      t.scrollX = 0,
                      t.logos.forEach(function(e, n) {
                          t.logos[n] = {
                              index: n,
                              title: e
                          }
                      }),
                      f(t.logos),
                      t.vertShrink = 0,
                      o(),
                      window.addEventListener("resize", o),
                      t.playing = !0,
                      u(),
                      window.addEventListener("scroll", u),
                      t.logosLoaded = !1;

                      var n = "(-webkit-min-device-pixel-ratio: 1.3), (min-resolution: 120dpi)";
                      t.isRetina = window.devicePixelRatio > 1 ? !0 : window.matchMedia && window.matchMedia(n).matches ? !0 : !1;
                      var r = new Image;
                      r.src = "/static/images/header-logos" + (t.isRetina ? "@2x.png" : ".png"), r.onload = function() {
                          t.logosLoaded = !0
                      };
                      for (var i = 0; i < t.bubbles.length; i++) {
                          var s = t.bubbles[i];
                          s.scale = s.s || 1, s.seedX = Math.random() * 1e4, s.seedY = Math.random() * 1e4, s.noiseX = s.noiseY = 0, s.introDelay = Math.random() * t.introDelay, s.introProgress = 0, s.el = document.createElement("div"), s.el.className = t.classPrefix + t.logos[i].index, s.tagEl = document.createElement("span"), s.tagEl.innerHTML = t.logos[i].title, s.el.appendChild(s.tagEl), a(s), t.container.appendChild(s.el)
                      }
                      t.firstTick = null,
                      t.lastTick = 0,
                      t.tick = function(e) {

                          t.firstTick || (t.firstTick = e), e -= t.firstTick;
                          var n = e - t.lastTick;
                          t.lastTick = e, t.noiseT += n * t.noiseSpeed, t.scrollX -= n * t.scrollSpeed;
                          for (var r = 0; r < t.bubbles.length; r++) {
                            // console.log('test');

                              var i = t.bubbles[r];
                              i.noiseX = noise(i.seedX + t.noiseT) * t.noiseScale - t.noiseScale / 2,
                              i.noiseY = noise(i.seedY + t.noiseT) * t.noiseScale - t.noiseScale / 2,
                              t.logosLoaded && i.introProgress < 1 && e > i.introDelay && (i.introProgress = Math.min(1, i.introProgress + n / t.introDuration)),
                              a(i)
                          }

                          t.playing && requestAnimationFrame(t.tick)

                      }
                  };

                  //logo-bubbles-noise

                  var PERLIN_ZWRAPB = 8,
                      PERLIN_ZWRAP = 1 << PERLIN_ZWRAPB,
                      PERLIN_SIZE = 4095,
                      perlin_octaves = 4,
                      perlin_amp_falloff = .5,
                      scaled_cosine = function(e) {
                          return .5 * (1 - Math.cos(e * Math.PI))
                      },
                      perlin, noise = function(e) {
                          if (perlin == null) {
                              perlin = new Array(PERLIN_SIZE + 1);
                              for (var t = 0; t < PERLIN_SIZE + 1; t++) perlin[t] = Math.random()
                          }
                          e < 0 && (e = -e);
                          var n = Math.floor(e),
                              r = e - n,
                              i, s = 0,
                              o = .5,
                              u;
                          for (var a = 0; a < perlin_octaves; a++) i = scaled_cosine(r), u = perlin[n & PERLIN_SIZE], u += i * (perlin[n + 1 & PERLIN_SIZE] - u), s += u * o, o *= perlin_amp_falloff, n <<= 1, r *= 2, r >= 1 && (n++, r--);
                          return s
                      };

                      var bubbles = [{
                          s: .6,
                          x: 1134,
                          y: 45
                      }, {
                          s: .6,
                          x: 1620,
                          y: 271
                      }, {
                          s: .6,
                          x: 1761,
                          y: 372
                      }, {
                          s: .6,
                          x: 2499,
                          y: 79
                      }, {
                          s: .6,
                          x: 2704,
                          y: 334
                      }, {
                          s: .6,
                          x: 2271,
                          y: 356
                      }, {
                          s: .6,
                          x: 795,
                          y: 226
                      }, {
                          s: .6,
                          x: 276,
                          y: 256
                      }, {
                          s: .6,
                          x: 1210,
                          y: 365
                      }, {
                          s: .6,
                          x: 444,
                          y: 193
                      }, {
                          s: .6,
                          x: 2545,
                          y: 387
                      }, {
                          s: .8,
                          x: 1303,
                          y: 193
                      }, {
                          s: .8,
                          x: 907,
                          y: 88
                      }, {
                          s: .8,
                          x: 633,
                          y: 320
                      }, {
                          s: .8,
                          x: 323,
                          y: 60
                      }, {
                          s: .8,
                          x: 129,
                          y: 357
                      }, {
                          s: .8,
                          x: 1440,
                          y: 342
                      }, {
                          s: .8,
                          x: 1929,
                          y: 293
                      }, {
                          s: .8,
                          x: 2135,
                          y: 198
                      }, {
                          s: .8,
                          x: 2276,
                          y: 82
                      }, {
                          s: .8,
                          x: 2654,
                          y: 182
                      }, {
                          s: .8,
                          x: 2783,
                          y: 60
                      }, {
                          x: 1519,
                          y: 118
                      }, {
                          x: 1071,
                          y: 233
                      }, {
                          x: 1773,
                          y: 148
                      }, {
                          x: 2098,
                          y: 385
                      }, {
                          x: 2423,
                          y: 244
                      }, {
                          x: 901,
                          y: 385
                      }, {
                          x: 624,
                          y: 111
                      }, {
                          x: 75,
                          y: 103
                      }, {
                          x: 413,
                          y: 367
                      }, {
                          x: 2895,
                          y: 271
                      }, {
                          x: 1990,
                          y: 75
                      }];

                      var logos = ['Wordpress', 'Angular', 'SQL', 'Oracle', '.Net', 'SAP', 'Facebook', 'My Sql', 'CMMI', 'Php', 'Instagram', 'ITIL', 'Shopify', 'Twitter', 'Youtube', 'Snapchat', 'Magento', 'Bootstrap', 'Windows', 'Slack', 'Android', 'IOS',
                          'Whatsapp', 'GitHub', 'Just Coffee :)', 'Ionic', 'LinkedIn', 'TINT', 'Asana', 'Shutterstock', 'HTML 5', 'Sharepoint', 'Jquery'
                      ];

                      var logoBubbles = new LogoBubbles({
                          bubbles: bubbles,
                          logos: logos,
                          classPrefix: "Icon Icon-img",
                          containerSelector: ".IconsContainer",
                          containerWidth: 3000,
                          containerHeight: 360,
                          maxShrink: 0.2,
                          noiseSpeed: 0.0002,
                          noiseScale: 80,
                          scrollSpeed: 0.07,
                          introDelay: 1500,
                          introDuration: 1500
                      });

                      requestAnimationFrame(logoBubbles.tick);

                },100)

        }

      }
    }
  },
  mounted: function() {


    $(".rotateText").textrotator({
      animation: "dissolve", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
      separator: "|", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
      speed: 3000 // How many milliseconds until the next word show.
    });

  }
}
</script>
