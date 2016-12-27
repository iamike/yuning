<template lang="html">
  <div class="ui fluid container">
    <div class="ui container">
      <div class="ui grid">
        <div class="row">
          <div class="sixteen wide column">
            <div class="ui message videostatus">
            </div>
          </div>
        </div>
        <div class="ten wide column">
          <h5 class="ui top attached header">
            教师视频
          </h5>
          <div class="ui left aligned segment attached">
            <video  id="receivedVideo"></video>
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
            <video  id="localVideo" style="height:100px;"></video>
          </div>
        </div>
        <div class="ui sixteen wide column center aligned">
          <button class="ui labeled icon button green" @click="openVideo">
            <i class="call icon"></i>
            开始上课
            </button>
            <button class="ui labeled icon button red" @click="closeVideo">
            <i class="power icon"></i>
            挂断邀请
            </button>
        </div>
      </div>
    </div>


  </div>
</template>


<script>
export default {
  name: 'multi-intelligence-room',
  methods: {
    //连接视频通话
     openVideo () {
      // params.videoCall = true
      var view = document.getElementById("receivedVideo")
      var localView = document.getElementById("localVideo")
      // console.log(view,localView)
      var makeCallBuilder = new RL_YTX.MakeCallBuilder()
      // console.log(IM._userNo)
      makeCallBuilder.setCalled(String('38397'))
      makeCallBuilder.setCallType(1) //呼叫的类型 0 音频 1视频
      RL_YTX.setCallView(view, localView) //呼叫类型1的时候这么传
      RL_YTX.makeCall(makeCallBuilder,
        function() {
          //呼叫成功
          console.log('success')
        },
        function callback(obj) {
          if(obj.code == '174005') {
            $(".videostatus").html("请插入摄像头")
          }
        })
    },
    closeVideo () {
      // params.videoCall = false;
      var VoipReleaseBuilder = new RL_YTX.ReleaseCallBuilder();
      VoipReleaseBuilder.setCallId(IM.callId); //请求的callId
      VoipReleaseBuilder.setCaller(IM.called); //请求的主叫号码，即Tony的号码
      VoipReleaseBuilder.setCalled(IM.caller); // 请求的被叫号码，即John的号码
      RL_YTX.releaseCall(VoipReleaseBuilder, function() {
        $(".videostatus").html("通话结束");

      }, function(obj) {

      })
    }

  },
  created () {



  },
  mounted () {
    let vm = this
    // TODO .....你懂的
    $.getScript("https://app.cloopen.com/im50/ytx-web-im-min-new.js", function(){
      $.getScript("https://app.cloopen.com/im50/MD5.min.js", function(){
        $.getScript("https://app.cloopen.com/im50/base64.min.js", function(){
          $.getScript("https://app.cloopen.com/im50/pako.js", function(){
              window.IM.init()
          })
        })
      })

      RL_YTX.onCallMsgListener(function(obj) {
        IM.callId = obj.callId;
        IM.caller = obj.caller;
        IM.called = obj.called;
        if(obj.state==2){
        $(".videostatus").html("呼叫中");
        }else if(obj.state==3){
        // sendMsg("bookedId=" + params.curr_bookedId);
        // updateCourseStatus();
        // console.log('test3')
        $(".videostatus").html("正在通话中");
        }else if(obj.state==4){
        $(".videostatus").html("对方拒绝了连接");
        }else if(obj.state==5){
        $(".videostatus").html("通话结束");
        }
      });
    })

    //请求服务器成功开始登录
    function callback(resp) {
      //账号登录参数设置
      var loginBuilder = new RL_YTX.LoginBuilder();
      loginBuilder.setType(1); //登录类型 1账号登录，3通讯账号密码登录
      loginBuilder.setUserName('aa'); //设置用户名
      loginBuilder.setPwd(); //type值为1时，密码可以不赋值
      loginBuilder.setSig(resp.sig); //设置sig
      loginBuilder.setTimestamp(resp.timestamp); //设置时间戳
      RL_YTX.login(loginBuilder, function(obj) {
        console.log("专家登录成功@!");
        //设置专家个人信息
        var uploadPersonInfoBuilder = new RL_YTX.UploadPersonInfoBuilder();
          uploadPersonInfoBuilder.setNickName('aa');
          uploadPersonInfoBuilder.setSex(1);
          uploadPersonInfoBuilder.setBirth("1990-01-01");
          uploadPersonInfoBuilder.setSign("个性签名");
          RL_YTX.uploadPerfonInfo(uploadPersonInfoBuilder, function(obj) {
            //设置成功
            console.log("设置专家个人信息成功");
            obj.version; //个人信息版本号
          }, function(resp) {
            //设置失败
            console.log("设置专家个人信息失败");
            console.log("失败："+resp.code);
          });
        RL_YTX.onMsgReceiveListener(function(obj) {});
        RL_YTX.onNoticeReceiveListener(function(obj) {});
        RL_YTX.onConnectStateChangeLisenter(function(obj) {
          if(obj.code == 1 || obj.code == 5) {
            IM.init();
          }
        });
      }, function(obj) {
        console.log("登录失败");
      })
    }


    window.IM = window.IM || {
      _expertNo: "",
      _userNo: "",
      _appid: '8aaf070858a8910b0158a8bf848a005d', // 应用I
      _onUnitAccount: 'KF10089', // 多渠道客服帐号，目前只支持1个
      _3rdServer: "http://192.168.16.178:8099/czb-server/czb/api/", // 3rdServer，主要用来虚拟用户服务器获取SIG
      callId: "",
      caller: "",
      called: "",
      init: function() {
        //初始化SDK
        IM._expertNo = ""
        IM._userNo = vm.$store.state.userRegLog.USER_SIGN_IN_INFO.id
        var resp = RL_YTX.init(IM._appid)

        if(170002 == resp.code) {} else if(174001 == resp.code) {} else if(200 == resp.code) {

          IM._login(IM._expertNo, "")
        }
      },
      _login: function() {
        var data = {
          "username": 'aa',
        }
        var url = IM._3rdServer + 'getSig'

        // console.log(url)
        $.ajax({
          url: url,
          dataType: 'jsonp',
          data: data,
          jsonp: 'cb',
          success: function(result) {
            // console.log(result)
            if(result.code != '000000') {
              var resp = {}
              resp.code = result.code
              resp.msg = "Get SIG fail from 3rd server!..."
              onError(resp)
              return
            } else {
              // console.log('test')
              var resp = {}
              resp.code = result.code
              resp.sig = result.sig
              resp.timestamp = result.timestamp
              // console.log(resp)
              callback(resp)
              return
            }
          },
          error: function() {
            var resp = {}
            resp.msg = 'Get SIG fail from 3rd server!'
            onError(resp)
          },
          timeout: 5000
        })

      }
    }
  }
}
</script>

<style lang="css" scoped>
.ui.fluid.container {
  padding-top: 10rem;
  padding-bottom: 10rem;

}
video {
  width: 100%;
}
</style>
