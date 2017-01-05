<template lang="html">
  <div class="ui fluid container" id="multiIntelligenceRoom">
    <div class="ui simple dimmer">
        <div class="content">
          <div class="center">
            <div class="ui container">
              <multi-intelligence-room-counter ref="counter" @timeup="loadApi" @userKickStart="openVideoCall" :bookedCourse="bookedCourse"></multi-intelligence-room-counter>
            </div>
          </div>
        </div>
    </div>
    <div class="ui container">
      <div class="ui grid stackable">
        <div class="row">
          <div class="sixteen wide column">
            <div class="ui message videostatus"></div>
          </div>
        </div>
        <div class="ten wide column">
          <h5 class="ui top attached header">
            教师视频
          </h5>
          <div class="ui left aligned segment attached">
            <video  id="receivedVideo" autoplay="autoplay"></video>
          </div>
        </div>
        <div class="six wide column">
          <h5 class="ui top attached header">
            <i class="icon file powerpoint outline"></i>课程讲议
          </h5>
          <div class="ui left attached aligned segment">
            <div class="ui embed" data-url="http://www.myfav.es/jack" data-placeholder="/images/image-16by9.png" data-icon="right circle arrow"></div>
          </div>
          <h5 class="ui top attached header">
            <i class="icon exchange"></i> 用户视频
          </h5>
          <div class="ui center attached aligned segment">
            <video  id="localVideo"  autoplay="autoplay"></video>
          </div>
        </div>
        <div class="ui sixteen wide column center aligned">
            <!-- <button class="ui labeled icon button green" @click="loadApi">
            <i class="call icon"></i>
            加载api
            </button> -->
            <button class="ui labeled icon button green" @click="userLogin">
            <i class="call icon"></i>
            连接教室
            </button>
            <button class="ui labeled icon button red" @click="closeVideo">
            <i class="power icon"></i>
            挂断
            </button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

import MultiIntelligenceRoomCounter from './MultiIntelligenceRoomCounter'

