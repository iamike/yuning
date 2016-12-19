<template lang="html">
  <div class="ui fluid image">
    <img class="ui bordered image" v-if="USER_SIGN_IN_INFO.avatar==''" src="../assets/images/brand.png" alt="" />
    <img class="ui bordered image" v-else :src="USER_SIGN_IN_INFO.avatar" >
    <a class="ui bottom right attached label teal" @click="updateAvatar"><i class="upload icon"></i> 上传新头像</a>
    <simple-modal id="userUpdateAvatarModal">
        <div class="header" slot="header">
          更新头像
        </div>
        <div class="content" slot="content">
          <div class="ui center aligned segment basic" v-show="step==0">
            <button class="ui olive button massive" v-on:click="trigger"><i class="icon cloud upload"></i> 上传新头像</button>
            <input id="upload" style="display:none;" accept="image/png,image/gif,image/jpeg," ref="uploader" type="file" v-on:change="upload" />
          </div>
          <div class="ui center aligned segment basic" v-show="step>0">

            <div class="ui equal width center aligned padded grid stackable" style="position:relative;">
              <div class="eight wide column">
                <div id="upload-demo" class="croppie-container" ></div>
              </div>
              <div class="eight wide column">
                <img id="testImage" class="ui medium image centered" />
                <div class="row" >
                  <button class="ui olive button massive"  v-on:click="generateAvatar"><i class="icon crop"></i> 剪裁</button>
                  <button class="ui olive button massive" v-on:click="submitAvatar"><i class="icon checkmark"></i> 完成</button>
                </div>
                <div class="row">
                  <!-- errors from backend -->
                  <div v-if="USER_MODIFY_AVATAR_ERRORS"  class="ui visible message" v-bind:class="USER_MODIFY_AVATAR_ERRORS.isSuccess==true?'success':'error'">
                    <ul class="list">
                      <li>{{ USER_MODIFY_AVATAR_ERRORS.errorMsg }}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="actions" slot="actions"></div>
    </simple-modal>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import SimpleModal from './SimpleModal'
import Vue from 'vue'
import 'croppie'
import '../../node_modules/croppie/croppie.css'
let Events = new Vue({})

export default {
  name: 'user-avatar',
  computed:{
    ...mapGetters(['USER_SIGN_IN_INFO','USER_MODIFY_AVATAR_ERRORS'])
  },
  data () {
    return {
      step:0,
    }
  },
  components:{
    SimpleModal,
  },
  methods:{
    trigger (event) {
      $('#upload').click()
    },
    submitAvatar () {
      let vm = this

      $('#upload-demo').croppie('result', {
        type: 'blob',
        size: 'viewport'
      }).then(function (resp) {
        	let formData = new FormData()
        	formData.append('uid', vm.USER_SIGN_IN_INFO.id)
        	formData.append('type', 1)
        	formData.append('avatar', resp)

          vm.$store.dispatch('USER_MODIFY_AVATAR_ACTION',formData).then((res)=>{

            setTimeout(()=>{
              vm.$store.state.userAvatarModify.USER_MODIFY_AVATAR_ERRORS = undefined

              //TODO it shall be refresh the page, and get the lastest user profile from server
              vm.$store.state.userRegLog.USER_SIGN_IN_INFO.avatar = res.result

              // modify the local storage
              let localStorageData = JSON.parse(localStorage.getItem('USER_SIGN_IN_INFO'))
              localStorageData.avatar = res.result
              localStorage.setItem('USER_SIGN_IN_INFO', JSON.stringify(localStorageData))

              vm.$store.dispatch('TOGGLE_SIMPLE_POPUP',{selector:'#userUpdateAvatarModal',detachable:false})
              vm.step = 0

            },2000)
          })

      })
    },
    generateAvatar () {
      let vm = this
      vm.step = 2
      	$('#upload-demo').croppie('result', {
      		type: 'base64',
      		size: 'viewport',
      	}).then(function (resp) {
      		$("#testImage").attr('src',resp)
      	})

    },
    setImageIntoCropper (data) {

      $('#upload-demo').croppie('bind',{
        url: data
      })


    },
    upload (event) {
      let vm = this
      vm.step = 1
  		if (event.target.files && event.target.files[0]) {
            let reader = new FileReader()
            reader.onload = function (e) {
              // console.log(e.target.result)
              Events.$emit('readFileCompleted',e.target.result)
            }
            reader.readAsDataURL(event.target.files[0])

            // console.log(event.target.files[0])
        }
        else {
          swal("Sorry - you're browser doesn't support the FileReader API")
      }
    },
    updateAvatar () {
      let vm = this
      // $('#userUpdateAvatarModal').modal('show')
      this.$store.dispatch('TOGGLE_SIMPLE_POPUP',
      {
        selector:'#userUpdateAvatarModal',
        detachable:true
      })
    }
  },
  mounted () {
    let vm = this
    $('#upload-demo').croppie({
  	    viewport: {
  	        width: 200,
  	        height: 200,
  	    },
  	    boundary: {
  	        width: 300,
  	        height: 300
  	    }
  	})
    Events.$on('readFileCompleted',vm.setImageIntoCropper)

  },
  destroyed () {
    // console.log('test destroy')
    $('#userUpdateAvatarModal').modal('destroy')
    $('#upload-demo').croppie('destroy')
    // $('.ui.modal').modal({detachable: false})
    $('.ui.dimmer.modals.page #userUpdateAvatarModal').remove()
  }

}
</script>

<style lang="css" scoped>
.ui.action.input input[type="file"] {
    display: none;
}
#testImage {
  margin-bottom: 40px;
}
</style>
