<template lang="html">
  <div class="ui segment counter" id="MultiIntelligenceRoomCounter">
    <h4 class="ui header center aligned">
      <b>离您的下一次预约课程还有</b>
    </h4>
    <div class="ui equal width centered grid ">
      <div class="equal width row counter" id="counter">
        <div class="column center aligned">
          <div class="time days">
            <span class="count curr top"></span>
            <span class="count next top"></span>
            <span class="count next bottom"></span>
            <span class="count curr bottom"></span>
          </div>
          <b>天</b>
        </div>
        <div class="column center aligned">
          <div class="time hours">
            <span class="count curr top"></span>
            <span class="count next top"></span>
            <span class="count next bottom"></span>
            <span class="count curr bottom"></span>
          </div>
          <b>时</b>
        </div>
        <div class="column center aligned">
          <div class="time minutes">
            <span class="count curr top"></span>
            <span class="count next top"></span>
            <span class="count next bottom"></span>
            <span class="count curr bottom"></span>
          </div>
          <b>分</b>
        </div>
        <div class="column center aligned">
          <div class="time seconds">
            <span class="count curr top"></span>
            <span class="count next top"></span>
            <span class="count next bottom"></span>
            <span class="count curr bottom"></span>
          </div>
          <b>秒</b>
        </div>
      </div>
    </div>
    <div class="ui segment center aligned basic">
      <p>课程名称：{{bookedCourse.courseName}} </p>
      <p>上课时间：{{bookedCourse.year}}年{{bookedCourse.month}}月{{bookedCourse.day}}日 {{courseHour}} </p>
    </div>
    <div class="ui segment center aligned basic">
          <button class="ui labeled icon button" v-bind:class="[courseHasBegun?'green':'disabled']" @click="$emit('userKickStart')" >
            <i  class="call icon"></i>
            开始上课
          </button>
    </div>
  </div>
</template>

<script>
import 'lodash'
import 'jquery-countdown'

export default {
  name: 'multi-intelligence-room-counter',
  props: ['bookedCourse'],
  data () {
    return {
      now: new Date().getTime(),
    }
  },
  computed: {
    courseHour () {
      let bookTimeObj = new Date(this.bookedCourse.bookTime)
      return bookTimeObj.getHours()+':'+ bookTimeObj.getMinutes()+':'+ bookTimeObj.getSeconds()
    },
    courseFullTime () {
      return this.bookedCourse.year+'/'+this.bookedCourse.month+'/'+this.bookedCourse.day+' '+ this.courseHour
    },
    courseHasBegun () {
      return this.now >= this.bookedCourse.bookTime
    },
  },
  methods: {
    userWait(bookedCourse) {
      let vm = this
      let labels = ['weeks', 'days', 'hours', 'minutes', 'seconds']
      let currDate = '00:00:00:00:00'
      // impossible same with currentTime: for trigger the counter board display  00,00,....
      // if you want not display just the none change value, just set 00:00:00:00 exactly same as currDate
      let nextDate = '9999:9999:9999:9999:9999'
      let parser = /([0-9]{2})/gi
      let $example = $('#counter')

      // Parse countdown string to an object
      let strfobj = (str) => {
        let parsed = str.match(parser)
        let obj = {}
        labels.forEach(function(label, i) {
          obj[label] = parsed[i]
        })
        return obj
      }

      // Return the time components that diffs
      let diff = (obj1, obj2) => {
        let diff = []
        labels.forEach(function(key) {
          if (obj1[key] !== obj2[key]) {
            diff.push(key)
          }
        })
        return diff
      }
      // Build the layout
      let initData = strfobj(currDate)

      $example.countdown(vm.courseFullTime)
      .on('update.countdown', function(event){

        let newDate = event.strftime('%w:%d:%H:%M:%S')
        let data
        if (newDate !== nextDate) {
          currDate = nextDate
          nextDate = newDate

          // Setup the data
          data = {
            'curr': strfobj(currDate),
            'next': strfobj(nextDate)
          }

          // Apply the new values to each node that changed
          diff(data.curr, data.next).forEach(function(label) {

            let selector = '.%s'.replace(/%s/, label)
            let $node = $example.find(selector)

            // Update the node
            $node.removeClass('flip')
            $node.find('.curr').text(data.curr[label])
            $node.find('.next').text(data.next[label])
            // Wait for a repaint to then flip
            _.delay(function($node) {
              $node.addClass('flip')
            }, 50, $node)

          })
        }

      }).on('finish.countdown', function(event){

          //last second tick
          let $node = $example.find('.seconds')
          // Update the node
          $node.removeClass('flip')
          $node.find('.curr').text('01')
          $node.find('.next').text('00')
          // Wait for a repaint to then flip
          _.delay(function($node) {
            $node.addClass('flip')
          }, 50, $node)

        vm.$emit('timeup')
        vm.now = new Date().getTime()
      })
    },
  },
}
</script>

<style lang="scss" scoped>
#MultiIntelligenceRoomCounter {
  color:#666;
  h4.ui.header {
    border: none;
    padding: 0px 3rem 1rem;
    b {
      color:#666;
      font-size: 1.4rem;
      background-color: #fff;
      padding: 1rem;
      white-space: nowrap;
      font-weight: normal;
    }
  }
  div.header {
    display: none;
  }
}
@media only screen and (min-width: 700px) {
  #MultiIntelligenceRoomCounter {
    width: 500px;
  }
}