export default {
  name: 'multi-intelligence-room',
  components:{
    MultiIntelligenceRoomCounter,
  },
  beforeRouteEnter (route, from, next) {
    if (window.localStorage.USER_SIGN_IN_INFO) {
      next(vm => {
        // console.log(vm)
        vm.getUserBookedInfo()

      })
    } else {
      next(vm=>{

        // if the user closed the modal and not proceed
        vm.$store.dispatch('TOGGLE_SIMPLE_POPUP',{
          selector:'#userLoginModal',
          onHide () {
            vm.$router.replace('/needAsk/multiIntelligence')
          }
        })

        vm.$store.dispatch('TOGGLE_SIMPLE_POPUP',{
          selector:'#userRegisterModal',
          needToggle:'hide',
          onHide () {
            vm.$router.replace('/needAsk/multiIntelligence')
          }
        })

        vm.$store.dispatch('TOGGLE_SIMPLE_POPUP',{
          selector:'#userForgetPassword',
          needToggle:'hide',
          onHide () {
            vm.$router.replace('/needAsk/multiIntelligence')
          }
        })

        // if the user has success loged in
        vm.$store.state.userRegLog.USER_LOGIN_REDIRECT = '/needAsk/multiIntelligenceRoom'
        vm.$store.state.userRegLog.USER_LOGIN_REDIRECT_BEHAVIOR = function(){
          vm.getUserBookedInfo()
          vm.$store.dispatch('TOGGLE_SIMPLE_POPUP',{selector:'#userLoginModal'})
        }
      })
      // next(false)
    }
  },
  data () {
    return {
      bookedCourse:[],
      appid:'8aaf070858a8910b0158a8bf848a005d',
      onUnitAccount: 'KF10089',
      room:"",
      callId: "",
      caller: "",
      called: "",
    }
  },
  methods: {
      loadApi () {
        let vm = this
        $.getScript("https://app.cloopen.com/im50/ytx-web-im-min-new.js", function(){
          $.getScript("https://app.cloopen.com/im50/MD5.min.js", function(){
            $.getScript("https://app.cloopen.com/im50/base64.min.js", function(){
              $.getScript("https://app.cloopen.com/im50/pako.js", function(){
                vm.room = RL_YTX.init(vm.appid)
                vm.room.code == 200 && vm.userLogin()
              })
            })
          })
        })
      },
      roomInit () {
        let vm = this
        RL_YTX.onCallMsgListener(function(obj) {
          //  alert(obj.callId+"  "+obj.caller+" "+obj.called)
            vm.callId = obj.callId
            vm.caller = obj.caller
            vm.called = obj.called

            if(obj.state==2){

            } else if (obj.state==3) {
            // sendMsg("bookedId=" + params.curr_bookedId);
            // updateCourseStatus();
            // console.log('test3')
            // console.log('666666666666')

            $(".videostatus").html("正在通话中")
            }else if(obj.state==4){
            $(".videostatus").html("对方拒绝了连接")
            }else if(obj.state==5){
            $(".videostatus").html("通话结束")
          } else if (obj.state==6) {
            vm.videoCall()
          }
        })
      },
      videoCall () {
        let vm = this
        //连接视频通话
         // params.videoCall = true
         var view = document.getElementById("receivedVideo")
         var localView = document.getElementById("localVideo")

         RL_YTX.setCallView(view, localView) //呼叫类型1的时候这么传

        // set listener
        var voipAcceptBuilder = new RL_YTX.AcceptCallBuilder()

        voipAcceptBuilder.setCallId(vm.callId)//请求的callId，
        voipAcceptBuilder.setCaller(vm.caller)//请求的主叫号码，即Tony的号码

        RL_YTX.accetpCall(voipAcceptBuilder, function(){
          // alert('success')
        }, function callback(obj){
          //  alert(obj. code+"") //错误码
        })

      },
      userLogin () {
        let vm = this
        vm.$store.dispatch('GET_RL_YTX_SIG_ACTION',{"username": vm.$store.state.userRegLog.USER_SIGN_IN_INFO.id}).then(res=>{

          var loginBuilder = new RL_YTX.LoginBuilder()
          loginBuilder.setType(1) //登录类型 1账号登录，3通讯账号密码登录
          loginBuilder.setUserName(vm.$store.state.userRegLog.USER_SIGN_IN_INFO.id) //设置用户名
          loginBuilder.setPwd() //type值为1时，密码可以不赋值
          loginBuilder.setSig(res.sig) //设置sig
          loginBuilder.setTimestamp(res.timestamp) //设置时间戳

          RL_YTX.login(loginBuilder, function(obj) {

            vm.roomInit()

          }, function(obj) {

            console.log("登录失败")

          })

        }).catch(err=>{
          console.log('test2')
        })
    },
    openVideoCall () {
      let vm = this
       $('#multiIntelligenceRoom').dimmer('hide')
       vm.userLogin()
    },
    closeVideo () {
      // params.videoCall = false;
      let vm = this
      var VoipReleaseBuilder = new RL_YTX.ReleaseCallBuilder()
      VoipReleaseBuilder.setCallId(vm.callId) //请求的callId
      VoipReleaseBuilder.setCaller(vm.called) //请求的主叫号码，即Tony的号码
      VoipReleaseBuilder.setCalled(vm.caller) // 请求的被叫号码，即John的号码
      RL_YTX.releaseCall(VoipReleaseBuilder, function() {
        $(".videostatus").html("通话结束")
      }, function(obj) {

      })
    },
    getUserBookedInfo () {
      let vm = this
      this.$store.dispatch('GET_BOOKED_MI_COURSE_ACTION',{userId:this.$store.state.userRegLog.USER_SIGN_IN_INFO.id})
      .then(res=>{
          //debug data
          let fakeDate = {
                        bookTime:new Date('Wed Jan 4 2017 19:18:16 GMT+0800 (CST)').getTime(),
                        cancelStatus:0,
                        courseId:"402890ba573b097401573b1c5fe20041",
                        courseName:"多元智能训练课",
                        createTime:"Dec 26, 2016 11:26:58 AM",
                        day:"4",
                        fieldOne:"0",
                        fieldTwo:"0",
                        hour:"18",
                        id:"22da27bac68748feb3affa086fc29875",
                        month:"1",
                        pictureUrl:"http://localhost:8080/controller/czb/getPicture?url=c9168d2d3b5949829cc211e54a980735.jpg",
                        roomNum:"122818",
                        statu:0,
                        useTimeNum:3,
                        year:"2017",
                      }

        // vm.bookedCourse = res[0]
        vm.bookedCourse = fakeDate
        let currentTime = new Date().getTime()
        // console.log(currentTime,vm.bookedCourse.bookTime)
        if (currentTime >= vm.bookedCourse.bookTime){
          vm.loadApi()
        } else {
          $('#multiIntelligenceRoom').dimmer({closable:false}).dimmer('show')
          vm.$nextTick(function(){
            vm.$refs.counter && vm.$refs.counter.userWait()
          })

        }
      }).catch(err=>{
        // console.log(err)
      })
    }
  },
  created () {


  },
  destroyed () {
    $('#multiIntelligenceRoom').dimmer('destroy')

  },
  mounted () {



  }
}
</script>

<style lang="scss" scoped>

.ui.fluid.container {
  padding-top: 10rem;
  padding-bottom: 10rem;

}
video {
  width: 100%;
}


</style>