// .ui.modal>.content {
//   padding: 3.5rem 3em 0em 3em;
// }

.top.segment {
  border:none;
}
.counter.segment {
  border-radius:10px;
  box-shadow: none;
}

.bottom.segment {
  border: none;
}

.counter {
  margin: 0 auto;
  width: 355px;

  b{
    display: block;
    clear:both;
    font-size: 1.2em;
    font-weight: normal;
  }
}
.counter .countdown-container {
  height: 130px;
}
.counter .time {
  border-radius: 5px;
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.5);
  display: inline-block;
  text-align: center;
  position: relative;
  height: 95px;
  width: 65px;

  -webkit-perspective: 479px;
  -moz-perspective: 479px;
  -ms-perspective: 479px;
  -o-perspective: 479px;
  perspective: 479px;

  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  -o-backface-visibility: hidden;
  backface-visibility: hidden;

  -webkit-transform: translateZ(0);
  -moz-transform: translateZ(0);
  -ms-transform: translateZ(0);
  -o-transform: translateZ(0);
  transform: translateZ(0);

  -webkit-transform: translate3d(0,0,0);
  -moz-transform: translate3d(0,0,0);
  -ms-transform: translate3d(0,0,0);
  -o-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
}
.counter .count {

  background: #202020;
  color: #f8f8f8;
  display: block;
  font-family:  sans-serif;
  font-size: 2em;
  line-height: 3.3em;
  overflow: hidden;
  position: absolute;
  text-align: center;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
  top: 0;
  width: 100%;

  -webkit-transform: translateZ(0);
  -moz-transform: translateZ(0);
  -ms-transform: translateZ(0);
  -o-transform: translateZ(0);
  transform: translateZ(0);

  -webkit-transform-style: flat;
  -moz-transform-style: flat;
  -ms-transform-style: flat;
  -o-transform-style: flat;
  transform-style: flat;
}
.counter .count.top {
  border-top: 1px solid rgba(255,255,255,0.2);
  border-bottom: 1px solid rgba(255,255,255,0.1);
  border-radius: 5px 5px 0 0;
  height: 50%;

  -webkit-transform-origin: 50% 100%;
  -moz-transform-origin: 50% 100%;
  -ms-transform-origin: 50% 100%;
  -o-transform-origin: 50% 100%;
  transform-origin: 50% 100%;
}
.counter .count.bottom {
  background-image: linear-gradient(rgba(255,255,255,0.1), transparent);
  background-image: -webkit-linear-gradient(rgba(255,255,255,0.1), transparent);
  background-image: -moz-linear-gradient(rgba(255,255,255,0.1), transparent);
  background-image: -ms-linear-gradient(rgba(255,255,255,0.1), transparent);
  background-image: -o-linear-gradient(rgba(255,255,255,0.1), transparent);
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  border-radius: 0 0 5px 5px;
  line-height: 0;
  height: 50%;
  top: 50%;

  -webkit-transform-origin: 50% 0;
  -moz-transform-origin: 50% 0;
  -ms-transform-origin: 50% 0;
  -o-transform-origin: 50% 0;
  transform-origin: 50% 0;
}

.counter .label {
  font-size: normal;
  margin-top: 5px;
  display: block;
  position: absolute;
  top: 95px;
  width: 100%;
}
/* Animation start */
.counter .count.curr.top {
  -webkit-transform: rotateX(0deg);
  -moz-transform: rotateX(0deg);
  -ms-transform: rotateX(0deg);
  -o-transform: rotateX(0deg);
  transform: rotateX(0deg);
  z-index: 3;
}
.counter .count.next.bottom {
  -webkit-transform: rotateX(90deg);
  -moz-transform: rotateX(90deg);
  -ms-transform: rotateX(90deg);
  -o-transform: rotateX(90deg);
  transform: rotateX(90deg);
  z-index: 2;
}
/* Animation end */
.counter .flip .count.curr.top {
  -webkit-transition: all 250ms ease-in-out;
  -moz-transition: all 250ms ease-in-out;
  -ms-transition: all 250ms ease-in-out;
  -o-transition: all 250ms ease-in-out;
  transition: all 250ms ease-in-out;

  -webkit-transform: rotateX(-90deg);
  -moz-transform: rotateX(-90deg);
  -ms-transform: rotateX(-90deg);
  -o-transform: rotateX(-90deg);
  transform: rotateX(-90deg);
}
.counter .flip .count.next.bottom {
  -webkit-transition: all 250ms ease-in-out 250ms;
  -moz-transition: all 250ms ease-in-out 250ms;
  -ms-transition: all 250ms ease-in-out 250ms;
  -o-transition: all 250ms ease-in-out 250ms;
  transition: all 250ms ease-in-out 250ms;

  -webkit-transform: rotateX(0deg);
  -moz-transform: rotateX(0deg);
  -ms-transform: rotateX(0deg);
  -o-transform: rotateX(0deg);
  transform: rotateX(0deg);
}

@media screen and (max-width: 48em) {

  .counter {
    width: 100%;
  }
  .counter .countdown-container {
    height: 100px;
  }
  .counter .time {
      height: 70px;
      width: 48px;
  }
  .counter .count {
    font-size: 1.5em;
    line-height: 70px;
  }
  .counter .label {
    font-size: 0.8em;
    top: 72px;
  }
}
</style>
